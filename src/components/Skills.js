import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaFacebook, 
  FaGoogle, 
  FaChartLine, 
  FaHubspot, 
  FaDatabase, 
  FaRocket, 
  FaSearch, 
  FaAd 
} from 'react-icons/fa';
import { content_option } from '../content_option';

const Skills = () => {
  const getIcon = (iconName) => {
    const icons = {
      FaFacebook: FaFacebook,
      FaGoogle: FaGoogle,
      FaChartLine: FaChartLine,
      FaHubspot: FaHubspot,
      FaDatabase: FaDatabase,
      FaRocket: FaRocket,
      FaSearch: FaSearch,
      FaAd: FaAd
    };
    return icons[iconName] || FaRocket;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Advertising': '#e3f2fd',
      'Analytics': '#f3e5f5',
      'CRM': '#e8f5e8',
      'Data': '#fff3e0'
    };
    return colors[category] || '#f5f5f5';
  };

  return (
    <section className="skills-section" id="skills">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title">{content_option.skills.title}</h2>
            <p className="section-subtitle">{content_option.skills.subtitle}</p>
            <div className="section-divider"></div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          {content_option.skills.skillsList.map((skill, index) => {
            const IconComponent = getIcon(skill.icon);
            return (
              <Col lg={3} md={4} sm={6} className="mb-4" key={index}>
                <Card 
                  className="skill-card text-center h-100"
                  style={{ backgroundColor: getCategoryColor(skill.category) }}
                >
                  <Card.Body>
                    <div className="skill-icon">
                      <IconComponent size={40} />
                    </div>
                    <Card.Title className="skill-name">{skill.name}</Card.Title>
                    <Card.Text className="skill-category">{skill.category}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        
        <Row className="mt-5">
          <Col lg={12}>
            <div className="skills-summary">
              <h3>What I Bring to the Table</h3>
              <Row>
                <Col md={4} className="mb-3">
                  <div className="skill-highlight">
                    <h4>Campaign Management</h4>
                    <p>End-to-end campaign planning, execution, and optimization across multiple platforms</p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="skill-highlight">
                    <h4>Data Analysis</h4>
                    <p>Deep dive into analytics to extract actionable insights and drive performance improvements</p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="skill-highlight">
                    <h4>Strategy Development</h4>
                    <p>Creating comprehensive marketing strategies that align with business objectives</p>
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

export default Skills; 