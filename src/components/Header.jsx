import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="logo">
                        Praise Rota
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>

                    {/* Navigation menu */}
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link></li>
                        <li><Link to="/try-it" onClick={() => setIsMenuOpen(false)}>Try It</Link></li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;