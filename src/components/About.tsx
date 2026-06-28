import React from 'react';
import { Code2, Cpu, Rocket } from 'lucide-react';
import Reveal from './Reveal';

const About: React.FC = () => {
  const values = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Technical Excellence",
      description: "Building reliable, scalable systems with clean, intentional code."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Automation First",
      description: "Cutting manual effort and improving reliability by automating the repetitive."
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Continuous Growth",
      description: "Thriving in fast-paced environments and pushing into new technology."
    }
  ];

  return (
    <section id="about" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — narrative */}
          <Reveal className="space-y-7">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-mono text-sm">01</span>
              <span className="w-8 h-px bg-emerald-400/60"></span>
              <span className="text-slate-400 font-medium tracking-wide uppercase text-sm">About</span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              A passion for software
              <br />
              <span className="text-emerald-400">that scales.</span>
            </h2>

            <div className="space-y-5 text-lg text-slate-400 leading-relaxed">
              <p>
                I'm a Computer Science undergraduate at VIT Chennai, driven by a passion for
                problem-solving and building scalable, production-grade software.
              </p>
              <p>
                Across two internships at Dell Technologies, I worked on large-scale test
                infrastructure for an enterprise data-protection platform — from a Python version
                migration spanning thousands of tests to a Flask-based REST API for an internal
                triage tool. Comfortable across <span className="text-slate-200">Python</span> and{' '}
                <span className="text-slate-200">SQL</span>, with a track record of cutting manual
                effort and improving reliability through automation.
              </p>
            </div>

            <blockquote className="border-l-2 border-emerald-500/60 pl-5 text-slate-300 italic">
              "Building impactful software is a blend of deep technical understanding and a clear
              vision of the problem it solves."
            </blockquote>
          </Reveal>

          {/* Right — value cards */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <Reveal key={index} delay={index * 90}>
                <div className="group flex items-start gap-5 p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-emerald-500/40 hover:bg-slate-900/70 transition-all duration-300">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
