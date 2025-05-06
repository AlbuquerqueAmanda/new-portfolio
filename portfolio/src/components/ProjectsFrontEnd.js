import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

const ProjectsFrontEnd = () => {
  const { language } = useLanguage();

  const translations = {
    it: {
      github: 'GitHub',
      vercel: 'Vercel',
      technologies: 'Tecnologie:',
      projects: [
        {
          image: "/images/task-dash.png",
          title: "Task Dashboard",
          description: "Dashboard di task con calendario interattivo e filtro per stato. Creato con Next.js, TypeScript e Tailwind.",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/AlbuquerqueAmanda/task-dashboard",
          vercel: "https://taskdashboard.vercel.app/",
        },
        {
          image: "/images/portfolio.png",
          title: "Portfolio Personale",
          description:
            "Sito web personale per presentare competenze, studi, progetti e contatti come sviluppatrice front-end.",
          technologies: ["React.js", "Bootstrap", "Material UI", "HTML", "CSS", "JavaScript"],
          github: "https://github.com/AlbuquerqueAmanda/new-portfolio",
          vercel: "https://amandaalbuquerque.vercel.app/projects",
        },
        {
          image: "/images/tea-shop.png",
          title: "Tea Shop",
          description:
            "Applicazione e-commerce sviluppata in React.js, con funzionalità di visualizzazione prodotti, carrello dinamico e calcolo del totale.",
          technologies: ["React.js", "HTML", "CSS", "JavaScript"],
          github: "https://github.com/AlbuquerqueAmanda/ecommerce",
          vercel: "https://ecommerce-virid-mu.vercel.app/",
        },
        {
          image: "/images/markdown.png",
          title: "Markdown Previewer",
          description:
            "Uno dei miei primi progetti su FreeCodeCamp per capire la sintassi Markdown e aiutare altri studenti.",
          technologies: ["React.js", "HTML", "CSS", "JavaScript"],
          github: "https://github.com/AlbuquerqueAmanda/markdown-previewer",
          vercel: "https://markdown-previewer-tan.vercel.app/",
        },
      ],
    },
    pt: {
      github: 'GitHub',
      vercel: 'Vercel',
      technologies: 'Tecnologias:',
      projects: [
        {
          image: "/images/task-dash.png",
          title: "Task Dashboard",
          description: "Dashboard de tarefas com calendário interativo e filtro por status. Criado com Next.js, TypeScript e Tailwind.",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/AlbuquerqueAmanda/task-dashboard",
          vercel: "https://taskdashboard.vercel.app/",
        },
        {
          image: "/images/portfolio.png",
          title: "Portfólio Pessoal",
          description:
            "Site pessoal para apresentar habilidades, estudos, projetos e contatos como desenvolvedora front-end.",
          technologies: ["React.js", "Bootstrap", "Material UI", "HTML", "CSS", "JavaScript"],
          github: "https://github.com/AlbuquerqueAmanda/new-portfolio",
          vercel: "https://amandaalbuquerque.vercel.app/projects",
        },
        {
          image: "/images/tea-shop.png",
          title: "Tea Shop",
          description:
            "Aplicativo de e-commerce feito em React.js, com exibição de produtos, carrinho dinâmico e cálculo de total.",
          technologies: ["React.js", "HTML", "CSS", "JavaScript"],
          github: "https://github.com/AlbuquerqueAmanda/ecommerce",
          vercel: "https://ecommerce-virid-mu.vercel.app/",
        },
        {
          image: "/images/markdown.png",
          title: "Markdown Previewer",
          description:
            "Um dos meus primeiros projetos no FreeCodeCamp para entender a sintaxe Markdown e ajudar outros alunos.",
          technologies: ["React.js", "HTML", "CSS", "JavaScript"],
          github: "https://github.com/AlbuquerqueAmanda/markdown-previewer",
          vercel: "https://markdown-previewer-tan.vercel.app/",
        },
      ],
    },
    en: {
      github: 'GitHub',
      vercel: 'Vercel',
      technologies: 'Technologies:',
      projects: [
        {
          image: "/images/task-dash.png",
          title: "Task Dashboard",
          description: "Task dashboard with interactive calendar and status filtering. Built with Next.js, TypeScript, and Tailwind.",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS" ],
          github: "https://github.com/AlbuquerqueAmanda/task-dashboard",
          vercel: "https://taskdashboard.vercel.app/",
        },
        {
          image: "/images/portfolio.png",
          title: "Personal Portfolio",
          description:
            "Personal website to showcase skills, studies, projects, and contact as a front-end developer.",
          technologies: ["React.js", "Bootstrap", "Material UI", "HTML", "CSS", "JavaScript"],
          github: "https://github.com/AlbuquerqueAmanda/new-portfolio",
          vercel: "https://amandaalbuquerque.vercel.app/projects",
        },
        {
          image: "/images/tea-shop.png",
          title: "Tea Shop",
          description:
            "E-commerce app built with React.js, featuring product display, dynamic cart, and total calculation.",
          technologies: ["React.js", "HTML", "CSS", "JavaScript"],
          github: "https://github.com/AlbuquerqueAmanda/ecommerce",
          vercel: "https://ecommerce-virid-mu.vercel.app/",
        },
        {
          image: "/images/markdown.png",
          title: "Markdown Previewer",
          description:
            "One of my first FreeCodeCamp projects to understand Markdown syntax and help other students.",
          technologies: ["React.js", "HTML", "CSS", "JavaScript"],
          github: "https://github.com/AlbuquerqueAmanda/markdown-previewer",
          vercel: "https://markdown-previewer-tan.vercel.app/",
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
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsFrontEnd;

