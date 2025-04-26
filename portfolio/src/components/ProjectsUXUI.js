import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const ProjectsUXUI = () => {
  const { language } = useLanguage();

  const translations = {
    it: {
      miro: 'Miro',
      figma: 'Figma',
      technologies: 'Tecnologie:',
      projects: [
        {
          image: "/images/figma-itau.png",
          title: "Progetto UX/UI - Banco Itaú",
          description:
            "Progetto sviluppato durante il corso di UX Design presso EBAC, con l'obiettivo di migliorare l'esperienza utente nei servizi del Banco Itaú. Progettate versioni web, mobile e smartwatch per garantire coerenza.",
          github: "https://miro.com/app/board/uXjVLQCBJWA=/",
          vercel: "https://www.figma.com/design/IgPm1We6jzU7Lvgf1rNptN/Projeto-Ita%C3%BA---EBAC?t=TtkWcuzlDQq6BtGX-0",
          technologies: ["Figma"], 
        },
        {
          image: "/images/ux_seg_pac.png",
          title: "Progetto UX - Sicurezza del Paziente",
          description:
            "Progetto ideato mentre lavoravo presso il Nucleo di Sicurezza del Paziente in un ospedale, dove ho individuato la necessità di semplificare il monitoraggio dei segnali vitali e delle informazioni dei pazienti per evitare errori. È stato il mio primo progetto di UX Design, con l'obiettivo di apprendere le funzionalità di Figma e comprendere tutte le fasi del processo, dalla ricerca con gli utenti allo sviluppo di un prototipo.",
          github: "https://miro.com/app/board/uXjVI-300lU=/",
          vercel: "https://www.figma.com/design/dKJa2qWXOCgaySppoPovvd/Projeto-UX---EBAC---Seguran%C3%A7a-do-Paciente?node-id=424-1582&t=kx8YQiGcUsGktT0n-0",
          technologies: ["Figma"], 
        },
      ],
    },
    pt: {
      miro: 'Miro',
      figma: 'Figma',
      technologies: 'Tecnologias:',
      projects: [
        {
          image: "/images/figma-itau.png",
          title: "Projeto UX/UI - Banco Itaú",
          description:
            "Projeto desenvolvido no curso de UX Design da EBAC, com foco em melhorar a experiência do usuário nos serviços do Banco Itaú. Criadas versões web, mobile e smartwatch para garantir consistência.",
          github: "https://miro.com/app/board/uXjVLQCBJWA=/",
          vercel: "https://www.figma.com/design/IgPm1We6jzU7Lvgf1rNptN/Projeto-Ita%C3%BA---EBAC?t=TtkWcuzlDQq6BtGX-0",
          technologies: ["Figma"], 
        },
        {
          image: "/images/ux_seg_pac.png",
          title: "Projeto UX - Segurança do Paciente",
          description:
            "Projeto idealizado enquanto atuava no Núcleo de Segurança do Paciente de um hospital, onde identifiquei a necessidade de facilitar o monitoramento dos sinais vitais e informações dos pacientes para evitar erros. Foi meu primeiro projeto de UX Design, focado em aprender as funcionalidades do Figma e compreender todas as etapas do processo, desde a pesquisa com usuários até o desenvolvimento de um protótipo.",
          github: "https://miro.com/app/board/uXjVI-300lU=/",
          vercel: "https://www.figma.com/design/dKJa2qWXOCgaySppoPovvd/Projeto-UX---EBAC---Seguran%C3%A7a-do-Paciente?node-id=424-1582&t=kx8YQiGcUsGktT0n-0",
          technologies: ["Figma"], 
        },
      ],
    },
    en: {
      miro: 'Miro',
      figma: 'Figma',
      technologies: 'Technologies:',
      projects: [
        {
          image: "/images/figma-itau.png",
          title: "UX/UI Project - Banco Itaú",
          description:
            "Project developed during the UX Design course at EBAC to improve user experience for Banco Itaú's services. Designed web, mobile, and smartwatch versions for consistency.",
          github: "https://miro.com/app/board/uXjVLQCBJWA=/",
          vercel: "https://www.figma.com/design/IgPm1We6jzU7Lvgf1rNptN/Projeto-Ita%C3%BA---EBAC?t=TtkWcuzlDQq6BtGX-0",
          technologies: ["Figma"], 
        },
        {
          image: "/images/ux_seg_pac.png",
          title: "UX Project - Patient Safety",
          description:
            "Project conceived while working at the Patient Safety Core of a hospital, where I identified the need to simplify the monitoring of vital signs and patient information to prevent errors. It was my first UX Design project, focused on learning Figma’s functionalities and understanding all the stages of the process, from user research to prototype development.",
          github: "https://miro.com/app/board/uXjVI-300lU=/",
          vercel: "https://www.figma.com/design/dKJa2qWXOCgaySppoPovvd/Projeto-UX---EBAC---Seguran%C3%A7a-do-Paciente?node-id=424-1582&t=kx8YQiGcUsGktT0n-0",
          technologies: ["Figma"], 
        },
      ],
    },
  };

  const content = translations[language] || translations.it;

  return (
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

              <div className="mb-1">
                <strong>{content.technologies}</strong>
                <div className="d-flex flex-wrap mt-1">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} bg="secondary" className="me-1 mb-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card.Body>

            <Card.Footer className="d-flex justify-content-between">
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
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsUXUI;
