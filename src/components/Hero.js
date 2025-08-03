import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { content_option } from '../content_option';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-text">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">{content_option.hero.name}</span>
              </h1>
              <h2 className="hero-role">{content_option.hero.role}</h2>
              <div className="hero-tagline">
                <Typewriter
                  options={{
                    strings: [content_option.hero.tagline],
                    autoStart: true,
                    loop: false,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
              <p className="hero-location">
                <i className="fas fa-map-marker-alt"></i> {content_option.hero.location}
              </p>
              <div className="hero-buttons">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="me-3"
                  onClick={scrollToContact}
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  href="#case-studies"
                >
                  View My Work
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="hero-image">
            <div className="profile-image-container">
              <div className="profile-image">
                <img 
                  src={content_option.hero.profileImage} 
                  alt={content_option.hero.name}
                  className="img-fluid rounded-circle"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/f8f9fa/6c757d?text=MA';
                  }}
                />
              </div>
              <div className="profile-image-bg"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 