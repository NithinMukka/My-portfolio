import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 min-w-0 group"
            aria-label="Back to top"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-display font-bold group-hover:bg-emerald-500/20 transition-colors duration-300">
              MN
            </span>
            <span className="text-base lg:text-lg font-display font-semibold text-white truncate">
              Mukka Nithin
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  activeSection === section.id
                    ? 'text-emerald-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-emerald-400"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-emerald-400 transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 p-6 overflow-y-auto bg-slate-950/95 backdrop-blur-xl">
            <div className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-3 text-left text-lg font-medium rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-6 mt-4 justify-center border-t border-slate-800">
                {[
                  { Icon: Github, href: 'https://github.com/NithinMukka', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/nithin-mukka-a92345278/', label: 'LinkedIn' },
                  { Icon: Mail, href: 'mailto:nithinmukka51234@gmail.com', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-3 text-slate-400 rounded-lg border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
