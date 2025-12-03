import React from 'react';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="hero-section section">
      <div className="hero-content">
        <div className="hero-label">CLOUD ENGINEER</div>
        <h1 className="hero-title">
          <span className="title-line">Supreet Singh</span>
        </h1>
        <p className="hero-description">
          I'm a cloud engineer specializing in building (and occasionally designing) robust, scalable cloud infrastructures. 
          Currently, I'm focused on creating efficient, automated workflows and exploring cutting-edge cloud technologies 
          to solve real-world challenges. I enjoy transforming complex problems into simple, reliable systems that just work.
        </p>
      </div>
      {/* Arrow button removed */}
    </section>
  );
};

export default Hero;