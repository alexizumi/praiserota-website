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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Contact form submitted:', formData);
        alert('Thank you for your message! We\'ll get back to you within 24 hours.');
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
                                        <label htmlFor="churchName">Church Name</label>
                                        <input
                                            type="text"
                                            id="churchName"
                                            name="churchName"
                                            value={formData.churchName}
                                            onChange={handleInputChange}
                                            placeholder="Grace Community Church"
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
                                        >
                                            <option value="">Select a reason</option>
                                            <option value="trial-support">Trial setup assistance</option>
                                            <option value="technical-support">Technical support</option>
                                            <option value="billing">Billing questions</option>
                                            <option value="feature-request">Feature request</option>
                                            <option value="enterprise">Enterprise enquiry</option>
                                            <option value="partnership">Partnership opportunity</option>
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
                                    ></textarea>
                                </div>

                                <div className="form-actions">
                                    <button type="submit" className="btn btn-primary btn-large">
                                        Send Message
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
                                        <h4>Technical Support</h4>
                                        <p>Priority support for existing customers within 4 hours</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">📞</div>
                                    <div className="contact-details">
                                        <h4>Phone Support</h4>
                                        <p>Available for Enterprise customers by appointment</p>
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
                                            <p>hello@praiserota.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-method">
                                        <div className="method-icon">💬</div>
                                        <div className="method-content">
                                            <h4>Live Chat</h4>
                                            <p>Available in the app for customers</p>
                                        </div>
                                    </div>
                                    <div className="contact-method">
                                        <div className="method-icon">📚</div>
                                        <div className="method-content">
                                            <h4>Help Centre</h4>
                                            <p>Find answers to common questions</p>
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
                            <h4>How quickly can we get started?</h4>
                            <p>Most churches are up and running within 24 hours of signing up. We provide free setup assistance to import your team and create your first rota.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you offer training for our team?</h4>
                            <p>Yes! We provide free onboarding sessions and training materials. Our team can also conduct virtual training sessions for larger churches.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What if we need custom features?</h4>
                            <p>We're always improving Praise Rota based on customer feedback. Enterprise customers can discuss custom development options.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Is there a discount for multiple churches?</h4>
                            <p>Yes! We offer special pricing for denominations, church networks, and multi-site churches. Contact us for details.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Can we migrate from our current system?</h4>
                            <p>Absolutely! We can help you import data from spreadsheets, other scheduling apps, or manual systems. Migration assistance is included.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What support is available after setup?</h4>
                            <p>All customers get access to our help centre, email support, and in-app chat. Enterprise customers also get phone support and dedicated account management.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;