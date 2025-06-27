import React from 'react'; // Keep React import for React.FC type and potential future uses
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useIntersectionObserver } from './hooks/useIntersectionObserver'; // Keep this import

function App() {
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];
  const activeSection = useIntersectionObserver(sectionIds);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {/* Updated Logo Placeholder */}
                <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-lg"></div>
                {/* Updated Site Title */}
                <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                  Mukka Nithin
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Crafting digital experiences driven by a passion for problem-solving and software engineering.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-slate-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Let's Connect</h4>
              <p className="text-slate-400">
                Have a project in mind or just want to chat about tech? Feel free to reach out!
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-900 font-medium rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Updated Copyright */}
              <p className="text-slate-500 text-sm">
                © 2024 Mukka Nithin. Built with passion.
              </p>
              <div className="flex items-center space-x-4 text-slate-500 text-sm">
                <span>Made with</span>
                <div className="flex items-center space-x-2">
                  <span className="text-red-400">♥</span>
                  <span>React</span>
                  <span>•</span>
                  <span>TypeScript</span>
                  <span>•</span>
                  <span>Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;