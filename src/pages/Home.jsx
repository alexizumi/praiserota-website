import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Streamline Your Team's
                            <span className="highlight"> Rotation Management</span>
                        </h1>
                        <p className="hero-description">
                            Praise Rota makes scheduling and managing team rotations effortless.
                            Built for modern teams who need flexibility and reliability.
                        </p>
                        <div className="hero-actions">
                            <a href="/try-it" className="btn btn-primary">
                                Try It Free
                            </a>
                            <a href="/features" className="btn btn-secondary">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Features Section */}
            <section className="quick-features">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📅</div>
                            <h3>Smart Scheduling</h3>
                            <p>Automated rotation planning that adapts to your team's needs</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Mobile First</h3>
                            <p>Access your schedules anywhere, anytime on any device</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Lightning Fast</h3>
                            <p>Quick setup and instant updates for your entire team</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;