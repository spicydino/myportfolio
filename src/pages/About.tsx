import React from 'react';
import personalInfo from '../data/personalInfo.json';

const About: React.FC = () => {
  const { personalInfo: info } = personalInfo;
  
  const personalDetails = [
    { label: 'First Name', value: info.firstName },
    { label: 'Last Name', value: info.lastName },
    { label: 'Age', value: info.age + ' Years' },
    { label: 'Nationality', value: info.nationality },
    { label: 'Freelance', value: info.freelance ? 'Available' : 'Not Available' },
    { label: 'Address', value: info.address },
    { label: 'Phone', value: info.phone },
    { label: 'Email', value: info.email },
    { label: 'Languages', value: info.languages.join(', ') },
  ];

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 md:pl-24">
      <h2 className="section-title" data-aos="fade-right">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        {/* Image Column */}
          <div data-aos="fade-right" data-aos-delay="200">
    <div className="relative rounded-lg overflow-hidden glassmorphism p-2 max-w-md h-64">
      <img 
        src="/pfp.jpg" 
        alt="Profile" 
        className="w-full h-full rounded-lg object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-300/70 to-transparent pointer-events-none rounded-lg"></div>
    </div>
  </div>

        
        {/* Content Column */}
        <div data-aos="fade-left" data-aos-delay="400">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Frontend & Backend Developer
          </h3>
          
          <p className="text-gray-300 mb-6">
            {personalInfo.aboutMe}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
            {personalDetails.map((detail, index) => (
              <div key={index} className="flex">
                <span className="font-semibold text-white min-w-28">{detail.label}:</span>
                <span className="text-gray-300">{detail.value}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <a 
              href={personalInfo.resumeUrl}
              className="btn-primary inline-block"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      {/* Services/What I Do Section */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold mb-8" data-aos="fade-right">What I Do</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Web Development',
              description: 'Creating responsive and dynamic web applications using modern frameworks and technologies.',
              icon: '🌐'
            },
            {
              title: 'Mobile Development',
              description: 'Building mobile applications with Flutter for iOS and Android.',
              icon: '📱'
            },
            {
              title: 'UI/UX Design',
              description: 'Designing intuitive user interfaces and experiences with a focus on aesthetics and usability.',
              icon: '🎨'
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="glassmorphism p-6 rounded-lg transition-all hover:translate-y-[-5px] hover:shadow-lg hover:shadow-primary/10"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-primary">{service.title}</h4>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;