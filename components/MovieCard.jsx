"use client";

import { Heart } from 'lucide-react';
import Image from 'next/image';
import { getImageUrl } from '../services/api';

const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {
    const { title, poster_path, release_date, vote_average } = movie;
    const year = release_date ? release_date.split('-')[0] : 'N/A';
    const rating = vote_average ? vote_average.toFixed(1) : 'N/A';

    return (
        <div className="movie-card">
            <div className="movie-poster-container">
                <Image
                    src={getImageUrl(poster_path)}
                    alt={`${title} poster`}
                    className="movie-poster"
                    width={500}
                    height={750}
                />
                <button
                    className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                    onClick={() => onToggleFavorite(movie)}
                    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                    <Heart size={24} fill={isFavorite ? 'var(--accent-color)' : 'none'} color={isFavorite ? 'var(--accent-color)' : 'white'} />
                </button>
                <div className="movie-rating">⭐ {rating}</div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{title}</h3>
                <p className="movie-year">{year}</p>
            </div>
        </div>
    );
};

export default MovieCard;
