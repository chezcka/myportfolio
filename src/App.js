import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Certificates from './Certificates';
import Projects from './Projects';
import { smoothScrolling, toggleSkills } from './portfolio';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Only enable smooth scroll on home page
    if (window.location.hash === "" || window.location.hash === "#/") {
      smoothScrolling();
    }
  }, []);

  return (
    <>
      {/* add className so CSS can tweak header when menu is open */}
      <header className={menuOpen ? "menu-open" : ""}>

        <div className="nav-container">
          {/* LEFT – Logo */}
          <div className="nav-left">
            <div className="logo">Franchezcka</div>
          </div>

          {/* CENTER – Desktop Navigation */}
          <div className="nav-center">
            <nav className="desktop-nav">
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
              className="resume-btn"
            >
              View Resume
            </a>

            {/* Hamburger Button (mobile only) */}
            <button
              className="hamburger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={menuOpen ? "bar open" : "bar"}></span>
              <span className={menuOpen ? "bar open" : "bar"}></span>
              <span className={menuOpen ? "bar open" : "bar"}></span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU (fixed overlay) */}
        <div
          className={`mobile-menu ${menuOpen ? "show" : ""}`}
          role="dialog"
          aria-hidden={!menuOpen}
        >
          <div className="mobile-menu-header">
            <div className="logo">Franchezcka</div>

            {/* Close Button */}
            <button
              className="close-btn"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="mobile-links">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/certificates" onClick={() => setMenuOpen(false)}>Certificates</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          </nav>

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

      {/* Hero Section */}
      <section className="hero" id="about">
        <div className="hero-container">
          <div className="hero-photo">
            <img
              src={process.env.PUBLIC_URL + "/photos/chez-pic-2.png"}
              alt="Portrait of Franchezcka"
            />
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

      {/* Skills Section */}
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

      {/* Work Experience Section */}
      <section id="experience">
        <h2>Work Experience</h2>
        <div className="experience">
          <div className="experience-item">
            <h3>Junior Web Developer</h3>
            <span className="company">Erovoutika Robotics and Automation Solutions</span>
            <span className="date">April 2024 - July 2024</span>
            <ul>
              <li>Designing and implementing user-friendly web pages using HTML, CSS, and JavaScript, ensuring responsive layouts for compatibility across various devices.</li>
              <li>Collaborated with the design team, translated UI/UX wireframes and design into functional web pages.</li>
              <li>Integrated JavaScript to add interactivity, such as form validation and dynamic content updates.</li>
              <li>Worked closely with backend developers to ensure seamless integration of frontend components.</li>
              <li>Participated in code reviews and maintained effective communication with team members to meet project requirements and resolve issues promptly.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Junior Programmer</h3>
            <span className="company">Scottland Food Group Corporation</span>
            <span className="date">November 2025 - Present</span>
            <ul>
              <li>Design, develop, and maintain scalable web and mobile applications with a focus on performance, stability, and user experience.</li>
              <li>Develop high-quality, component-based user interfaces using modern JavaScript frameworks, improving efficiency and UX consistency.</li>
              <li>Collaborate with designers, project managers, and other developers to align software solutions with business goals, occasionally providing technical recommendations and guidance.</li>
              <li>Maintain technical documentation for developed applications to ensure clarity for future development and maintenance.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact Section */}
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
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
