import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { content_option } from '../content_option';

const CaseStudies = () => {
  const getCategoryColor = (category) => {
    const colors = {
      'Education': 'primary',
      'E-commerce': 'success',
      'Government': 'info'
    };
    return colors[category] || 'secondary';
  };

  return (
    <section className="case-studies-section" id="case-studies">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">{content_option.caseStudies.title}</h2>
            <p className="section-subtitle">{content_option.caseStudies.subtitle}</p>
            <div className="section-divider"></div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          {content_option.caseStudies.studies.map((study, index) => (
            <Col lg={4} md={6} className="mb-4" key={study.id}>
              <Card className="case-study-card h-100">
                <Card.Body>
                  <div className="case-study-header">
                    <Badge 
                      bg={getCategoryColor(study.category)}
                      className="mb-2"
                    >
                      {study.category}
                    </Badge>
                    <Card.Title className="case-study-title">{study.title}</Card.Title>
                  </div>
                  
                  <Card.Text className="case-study-description">
                    {study.description}
                  </Card.Text>
                  
                  <div className="case-study-kpis">
                    <h6>Key Results:</h6>
                    <p className="kpi-text">{study.kpis}</p>
                  </div>
                  
                  <div className="case-study-learnings">
                    <h6>Key Learnings:</h6>
                    <p className="learning-text">{study.learnings}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div className="case-studies-summary">
              <h3>Campaign Performance Overview</h3>
              <Row className="mt-4">
                <Col md={3} className="mb-3">
                  <div className="performance-stat">
                    <h4>45%</h4>
                    <p>Average Application Increase</p>
                  </div>
                </Col>
                <Col md={3} className="mb-3">
                  <div className="performance-stat">
                    <h4>30%</h4>
                    <p>Average Cost Reduction</p>
                  </div>
                </Col>
                <Col md={3} className="mb-3">
                  <div className="performance-stat">
                    <h4>60%</h4>
                    <p>Average ROAS Improvement</p>
                  </div>
                </Col>
                <Col md={3} className="mb-3">
                  <div className="performance-stat">
                    <h4>50+</h4>
                    <p>Successful Campaigns</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CaseStudies; 