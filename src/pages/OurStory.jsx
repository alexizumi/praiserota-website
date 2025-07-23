import './OurStory.css';

const OurStory = () => {
    return (
        <div className="our-story-page">
            {/* Hero Section */}
            <section className="story-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Our Story</h1>
                        <p>Built by worship leaders, for worship leaders</p>
                    </div>
                </div>
            </section>

            {/* Founder Story */}
            <section className="founder-story">
                <div className="container">
                    <div className="story-content">
                        <div className="founder-profile">
                            <div className="founder-image">
                                <div className="founder-photo">👨‍💼</div>
                            </div>
                            <div className="founder-details">
                                <h2>Alexandre Izumi</h2>
                                <p className="founder-title">Founder, Pastor & Worship Leader</p>
                                <div className="founder-credentials">
                                    <div className="credential">
                                        <span className="credential-icon">⛪</span>
                                        <span>15+ years in worship ministry</span>
                                    </div>
                                    <div className="credential">
                                        <span className="credential-icon">💻</span>
                                        <span>IT & Software Development background</span>
                                    </div>
                                    <div className="credential">
                                        <span className="credential-icon">❤️</span>
                                        <span>Passionate about Jesus and worship music</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="story-narrative">
                            <div className="story-section">
                                <h3>The Problem I Lived Every Week</h3>
                                <p>
                                    For over 15 years, I've been serving as both a pastor and worship leader.
                                    Every single week, I faced the same frustrating challenge that I know you're
                                    familiar with too – managing our worship team rota.
                                </p>
                                <p>
                                    The endless spreadsheets that broke when someone made a change. The WhatsApp
                                    messages flying back and forth trying to coordinate availability. The Sunday
                                    morning panic when someone couldn't make it and we had to scramble for a replacement.
                                </p>
                                <p>
                                    I watched fellow worship leaders spending hours every week on what should be
                                    a simple task. We were all using our IT and creative skills to serve God's
                                    kingdom, but we were stuck with stone-age tools for team management.
                                </p>
                            </div>

                            <div className="story-section">
                                <h3>The "Why Not?" Moment</h3>
                                <p>
                                    With my background in IT and software development, I'd already built several
                                    systems for our church to enhance both in-person and online experiences.
                                    But somehow, I'd never tackled the weekly headache that affected me most personally.
                                </p>
                                <p>
                                    One particularly stressful Sunday morning, after dealing with yet another
                                    last-minute scheduling crisis, I thought: "Why not do something about this?"
                                    If I could build systems to improve other areas of church life, surely I
                                    could solve this problem that every worship leader faces.
                                </p>
                                <p>
                                    That's when the vision for Praise Rota was born – not in a boardroom or
                                    as a business opportunity, but in the real, messy, beautiful world of
                                    worship ministry.
                                </p>
                            </div>

                            <div className="story-section">
                                <h3>Built with Worship Leaders in Mind</h3>
                                <p>
                                    Praise Rota isn't just another scheduling app adapted for churches.
                                    It's purpose-built by someone who understands the unique challenges of
                                    worship team management because I live them every week.
                                </p>
                                <p>
                                    I know what it's like to need a last-minute keyboard player. I understand
                                    the delicate balance of rotating team members fairly while ensuring quality.
                                    I've experienced the frustration of unclear communication leading to
                                    confusion on Sunday morning.
                                </p>
                                <p>
                                    Every feature in Praise Rota comes from real worship ministry experience.
                                    This isn't theoretical – it's practical solutions for real problems that
                                    I and my fellow worship leaders face every single week.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="mission-values">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-section">
                            <h2>Our Mission</h2>
                            <p className="mission-statement">
                                To free worship leaders from administrative burdens so they can focus on
                                what matters most – leading people into God's presence through worship.
                            </p>
                            <p>
                                We believe that technology should serve the church, not complicate it.
                                Our goal is to give worship leaders back their time and reduce their stress,
                                so they can invest more energy in spiritual preparation, team development,
                                and creating meaningful worship experiences.
                            </p>
                        </div>

                        <div className="values-section">
                            <h2>Our Values</h2>
                            <div className="values-grid">
                                <div className="value-card">
                                    <div className="value-icon">🙏</div>
                                    <h4>Faith-Centered</h4>
                                    <p>Everything we do is grounded in our love for Jesus and desire to serve His church.</p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">🤝</div>
                                    <h4>Community-Driven</h4>
                                    <p>Built with and for the worship community. Your feedback shapes our development.</p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">💡</div>
                                    <h4>Simplicity First</h4>
                                    <p>Complex problems deserve simple solutions. We prioritise ease of use above all.</p>
                                </div>
                                <div className="value-card">
                                    <div className="value-icon">🎯</div>
                                    <h4>Purpose-Built</h4>
                                    <p>Designed specifically for worship teams, not adapted from generic tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="community-section">
                <div className="container">
                    <div className="community-content">
                        <h2>Join Our Growing Community</h2>
                        <p>
                            Praise Rota is more than just software – it's a community of worship leaders
                            supporting each other and sharing the journey of serving God's people through music.
                        </p>

                        <div className="community-stats">
                            <div className="community-stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Beta Churches</span>
                            </div>
                            <div className="community-stat">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Worship Team Members</span>
                            </div>
                            <div className="community-stat">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Countries Represented</span>
                            </div>
                        </div>

                        <div className="community-cta">
                            <h3>Ready to Join Us?</h3>
                            <p>Be part of the community that's transforming worship team management.</p>
                            <div className="cta-actions">
                                <a href="/early-access" className="btn btn-primary btn-large">
                                    Join Our Beta Program
                                </a>
                                <a href="/contact" className="btn btn-secondary">
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurStory;