import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { content_option } from '../content_option';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          {content_option.hero.name}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={handleNavClick}
              className={location.pathname === '/' ? 'active' : ''}
            >
              {content_option.navigation.home}
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={handleNavClick}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              {content_option.navigation.about}
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/skills" 
              onClick={handleNavClick}
              className={location.pathname === '/skills' ? 'active' : ''}
            >
              {content_option.navigation.skills}
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/case-studies" 
              onClick={handleNavClick}
              className={location.pathname === '/case-studies' ? 'active' : ''}
            >
              {content_option.navigation.caseStudies}
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/certifications" 
              onClick={handleNavClick}
              className={location.pathname === '/certifications' ? 'active' : ''}
            >
              {content_option.navigation.certifications}
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              onClick={handleNavClick}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              {content_option.navigation.contact}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation; 