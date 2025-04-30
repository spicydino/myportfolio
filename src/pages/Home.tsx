import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import personalInfo from '../data/personalInfo.json';
import SplineBackground from '../components/SplineBackground';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center p-6 md:p-12 md:pl-24 relative overflow-hidden">
      <SplineBackground />
      
      <div className="max-w-4xl relative z-10" data-aos="fade-up" data-aos-delay="200">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          <span className="block">Hi, I'm</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
            {personalInfo.name}
          </span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 drop-shadow-lg">
          <TypeAnimation
            sequence={[
              personalInfo.role,
              1000,
              'App Developer',
              1000,
              'Frontend Developer',
              1000,
              'UI/UX Designer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        
        <p className="text-lg text-gray-300 mb-10 max-w-2xl backdrop-blur-sm bg-dark-300/30 p-6 rounded-lg shadow-xl">
          {personalInfo.aboutMe.substring(0, 150)}...
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href={personalInfo.resumeUrl} 
            className="btn-primary flex items-center gap-2 shadow-lg"
            download
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
          
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="btn-outline flex items-center gap-2 cursor-pointer shadow-lg backdrop-blur-sm"
          >
            <span>Contact Me</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;