import React from 'react';
import Header from '../components/Header';
import HeroText from '../components/HeroText';
import { Container } from 'react-bootstrap';
import FloatingIcons from '../components/FloatingIcons';

const Home = () => {
  return (
    <Container fluid className="px-3">
      <Header />
      <HeroText />
      <FloatingIcons />
    </Container>
  );
};

export default Home;
