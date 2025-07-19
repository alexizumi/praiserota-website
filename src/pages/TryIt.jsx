import { useState } from 'react';
import './TryIt.css';

const TryIt = () => {
    const [formData, setFormData] = useState({
        churchName: '',
        contactName: '',
        email: '',
        phone: '',
        teamSize: '',
        currentMethod: '',
        hearAbout: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you! We\'ll set up your free trial and send you the details shortly.');
    };

    return (
        <div className="try-it-page">
            {/* Hero Section */}
            <section className="try-it-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Start Your Free 14-Day Trial</h1>
                        <p>Experience how Praise Rota can transform your worship team management. No credit card required, no commitments.</p>
                        <div className="trial-benefits">
                            <div className="benefit">
                                <span className="benefit-icon">✅</span>
                                <span>Full access to all features</span>
                            </div>
                            <div className="benefit">
                                <span className="benefit-icon">✅</span>
                                <span>Setup assistance included</span>
                            </div>
                            <div className="benefit">
                                <span className="benefit-icon">✅</span>
                                <span>Cancel anytime</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trial Form Section */}
            <section className="trial-form-section">
                <div className="container">
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Get Started in Less Than 2 Minutes</h2>
                            <p>Tell us a bit about your church and we'll set up your personalised trial</p>
                        </div>

                        <form className="trial-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="churchName">Church Name *</label>
                                <input
                                    type="text"
                                    id="churchName"
                                    name="churchName"
                                    value={formData.churchName}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="e.g. Grace Community Church"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contactName">Your Name *</label>
                                    <input
                                        type="text"
                                        id="contactName"
                                        name="contactName"
                                        value={formData.contactName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="e.g. John Smith"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="john@gracechurch.org"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+44 7700 900123"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="teamSize">Worship Team Size *</label>
                                    <select
                                        id="teamSize"
                                        name="teamSize"
                                        value={formData.teamSize}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select team size</option>
                                        <option value="1-10">1-10 members</option>
                                        <option value="11-25">11-25 members</option>
                                        <option value="26-50">26-50 members</option>
                                        <option value="51+">51+ members</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="currentMethod">How do you currently manage your worship team schedule?</label>
                                <select
                                    id="currentMethod"
                                    name="currentMethod"
                                    value={formData.currentMethod}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select current method</option>
                                    <option value="spreadsheet">Excel/Google Sheets</option>
                                    <option value="paper">Paper-based</option>
                                    <option value="email">Email coordination</option>
                                    <option value="other-app">Other scheduling app</option>
                                    <option value="manual">Manual/verbal coordination</option>
                                    <option value="none">No formal system</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="hearAbout">How did you hear about Praise Rota?</label>
                                <select
                                    id="hearAbout"
                                    name="hearAbout"
                                    value={formData.hearAbout}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select an option</option>
                                    <option value="google">Google search</option>
                                    <option value="social-media">Social media</option>
                                    <option value="friend">Friend/colleague recommendation</option>
                                    <option value="church-network">Church network</option>
                                    <option value="conference">Conference/event</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary btn-large">
                                    Start My Free Trial
                                </button>
                                <p className="form-note">
                                    By starting your trial, you agree to our Terms of Service and Privacy Policy.
                                    No payment required during the 14-day trial period.
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Trial Features */}
                    <div className="trial-features">
                        <h3>What's Included in Your Trial</h3>
                        <div className="trial-features-grid">
                            <div className="trial-feature">
                                <div className="trial-feature-icon">🚀</div>
                                <div className="trial-feature-content">
                                    <h4>Quick Setup</h4>
                                    <p>We'll help you import your team and set up your first rota within 24 hours</p>
                                </div>
                            </div>
                            <div className="trial-feature">
                                <div className="trial-feature-icon">📱</div>
                                <div className="trial-feature-content">
                                    <h4>Mobile App Access</h4>
                                    <p>Your team gets instant access to the mobile app for iOS and Android</p>
                                </div>
                            </div>
                            <div className="trial-feature">
                                <div className="trial-feature-icon">💬</div>
                                <div className="trial-feature-content">
                                    <h4>Personal Support</h4>
                                    <p>Direct access to our team for questions and setup assistance</p>
                                </div>
                            </div>
                            <div className="trial-feature">
                                <div className="trial-feature-icon">📊</div>
                                <div className="trial-feature-content">
                                    <h4>Full Feature Access</h4>
                                    <p>Try every feature including analytics, notifications, and team management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="trial-faq">
                <div className="container">
                    <div className="faq-header">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>Is the trial really free?</h4>
                            <p>Yes! No credit card required. You get full access to all features for 14 days with no obligations.</p>
                        </div>
                        <div className="faq-item">
                            <h4>How quickly can we get started?</h4>
                            <p>Most churches are up and running within 24 hours. We provide setup assistance to get your team imported and first rota created.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What happens after the trial?</h4>
                            <p>You can choose a paid plan to continue, or your account will simply expire. No automatic charges or hidden fees.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Can we import our existing schedule?</h4>
                            <p>Absolutely! We can help you import your current team list and schedule from spreadsheets or other systems.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Is there a setup fee?</h4>
                            <p>No setup fees ever. Our team provides free onboarding assistance to ensure you get the most from Praise Rota.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What support is available?</h4>
                            <p>During your trial, you'll have direct access to our support team via email, chat, and phone for any questions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TryIt;