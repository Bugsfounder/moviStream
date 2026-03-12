"use client";

import { useRef, useEffect, useCallback, useState } from 'react';
import { getPopularMovies, searchMovies } from '../services/api';
import MovieGrid from './MovieGrid';

const MovieFeed = ({ initialMovies, query }) => {
    const [movies, setMovies] = useState(initialMovies);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(initialMovies.length > 0);
    const observer = useRef();

    useEffect(() => {
        setMovies(initialMovies);
        setPage(1);
        setHasMore(initialMovies.length > 0);
    }, [query, initialMovies]);

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        const nextPage = page + 1;
        try {
            let data;
            if (query) {
                data = await searchMovies(query, nextPage);
            } else {
                data = await getPopularMovies(nextPage);
            }
            setMovies(prev => {
                const newMovies = data.results.filter(
                    movie => !prev.some(p => p.id === movie.id)
                );
                return [...prev, ...newMovies];
            });
            setHasMore(data.page < data.total_pages);
            setPage(nextPage);
        } catch (err) {
            console.error(err);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    }, [loading, hasMore, page, query]);

    const lastMovieElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                loadMore();
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMore, loadMore]);

    return (
        <>
            <MovieGrid movies={movies} />

            {loading && (
                <div className="loading-indicator">Loading movies...</div>
            )}

            {!loading && movies.length === 0 && (
                <div className="empty-state">No movies found.</div>
            )}

            <div ref={lastMovieElementRef} style={{ height: '20px', margin: '20px 0' }} />
        </>
    );
};

export default MovieFeed;
