import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const badgeStyle = {
  display: 'inline-block',
  margin: '0.3rem',
  fontSize: '0.9rem',
  backgroundColor: '#e3f2fd',
  color: '#0d6efd',
  padding: '0.5rem 0.75rem',
  borderRadius: '1rem',
  fontWeight: '500',
};

const Skills = () => {
  const { language } = useLanguage();

  const translations = {
    pt: {
      hardTitle: '🎯 Competências Técnicas (Hard Skills)',
      softTitle: '💡 Competências Comportamentais (Soft Skills)',
      langTitle: '🌍 Idiomas',
      hardSkills: [
        'JavaScript', 'TypeScript', 'React.js', 'Next.js',
        'Bootstrap', 'jQuery', 'Tailwind CSS', 'Material UI',
        'Figma', 'Lógica de programação', 'HTML', 'CSS',
        'Git', 'GitHub', 'Tableau (básico)', 'SQL (básico)',
      ],
      softSkills: [
        'Comunicação', 'Resolução de problemas', 'Adaptabilidade', 'Flexibilidade',
      ],
      languages: [
        '🇧🇷 Português (nativo)',
        '🇮🇹 Italiano (avançado)',
        '🇺🇸 Inglês (avançado)',
        '🇫🇷 Francês (básico)',
      ],
    },
    en: {
      hardTitle: '🎯 Technical Skills (Hard Skills)',
      softTitle: '💡 Interpersonal Skills (Soft Skills)',
      langTitle: '🌍 Languages',
      hardSkills: [
        'JavaScript', 'TypeScript', 'React.js', 'Next.js',
        'Bootstrap', 'jQuery', 'Tailwind CSS', 'Material UI',
        'Figma', 'Programming logic', 'HTML', 'CSS',
        'Git', 'GitHub', 'Tableau (basic)', 'SQL (basic)',
      ],
      softSkills: [
        'Communication', 'Problem Solving', 'Adaptability', 'Flexibility',
      ],
      languages: [
        '🇧🇷 Portuguese (native)',
        '🇮🇹 Italian (advanced)',
        '🇺🇸 English (advanced)',
        '🇫🇷 French (basic)',
      ],
    },
    it: {
      hardTitle: '🎯 Competenze Tecniche (Hard Skills)',
      softTitle: '💡 Competenze Trasversali (Soft Skills)',
      langTitle: '🌍 Lingue',
      hardSkills: [
        'JavaScript', 'TypeScript', 'React.js', 'Next.js',
        'Bootstrap', 'jQuery', 'Tailwind CSS', 'Material UI',
        'Figma', 'Logica di programmazione', 'HTML', 'CSS',
        'Git', 'GitHub', 'Tableau (base)', 'SQL (base)',
      ],
      softSkills: [
        'Comunicazione', 'Problem Solving', 'Adattabilità', 'Flessibilità',
      ],
      languages: [
        '🇧🇷 Portoghese (madrelingua)',
        '🇮🇹 Italiano (avanzato)',
        '🇺🇸 Inglese (avanzato)',
        '🇫🇷 Francese (base)',
      ],
    },
  };

  const content = translations[language] || translations.it;

  return (
    <Container fluid className="px-3" style={{ minHeight: '100vh' }}>
      <Header />
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center gy-4">
          {/* Hard Skills */}
          <Col sm={12} md={6} lg={4}>
            <Card className="shadow-sm rounded-4 p-3">
              <Card.Header as="h5" className="bg-white border-0 text-primary fw-bold">
                {content.hardTitle}
              </Card.Header>
              <Card.Body>
                {content.hardSkills.map((skill, idx) => (
                  <span key={idx} style={badgeStyle}>
                    {skill}
                  </span>
                ))}
              </Card.Body>
            </Card>
          </Col>

          {/* Soft Skills */}
          <Col md={6} lg={4}>
            <Card className="shadow-sm rounded-4 p-3">
              <Card.Header as="h5" className="bg-white border-0 text-success fw-bold">
                {content.softTitle}
              </Card.Header>
              <Card.Body>
                {content.softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      ...badgeStyle,
                      backgroundColor: '#e8f5e9',
                      color: '#388e3c',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </Card.Body>
            </Card>
          </Col>

          {/* Languages */}
          <Col md={6} lg={4}>
            <Card className="shadow-sm rounded-4 p-3">
              <Card.Header as="h5" className="bg-white border-0 fw-bold" style={{ color: '#6a1b9a' }} >
                {content.langTitle}
              </Card.Header>
              <Card.Body>
                {content.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    style={{
                      ...badgeStyle,
                      backgroundColor: '#f3e5f5',
                      display: 'block',
                      width: 'fit-content',
                      color: '#6a1b9a',
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Skills;
