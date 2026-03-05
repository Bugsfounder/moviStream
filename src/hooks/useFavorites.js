import { useState, useEffect } from 'react';

const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return [];
            }
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (movie) => {
        setFavorites(prev => {
            const isFavorited = prev.some(f => f.id === movie.id);
            if (isFavorited) {
                return prev.filter(f => f.id !== movie.id);
            } else {
                return [...prev, movie];
            }
        });
    };

    const isFavorite = (id) => favorites.some(f => f.id === id);

    return { favorites, toggleFavorite, isFavorite };
};

export default useFavorites;
