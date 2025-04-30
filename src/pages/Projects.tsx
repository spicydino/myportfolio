import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('all');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate fetching data from API
    const fetchProjects = async () => {
      // In a real app, this would be a fetch call to an API
      setProjects(projectsData);
      setFilteredProjects(projectsData);
      setLoaded(true);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    // Filter projects based on selected category
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter, projects]);

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 md:pl-24">
      <h2 className="section-title" data-aos="fade-right">My Projects</h2>
      
      <div className="mt-12 max-w-7xl">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-12" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category 
                  ? 'bg-primary text-white'
                  : 'bg-dark-100 text-gray-300 hover:bg-dark-200'
              }`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        {loaded ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        
        {/* Empty state */}
        {loaded && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;