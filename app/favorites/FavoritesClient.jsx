"use client";

import useFavorites from '../../hooks/useFavorites';
import MovieGrid from '../../components/MovieGrid';

const FavoritesClient = () => {
    const { favorites } = useFavorites();

    return (
        <div className="container page-container" style={{ padding: '2rem 0' }}>
            <div className="header-section">
                <h2>Your Favorites</h2>
            </div>
            {favorites.length === 0 ? (
                <div className="empty-state">No favorite movies yet.</div>
            ) : (
                <MovieGrid movies={favorites} />
            )}
        </div>
    );
};

export default FavoritesClient;
