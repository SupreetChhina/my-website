import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="section-content">
        <div className="section-label">
          
        </div>
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Hi, I'm <span className="highlight">Supreet</span>, an aspiring Cloud Computing and DevOps professional. I am passionate about learning and working with AWS, Docker, and Kubernetes. I enjoy building practical projects that help me strengthen my skills and understanding of modern cloud technologies.
            </p>
            <p className="about-paragraph">
              My journey in cloud computing started with a fascination for how scalable systems work at scale. Today, I focus on building infrastructure that is <span className="highlight">reliable, secure, and efficient</span>.
            </p>
            <p className="about-paragraph">
              When I'm not coding or configuring cloud resources, you can find me exploring new DevOps tools, contributing to open-source projects, or learning about emerging technologies in the cloud ecosystem.
            </p>
          </div>
          
          <div className="tech-stack">
            <div className="tech-card">
              <div className="tech-name">AWS</div>
              <div className="tech-label">PRIMARY CLOUD</div>
            </div>
            <div className="tech-card">
              <div className="tech-name">Docker</div>
              <div className="tech-label">CONTAINERIZATION</div>
            </div>
            <div className="tech-card">
              <div className="tech-name">K8s</div>
              <div className="tech-label">ORCHESTRATION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;