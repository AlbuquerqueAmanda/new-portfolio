import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { language } = useLanguage();

  const translations = {
    it: {
      intro: `Questi sono alcuni dei miei progetti personali che mostrano la mia evoluzione negli ultimi anni di studio.
              Il primo è proprio il portfolio, creato con l’obiettivo di presentare il mio lavoro, le mie competenze tecniche e il mio percorso.
              Altri progetti possono essere trovati sul mio GitHub.`,
      github: 'GitHub',
      vercel: 'Vercel',
      miro: 'Miro',
      figma: 'Figma',
      projects: [
        {
          image: "/images/portfolio.png",
          title: "Portfolio Personale",
          description:
            "Sito web personale per presentare competenze, studi, progetti e contatti come sviluppatrice front-end. Realizzato utilizzando React.js, Bootstrap, Material UI, HTML, CSS e JavaScript.",
          github: "https://github.com/AlbuquerqueAmanda/new-portfolio",
          vercel: "https://amandaalbuquerque.vercel.app/projects",
        },
        {
          image: "/images/tea-shop.png",
          title: "Tea Shop",
          description:
            "Applicazione e-commerce sviluppata in React.js, con funzionalità di visualizzazione prodotti, carrello dinamico e calcolo del totale.",
          github: "https://github.com/AlbuquerqueAmanda/ecommerce",
          vercel: "https://ecommerce-virid-mu.vercel.app/",
        },
        {
          image: "/images/figma-itau.png",
          title: "Progetto UX/UI",
          description:
            "Progetto sviluppato durante il corso di UX Design presso EBAC, con l'obiettivo di migliorare l'esperienza utente nei servizi del Banco Itaú. Progettate versioni web, mobile e smartwatch per garantire coerenza.",
          github: "https://miro.com/app/board/uXjVLQCBJWA=/",
          vercel:
            "https://www.figma.com/design/IgPm1We6jzU7Lvgf1rNptN/Projeto-Ita%C3%BA---EBAC?t=TtkWcuzlDQq6BtGX-0",
        },
        {
          image: "/images/markdown.png",
          title: "Markdown Previewer",
          description:
            "Uno dei miei primi progetti su FreeCodeCamp per capire la sintassi Markdown e aiutare altri studenti.",
          github: "https://github.com/AlbuquerqueAmanda/markdown-previewer",
          vercel: "https://markdown-previewer-tan.vercel.app/",
        },
      ],
    },

    pt: {
      intro: `Esses são alguns dos meus projetos pessoais que mostram minha evolução nos últimos anos de estudo.
              O primeiro é o portfólio, criado com o objetivo de apresentar meu trabalho, minhas competências técnicas e trajetória.
              Outros projetos podem ser encontrados no meu GitHub.`,
      github: 'GitHub',
      vercel: 'Vercel',
      miro: 'Miro',
      figma: 'Figma',
      projects: [
        {
          image: "/images/portfolio.png",
          title: "Portfólio Pessoal",
          description:
            "Site pessoal para apresentar habilidades, estudos, projetos e contatos como desenvolvedora front-end. Criado com React.js, Bootstrap, Material UI, HTML, CSS e JavaScript.",
          github: "https://github.com/AlbuquerqueAmanda/new-portfolio",
          vercel: "https://amandaalbuquerque.vercel.app/projects",
        },
        {
          image: "/images/tea-shop.png",
          title: "Tea Shop",
          description:
            "Aplicativo de e-commerce feito em React.js, com exibição de produtos, carrinho dinâmico e cálculo de total.",
          github: "https://github.com/AlbuquerqueAmanda/ecommerce",
          vercel: "https://ecommerce-virid-mu.vercel.app/",
        },
        {
          image: "/images/figma-itau.png",
          title: "Projeto UX/UI",
          description:
            "Projeto desenvolvido no curso de UX Design da EBAC, com foco em melhorar a experiência do usuário nos serviços do Banco Itaú. Criadas versões web, mobile e smartwatch para garantir consistência.",
          github: "https://miro.com/app/board/uXjVLQCBJWA=/",
          vercel:
            "https://www.figma.com/design/IgPm1We6jzU7Lvgf1rNptN/Projeto-Ita%C3%BA---EBAC?t=TtkWcuzlDQq6BtGX-0",
        },
        {
          image: "/images/markdown.png",
          title: "Markdown Previewer",
          description:
            "Um dos meus primeiros projetos no FreeCodeCamp para entender a sintaxe Markdown e ajudar outros alunos.",
          github: "https://github.com/AlbuquerqueAmanda/markdown-previewer",
          vercel: "https://markdown-previewer-tan.vercel.app/",
        },
      ],
    },

    en: {
      intro: `Here are some of my personal projects showing my evolution over the last few years of study.
              The first one is my portfolio, created to showcase my work, technical skills, and journey.
              More projects can be found on my GitHub.`,
      github: 'GitHub',
      vercel: 'Vercel',
      miro: 'Miro',
      figma: 'Figma',
      projects: [
        {
          image: "/images/portfolio.png",
          title: "Personal Portfolio",
          description:
            "Personal website to showcase skills, studies, projects, and contact as a front-end developer. Built using React.js, Bootstrap, Material UI, HTML, CSS, and JavaScript.",
          github: "https://github.com/AlbuquerqueAmanda/new-portfolio",
          vercel: "https://amandaalbuquerque.vercel.app/projects",
        },
        {
          image: "/images/tea-shop.png",
          title: "Tea Shop",
          description:
            "E-commerce app built with React.js, featuring product display, dynamic cart, and total calculation.",
          github: "https://github.com/AlbuquerqueAmanda/ecommerce",
          vercel: "https://ecommerce-virid-mu.vercel.app/",
        },
        {
          image: "/images/figma-itau.png",
          title: "UX/UI Project",
          description:
            "Project developed during the UX Design course at EBAC to improve user experience for Banco Itaú's services. Designed web, mobile, and smartwatch versions for consistency.",
          github: "https://miro.com/app/board/uXjVLQCBJWA=/",
          vercel:
            "https://www.figma.com/design/IgPm1We6jzU7Lvgf1rNptN/Projeto-Ita%C3%BA---EBAC?t=TtkWcuzlDQq6BtGX-0",
        },
        {
          image: "/images/markdown.png",
          title: "Markdown Previewer",
          description:
            "One of my first FreeCodeCamp projects to understand Markdown syntax and help other students.",
          github: "https://github.com/AlbuquerqueAmanda/markdown-previewer",
          vercel: "https://markdown-previewer-tan.vercel.app/",
        },
      ],
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

        <Row>
          {content.projects.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    aspectRatio: '958 / 1078',
                  }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  {project.title.includes('UX') ? (
                    <>
                      <Button
                        variant="outline-dark"
                        size="sm"
                        href={project.github}
                        target="_blank"
                      >
                        {content.miro}
                      </Button>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={project.vercel}
                        target="_blank"
                      >
                        {content.figma}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline-dark"
                        size="sm"
                        href={project.github}
                        target="_blank"
                      >
                        {content.github}
                      </Button>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={project.vercel}
                        target="_blank"
                      >
                        {content.vercel}
                      </Button>
                    </>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
