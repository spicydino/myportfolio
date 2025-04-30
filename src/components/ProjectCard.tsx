import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glassmorphism rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 to-dark-300/20 pointer-events-none"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-dark-100 text-gray-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4 flex items-center gap-1"
          >
            <span>Live Demo</span>
            <ExternalLink size={14} />
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline text-sm py-2 px-4 flex items-center gap-1"
          >
            <span>GitHub</span>
            <Github size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;