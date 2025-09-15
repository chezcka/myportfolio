import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './App.css';


function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  // Open modal
  const openModal = (src, title) => {
    setModalImage(src);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Certificates data
  const certificates = [
    { src: '/photos/ess-tools-for-appdev.jpg', title: 'Essential Tools for Application Development' },
    { src: '/photos/angular-for-frontend-engineers.png', title: 'Angular for Frontend Engineers' },
    { src: '/photos/machine-learning-for-all.png', title: 'Machine Learning for All' },
    { src: '/photos/ux-design-fundamentals.png', title: 'UX Design Fundamentals' },
    { src: '/photos/software-architecture.png', title: 'Software Architecture' },
    { src: '/photos/ux-research-and-prototyping.png', title: 'UX Research and Prototyping' },
    { src: '/photos/software-development-processes-and-methodologies.png', title: 'Software Development Processes and Methodologies' },
    { src: '/photos/software-processes-and-agile-practices.png', title: 'Software Process and Agile Practices' },
    { src: '/photos/search-engines-for-web-and-enterprise-data.png', title: 'Search Engines for Web and Enterprise Data' },
    { src: '/photos/principles-of-secure-coding.png', title: 'Principles of Secure Coding' },
    { src: '/photos/operating-systems-and-you-becoming-a-power-user.png', title: 'Operating Systems and You: Becoming a Power User' },
    { src: '/photos/introduction-to-software-product-management.png', title: 'Introduction to Software Product Management' },
    { src: '/photos/introduction-to-ai.png', title: 'Introduction to AI' },
    { src: '/photos/data-warehouse-concepts-design-and-data-integration.png', title: 'Data Warehouse Concepts, Design, and Data Integration' },
    { src: '/photos/data-science-methodology.png', title: 'Data Science Methodology' },
    { src: '/photos/database-management-essentials.png', title: 'Database Management Essentials' },
    { src: '/photos/create-high-fidelity-designs-and-prototypes-in-figma.png', title: 'Create High-Fidelity Designs and Prototypes in Figma' },
    { src: '/photos/client-needs-and-software-requirements.png', title: 'Client Needs and Software Requirements' },
  ];

  return (
    <div className="certificates-page">
      {/* ===== Header ===== */}
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

      {/* ===== Salesforce Badges Section ===== */}
      <section id="salesforce-badges">
        <h2 className="section-title">Salesforce Badges</h2>
        <div className="trailhead-button-container">
          <a
            href="https://www.salesforce.com/trailblazer/franchezckapascual"
            target="_blank"
            rel="noopener noreferrer"
            className="trailhead-btn"
          >
            Click here to view
          </a>
        </div>
      </section>

      {/* ===== Certificates Section ===== */}
      <section id="certificates">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div
              className="certificate-item"
              key={index}
              onClick={() => openModal(cert.src, cert.title)}
            >
              <h3 className="certificate-title">{cert.title}</h3>
              <img src={cert.src} alt={cert.title} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== Modal Popup ===== */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-content" src={modalImage} alt="Certificate Preview" />
            <div id="caption">{modalTitle}</div>
          </div>
        </div>
      )}

      {/* ===== Footer ===== */}
      <footer className="footer">
        <p>© 2025 Franchezcka Giannah Mari Pascual | Portfolio</p>
      </footer>
    </div>
  );
}

export default Certificates;
