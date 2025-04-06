import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Skills = () => {
    return (
      <Container fluid className="px-3">
        <Header />
        <Container className="mt-4">
        <Row className="justify-content-center">
          {/* Hard Skills */}
          <Col md={6} lg={5} className="mb-4">
            <Card>
              <Card.Header as="h5">🎯 Competenze Tecniche (Hard Skills)</Card.Header>
              <ListGroup variant="flush">
                {[
                  'JavaScript',
                  'TypeScript',
                  'React.js',
                  'Next.js',
                  'Bootstrap',
                  'jQuery',
                  'Tailwind CSS',
                  'Material UI',
                  'Figma',
                  'Logica di programmazione',
                  'HTML',
                  'CSS',
                  'Git',
                  'GitHub',
                  'Tableau (base)',
                  'SQL (base)'
                ].map((skill, idx) => (
                  <ListGroup.Item key={idx}>{skill}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>

          {/* Soft Skills */}
          <Col md={6} lg={5} className="mb-4">
            <Card>
              <Card.Header as="h5">💡 Competenze Trasversali (Soft Skills)</Card.Header>
              <ListGroup variant="flush">
                {[
                  'Comunicazione',
                  'Problem Solving',
                  'Adattabilità',
                  'Flessibilità'
                ].map((skill, idx) => (
                  <ListGroup.Item key={idx}>{skill}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      </Container>
    );
  };

export default Skills;
