const TMDB_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const fetchFromAPI = async (endpoint, params = {}) => {
    const queryParams = new URLSearchParams({
        api_key: TMDB_KEY,
        ...params,
    });

    const response = await fetch(`${BASE_URL}${endpoint}?${queryParams}`);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};

export const getPopularMovies = async (page = 1) => {
    return fetchFromAPI('/movie/popular', { page });
};

export const searchMovies = async (query, page = 1) => {
    return fetchFromAPI('/search/movie', { query, page });
};

export const getImageUrl = (path) => {
    if (!path) return 'https://via.placeholder.com/500x750?text=No+Image';
    return `${IMAGE_BASE_URL}${path}`;
};
