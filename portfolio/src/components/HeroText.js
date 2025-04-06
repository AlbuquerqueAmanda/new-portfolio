import React from 'react';
import { Typography, Box } from '@mui/material';

const HeroText = () => {
  return (
    <Box
      sx={{
        py: 5,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ fontSize: '1.1rem', fontWeight: 600 }}
      >
        Ciao! Sono Amanda.
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          color: '#554865',
          fontSize: {
            xs: '2.5rem',
            sm: '3rem',
            md: '3.5rem',
          },
          lineHeight: 1.1,
        }}
      >
        Sviluppo interfacce<br />
        moderne orientate <br />
        all'<span style={{ color: '#a2a5d4' }}>esperienza utente</span>
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          fontSize: {
            xs: '0.9rem',
            sm: '1rem',
          },
          color: '#000',
          maxWidth: {
            xs: '100%',   
            sm: '90%',    
            md: '100ch', 
          },
        }}
      >
        Lavoro come sviluppatore software frontend, collaborando nello sviluppo di soluzioni digitali. 
        La mia principale responsabilità è la creazione e implementazione di sistemi web, dalla progettazione dell'interfaccia all'integrazione con il backend, garantendo un'esperienza utente fluida ed efficiente.
      </Typography>
    </Box>
  );
};

export default HeroText;

