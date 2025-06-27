import React, { useState, useEffect } from 'react';
// Removed 'index' import as it was unused and likely incorrect
import { Menu, X, Circle } from 'lucide-react'; // Keep used icons

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' }, // Changed label from Start
    { id: 'about', label: 'About' }, // Changed label from Story
    { id: 'skills', label: 'Skills' }, // Changed label from Craft
    { id: 'projects', label: 'Projects' }, // Changed label from Work
    { id: 'contact', label: 'Contact' }, // Changed label from Connect
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-amber-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Updated Logo/Site Title */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Circle className="w-8 h-8 text-amber-400 fill-current" />
              <div className="absolute inset-0 w-8 h-8 border-2 border-emerald-400 rounded-full rotate-45"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
              Mukka Nithin
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 group ${
                  activeSection === section.id
                    ? 'text-amber-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{section.label}</span>
                {activeSection === section.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-lg border border-amber-400/30"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-emerald-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-amber-400 transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-slate-700/50">
            <div className="flex flex-col space-y-2 mt-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-3 text-left font-medium transition-all duration-300 rounded-lg ${
                    activeSection === section.id
                      ? 'text-amber-400 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 border border-amber-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;