import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { content_option } from '../content_option';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">{content_option.about.title}</h2>
            <div className="section-divider"></div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={6} className="mb-4">
            <div className="about-content">
              <p className="about-description">
                {content_option.about.description}
              </p>
              <p className="about-story">
                {content_option.about.story}
              </p>
            </div>
          </Col>
          
          <Col lg={6} className="mb-4">
            <div className="about-stats">
              <Row>
                <Col md={4} className="mb-3">
                  <Card className="stat-card text-center">
                    <Card.Body>
                      <h3 className="stat-number">{content_option.about.experience}</h3>
                      <p className="stat-label">Experience</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-3">
                  <Card className="stat-card text-center">
                    <Card.Body>
                      <h3 className="stat-number">50+</h3>
                      <p className="stat-label">Campaigns</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} className="mb-3">
                  <Card className="stat-card text-center">
                    <Card.Body>
                      <h3 className="stat-number">15+</h3>
                      <p className="stat-label">Clients</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col lg={12}>
            <div className="journey-section">
              <h3 className="journey-title">My Journey</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Performance Marketing Specialist</h4>
                    <p>2021 - Present</p>
                    <p>Driving digital marketing success through data-driven strategies and optimization</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>MBA in Marketing</h4>
                    <p>2019 - 2021</p>
                    <p>{content_option.about.education}</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-content">
                    <h4>Psychology Background</h4>
                    <p>2015 - 2019</p>
                    <p>Understanding human behavior and decision-making processes</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 