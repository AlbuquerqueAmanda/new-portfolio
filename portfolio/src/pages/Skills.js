import React from 'react';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';
import HeroText from '../components/HeroText';

const Skills = () => {
    return (
      <Container fluid className="px-3">
        <Header />
        <HeroText />
      </Container>
    );
  };

export default Skills;
