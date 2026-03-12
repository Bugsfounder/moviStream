"use client";

import MovieCard from './MovieCard';
import useFavorites from '../hooks/useFavorites';

const MovieGrid = ({ movies }) => {
    const { toggleFavorite, isFavorite } = useFavorites();

    return (
        <div className="movie-grid">
            {movies.map((movie, index) => (
                <MovieCard
                    key={`${movie.id}-${index}`}
                    movie={movie}
                    isFavorite={isFavorite(movie.id)}
                    onToggleFavorite={toggleFavorite}
                />
            ))}
        </div>
    );
};

export default MovieGrid;
