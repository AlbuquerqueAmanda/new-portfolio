import React from 'react';
import { Typography, Box } from '@mui/material';
import { useLanguage } from '../context/LanguageContext'; 

const HeroText = () => {
  const { language } = useLanguage();

  const content = {
    it: {
      greeting: 'Ciao! Sono Amanda.',
      titleLine1: 'Sviluppo interfacce',
      titleLine2: 'moderne orientate',
      titleLine3: "all'",
      titleSpan: 'esperienza utente',
      description: `Lavoro come sviluppatore software frontend, collaborando nello sviluppo di soluzioni digitali. 
      La mia principale responsabilità è la creazione e implementazione di sistemi web, dalla progettazione dell'interfaccia all'integrazione con il backend, garantendo un'esperienza utente fluida ed efficiente.`,
    },
    en: {
      greeting: "Hi! I’m Amanda.",
      titleLine1: 'I develop modern',
      titleLine2: 'user-focused',
      titleLine3: '',
      titleSpan: 'interfaces',
      description: `I work as a frontend software developer, contributing to the creation of digital solutions. 
      My main responsibility is designing and implementing web systems, from the interface to backend integration, ensuring a smooth and efficient user experience.`,
    },
    pt: {
      greeting: 'Oi! Eu sou a Amanda.',
      titleLine1: 'Desenvolvo interfaces',
      titleLine2: 'modernas focadas na ',
      titleLine3: '',
      titleSpan: 'experiência do usuário',
      description: `Atuo como desenvolvedora de software frontend, contribuindo para a criação de soluções digitais. 
      Minha principal responsabilidade é projetar e implementar sistemas web, desde a interface até a integração com o backend, garantindo uma experiência do usuário fluida e eficiente.`,
    }
  };

  const langContent = content[language] || content["en"];
  const { greeting, titleLine1, titleLine2, titleLine3, titleSpan, description } = langContent;

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
        {greeting}
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
        {titleLine1}<br />
        {titleLine2} <br />
        {titleLine3}
        <span style={{ color: '#a2a5d4' }}>{titleSpan}</span>
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
        {description}
      </Typography>
    </Box>
  );
};

export default HeroText;

