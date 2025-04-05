import React from 'react';
import { Container } from 'react-bootstrap';
import { Typography } from '@mui/material';

const HeroText = () => {
  return (
    <Container className="text-start py-5">
      <Typography variant="subtitle1" gutterBottom sx={{ fontSize: '1.1rem', fontWeight: 400 }}>
        Ciao! Sono Amanda. 
      </Typography>

      <Typography variant="h2" sx={{
        fontWeight: 800,
        fontSize: {
          xs: '2.5rem',
          sm: '3rem',
          md: '3.5rem',
        },
        lineHeight: 1.1,
      }}>
        Sviluppo interfacce<br />
        moderne orientate <br />
        all'<span style={{ color: '#aaa' }}>esperienza utente</span>
      </Typography>
    </Container>
  );
};

export default HeroText;
