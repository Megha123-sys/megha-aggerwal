import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { content_option } from '../content_option';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="footer-copyright">
              {content_option.footer.copyright}
            </p>
          </Col>
          
          <Col md={6} className="text-center text-md-end">
            <div className="footer-social">
              <a 
                href={content_option.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href={`mailto:${content_option.contact.email}`}
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center">
            <p className="footer-made-with">
              {content_option.footer.madeWith.replace('❤️', '')}
              <FaHeart className="heart-icon" />
              {content_option.footer.madeWith.includes('❤️') ? ' in Delhi, India' : ''}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 