import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Simplify Your Church's
                            <span className="highlight"> Worship Team Scheduling</span>
                        </h1>
                        <p className="hero-description">
                            Praise Rota streamlines worship team management for churches.
                            Create rotas, manage availability, and keep your worship teams organised with ease.
                        </p>
                        <div className="hero-actions">
                            <a href="/try-it" className="btn btn-primary">
                                Start Free Trial
                            </a>
                            <a href="/features" className="btn btn-secondary">
                                See How It Works
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Churches</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">10k+</span>
                                <span className="stat-label">Team Members</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">99.9%</span>
                                <span className="stat-label">Uptime</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="problem-solution">
                <div className="container">
                    <div className="section-header">
                        <h2>Stop Wrestling with Spreadsheets</h2>
                        <p>Managing worship team rotas shouldn't be a weekly headache</p>
                    </div>
                    <div className="problems-grid">
                        <div className="problem-card">
                            <div className="problem-icon">😤</div>
                            <h3>Manual Scheduling Chaos</h3>
                            <p>Hours spent creating rotas in spreadsheets, only to have last-minute changes throw everything off</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">📞</div>
                            <h3>Endless Phone Calls</h3>
                            <p>Chasing team members for availability and sending individual messages about schedule changes</p>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">🤷</div>
                            <h3>Availability Guesswork</h3>
                            <p>Not knowing who's available until the last minute, leading to understaffed services</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="features-preview">
                <div className="container">
                    <div className="section-header">
                        <h2>Everything Your Worship Team Needs</h2>
                        <p>Purpose-built for church worship teams and their unique scheduling challenges</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📅</div>
                            <h3>Smart Rota Creation</h3>
                            <p>Create worship team schedules in minutes, not hours. Auto-assign based on availability and skills.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">✋</div>
                            <h3>Availability Tracking</h3>
                            <p>Team members can easily mark their availability weeks in advance through the mobile app.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔔</div>
                            <h3>Instant Notifications</h3>
                            <p>Automatic reminders and updates keep everyone informed about their upcoming services.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3>Team Management</h3>
                            <p>Organise musicians, vocalists, and tech teams with role-based permissions and skills tracking.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Mobile-First Design</h3>
                            <p>Access schedules anywhere, anytime. Perfect for checking rotas on the go.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Quick Setup</h3>
                            <p>Get your church up and running in under 10 minutes. No technical expertise required.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="testimonials">
                <div className="container">
                    <div className="section-header">
                        <h2>Trusted by Churches Worldwide</h2>
                        <p>See how worship leaders are transforming their team management</p>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Praise Rota has saved me hours every week. No more chasing people for availability - they just update it themselves!"</p>
                            </div>
                            <div className="testimonial-author">
                                <strong>Sarah Johnson</strong>
                                <span>Worship Leader, Grace Community Church</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Our team loves how easy it is to see their schedule and swap shifts when needed. Game changer for our church."</p>
                            </div>
                            <div className="testimonial-author">
                                <strong>Mark Thompson</strong>
                                <span>Music Director, Hope Fellowship</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Finally, a scheduling app that understands church workflows. The mobile app is brilliant for our volunteers."</p>
                            </div>
                            <div className="testimonial-author">
                                <strong>Emma Davis</strong>
                                <span>Creative Pastor, New Life Church</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Worship Team Management?</h2>
                        <p>Join hundreds of churches already using Praise Rota to streamline their worship team scheduling.</p>
                        <div className="cta-actions">
                            <a href="/try-it" className="btn btn-primary btn-large">
                                Start Your Free Trial
                            </a>
                            <p className="cta-note">No credit card required • 14-day free trial • Setup in minutes</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;