import { getPopularMovies, searchMovies } from '../services/api';
import MovieFeed from '../components/MovieFeed';

export default async function Home({ searchParams }) {
    const params = await searchParams;
    const query = params?.q || '';
    
    let initialData;
    let error = null;
    try {
        if (query) {
            initialData = await searchMovies(query, 1);
        } else {
            initialData = await getPopularMovies(1);
        }
    } catch (err) {
        error = err.message;
    }
    
    if (error) {
        return (
            <div className="container page-container">
                <div className="empty-state">Error: {error}</div>
            </div>
        );
    }

    const initialMovies = initialData?.results || [];

    return (
        <div className="container page-container">
            <div className="header-section">
                <h2>{query ? `Search Results for "${query}"` : 'Popular Movies'}</h2>
            </div>
            
            <MovieFeed initialMovies={initialMovies} query={query} />
        </div>
    );
}
