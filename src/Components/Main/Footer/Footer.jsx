import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container fluid className="p-3 bg-dark text-white">
        <Row>
          <Col md={6}>
            <h5>Gourmand</h5>
            <p>A French cuisine restaurant offering exquisite dishes that delight your senses and transport you to the heart of Paris.</p>
          </Col>
          <Col md={3}>
            <h5>Location</h5>
            <p>123 Main St.</p>
            <p>Paris, France</p>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <p>Phone: +33 1 23 45 67 89</p>
            <p>Email: info@gourmand.com</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <Button variant="danger">Subscribe to Our Newsletter</Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Gourmand. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
