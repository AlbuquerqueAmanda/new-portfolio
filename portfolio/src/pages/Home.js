import React from 'react';
import Header from '../components/Header';
import HeroText from '../components/HeroText';
import { Container } from 'react-bootstrap';
import TechIcons from '../components/TechIcons';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Container fluid className="px-3">
      <Header />
      <HeroText />
      <TechIcons />
      <Footer />
    </Container>
  );
};

export default Home;
