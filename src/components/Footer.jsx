import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Praise Rota</h3>
                        <p>Streamlining team rotations worldwide</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="/features">Features</a></li>
                                <li><a href="/early-access">Early Access</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Praise Rota. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;