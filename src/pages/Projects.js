import React from 'react';

const projects = [
  {
    name: 'AI Chatbot',
    description:
      'A simple chatbot built with Python and NLP techniques that can answer FAQs and hold basic conversations using natural language processing.',
    github: 'https://github.com/theleap-13/ai-chatbot',
  },
  {
    name: 'Student Management System',
    description:
      'A Java-based desktop application to manage student records, including CRUD operations, attendance tracking, and grade reporting.',
    github: 'https://github.com/theleap-13/student-management-system',
  },
];

function Projects() {
  return (
    <div>
      <h2 className="page-title">My <span>Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a
              className="github-btn"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
