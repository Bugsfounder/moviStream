import { Link } from 'react-router-dom';
import { Film, Heart } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="brand">
                    <Film className="brand-icon" size={28} />
                    <h1>Cine-Stream</h1>
                </Link>

                <div className="nav-actions">
                    <SearchBar />
                    <Link to="/favorites" className="nav-link">
                        <Heart size={20} />
                        <span>Favorites</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
