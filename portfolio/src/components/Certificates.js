import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';

const Certificate = () => {
    const { language } = useLanguage();

    return (
        <Box sx={{ mt: 4 }}>
  {[
    {
      title: 'Responsive Web Design',
      description: {
        pt: 'Competências: HTML · CSS · Web Design Responsivo · Design de interfaces.',
        en: 'Skills: HTML · CSS · Responsive Web Design · Interface Design.',
        it: 'Competenze: HTML · CSS · Web Design Responsivo · Design di interfacce.',
      },
      link: 'https://www.freecodecamp.org/certification/AmandaAlbuquerque/responsive-web-design',
    },
    {
      title: 'Javascript Algorithms and Data Structures',
      description: {
        pt: 'Lógica de programação, funções, objetos e estruturas de dados.',
        en: 'Programming logic, functions, objects, and data structures.',
        it: 'Approfondimenti in logica di programmazione, funzioni, oggetti e strutture dati.',
      },
      link: 'https://www.freecodecamp.org/certification/AmandaAlbuquerque/javascript-algorithms-and-data-structures',
    },
    {
      title: 'Front-End Development Libraries',
      description: {
        pt: 'Tecnologias: React, Redux, Bootstrap, jQuery.',
        en: 'Technologies: React, Redux, Bootstrap, jQuery.',
        it: 'Tecnologie: React, Redux, Bootstrap, jQuery.',
      },
      link: 'https://www.freecodecamp.org/certification/AmandaAlbuquerque/front-end-development-libraries',
    },
    {
      title: 'Inteligência Artificial',
      description: {
        pt: 'Introdução à IA.',
        en: 'Introduction to AI.',
        it: 'Introduzione ai concetti fondamentali di AI.',
      },
      link: '/certificates/ai.pdf',
    },
    {
      title: 'Metodologias Ágeis',
      description: {
        pt: 'Estudo de práticas ágeis no desenvolvimento de software (Scrum, Kanban).',
        en: 'Study of agile practices in software development (Scrum, Kanban).',
        it: 'Studio delle pratiche agili nello sviluppo software (Scrum, Kanban).',
      },
      link: 'https://www.unovacursos.com.br/certificados/182306230020981248202409',
    },
    {
      title: 'Figma Aplicado',
      description: {
        pt: 'Prototipação e design de interfaces UX/UI.',
        en: 'UX/UI interface design and prototyping.',
        it: 'Progettazione di interfacce UX/UI e prototipazione.',
      },
      link: '/certificates/figma.pdf',
    },
    {
      title: 'Data Analytics Essentials',
      description: {
        pt: 'Conceitos chave de análise de dados, visualização e interpretação.',
        en: 'Key concepts in data analysis, visualization, and interpretation.',
        it: 'Concetti chiave di analisi dei dati, visualizzazione e interpretazione.',
      },
      link: '/certificates/data-analyst.pdf',
    },
    {
      title: 'UX Design',
      description: {
        pt: 'Estudo dos conceitos de UX e UI Design, uso do Figma, leis e princípios do UX, usabilidade, visual design, criação de personas, UX Writing, pesquisa com usuários, desk research, design brief, design thinking e prototipação.',
        en: 'Study of UX and UI Design concepts, use of Figma, UX laws and principles, usability, visual design, persona creation, UX writing, user research, desk research, design brief, design thinking, and prototyping.',
        it: 'Studio dei concetti di UX e UI Design, utilizzo di Figma, leggi e principi dell’UX, usabilità, visual design, creazione di personas, UX writing, ricerca con gli utenti, desk research, design brief, design thinking e prototipazione.',
      },      
      link: '/certificates/ux.pdf',
    },
  ].map((item, index) => (
    <Box
      key={index}
      sx={{
        mb: 2,
        p: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
        '&:hover': { boxShadow: 2 },
      }}
    >
      <Typography variant="h6">{item.title}</Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        {item.description[language]}
      </Typography>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: '#1976d2' }}
        >
          🔗 {language === 'pt' ? 'Ver certificado' : language === 'it' ? 'Visualizza certificato' : 'View certificate'}
        </a>
      )}
    </Box>
  ))}
</Box>

    );
};

export default Certificate;
