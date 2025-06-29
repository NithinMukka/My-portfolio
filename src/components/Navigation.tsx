import React, { useState, useEffect } from 'react';
import { Menu, X, Circle, Github, Linkedin, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 min-w-0 flex-grow flex-shrink">
            <div className="relative flex-shrink-0">
              <Circle className="w-8 h-8 text-amber-400 fill-current" />
              <div className="absolute inset-0 w-8 h-8 border-2 border-emerald-400 rounded-full rotate-45"></div>
            </div>
            <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent truncate min-w-0 flex-shrink">
              Mukka Nithin
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            {sections.map((section) => (
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

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-amber-400 transition-colors duration-300 flex-shrink-0"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`lg:hidden fixed inset-x-0 top-[80px] bottom-0 z-40 p-6 overflow-y-auto max-h-[calc(100vh-80px)]`}>
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-xl p-6 flex flex-col space-y-4 shadow-lg border border-slate-700">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-3 text-left text-lg font-medium transition-all duration-300 rounded-lg ${
                    activeSection === section.id
                      ? 'text-amber-400 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 border border-amber-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <div className="flex items-center space-x-6 pt-4 justify-center border-t border-slate-700">
                <a
                  href="https://github.com/NithinMukka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-amber-400 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nithin-mukka-a92345278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:nithinmukka51234@gmail.com"
                  className="p-3 bg-slate-800 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
