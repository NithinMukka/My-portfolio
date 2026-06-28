import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, ArrowUpRight, MapPin } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

// Single animated stat for the hero stat strip.
const Stat: React.FC<{ value: number; suffix?: string; decimals?: number; label: string }> = ({
  value,
  suffix = '',
  decimals = 0,
  label,
}) => {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div>
      <div className="text-2xl lg:text-3xl font-display font-bold text-white tabular-nums">
        <span ref={ref}>{animated.toFixed(decimals)}</span>
        {suffix}
      </div>
      <div className="text-sm text-slate-500 mt-1">{label}</div>
    </div>
  );
};

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Single ambient glow + subtle grid — restrained, not cluttered */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[36rem] h-[36rem] bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Left — content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              Open to software engineering roles
            </div>

            <div className="space-y-5">
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] text-white">
                Building reliable
                <br />
                <span className="text-emerald-400">systems</span> at scale.
              </h1>

              <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl">
                I'm <span className="text-slate-200 font-medium">Mukka Nithin</span> — a software
                engineer and CS undergraduate at VIT Chennai. Two-time Dell Technologies intern,
                cutting manual effort and improving reliability through automation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-500 text-slate-950 font-semibold rounded-xl hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                View my work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href="https://drive.google.com/file/d/1JUpSmg4g4pwHGxIgTP0QNeCjao9DvVk7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 border border-slate-700 text-slate-200 font-semibold rounded-xl hover:border-emerald-500/50 hover:text-white transition-all duration-300"
              >
                Resume
                <ArrowUpRight size={18} className="text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" />
              </a>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 max-w-lg">
              <Stat value={9.2} decimals={2} label="CGPA" />
              <Stat value={14700} suffix="+" label="Tests migrated" />
              <Stat value={80} suffix="%" label="Manual effort cut" />
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
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
                  className="p-2.5 text-slate-400 rounded-lg border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — terminal card (real content, not placeholder bars) */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                <span className="ml-3 text-xs text-slate-500 font-mono">nithin@portfolio: ~</span>
              </div>

              {/* Body */}
              <div className="p-5 font-mono text-sm leading-relaxed space-y-3">
                <div>
                  <span className="text-emerald-400">➜</span>{' '}
                  <span className="text-slate-500">~</span>{' '}
                  <span className="text-slate-200">whoami</span>
                </div>
                <div className="text-slate-400 pl-4">Mukka Nithin · Software Engineer</div>

                <div>
                  <span className="text-emerald-400">➜</span>{' '}
                  <span className="text-slate-500">~</span>{' '}
                  <span className="text-slate-200">cat stack.txt</span>
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'SQL'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-800 text-emerald-300 text-xs">
                      {t}
                    </span>
                  ))}
                </div>

                <div>
                  <span className="text-emerald-400">➜</span>{' '}
                  <span className="text-slate-500">~</span>{' '}
                  <span className="text-slate-200">impact --highlights</span>
                </div>
                <ul className="text-slate-400 pl-4 space-y-1">
                  <li>• Migrated 14,700 tests · Python 3.6 → 3.13</li>
                  <li>• Flask REST APIs + JSON→MySQL pipeline</li>
                  <li>• 100% CI/CD automation, Jenkins + Groovy</li>
                </ul>

                <div className="flex items-center gap-2 pt-1 text-slate-500">
                  <MapPin size={13} className="text-emerald-400" />
                  <span>Chennai, India</span>
                  <span className="inline-block w-2 h-4 bg-emerald-400/80 animate-pulse ml-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-emerald-400 transition-colors duration-300"
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-wide uppercase">Scroll</span>
        <div className="w-5 h-8 border border-current rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-current rounded-full animate-bounce"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
