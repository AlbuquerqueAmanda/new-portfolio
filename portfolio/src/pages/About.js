// src/pages/About.js
import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import { Box } from '@mui/material';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container fluid className="px-3">
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          height: 'calc(100vh - 60px)', // ajuste se necessário para o Header
        }}
      >
        <AboutSection
          title="About Me"
          subtitle="Desenvolvedora Frontend apaixonada por criar experiências intuitivas."
          number="1"
        />
        <AboutSection
          title="Studies"
          subtitle="Formada em Sistemas de Informação. Estudando UX Design."
          number="2"
          active
        />
        <AboutSection
          title="Hobbies"
          subtitle="Ilustração, escrita e cinema de ficção científica."
          number="3"
        />
      </Box>
    </Container>
  );
};

export default About;
