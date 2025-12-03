import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Highly Available Web Application on AWS",
      description: "Deployed a scalable web application using EC2 instances behind an Application Load Balancer. Configured RDS for database management and S3 for static asset storage. Implemented auto-scaling policies to handle varying traffic loads.",
      tech: ["AWS EC2", "RDS", "S3", "ALB"],
      github: "#",
      external: "#"
    },
    {
      title: "Microservices with Docker & Kubernetes",
      description: "Containerized multiple microservices using Docker and orchestrated them with Kubernetes. Implemented service discovery, load balancing, and automated deployments. Configured health checks and rolling updates for zero-downtime deployments.",
      tech: ["Docker", "Kubernetes", "Helm", "Microservices"],
      github: "#",
      external: "#"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built automated CI/CD pipelines using GitHub Actions to streamline the deployment process. Integrated automated testing, security scanning, and deployment to cloud environments. Reduced deployment time by 70% through automation.",
      tech: ["GitHub Actions", "Terraform", "AWS", "CI/CD"],
      github: "#",
      external: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="section-content">
        <div className="section-label"></div>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} className="project-link" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href={project.external} className="project-link" aria-label="External Link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;