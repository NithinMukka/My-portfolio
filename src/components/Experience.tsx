import React from 'react';
import { Briefcase, GraduationCap, MapPin, CalendarDays } from 'lucide-react';
import Reveal from './Reveal';

const Experience: React.FC = () => {
  // Professional experience taken directly from the resume
  const experiences = [
    {
      company: "Dell Technologies",
      role: "Undergraduate Intern – PowerProtect Data Domain (PPDD), GC Team",
      location: "Onsite / India",
      period: "Jan 2026 – June 2026",
      points: [
        "Migrated a test suite of 7,700 tests (FUTI + DUTI) from Python 3.6 to 3.13 as part of a 4-member team, resolving deprecated-library and version-incompatibility issues across a Python, Perl, and Bash codebase.",
        "Root-caused and fixed 15+ failing test cases inside Athena, an internal OOP-based test execution framework, and used YAML-driven configuration to decouple test logic from environment parameters for 2 POCs.",
        "Reduced post-migration test execution failures and authored a structured migration playbook later proposed for CI/CD-integrated, automated rollout to other teams.",
        "Built a multithreaded Python tool to analyze Customer Found Defect (CFD) flow across 8 product components, parsing thousands of Jira ticket histories (via REST endpoints) to quantify direct vs. hopped assignments between component teams; added caching to cut repeated-fetch overhead and speed up large-scale ticket analysis."
      ]
    },
    {
      company: "Dell Technologies",
      role: "Undergraduate Intern – PowerProtect Data Domain (PPDD)",
      location: "Onsite / India",
      period: "May 2025 – July 2025",
      points: [
        "Built backend REST APIs with Flask to expose test data programmatically, and designed a JSON-to-MySQL pipeline that automated test metadata extraction, cutting manual effort by 80%.",
        "Automated a daily Jenkins CI/CD job in Groovy to run unit test suites end-to-end, reaching 100% automation and removing manual execution from the release workflow.",
        "Added memory leak detection to the internal test framework (MATE), cutting manual debugging time by 70%, and built Grafana dashboards on top of the API layer to surface pass/fail trends for release sign-off."
      ]
    }
  ];

  // Education taken directly from the resume
  const education = [
    {
      institution: "Vellore Institute of Technology",
      detail: "B.Tech – Computer Science and Engineering",
      highlight: "CGPA 9.26",
      location: "Chennai, Tamil Nadu",
      period: "Sep 2022 – June 2026"
    },
    {
      institution: "Sri Chaitanya Junior College",
      detail: "Maths, Physics and Chemistry",
      highlight: "98.3%",
      location: "Khammam, Telangana",
      period: "June 2020 – May 2022"
    }
  ];

  return (
    <section id="experience" className="py-28 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-emerald-400 font-mono text-sm">02</span>
            <span className="w-8 h-px bg-emerald-400/60"></span>
            <span className="text-slate-400 font-medium tracking-wide uppercase text-sm">Experience</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            Where I've <span className="text-emerald-400">worked</span> & studied
          </h2>
        </Reveal>

        {/* Experience timeline */}
        <div className="relative pl-8 sm:pl-10">
          {/* vertical rail */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/50 via-slate-800 to-transparent"></div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <Reveal key={index} delay={index * 80}>
                <div className="relative">
                  {/* node */}
                  <span className="absolute -left-8 sm:-left-10 top-1.5 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 rounded-full bg-emerald-500/20"></span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 hover:border-emerald-500/40 hover:bg-slate-900/70 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                          <p className="text-slate-400 text-sm mt-0.5">{exp.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 md:text-right pl-14 md:pl-0 flex-shrink-0">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={13} className="text-emerald-400" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={13} className="text-slate-600" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400 text-[15px] leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400/70"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {education.map((edu, index) => (
            <Reveal key={index} delay={index * 90}>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-emerald-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h3 className="text-base font-bold text-white">{edu.institution}</h3>
                      <p className="text-slate-400 text-sm">{edu.detail}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs">
                      <span className="px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 font-semibold">
                        {edu.highlight}
                      </span>
                      <span className="text-slate-500">{edu.period}</span>
                      <span className="inline-flex items-center gap-1 text-slate-600">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
