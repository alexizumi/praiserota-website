import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        churchName: '',
        subject: '',
        message: '',
        contactReason: ''
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
            const response = await fetch('https://formspree.io/f/mnnzppvq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    churchName: formData.churchName,
                    contactReason: formData.contactReason,
                    subject: formData.subject,
                    message: formData.message,
                    _subject: `Contact Form: ${formData.subject}`,
                    _replyto: formData.email
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    churchName: '',
                    subject: '',
                    message: '',
                    contactReason: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Get in Touch</h1>
                        <p>Have questions about Praise Rota? We're here to help your church succeed with worship team management.</p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <div className="form-header">
                                <h2>Send Us a Message</h2>
                                <p>We typically respond within 24 hours</p>
                            </div>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="form-message success">
                                    <p>✅ Thank you for your message! We'll get back to you within 24 hours.</p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="form-message error">
                                    <p>❌ Sorry, there was an error sending your message. Please try again or email us directly at alex@praiserota.com</p>
                                </div>
                            )}

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="John Smith"
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

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="churchName">Church Name</label>
                                        <input
                                            type="text"
                                            id="churchName"
                                            name="churchName"
                                            value={formData.churchName}
                                            onChange={handleInputChange}
                                            placeholder="Grace Community Church"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactReason">How can we help? *</label>
                                        <select
                                            id="contactReason"
                                            name="contactReason"
                                            value={formData.contactReason}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select a reason</option>
                                            <option value="beta-access">Beta access request</option>
                                            <option value="beta-support">Beta support & feedback</option>
                                            <option value="technical-support">Technical support</option>
                                            <option value="feature-request">Feature request</option>
                                            <option value="partnership">Partnership opportunity</option>
                                            <option value="media-press">Media & Press</option>
                                            <option value="general">General enquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Brief description of your enquiry"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="6"
                                        placeholder="Please provide details about your enquiry..."
                                        disabled={isSubmitting}
                                    ></textarea>
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
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="contact-info">
                            <div className="contact-card">
                                <h3>Quick Response Times</h3>
                                <div className="contact-item">
                                    <div className="contact-icon">⚡</div>
                                    <div className="contact-details">
                                        <h4>General Enquiries</h4>
                                        <p>We respond within 24 hours during business days</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">🚨</div>
                                    <div className="contact-details">
                                        <h4>Beta Support</h4>
                                        <p>Priority support for beta testers within 4 hours</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">💡</div>
                                    <div className="contact-details">
                                        <h4>Feature Requests</h4>
                                        <p>We love feedback! All suggestions reviewed within 48 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-card">
                                <h3>Other Ways to Reach Us</h3>
                                <div className="contact-methods">
                                    <div className="contact-method">
                                        <div className="method-icon">📧</div>
                                        <div className="method-content">
                                            <h4>Email</h4>
                                            <p>alex@praiserota.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-method">
                                        <div className="method-icon">💬</div>
                                        <div className="method-content">
                                            <h4>Beta Community</h4>
                                            <p>Join our beta testers for direct feedback</p>
                                        </div>
                                    </div>
                                    <div className="contact-method">
                                        <div className="method-icon">📚</div>
                                        <div className="method-content">
                                            <h4>Help Centre</h4>
                                            <p>Coming soon - beta documentation available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-card">
                                <h3>Business Hours</h3>
                                <div className="business-hours">
                                    <div className="hours-item">
                                        <span className="day">Monday - Friday</span>
                                        <span className="time">9:00 AM - 6:00 PM GMT</span>
                                    </div>
                                    <div className="hours-item">
                                        <span className="day">Saturday</span>
                                        <span className="time">10:00 AM - 2:00 PM GMT</span>
                                    </div>
                                    <div className="hours-item">
                                        <span className="day">Sunday</span>
                                        <span className="time">Closed</span>
                                    </div>
                                </div>
                                <p className="hours-note">
                                    We understand church schedules! Emergency support available for critical issues.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="contact-faq">
                <div className="container">
                    <div className="faq-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Quick answers to common questions</p>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>How do I join the beta program?</h4>
                            <p>Simply visit our Early Access page and sign up! We're currently accepting churches of all sizes for our free beta testing program.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Is the beta really completely free?</h4>
                            <p>Yes! Beta access is 100% free with no hidden costs. You'll also get founding member benefits when we launch our paid plans.</p>
                        </div>
                        <div className="faq-item">
                            <h4>How quickly can we get started?</h4>
                            <p>Most churches are up and running within 24 hours of joining the beta. We provide free setup assistance and training.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What if we find bugs or need features?</h4>
                            <p>That's exactly what we want! Beta testers get priority support and direct input on new features. Your feedback shapes the product.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Can we migrate from our current system?</h4>
                            <p>Absolutely! We can help you import data from spreadsheets, other scheduling apps, or manual systems. Migration assistance is included.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What happens after the beta ends?</h4>
                            <p>Beta testers will receive special founding member pricing and benefits. We'll give plenty of notice before any changes to the service.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;