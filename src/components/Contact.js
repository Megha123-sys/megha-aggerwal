import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { content_option } from '../content_option';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Note: You'll need to set up EmailJS with your own service ID, template ID, and public key
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'danger',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">{content_option.contact.title}</h2>
            <p className="section-subtitle">{content_option.contact.subtitle}</p>
            <div className="section-divider"></div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={6} className="mb-4">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h5>Email</h5>
                    <a href={`mailto:${content_option.contact.email}`}>
                      {content_option.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaLinkedin className="contact-icon" />
                  <div>
                    <h5>LinkedIn</h5>
                    <a href={content_option.contact.linkedin} target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h5>Location</h5>
                    <p>{content_option.contact.location}</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaClock className="contact-icon" />
                  <div>
                    <h5>Availability</h5>
                    <p>{content_option.contact.availability}</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="mb-4">
            <div className="contact-form-container">
              <h3>Send me a message</h3>
              
              {status.message && (
                <Alert variant={status.type} className="mb-3">
                  {status.message}
                </Alert>
              )}
              
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or opportunity..."
                  />
                </Form.Group>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 