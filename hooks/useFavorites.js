import { useState, useEffect } from 'react';

const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem('favorites');
        if (saved) {
            try {
                setFavorites(JSON.parse(saved));
            } catch (e) {
                // Ignore error
            }
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }, [favorites, isMounted]);

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

    // Provide a safe way for components to wait for mount if needed
    return { favorites, toggleFavorite, isFavorite, isMounted };
};

export default useFavorites;
