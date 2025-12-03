import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      year: "2025 — PRESENT",
      title: "Cloud Engineer",
      company: "Self-Learning",
      description: "Building hands-on experience with cloud infrastructure and DevOps practices. Deploying scalable applications using AWS services including EC2, RDS, S3, and Lambda. Implementing CI/CD pipelines and containerization strategies.",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
    },
    {
      year: "2024 — 2025",
      title: "DevOps Enthusiast",
      company: "Personal Projects",
      description: "Developed and deployed multiple cloud-native applications. Automated infrastructure provisioning using Infrastructure as Code. Gained proficiency in container orchestration and microservices architecture.",
      skills: ["Azure", "GCP", "Jenkins", "Ansible"]
    }
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="section-content">
        <div className="section-label"></div>
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-icon">
                <Briefcase size={24} />
              </div>
              <div className="experience-content">
                <div className="experience-year">{exp.year}</div>
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;