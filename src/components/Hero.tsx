import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  // Changed scroll target to Projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Also add scroll to About for the scroll indicator
   const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="hero" className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background Elements - Kept as is */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Geometric Decorations - Kept as is */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-amber-400 rotate-45 animate-bounce delay-300"></div>
      <div className="absolute bottom-40 left-32 w-6 h-6 border-2 border-emerald-400 rotate-12 animate-spin-slow"></div>
      <div className="absolute top-1/2 right-40 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping delay-700"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                {/* Updated Tagline */}
                <div className="flex items-center space-x-3 text-amber-400 font-medium">
                  <Sparkles size={20} />
                  <span>Problem Solver & Software Engineer</span>
                </div>

                {/* Updated Heading */}
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Building</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    Reliable
                  </span>
                  <br />
                  <span className="text-slate-300">Systems</span>
                </h1>

                {/* Updated Paragraph */}
                <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                  I engineer robust systems and craft applications that blend technical precision with user-centric design.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* Updated Button to scroll to Projects */}
                <button
                  onClick={scrollToProjects}
                  className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-900 font-semibold rounded-full hover:shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Explore My Work</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Updated Resume Button (Assuming PDF name) */}
                  <a
                    href="https://drive.google.com/file/d/1ekYBQ8m5y59uPl4WtpzegBfiUI_qefHw/view?usp=sharing"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-full hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
                  >
                    <Zap size={20} />
                    <span>View Resume</span>
                  </a>
              </div>

              {/* Updated Social Links */}
              <div className="flex items-center space-x-6 pt-4">
                <span className="text-slate-500 text-sm">Connect with me</span>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/NithinMukka" // Updated GitHub Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-amber-400 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nithin-mukka-a92345278/" // Updated LinkedIn Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                     aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:nithinmukka51234@gmail.com" // Updated Email Link
                    className="p-3 bg-slate-800 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                     aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element - Kept as is for visual interest */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-emerald-400 rounded-xl"></div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-amber-400/50 to-transparent rounded"></div>
                      <div className="h-4 bg-gradient-to-r from-emerald-400/50 to-transparent rounded w-3/4"></div>
                      <div className="h-4 bg-gradient-to-r from-blue-400/50 to-transparent rounded w-1/2"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-16 bg-slate-700 rounded-lg"></div>
                      <div className="h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-lg rotate-12 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 border-2 border-blue-400 rotate-45 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Changed scroll target to About section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout} // Changed to scroll to About
          className="flex flex-col items-center space-y-2 text-slate-400 hover:text-amber-400 transition-colors duration-300 group"
          aria-label="Scroll down"
        >
          <span className="text-sm">Learn more about me</span> {/* Updated text */}
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;