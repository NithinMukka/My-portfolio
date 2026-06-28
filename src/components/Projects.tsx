import React from 'react';
import { ExternalLink, Github, ArrowUpRight, CalendarDays } from 'lucide-react';
import Reveal from './Reveal';

const Projects: React.FC = () => {
  // Project data taken directly from the resume
  const projectsData = [
    {
      title: "Scalable Movie Booking API",
      subtitle: "High-Concurrency Backend",
      description:
        "A high-concurrency movie booking backend built with FastAPI and PostgreSQL, using Redis caching to cut database read latency on high-traffic endpoints. Containerized with Docker and deployed on Render with a CI/CD-ready architecture, plus secure config management and automated database backups for production-grade integrity.",
      tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      liveUrl: "https://movie-api-5jid.onrender.com/docs",
      githubUrl: "https://github.com/NithinMukka/Movie-API",
      date: "May 2026"
    },
    {
      title: "Smart Airlift Router",
      subtitle: "Pathfinding Web App",
      description:
        "A routing engine using the A* pathfinding algorithm to compute optimal airlift routes between global airports, recalculating in real time from live weather API data. An interactive interface visualizes the network map, routes, and aircraft movement.",
      tags: ["TypeScript", "Algorithms", "REST APIs"],
      liveUrl: "https://smart-router.vercel.app",
      githubUrl: "https://github.com/NithinMukka/Smart-Router",
      date: "September 2024"
    }
  ];

  return (
    <section id="projects" className="py-28 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-emerald-400 font-mono text-sm">04</span>
            <span className="w-8 h-px bg-emerald-400/60"></span>
            <span className="text-slate-400 font-medium tracking-wide uppercase text-sm">Projects</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            Things I've <span className="text-emerald-400">built</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <Reveal key={index} delay={index * 90}>
              <div className="group relative h-full flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-8 hover:border-emerald-500/40 hover:bg-slate-900/70 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-emerald-400/80 text-sm font-medium mt-1">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-500 rounded-lg hover:bg-slate-800 hover:text-emerald-400 transition-all duration-300"
                        aria-label={`View source for ${project.title}`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-500 rounded-lg hover:bg-slate-800 hover:text-emerald-400 transition-all duration-300"
                        aria-label={`View live ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 mt-6 pt-5 border-t border-slate-800 text-slate-500 text-sm">
                  <CalendarDays size={15} className="text-slate-600" />
                  <span>{project.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-12 flex justify-center">
          <a
            href="https://github.com/NithinMukka"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-700 text-slate-200 font-medium hover:border-emerald-500/50 hover:text-white transition-all duration-300"
          >
            <Github size={18} />
            More on GitHub
            <ArrowUpRight size={16} className="text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
