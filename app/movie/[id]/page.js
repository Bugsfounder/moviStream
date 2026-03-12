import { getMovieDetails, getImageUrl } from '../../../services/api';
import Image from 'next/image';

export async function generateMetadata({ params }) {
    const p = await params;
    const movie = await getMovieDetails(p.id).catch(() => null);

    if (!movie) {
        return {
            title: 'Movie Not Found | Cine-Stream',
        };
    }

    return {
        title: `${movie.title} | Cine-Stream`,
        description: movie.overview || `Learn more about ${movie.title}`,
    };
}

export default async function MoviePage({ params }) {
    const p = await params;
    const movie = await getMovieDetails(p.id).catch(() => null);

    if (!movie) {
        return (
            <div className="container page-container">
                <div className="empty-state">Movie not found.</div>
            </div>
        );
    }

    const year = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                    <Image
                        src={getImageUrl(movie.poster_path)}
                        alt={movie.title}
                        width={500}
                        height={750}
                        style={{ borderRadius: 'var(--radius-lg)', width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div style={{ flex: '2 1 400px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                        {movie.title} ({year})
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                        ⭐ {movie.vote_average?.toFixed(1)} / 10 | {movie.runtime} min
                    </p>
                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {movie.genres?.map(g => (
                            <span key={g.id} style={{ padding: '0.2rem 0.8rem', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '20px', fontSize: '0.9rem' }}>
                                {g.name}
                            </span>
                        ))}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem' }}>Overview</h3>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}
