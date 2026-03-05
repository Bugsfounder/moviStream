import useFavorites from '../hooks/useFavorites';
import MovieGrid from '../components/MovieGrid';

const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <div className="container page-container">
            <div className="header-section">
                <h2>My Favorites</h2>
            </div>

            {favorites.length > 0 ? (
                <MovieGrid movies={favorites} />
            ) : (
                <div className="empty-state">
                    <p>No favorites yet. Go find some movies!</p>
                </div>
            )}
        </div>
    );
};

export default Favorites;
