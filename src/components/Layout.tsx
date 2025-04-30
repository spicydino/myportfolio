import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-dark-300 text-white overflow-hidden">
      {/* Mobile Menu Toggle */}
      <button 
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-dark-100 md:hidden"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Animated background gradient */}
      <div className="fixed top-0 left-0 w-full h-full opacity-20 bg-animated -z-10"></div>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full z-40 transition-transform duration-300 
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <Sidebar closeMobileMenu={() => setIsMobileMenuOpen(false)} />
      </div>

      {/* Main Content */}
      <main className={`
        ml-0 md:ml-20 transition-all duration-300
      `}>
        {children}
      </main>
    </div>
  );
};

export default Layout;