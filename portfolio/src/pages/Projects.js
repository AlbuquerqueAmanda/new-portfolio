import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      image: "/images/portfolio.png", 
      title: "Portfolio Personale",
      description: "Sito web personale per presentare competenze, studi, progetti e contatti come sviluppatrice front-end. Realizzato utilizzando React.js, Bootstrap, Material UI, HTML, CSS e JavaScript.",
      github: "https://github.com/AlbuquerqueAmanda/new-portfolio",
      vercel: "https://amandaalbuquerque.vercel.app/projects"
    },
    {
      image: "/images/tea-shop.png",
      title: "Tea Shop",
      description: "Applicazione e-commerce sviluppata in React.js, con funzionalità di visualizzazione prodotti, carrello dinamico e calcolo del totale.",
      github: "https://github.com/AlbuquerqueAmanda/ecommerce",
      vercel: "https://ecommerce-virid-mu.vercel.app/"
    },
    {
      image: "/images/figma-itau.png",
      title: "Progetto UX/UI",
      description: "Progetto sviluppato durante il corso di UX Design presso EBAC, con l'obiettivo di migliorare l'esperienza utente nei servizi del Banco Itaú, una delle principali banche del Brasile. Sono state progettate versioni web, mobile e smartwatch per garantire un'esperienza coerente e intuitiva su tutti i dispositivi.",
      github: "https://miro.com/app/board/uXjVLQCBJWA=/",
      vercel: "https://www.figma.com/design/IgPm1We6jzU7Lvgf1rNptN/Projeto-Ita%C3%BA---EBAC?t=TtkWcuzlDQq6BtGX-0"
    },
    {
      image: "/images/markdown.png",
      title: "Markdown Previewer",
      description: "Uno dei miei primi progetti di studio realizzati durante il percorso su FreeCodeCamp. Questo Markdown Previewer è stato creato per aiutarmi a comprendere meglio come funziona la sintassi Markdown, e anche per fornire uno strumento utile ad altri studenti che stanno imparando a scrivere in Markdown.",
      github: "https://github.com/AlbuquerqueAmanda/markdown-previewer",
      vercel: "https://markdown-previewer-tan.vercel.app/"
    }
  ];

  return (
    <Container fluid className="px-3">
      <Header />

      <Container className="mt-4">
      <Row className="mb-4">
          <Col>
            <p style={{ fontSize: '1rem', fontWeight: 500 }}>
            Questi sono alcuni dei miei progetti personali che mostrano la mia evoluzione negli ultimi anni di studio.
            Il primo è proprio il portfolio, creato con l’obiettivo di presentare il mio lavoro, le mie competenze tecniche e il mio percorso.
            Altri progetti possono essere trovati sul mio GitHub.
            </p>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={project.image} alt={project.title} style={{ width: "100%", height: "auto", objectFit: "cover", aspectRatio: "958 / 1078" }} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  {project.title === "Progetto UX/UI" ? (
                    <>
                      <Button variant="outline-dark" size="sm" href={project.github} target="_blank">Miro</Button>
                      <Button variant="outline-primary" size="sm" href={project.vercel} target="_blank">Figma</Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline-dark" size="sm" href={project.github} target="_blank">GitHub</Button>
                      <Button variant="outline-primary" size="sm" href={project.vercel} target="_blank">Vercel</Button>
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

