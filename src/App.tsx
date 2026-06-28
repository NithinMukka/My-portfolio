import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  const sectionIds = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
  const activeSection = useIntersectionObserver(sectionIds);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-display font-bold">
                MN
              </span>
              <div>
                <span className="block font-display font-semibold text-white">Mukka Nithin</span>
                <span className="block text-sm text-slate-500">Software Engineer</span>
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="https://github.com/NithinMukka" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 rounded-lg border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nithin-mukka-a92345278/" target="_blank" rel="noopener noreferrer" className="p-2.5 text-slate-400 rounded-lg border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:nithinmukka51234@gmail.com" className="p-2.5 text-slate-400 rounded-lg border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-900 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-600">
            <p>© 2026 Mukka Nithin. All rights reserved.</p>
            <p>
              Built with React, TypeScript & Tailwind ·{' '}
              <a href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons" className="hover:text-slate-400 transition-colors duration-300">Icon</a> by{' '}
              <a href="https://www.freepik.com" title="Freepik" className="hover:text-slate-400 transition-colors duration-300">Freepik</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;