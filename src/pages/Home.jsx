import { useRef, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import MovieGrid from '../components/MovieGrid';

const Home = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const { movies, loading, error, hasMore, loadMore } = useMovies(query);
    const observer = useRef();

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

    if (error) {
        return (
            <div className="container page-container">
                <div className="empty-state">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="container page-container">
            <div className="header-section">
                <h2>{query ? `Search Results for "${query}"` : 'Popular Movies'}</h2>
            </div>

            <MovieGrid movies={movies} />

            {loading && (
                <div className="loading-indicator">Loading movies...</div>
            )}

            {!loading && movies.length === 0 && (
                <div className="empty-state">No movies found.</div>
            )}

            {/* Infinite Scroll trigger */}
            <div ref={lastMovieElementRef} style={{ height: '20px', margin: '20px 0' }} />
        </div>
    );
};

export default Home;
