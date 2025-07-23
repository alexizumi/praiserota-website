import { useState } from 'react';
import './EarlyAccess.css';

const EarlyAccess = () => {
    const [formData, setFormData] = useState({
        // Personal Information
        name: '',
        email: '',
        phone: '',

        // Church Information
        churchName: '',
        churchSize: '',
        location: '',
        denomination: '',

        // Ministry Information
        role: '',
        teamSize: '',
        currentSolution: '',

        // Additional Information
        challenges: '',
        hearAbout: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            console.log('Submitting form data:', formData);
            const response = await fetch('https://formspree.io/f/manbenvv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    source: 'Beta Signup - Praise Rota Website',
                    submissionDate: new Date().toISOString()
                }),
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '', email: '', phone: '', churchName: '', churchSize: '',
                    location: '', denomination: '', role: '', teamSize: '',
                    currentSolution: '', challenges: '', hearAbout: ''
                });
            } else {
                const errorText = await response.text();
                console.log('Error response:', errorText);
                throw new Error(`Form submission failed: ${response.status}`);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="early-access-page">
            {/* Hero Section */}
            <section className="beta-hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="beta-badge">Limited Time Beta Access</div>
                        <h1>
                            Join the Exclusive Group of Churches
                            <span className="highlight"> Shaping the Future</span> of Worship Team Management
                        </h1>
                        <p className="hero-description">
                            Be among the first worship leaders to experience Praise Rota. Get completely free access
                            while helping us build the perfect solution for your church's needs.
                        </p>
                        <div className="beta-stats">
                            <div className="stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Beta Churches</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Team Members</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Free Access</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beta Benefits */}
            <section className="beta-benefits">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Join Our Beta Program?</h2>
                        <p>Exclusive benefits for our founding church partners</p>
                    </div>
                    <div className="benefits-grid">
                        <div className="benefit-card featured">
                            <div className="benefit-icon">🆓</div>
                            <h3>Completely Free</h3>
                            <p>Full access to all features during the entire beta period. No hidden costs, no credit card required.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🏆</div>
                            <h3>Founding Member Status</h3>
                            <p>Be recognised as a founding church partner with special benefits when we officially launch.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">💡</div>
                            <h3>Shape the Product</h3>
                            <p>Your feedback directly influences new features. Help us build exactly what worship leaders need.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🔒</div>
                            <h3>Lock in Special Pricing</h3>
                            <p>Founding members get exclusive pricing when we launch paid plans. Significant savings guaranteed.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">⚡</div>
                            <h3>Priority Support</h3>
                            <p>Direct access to our founder Alexandre and priority assistance with setup and questions.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🎯</div>
                            <h3>Early Feature Access</h3>
                            <p>Be the first to try new features before they're released to the general public.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Message */}
            <section className="founder-message">
                <div className="container">
                    <div className="message-content">
                        <div className="founder-image">
                            <div className="founder-photo-container">
                                <img
                                    src="/images/founder/AlexIzumi.jpg"
                                    alt="Alexandre Izumi - Founder of Praise Rota, Pastor and Worship Leader"
                                    className="founder-photo"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="founder-placeholder" style={{ display: 'none' }}>
                                    👨‍💼
                                </div>
                            </div>
                        </div>
                        <div className="message-text">
                            <h2>A Personal Message from Alexandre</h2>
                            <blockquote>
                                "As a pastor and worship leader for over 20 years, I've experienced firsthand the
                                weekly struggle of managing worship team rotas. The endless spreadsheets, phone calls,
                                and last-minute scrambling to fill positions – I know you've been there too.
                                <br /><br />
                                That's exactly why I built Praise Rota. This isn't just another software project –
                                it's a solution born from real worship ministry experience. I want to help fellow
                                worship leaders reclaim their time and reduce their stress.
                                <br /><br />
                                By joining our beta, you're not just getting early access – you're helping me build
                                something that truly serves the worship community. Your feedback matters, and together
                                we can create the tool we've all been waiting for."
                            </blockquote>
                            <div className="founder-signature">
                                <strong>Alexandre Izumi</strong>
                                <span>Founder & Pastor • Worship Leader for 20+ years</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complete Beta Signup Form */}
            <section className="beta-signup">
                <div className="container">
                    <div className="signup-container">
                        <div className="signup-header">
                            <h2>Join the Praise Rota Beta Program</h2>
                            <p>Complete your application to secure your founding member access</p>
                            <div className="beta-benefits">
                                <span className="benefit">✅ 100% Free Access</span>
                                <span className="benefit">✅ Founding Member Benefits</span>
                                <span className="benefit">✅ Priority Support</span>
                            </div>
                        </div>

                        <form className="beta-form" onSubmit={handleSubmit}>
                            {submitStatus === 'success' && (
                                <div className="form-message success">
                                    <div className="message-icon">🎉</div>
                                    <div className="message-content">
                                        <h4>Welcome to the Praise Rota Beta Family!</h4>
                                        <p>Thank you for joining us! We'll review your application and send you access details within 24 hours. You're now part of our founding church community!</p>
                                    </div>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="form-message error">
                                    <div className="message-icon">❌</div>
                                    <div className="message-content">
                                        <h4>Oops! Something went wrong</h4>
                                        <p>Please try again or contact us directly at <a href="mailto:hello@praiserota.com">hello@praiserota.com</a></p>
                                    </div>
                                </div>
                            )}

                            {/* Personal Information */}
                            <div className="form-section">
                                <h3>Personal Information</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="e.g. John Smith"
                                            disabled={isSubmitting}
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
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number (Optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+44 7700 900123"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            {/* Church Information */}
                            <div className="form-section">
                                <h3>Church Information</h3>
                                <div className="form-row">
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
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location">Location *</label>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="e.g. London, UK"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="churchSize">Church Size *</label>
                                        <select
                                            id="churchSize"
                                            name="churchSize"
                                            value={formData.churchSize}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select church size</option>
                                            <option value="under-50">Under 50 people</option>
                                            <option value="50-150">50-150 people</option>
                                            <option value="150-300">150-300 people</option>
                                            <option value="300-500">300-500 people</option>
                                            <option value="over-500">Over 500 people</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="denomination">Denomination (Optional)</label>
                                        <input
                                            type="text"
                                            id="denomination"
                                            name="denomination"
                                            value={formData.denomination}
                                            onChange={handleInputChange}
                                            placeholder="e.g. Baptist, Methodist, Non-denominational"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Ministry Information */}
                            <div className="form-section">
                                <h3>Ministry Information</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="role">Your Role *</label>
                                        <select
                                            id="role"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select your role</option>
                                            <option value="worship-leader">Worship Leader</option>
                                            <option value="music-director">Music Director</option>
                                            <option value="pastor">Pastor</option>
                                            <option value="admin">Church Administrator</option>
                                            <option value="volunteer">Volunteer Coordinator</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="teamSize">Worship Team Size *</label>
                                        <select
                                            id="teamSize"
                                            name="teamSize"
                                            value={formData.teamSize}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select team size</option>
                                            <option value="2-5">2-5 people</option>
                                            <option value="6-10">6-10 people</option>
                                            <option value="11-20">11-20 people</option>
                                            <option value="21-30">21-30 people</option>
                                            <option value="over-30">Over 30 people</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="currentSolution">How do you currently manage your worship rota? *</label>
                                    <select
                                        id="currentSolution"
                                        name="currentSolution"
                                        value={formData.currentSolution}
                                        onChange={handleInputChange}
                                        required
                                        disabled={isSubmitting}
                                    >
                                        <option value="">Select current method</option>
                                        <option value="spreadsheet">Excel/Google Sheets</option>
                                        <option value="paper">Paper-based system</option>
                                        <option value="whatsapp">WhatsApp/Text messages</option>
                                        <option value="email">Email coordination</option>
                                        <option value="other-software">Other software</option>
                                        <option value="no-system">No formal system</option>
                                    </select>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div className="form-section">
                                <h3>Additional Information</h3>
                                <div className="form-group">
                                    <label htmlFor="challenges">What's your biggest challenge with worship team scheduling? (Optional)</label>
                                    <textarea
                                        id="challenges"
                                        name="challenges"
                                        value={formData.challenges}
                                        onChange={handleInputChange}
                                        rows="3"
                                        placeholder="e.g. Last-minute cancellations, tracking availability, finding substitutes..."
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="hearAbout">How did you hear about Praise Rota? (Optional)</label>
                                    <select
                                        id="hearAbout"
                                        name="hearAbout"
                                        value={formData.hearAbout}
                                        onChange={handleInputChange}
                                        disabled={isSubmitting}
                                    >
                                        <option value="">Select source</option>
                                        <option value="google-search">Google Search</option>
                                        <option value="social-media">Social Media</option>
                                        <option value="friend-recommendation">Friend/Colleague Recommendation</option>
                                        <option value="church-network">Church Network</option>
                                        <option value="worship-community">Worship Leader Community</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-large"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="loading-spinner"></span>
                                            Submitting Application...
                                        </>
                                    ) : (
                                        'Submit Beta Application'
                                    )}
                                </button>
                                <p className="form-note">
                                    By submitting this form, you're applying to join our exclusive beta program.
                                    We'll review your application and send access details within 24 hours.
                                    Your information is secure and will never be shared.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Beta Testimonials */}
            {/* <section className="beta-testimonials">
                <div className="container">
                    <div className="section-header">
                        <h2>What Beta Churches Are Saying</h2>
                        <p>Real feedback from worship leaders testing Praise Rota</p>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Finally, someone who understands our struggles! Alexandre has built exactly what we needed. The beta has already saved me hours each week."</p>
                            </div>
                            <div className="testimonial-author">
                                <strong>Sarah Mitchell</strong>
                                <span>Worship Leader, Hope Fellowship • Beta Church #12</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Being a beta church means we get to influence the features. Alexandre actually listens and implements our suggestions. It's incredible!"</p>
                            </div>
                            <div className="testimonial-author">
                                <strong>David Thompson</strong>
                                <span>Music Pastor, Grace Community • Beta Church #8</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Our team loves the mobile app. No more WhatsApp chaos or missed schedule updates. This is the future of worship team management."</p>
                            </div>
                            <div className="testimonial-author">
                                <strong>Emma Rodriguez</strong>
                                <span>Creative Director, New Life Church • Beta Church #23</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default EarlyAccess;