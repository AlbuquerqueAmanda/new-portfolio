import React, { useState } from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import { Box, Typography } from '@mui/material';
import { Container } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import Certificate from '../components/Certificates';

const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const { language } = useLanguage();

  const handleSectionClick = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const content = {
    pt: {
      about: `Iniciei meu percurso na tecnologia de forma curiosa e inesperada. Durante quase quatro anos cursando Medicina e Cirurgia na La Sapienza – Universidade de Roma, descobri minhas verdadeiras paixões e inclinações.
Escolhi me mudar para a Itália pela vontade de viver novas culturas e desafios pessoais e acadêmicos.
Foi justamente nesse período que, impulsionada pela vontade de solucionar problemas por meio da lógica e da tecnologia, comecei a estudar desenvolvimento web ainda enquanto cursava medicina.
Com o tempo, percebi que meu futuro pertencia a outra área e decidi voltar ao Brasil para me dedicar completamente a essa transição de carreira.
A vivência multicultural em Roma me enriqueceu profundamente, desenvolvendo competências linguísticas, interpessoais e uma mentalidade aberta.
Hoje sigo meu caminho como desenvolvedora frontend, com o objetivo de crescer constantemente através do aprendizado contínuo e contribuir para soluções tecnológicas significativas.`,
      studiesSubtitle: 'Graduação em Sistemas de Informação. Estudo UX Design e Cibersegurança.',
      languages: '🌍 Línguas: 🇧🇷 Português (nativo), 🇮🇹 Italiano (avançado), 🇺🇸 Inglês (avançado), 🇫🇷 Francês (básico).',
      hobbies: `🏃‍♀️ Vou à academia regularmente: treinar me ajuda a manter a forma, melhorar a disciplina e aliviar a mente.

🏖️ Amo ir à praia para aproveitar o mar e o sol, e fazer longas caminhadas ao ar livre para recarregar as energias.

📺 Gosto de assistir séries, especialmente as que fazem refletir ou contam boas histórias.

🧘‍♀️ Pratico yoga para melhorar a concentração e manter a calma interior.

🌍 Sou apaixonada por idiomas e gosto de aprender novas línguas.

✈️ Amo viajar e conhecer novas pessoas: cada encontro e lugar trazem inspiração e aprendizado.`,
      aboutTitle: 'Quem sou eu',
      studiesTitle: 'Estudos',
      aboutSubtitle: 'Prazer! Tenho 27 anos e sou brasileira, nascida no Rio de Janeiro.', 
      hobbiesTitle: 'Hobby',
    },

    it: {
      about: `Ho iniziato il mio percorso nella tecnologia in modo curioso e inaspettato. Durante i quasi quattro anni trascorsi studiando Medicina e Chirurgia presso La Sapienza – Università di Roma, ho scoperto le mie vere passioni e inclinazioni.
Ho scelto di trasferirmi in Italia spinta dalla volontà di fare esperienze con culture diverse e affrontare nuove sfide personali e accademiche.
È stato proprio durante quel periodo che, spinta dal desiderio di trovare soluzioni e affrontare problemi attraverso la logica e la tecnologia, ho cominciato a studiare sviluppo web, ancora mentre frequentavo medicina.
Con il tempo, ho compreso che il mio futuro apparteneva a un altro ambito e ho deciso di tornare nel mio paese per dedicarmi completamente a questa transizione di carriera.
L’esperienza multiculturale vissuta a Roma mi ha arricchita profondamente, permettendomi di sviluppare competenze linguistiche, relazionali e una mentalità aperta.
Oggi continuo il mio percorso come sviluppatrice frontend, con l’obiettivo di crescere costantemente attraverso il lifelong learning e contribuire allo sviluppo di soluzioni tecnologiche utili e significative.`,
      studiesSubtitle: 'Laurea in Sistemi Informativi. Studio UX Design e Cybersecurity.',
      languages: '🌍 Lingue: 🇧🇷 Portoghese (madrelingua), 🇮🇹 Italiano (avanzato), 🇺🇸 Inglese (intermedio/avanzato), 🇫🇷 Francese (base).',
      hobbies: `🏃‍♀️ Frequento la palestra con regolarità: allenarmi mi aiuta a mantenermi in forma, migliorare la disciplina e liberare la mente.

🏖️ Amo andare in spiaggia per godermi il mare e il sole, e fare lunghe passeggiate all’aria aperta per ricaricare le energie.

📺 Mi piace guardare serie, soprattutto quelle che stimolano la riflessione o raccontano storie coinvolgenti.

🧘‍♀️ Pratico yoga per migliorare la concentrazione e mantenere la calma interiore.

🌍 Sono appassionata di lingue straniere e mi piace dedicare del tempo ad apprenderne di nuove.

✈️ Mi piace viaggiare e conoscere nuove persone: ogni incontro e ogni luogo portano con sé nuove ispirazioni e scoperte.`,
      aboutTitle: 'Chi sono',
      aboutSubtitle: 'Piacere! Ho 27 anni e sono brasiliana, nata a Rio de Janeiro.',      studiesTitle: 'Studi',
      hobbiesTitle: 'Hobby',
    },

    en: {
      about: `I started my journey into tech in a curious and unexpected way. While studying Medicine and Surgery for almost four years at La Sapienza – University of Rome, I discovered my true passions and interests.
I chose to move to Italy driven by a desire to experience different cultures and face new personal and academic challenges.
It was during that period that, motivated by a desire to solve problems using logic and technology, I began studying web development even while still in medical school.
Over time, I realized my future lay elsewhere and decided to return to my country to fully dedicate myself to this career transition.
The multicultural experience in Rome deeply enriched me, allowing me to develop language skills, interpersonal abilities, and an open mindset.
Today, I continue my journey as a frontend developer, aiming to grow continuously through lifelong learning and contribute to meaningful technological solutions.`,
      studiesSubtitle: 'Bachelor in Information Systems. I study UX Design and Cybersecurity.',
      languages: '🌍 Languages: 🇧🇷 Portuguese (native), 🇮🇹 Italian (advanced), 🇺🇸 English (intermediate/advanced), 🇫🇷 French (basic).',
      hobbies: `🏃‍♀️ I go to the gym regularly: training helps me stay fit, improve discipline, and clear my mind.

🏖️ I love going to the beach to enjoy the sea and sun, and taking long walks outdoors to recharge.

📺 I enjoy watching series, especially those that are thought-provoking or tell captivating stories.

🧘‍♀️ I practice yoga to improve focus and maintain inner calm.

🌍 I’m passionate about foreign languages and enjoy spending time learning new ones.

✈️ I love traveling and meeting new people: every encounter and place brings new inspiration and discovery.`,
      aboutTitle: 'Who I am',
      aboutSubtitle: 'Nice to meet you! I am 27 years old and from Rio de Janeiro, Brazil.', 
      studiesTitle: 'Studies',
      hobbiesTitle: 'Hobby',
    },
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
          title={content[language].aboutTitle}
          subtitle={content[language].aboutSubtitle}
          isExpanded={expandedSection === 'about'}
          onClick={() => handleSectionClick('about')}
          content={content[language].about}
       />
        <AboutSection
          title={content[language].studiesTitle}
          subtitle={content[language].studiesSubtitle}
          isExpanded={expandedSection === 'studies'}
          onClick={() => handleSectionClick('studies')}
          content={
            <Box>
              <Typography sx={{ mt: 2 }} {...content[language].languages}>
  {language === 'pt' && (
    <>
      🎓 Graduação em Sistemas de Informação - Universidade Veiga de Almeida{'\n'}
      Atualmente curso o segundo ano da graduação em Sistemas de Informação.{'\n\n'}
      💻 Em andamento: Junior Cybersecurity Analyst – Cisco Networking Academy.{'\n'}
      Formação em segurança da informação, ameaças digitais, proteção de redes e boas práticas.
    </>
  )}
  {language === 'en' && (
    <>
      🎓 Bachelor's in Information Systems - Veiga de Almeida University{'\n'}
      Currently in the second year of my Information Systems degree.{'\n\n'}
      💻 Ongoing: Junior Cybersecurity Analyst – Cisco Networking Academy.{'\n'}
      Training in information security, digital threats, network protection, and best practices.
    </>
  )}
  {language === 'it' && (
    <>
      🎓 Laurea in Sistemi Informativi - Università Veiga de Almeida{'\n'}
      Attualmente frequento il secondo anno della laurea in Sistemi Informativi.{'\n\n'}
      💻 In corso: Junior Cybersecurity Analyst – Cisco Networking Academy.{'\n'}
      Formazione in sicurezza informatica, minacce digitali, protezione delle reti e best practices.
    </>
  )}
              </Typography>
              <Certificate />
            </Box>
          }
          
        />

        <AboutSection
          title="Hobby"
          subtitle={
            language === 'pt'
              ? 'No meu tempo livre me dedico a atividades que me ajudam a manter o equilíbrio entre corpo e mente.'
              : language === 'en'
              ? 'In my free time I dedicate myself to activities that help me keep my body and mind in balance.'
              : 'Nel mio tempo libero mi dedico a diverse attività che mi aiutano a mantenere l\'equilibrio tra corpo e mente.'
          }
          isExpanded={expandedSection === 'hobbies'}
          onClick={() => handleSectionClick('hobbies')}
          content={content[language].hobbies}
        />
      </Box>
    </Container>
  );
};

export default About;
