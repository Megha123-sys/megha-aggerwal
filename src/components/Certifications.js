import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGoogle, FaMicrosoft, FaFacebook, FaGraduationCap } from 'react-icons/fa';
import { content_option } from '../content_option';

const Certifications = () => {
  const getCertificationIcon = (issuer) => {
    const icons = {
      'Google': FaGoogle,
      'Microsoft': FaMicrosoft,
      'Meta': FaFacebook
    };
    return icons[issuer] || FaGoogle;
  };

  return (
    <section className="certifications-section" id="certifications">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">{content_option.certifications.title}</h2>
            <p className="section-subtitle">{content_option.certifications.subtitle}</p>
            <div className="section-divider"></div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={6} className="mb-5">
            <h3 className="subsection-title">
              <FaGraduationCap className="me-2" />
              Education
            </h3>
            {content_option.certifications.education.map((edu, index) => (
              <Card key={index} className="education-card mb-3">
                <Card.Body>
                  <div className="education-header">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <span className="education-year">{edu.year}</span>
                  </div>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-description">{edu.description}</p>
                </Card.Body>
              </Card>
            ))}
          </Col>
          
          <Col lg={6} className="mb-5">
            <h3 className="subsection-title">
              <FaGoogle className="me-2" />
              Professional Certifications
            </h3>
            {content_option.certifications.certifications.map((cert, index) => {
              const IconComponent = getCertificationIcon(cert.issuer);
              return (
                <Card key={index} className="certification-card mb-3">
                  <Card.Body>
                    <div className="certification-header">
                      <div className="certification-icon">
                        <IconComponent size={24} />
                      </div>
                      <div className="certification-info">
                        <h4 className="certification-name">{cert.name}</h4>
                        <p className="certification-issuer">{cert.issuer}</p>
                      </div>
                      <span className="certification-year">{cert.year}</span>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={12}>
            <div className="certifications-summary">
              <h3>Continuous Learning</h3>
              <p>
                I believe in staying updated with the latest trends and technologies in digital marketing. 
                My certifications reflect my commitment to professional development and expertise in 
                leading advertising platforms.
              </p>
              <div className="learning-highlights">
                <Row>
                  <Col md={4} className="mb-3">
                    <div className="learning-item">
                      <h5>Platform Expertise</h5>
                      <p>Certified in Google Ads, Meta Ads, and Microsoft Advertising</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="learning-item">
                      <h5>Analytics & Data</h5>
                      <p>Proficient in GA4, SQL, and data-driven decision making</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="learning-item">
                      <h5>Strategy & Planning</h5>
                      <p>MBA background with focus on marketing strategy and consumer behavior</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Certifications; 