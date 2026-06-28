import React from 'react';
import { Code, Database, Wrench, Users } from 'lucide-react';
import Reveal from './Reveal';

const Skills: React.FC = () => {
  // Skill categories taken directly from the resume
  const skillCategories = [
    {
      category: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "C++", "SQL", "JavaScript"]
    },
    {
      category: "Backend & Data",
      icon: <Database className="w-5 h-5" />,
      skills: ["FastAPI", "Flask", ,"Node", "PostgreSQL", "Redis", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools & Infra",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Docker", "Render", "Git", "Github", "Jenkins CI/CD", "Grafana", "VS Code"]
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      skills: ["Project Management", "Leadership", "Technical Writing", "Teamwork"]
    }
  ];

  return (
    <section id="skills" className="py-28 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-emerald-400 font-mono text-sm">03</span>
            <span className="w-8 h-px bg-emerald-400/60"></span>
            <span className="text-slate-400 font-medium tracking-wide uppercase text-sm">Skills</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            The <span className="text-emerald-400">toolkit</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillCategories.map((skillSet, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-7 hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    {skillSet.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{skillSet.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-sm hover:border-emerald-500/40 hover:text-emerald-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
