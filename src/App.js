import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Certificates from './Certificates';
import Projects from './Projects';
import { useEffect } from 'react';
import {
  smoothScrolling,
  enableModalCloseOnClickOutside,
  toggleSkills
} from './portfolio';

function Home() {
  return (
    <>
      {/* ===== Header ===== */}
    <header>
      <div className="nav-container">
        <div className="logo">Franchezcka</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
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

      {/* ===== Hero Section ===== */}
      <section className="hero" id="about">
        <div className="hero-container">
          <div className="hero-photo">
            <img src="/photos/chez-pic-2.png" alt="Portrait of Franchezcka" />
          </div>

          <div className="hero-text">
            <h1>Hi, I'm Franchezcka</h1>
            <p>
              I'm a passionate web developer focused on creating modern, responsive,
              and user-friendly websites. With experience in both frontend design
              and backend development, I enjoy transforming ideas into functional
              digital products. My goal is to continuously grow my skills while
              helping businesses and individuals bring their visions to life.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Skills Section ===== */}
      <section id="skills">
        <div className="skills-section">
          <h2 className="dropdown-title" onClick={() => toggleSkills('technical-skills')}>
            Technical Skills <span className="arrow">&#9662;</span>
          </h2>
          <div className="skills-grid hidden" id="technical-skills">
            <div className="skill-card">HTML5</div>
            <div className="skill-card">CSS3</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">PHP</div>
            <div className="skill-card">SQL</div>
            <div className="skill-card">Java</div>
            <div className="skill-card">React</div>
            <div className="skill-card">Angular</div>
            <div className="skill-card">Figma</div>
            <div className="skill-card">UX/UI Design</div>
          </div>
        </div>

        <div className="skills-section">
          <h2 className="dropdown-title" onClick={() => toggleSkills('soft-skills')}>
            Soft Skills <span className="arrow">&#9662;</span>
          </h2>
          <div className="skills-grid hidden" id="soft-skills">
            <div className="skill-card">Problem Solving</div>
            <div className="skill-card">Communication</div>
            <div className="skill-card">Adaptability</div>
            <div className="skill-card">Time Management</div>
            <div className="skill-card">Collaboration</div>
            <div className="skill-card">Creativity</div>
            <div className="skill-card">Critical Thinking</div>
            <div className="skill-card">Leadership</div>
          </div>
        </div>
      </section>

      {/* ===== Work Experience Section ===== */}
      <section id="experience">
        <h2>Work Experience</h2>
        <div className="experience">
          <div className="experience-item">
            <h3>Junior Web Developer</h3>
            <span className="company">Erovoutika Robotics and Automation Solutions</span>
            <span className="date">April 2024 - July 2024</span>
            <ul>
              <li>Designed and implemented user-friendly web pages using HTML, CSS, and JavaScript.</li>
              <li>Translated UI/UX wireframes into functional, interactive web pages.</li>
              <li>Integrated JavaScript features for enhanced interactivity.</li>
              <li>Worked closely with backend developers for seamless integration.</li>
              <li>Participated in code reviews and team discussions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Let's work together or chat about a project!</p>

        <form
          className="contact-form"
          action="https://formspree.io/f/mdkljdyj"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="_replyto" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </section>

      {/* ===== Footer ===== */}
      <footer>
        <p>&copy; 2025 Franchezcka. All Rights Reserved.</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} /> {/* Add this */}
      </Routes>
    </Router>
  );
}

export default App;
