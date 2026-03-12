import { useState, useEffect, useCallback } from 'react';
import { getPopularMovies, searchMovies } from '../services/api';

const useMovies = (searchQuery = '') => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    const fetchMovies = useCallback(async (pageNum, query, reset = false) => {
        if (loading) return;

        setLoading(true);
        setError(null);
        try {
            let data;
            if (query) {
                data = await searchMovies(query, pageNum);
            } else {
                data = await getPopularMovies(pageNum);
            }

            setMovies(prev => {
                if (reset) {
                    return data.results;
                }
                // avoid duplicates
                const newMovies = data.results.filter(
                    movie => !prev.some(p => p.id === movie.id)
                );
                return [...prev, ...newMovies];
            });

            setHasMore(data.page < data.total_pages);
        } catch (err) {
            setError(err.message || 'Error fetching movies');
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    }, []); // Remove `loading` from dependencies to prevent infinite loops

    // Initial fetch and when query changes
    useEffect(() => {
        setPage(1);
        fetchMovies(1, searchQuery, true);
    }, [searchQuery, fetchMovies]);

    // Fetch when page changes
    useEffect(() => {
        if (page > 1) {
            fetchMovies(page, searchQuery, false);
        }
    }, [page, searchQuery, fetchMovies]);

    const loadMore = useCallback(() => {
        if (!loading && hasMore) {
            setPage(prev => prev + 1);
        }
    }, [loading, hasMore]);

    return { movies, loading, error, hasMore, loadMore };
};

export default useMovies;
