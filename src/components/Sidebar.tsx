import React from 'react';
import { Link } from 'react-scroll';
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';
import personalInfo from '../data/personalInfo.json';

interface SidebarProps {
  closeMobileMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeMobileMenu }) => {
  const navLinks = [
    { to: 'home', icon: <Home size={20} />, label: 'Home' },
    { to: 'about', icon: <User size={20} />, label: 'About' },
    { to: 'skills', icon: <Code size={20} />, label: 'Skills' },
    { to: 'projects', icon: <Briefcase size={20} />, label: 'Projects' },
    { to: 'contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  const socialIcons: Record<string, React.ReactNode> = {
    github: <Github size={18} />,
    linkedin: <Linkedin size={18} />,
    twitter: <Twitter size={18} />,
    instagram: <Instagram size={18} />
  };

  return (
    <div className="h-full glassmorphism w-72 md:w-20 flex flex-col items-center py-8">
      {/* Profile Image */}
      <div className="relative mb-6">
      <div className="w-16 h-16 rounded-full overflow-hidden">
      <img 
  src="/pfp.jpg"
  alt="Profile" 
  className="w-full h-full object-cover rounded-full"
/>

</div>

        <div className="md:hidden mt-3 text-center">
          <h3 className="font-bold text-lg">{personalInfo.name}</h3>
          <p className="text-sm text-gray-400">{personalInfo.role}</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col items-center space-y-4 my-8">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-link group cursor-pointer"
            activeClass="active"
            onClick={closeMobileMenu}
          >
            {link.icon}
            <span className="md:hidden ml-3">{link.label}</span>
            <span className="hidden md:block absolute left-full ml-2 px-2 py-1 text-sm whitespace-nowrap rounded bg-dark-100 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              {link.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Social Media Links */}
      <div className="mt-auto flex md:flex-col md:space-y-3 space-x-3 md:space-x-0">
        {personalInfo.socialLinks.map(social => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors flex items-center"
          >
            <span className="p-2 rounded-full hover:bg-dark-100 transition-colors">
              {socialIcons[social.icon.toLowerCase()]}
            </span>
            <span className="md:hidden ml-2">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;