// Projects.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Close mobile menu when window resized above breakpoint
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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
    },
    {
      title: "EatPizza",
      img: "/photos/eatpizza-website.jpg",
      desc: "Designed and developed the official website for EatPizza Philippines, improving brand visibility and user experience.",
      github: "https://eatpizza.com.ph/"
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
        <img
          src={process.env.PUBLIC_URL + project.img}
          alt={project.title}
          loading="lazy"
        />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            {
              isFigma
                ? "View on Figma"
                : (project.github.includes("github.com") || project.github.includes("github.io"))
                  ? "View on GitHub"
                  : "View Website"
            }
          </a>
        </div>
      </div>
    ))
  );

  return (
    <div className="projects-page">
      <header>
        <div className="nav-container">

          {/* LEFT – Logo */}
          <div className="nav-left">
            <div className="logo">Franchezcka</div>
          </div>

          {/* CENTER – Desktop Navigation */}
          <div className="nav-center">
            <nav className="desktop-nav" aria-label="Main navigation">
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/certificates">Certificates</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </ul>
            </nav>
          </div>

          {/* RIGHT – Resume Button + Hamburger */}
          <div className="nav-right">
            <a
              href={process.env.PUBLIC_URL + "/resume/PASCUAL - CV.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn resume-btn-desktop"
            >
              View Resume
            </a>

            {/* Hamburger Button (mobile only) */}
            <button
              className="hamburger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <span className={menuOpen ? "bar open" : "bar"}></span>
              <span className={menuOpen ? "bar open" : "bar"}></span>
              <span className={menuOpen ? "bar open" : "bar"}></span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          ref={mobileMenuRef}
          className={`mobile-menu ${menuOpen ? "show" : ""}`}
          aria-hidden={!menuOpen}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/certificates" onClick={() => setMenuOpen(false)}>Certificates</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <a
            href={process.env.PUBLIC_URL + "/resume/PASCUAL - CV.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn-mobile"
            onClick={() => setMenuOpen(false)}
          >
            View Resume
          </a>
        </div>
      </header>

      <section id="projects">
        <h2>Website Projects</h2>
        <div className="projects-grid">
          {renderProjects(websiteProjects)}
        </div>

        <h2>Mobile Apps</h2>
        <div className="projects-grid">
          {renderProjects(mobileApps)}
        </div>

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
