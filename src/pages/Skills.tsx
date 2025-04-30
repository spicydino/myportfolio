import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate fetching data from API
    const fetchSkills = async () => {
      // In a real app, this would be a fetch call to an API
      setSkills(skillsData);
      setLoaded(true);
    };

    fetchSkills();
  }, []);

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 md:pl-24">
      <h2 className="section-title" data-aos="fade-right">My Skills</h2>
      
      <div className="mt-12 max-w-5xl">
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-gray-300 mb-8">
            I've acquired a diverse range of skills throughout my journey as a developer. 
            Here's a comprehensive list of my technical expertise and proficiency levels.
          </p>
        </div>
        
        {/* Skills with progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-12">
          {loaded ? (
            skills.map((skill, index) => (
              <div 
                key={skill.id} 
                className="glassmorphism p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={200 + index * 50}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <span className="text-primary font-semibold">{skill.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${loaded ? skill.percentage : 0}%` }}
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Education & Experience */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8" data-aos="fade-right">Education</h3>
          
          <div className="space-y-8">
            {[
              {
                degree: 'Bachelor of Engineering in Artificial Intelligence and Data Science',
                institution: 'SIES GST',
                years: '2023 - 2027',
                description: 'Currently pursuing a degree with a focus on AI and Data Science.'
              },
              // {
              //   degree: 'Bachelor of Computer Science',
              //   institution: 'MIT',
              //   years: '2014 - 2018',
              //   description: 'Graduated with high distinction, focusing on Software Engineering and Algorithms.'
              // },
              // {
              //   degree: 'Web Development Bootcamp',
              //   institution: 'Coding Academy',
              //   years: '2013 - 2014',
              //   description: 'Intensive full-stack web development program with real-world projects.'
              // }
            ].map((education, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 rounded-lg border-l-4 border-primary relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary absolute top-4 right-4">
                  {education.years}
                </span>
                <h4 className="text-xl font-bold mb-1 text-white">{education.degree}</h4>
                <p className="text-primary mb-3">{education.institution}</p>
                <p className="text-gray-300">{education.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-8" data-aos="fade-right">Experience</h3>
          
          <div className="space-y-8">
            {[
              {
                position: 'App developer intern',
                company: 'Change Network',
                years: 'Jan 2025 - Present',
                description: 'Currently working on a project to develop a mobile application for a user management system.'
              },
              {
                position: 'Cyber Security Intern',
                company: 'PODS Technologies',
                years: 'June 2024 - July 2024',
                description: 'Burner phone for security and privacy testing.'
              },
              {
                position: 'Operation Manager ',
                company: 'SIES GST',
                years: 'Jun 2024 - May 2025',
                description: 'Managing operations and logistics for college events and activities.'
              }
            ].map((experience, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 rounded-lg border-l-4 border-accent-purple relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple absolute top-4 right-4">
                  {experience.years}
                </span>
                <h4 className="text-xl font-bold mb-1 text-white">{experience.position}</h4>
                <p className="text-accent-purple mb-3">{experience.company}</p>
                <p className="text-gray-300">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;