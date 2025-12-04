import React from 'react';
import { Instagram, Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          SS
        </div>

        {/* Navigation Links */}
        <div className="navbar-menu">
          <button onClick={() => scrollToSection('about')} className="nav-link">
            ABOUT
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">
            EXPERIENCE
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            PROJECTS
          </button>
        </div>

        {/* Social Icons */}
        <div className="navbar-social">
          <a href="https://www.instagram.com/supreet_chhina_/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Instagram size={20} />
          </a>
          <a href="https://github.com/SupreetChhina" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/supreet-chhina-a87789391/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={20} />
          </a>
          <a href="mailto:supreetchhina01@gmail.com" className="social-icon">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;