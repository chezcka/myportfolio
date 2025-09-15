import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './App.css';

function Projects() {
  const websiteProjects = [
    {
      title: "Task Track",
      img: "/photos/landing-page-task-track.png",
      desc: "A task management system built with HTML, CSS, PHP, and SQL, and responsive design, focusing on team collaboration and task tracking.",
      github: "https://github.com/chezcka/task-track.git"
    },
    {
      title: "EroVital Signs WebApp",
      img: "/photos/erovital-signs-web-app.png",
      desc: "Developed the frontend of a health monitoring web application using HTML, CSS and JavaScript in a team environment.",
      github: "https://github.com/httprenz/VitalWebApp.git"
    },
    {
      title: "Guruji Indian Sweets & Food Store",
      img: "/photos/guruji-indian-sweets-street-food.png",
      desc: "Redesigned the homepage to improve visual appeal and user experience.",
      github: "https://chezcka.github.io/guruji-website/"
    }
  ];

  const mobileApps = [
    {
      title: "Smart MobilityX",
      img: "/photos/smartmobilityx.png",
      desc: "An Android app for ride-hailing and smart mobility solutions, developed using Java and XML layouts.",
      github: "https://github.com/Jgallinera/Smart-Mobility-X.git"
    },
    {
      title: "BossPaCheque",
      img: "/photos/bosspacheque.png",
      desc: "A Quick Dataset Validator Mobile Application.",
      github: "https://github.com/JaiLayos/BossPaCheque.git"
    }
  ];

  const figmaDesigns = [
    {
      title: "DiaTrans",
      img: "/photos/diatrans.png",
      desc: "Created a Figma prototype for a dialect translator application, showcasing user flows and interface design.",
      github: "https://www.figma.com/proto/alKd3m83ghYDC1t3Egezsk/Untitled?node-id=1-2&starting-point-node-id=1%3A2&t=4PmS8ZEF9Eaj7NGo-1"
    },
    {
      title: "TasteBud Explorer",
      img: "/photos/tastebud-explorer.png",
      desc: "Practiced designing a Figma prototype, exploring UI/UX concepts and interactive design.",
      github: "https://www.figma.com/proto/XaNANmpfMFUa4qjux8LEV3/TASTEBUD-EXPLORER-PROTOTYPE?node-id=16-245&starting-point-node-id=1%3A2&t=Nv745QWU2ZEra3O3-1"
    },
    {
      title: "Fanta Practice Design",
      img: "/photos/fanta.png",
      desc: "Practiced designing the Fanta website while exploring UI/UX concepts in Figma.",
      github: "https://www.figma.com/proto/Jd2GIFT3XCowhtW9c3X8og/Untitled?node-id=1-84&t=op6jgZZJV4DaIWti-1"
    },
    {
      title: "Coca-Cola Practice Design",
      img: "/photos/coca-cola.png",
      desc: "Practiced designing the Coca-Cola website while exploring UI/UX concepts in Figma.",
      github: "https://www.figma.com/proto/CsIkNXNN89YfOnsoyKnRpG/Untitled?node-id=3-102&starting-point-node-id=1%3A3&t=D7hCQYXKNpZk9qr9-1"
    }
  ];

  const renderProjects = (projects, isFigma = false) => (
    projects.map((project, index) => (
      <div className="project-card" key={index}>
        <img src={project.img} alt={project.title} />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            {isFigma ? "View on Figma" : "View on GitHub"}
          </a>
        </div>
      </div>
    ))
  );

  return (
    <div className="projects-page">
    <header>
      <div className="nav-container">
        <div className="logo">Franchezcka</div>
        <nav>
          <ul className="nav-links">
            <li><HashLink smooth to="/#about">Home</HashLink></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>
        {/* Resume Button */}
        <div className="resume-btn-container">
          <a
            href="/resume/PASCUAL%20-%20CV.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>
        </div>
      </div>
    </header>

      {/* Websites Section */}
      <section id="projects">
        <h2>Websites</h2>
        <div className="projects-grid">
          {renderProjects(websiteProjects)}
        </div>
      </section>

      {/* Mobile Applications Section */}
      <section id="mobile-apps">
        <h2>Mobile Applications</h2>
        <div className="projects-grid">
          {renderProjects(mobileApps)}
        </div>
      </section>

      {/* Figma Designs Section */}
      <section id="figma-designs">
        <h2>Figma Designs</h2>
        <div className="projects-grid">
          {renderProjects(figmaDesigns, true)}
        </div>
      </section>

      <footer>
        <p>© 2025 Franchezcka. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Projects;
