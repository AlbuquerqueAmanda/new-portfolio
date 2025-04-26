import React, { useState } from 'react';
import Header from '../components/Header';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import ProjectsUXUI from '../components/ProjectsUXUI';
import ProjectsFrontEnd from '../components/ProjectsFrontEnd';

const Projects = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('uxui');

  const translations = {
    it: {
      intro: `Questi sono alcuni dei miei progetti personali che mostrano la mia evoluzione negli ultimi anni di studio.
              Il primo è proprio il portfolio, creato con l’obiettivo di presentare il mio lavoro, le mie competenze tecniche e il mio percorso.
              Altri progetti possono essere trovati sul mio GitHub.`,
      uxui: 'Progetti UX/UI Design',
      frontend: 'Progetti Front-End',
    },
    pt: {
      intro: `Esses são alguns dos meus projetos pessoais que mostram minha evolução nos últimos anos de estudo.
              O primeiro é o portfólio, criado com o objetivo de apresentar meu trabalho, minhas competências técnicas e trajetória.
              Outros projetos podem ser encontrados no meu GitHub.`,
      uxui: 'Projetos UX/UI Design',
      frontend: 'Projetos Front-End',
    },
    en: {
      intro: `Here are some of my personal projects showing my evolution over the last few years of study.
              The first one is my portfolio, created to showcase my work, technical skills, and journey.
              More projects can be found on my GitHub.`,
      uxui: 'UX/UI Design Projects',
      frontend: 'Front-End Projects',
    },
  };

  const content = translations[language] || translations.it;

  return (
    <Container fluid className="px-3">
      <Header />
      <Container className="mt-4">
        <Row className="mb-4">
          <Col>
            <p style={{ fontSize: '1rem', fontWeight: 500 }}>{content.intro}</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="d-flex justify-content-center">
            <ButtonGroup>
              <Button
                variant={selectedCategory === 'uxui' ? 'dark' : 'outline-dark'}
                onClick={() => setSelectedCategory('uxui')}
              >
                {content.uxui}
              </Button>
              <Button
                variant={selectedCategory === 'frontend' ? 'dark' : 'outline-dark'}
                onClick={() => setSelectedCategory('frontend')}
              >
                {content.frontend}
              </Button>
            </ButtonGroup>
          </Col>
        </Row>

        {selectedCategory === 'uxui' ? <ProjectsUXUI /> : <ProjectsFrontEnd />}
      </Container>
    </Container>
  );
};

export default Projects;
