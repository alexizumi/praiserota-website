import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ background: '#000', color: '#FFD700', padding: '1rem' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ color: '#FFD700', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Praise Rota
                </Link>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
                    <li><Link to="/" style={{ color: '#FFD700', textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to="/features" style={{ color: '#FFD700', textDecoration: 'none' }}>Features</Link></li>
                    <li><Link to="/try-it" style={{ color: '#FFD700', textDecoration: 'none' }}>Try It</Link></li>
                    <li><Link to="/contact" style={{ color: '#FFD700', textDecoration: 'none' }}>Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;