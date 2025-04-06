import React, { useState } from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import { Box, Typography } from '@mui/material';
import { Container } from 'react-bootstrap';

const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleSectionClick = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <Container fluid className="px-3">
      <Header />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <AboutSection
          title="Chi sono"
          subtitle="Piacere! Ho 27 anni e sono brasiliana, nata a Rio de Janeiro."
          isExpanded={expandedSection === 'about'}
          onClick={() => handleSectionClick('about')}
          content="Ho iniziato il mio percorso nella tecnologia in modo curioso e inaspettato. Durante i quasi quattro anni trascorsi studiando Medicina e Chirurgia presso La Sapienza – Università di Roma, ho scoperto le mie vere passioni e inclinazioni.
          Ho scelto di trasferirmi in Italia spinta dalla volontà di fare esperienze con culture diverse e affrontare nuove sfide personali e accademiche.
          È stato proprio durante quel periodo che, spinta dal desiderio di trovare soluzioni e affrontare problemi attraverso la logica e la tecnologia, ho cominciato a studiare sviluppo web, ancora mentre frequentavo medicina.
          Con il tempo, ho compreso che il mio futuro apparteneva a un altro ambito e ho deciso di tornare nel mio paese per dedicarmi completamente a questa transizione di carriera.
          L’esperienza multiculturale vissuta a Roma mi ha arricchita profondamente, permettendomi di sviluppare competenze linguistiche, relazionali e una mentalità aperta.

          Oggi continuo il mio percorso come sviluppatrice frontend, con l’obiettivo di crescere costantemente attraverso il lifelong learning e contribuire allo sviluppo di soluzioni tecnologiche utili e significative."
        />
        <AboutSection
          title="Studi"
          subtitle="Laurea in Sistemi Informativi. Studio UX Design e Cybersecurity."
          isExpanded={expandedSection === 'studies'}
          onClick={() => handleSectionClick('studies')}
          content={
            <Box>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
                🎓 Laurea in Sistemi Informativi - Università Veiga de Almeida{'\n'}
                Attualmente frequento il secondo anno della laurea in Sistemi Informativi.{'\n\n'}
                💻 In corso: Junior Cybersecurity Analyst – Cisco Networking Academy{'\n'}
                Formazione in sicurezza informatica, minacce digitali, protezione delle reti e best practices.
              </Typography>
          
              {[
                {
                  title: 'Responsive Web Design',
                  description: 'Competenze: HTML · CSS · Web Design Responsivo · Design di interfacce.',
                  link: 'https://www.freecodecamp.org/certification/AmandaAlbuquerque/responsive-web-design',
                },
                {
                  title: 'Javascript Algorithms and Data Structures',
                  description: 'Approfondimenti in logica di programmazione, funzioni, oggetti e strutture dati.',
                  link: 'https://www.freecodecamp.org/certification/AmandaAlbuquerque/javascript-algorithms-and-data-structures',
                },
                {
                  title: 'Front-End Development Libraries',
                  description: 'Tecnologie: React, Redux, Bootstrap, jQuery.',
                  link: 'https://www.freecodecamp.org/certification/AmandaAlbuquerque/front-end-development-libraries',
                },
                {
                  title: 'Intelligenza Artificiale',
                  description: 'Introduzione ai concetti fondamentali di AI e machine learning.',
                  download: '/certificates/ai.pdf',
                },
                {
                  title: 'Metodologie Agile',
                  description: 'Studio delle pratiche agili nello sviluppo software (Scrum, Kanban).',
                  link: 'https://www.unovacursos.com.br/certificados/182306230020981248202409',
                },
                {
                  title: 'Figma Applicato',
                  description: 'Progettazione di interfacce UX/UI e prototipazione.',
                  download: '/certificates/figma.pdf',
                },
                {
                  title: 'Data Analytics Essentials',
                  description: 'Concetti chiave di analisi dei dati, visualizzazione e interpretazione.',
                  link: 'https://example.com/certificato-data',
                },
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography sx={{ mr: 1 }}>🌟</Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </Box>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: '8px', color: '#1976d2', textDecoration: 'none' }}
                    >
                      📄
                    </a>
                  )}
                  {item.download && (
                    <a
                      href={item.download}
                      download
                      style={{ marginLeft: '8px', color: '#1976d2', textDecoration: 'none' }}
                    >
                      📄
                    </a>
                  )}
                </Box>
              ))
            }
          
              <Typography sx={{ mt: 2 }}>
                🌍 <strong>Lingue: </strong>
                🇧🇷 Portoghese (madrelingua),
                🇮🇹 Italiano (avanzato),
                🇺🇸 Inglese (intermedio/avanzato),
                🇫🇷 Francese (base).
              </Typography>
            </Box>
          }
          
        />

        <AboutSection
          title="Hobby"
          subtitle="Nel mio tempo libero mi dedico a diverse attività che mi aiutano a mantenere l'equilibrio tra corpo e mente."
          isExpanded={expandedSection === 'hobbies'}
          onClick={() => handleSectionClick('hobbies')}
content={`🏃‍♀️ Frequento la palestra con regolarità: allenarmi mi aiuta a mantenermi in forma, migliorare la disciplina e liberare la mente.

🏖️ Amo andare in spiaggia per godermi il mare e il sole, e fare lunghe passeggiate all’aria aperta per ricaricare le energie.

📺 Mi piace guardare serie, soprattutto quelle che stimolano la riflessione o raccontano storie coinvolgenti.

🧘‍♀️ Pratico yoga per migliorare la concentrazione e mantenere la calma interiore.

🌍 Sono appassionata di lingue straniere e mi piace dedicare del tempo ad apprenderne di nuove.

✈️ Mi piace viaggiare e conoscere nuove persone: ogni incontro e ogni luogo portano con sé nuove ispirazioni e scoperte.`}
        />
      </Box>
    </Container>
  );
};

export default About;
