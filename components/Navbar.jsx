import Link from 'next/link';
import { Suspense } from 'react';
import { Film, Heart } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link href="/" className="brand">
                    <Film className="brand-icon" size={28} />
                    <h1>Cine-Stream</h1>
                </Link>

                <div className="nav-actions">
                    <Suspense fallback={<div style={{ width: 250 }}></div>}>
                        <SearchBar />
                    </Suspense>
                    <Link href="/favorites" className="nav-link">
                        <Heart size={20} />
                        <span>Favorites</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
