import './Features.css';

const Features = () => {
    return (
        <div className="features-page">
            {/* Hero Section */}
            <section className="features-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Everything Your Worship Team Needs</h1>
                        <p>Discover how Praise Rota transforms worship team management with features designed specifically for churches.</p>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="core-features">
                <div className="container">
                    <div className="feature-showcase">
                        <div className="feature-content">
                            <div className="feature-badge">Smart Scheduling</div>
                            <h2>Create Rotas in Minutes, Not Hours</h2>
                            <p>Our intelligent scheduling system learns your team's preferences and availability patterns. Auto-assign team members based on their skills, availability, and previous service history.</p>
                            <ul className="feature-list">
                                <li>✅ Drag-and-drop rota builder</li>
                                <li>✅ Auto-assignment based on availability</li>
                                <li>✅ Conflict detection and warnings</li>
                                <li>✅ Recurring service templates</li>
                                <li>✅ Multi-service support (morning, evening, midweek)</li>
                            </ul>
                        </div>
                        <div className="feature-image">
                            <div className="screenshot-container">
                                <img
                                    src="/images/screenshots/rota-builder.png"
                                    alt="Praise Rota scheduling interface showing drag-and-drop rota builder"
                                    className="feature-screenshot"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="screenshot-placeholder" style={{ display: 'none' }}>
                                    📅 Rota Builder Interface
                                    <span className="placeholder-note">Screenshot coming soon</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-showcase reverse">
                        <div className="feature-content">
                            <div className="feature-badge">Availability Management</div>
                            <h2>Never Chase Team Members Again</h2>
                            <p>Team members can easily mark their availability weeks or months in advance through the mobile app. Get real-time visibility into who's available for upcoming services.</p>
                            <ul className="feature-list">
                                <li>✅ Mobile availability updates</li>
                                <li>✅ Bulk availability setting</li>
                                <li>✅ Holiday and absence tracking</li>
                                <li>✅ Availability reminders</li>
                                <li>✅ Last-minute change notifications</li>
                            </ul>
                        </div>
                        <div className="feature-image">
                            <div className="screenshot-container">
                                <img
                                    src="/images/screenshots/mobile-availability.png"
                                    alt="Mobile app availability screen showing calendar interface"
                                    className="feature-screenshot mobile-screenshot"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="screenshot-placeholder mobile-placeholder" style={{ display: 'none' }}>
                                    📱 Mobile Availability Screen
                                    <span className="placeholder-note">Screenshot coming soon</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="feature-showcase">
                        <div className="feature-content">
                            <div className="feature-badge">Team Management</div>
                            <h2>Organise Your Entire Worship Ministry</h2>
                            <p>Manage musicians, vocalists, sound engineers, and visual teams all in one place. Set up roles, track skills, and ensure the right people are in the right positions.</p>
                            <ul className="feature-list">
                                <li>✅ Role-based team organisation</li>
                                <li>✅ Skills and instrument tracking</li>
                                <li>✅ Team member profiles</li>
                                <li>✅ Permission levels (leader, member, viewer)</li>
                                <li>✅ Multiple team support</li>
                            </ul>
                        </div>
                        <div className="feature-image">
                            <div className="screenshot-container">
                                <img
                                    src="/images/screenshots/teammanagement.png"
                                    alt="Team management dashboard showing member profiles and roles"
                                    className="feature-screenshot"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="screenshot-placeholder" style={{ display: 'none' }}>
                                    👥 Team Management Dashboard
                                    <span className="placeholder-note">Screenshot coming soon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Features Grid */}
            <section className="additional-features">
                <div className="container">
                    <div className="section-header">
                        <h2>More Features to Love</h2>
                        <p>Every detail designed with worship teams in mind</p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🔔</div>
                            <h3>Smart Notifications</h3>
                            <p>Automated reminders for upcoming services, schedule changes, and availability requests.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔄</div>
                            <h3>Easy Shift Swapping</h3>
                            <p>Team members can request shift swaps directly through the app with leader approval.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📊</div>
                            <h3>Service Analytics</h3>
                            <p>Track attendance patterns, identify gaps, and optimise your team scheduling.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎵</div>
                            <h3>Song Planning</h3>
                            <p>Link song lists to services and share with your team ahead of rehearsals.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <h3>Team Communication</h3>
                            <p>Built-in messaging for service-specific discussions and announcements.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure & Private</h3>
                            <p>Church-grade security with role-based access and data protection.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beta Pricing Preview */}
            <section className="pricing-preview">
                <div className="container">
                    <div className="pricing-content">
                        <h2>Join Our Beta Program</h2>
                        <p>Get complete access while helping us build the perfect solution</p>
                        <div className="beta-pricing-card">
                            <div className="beta-badge">Limited Time</div>
                            <h3>Beta Access</h3>
                            <div className="price">
                                <span className="currency">£</span>
                                <span className="amount">0</span>
                                <span className="period">/month</span>
                            </div>
                            <ul>
                                <li>✅ Full access to all features</li>
                                <li>✅ Founding member benefits</li>
                                <li>✅ Direct input on development</li>
                                <li>✅ Priority support & training</li>
                                <li>✅ Lock in special pricing</li>
                            </ul>
                            <a href="/early-access" className="btn btn-primary btn-large">Join Beta Program</a>
                            <p className="beta-note">50+ churches already testing • No credit card required</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;