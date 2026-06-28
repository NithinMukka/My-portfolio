import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMailTo = () => {
    const mailtoLink = `mailto:nithinmukka51234@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hi Nithin,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: "nithinmukka51234@gmail.com",
      link: "mailto:nithinmukka51234@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      details: "linkedin.com/in/mukka-nithin",
      link: "https://www.linkedin.com/in/nithin-mukka-a92345278/"
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      details: "github.com/NithinMukka",
      link: "https://github.com/NithinMukka"
    }
  ];

  return (
    <section id="contact" className="py-28 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <Reveal className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-emerald-400 font-mono text-sm">05</span>
            <span className="w-8 h-px bg-emerald-400/60"></span>
            <span className="text-slate-400 font-medium tracking-wide uppercase text-sm">Contact</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's <span className="text-emerald-400">talk</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            I'm open to software engineering roles and interesting collaborations. Have a question or
            an opportunity? My inbox is always open.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
              <div className="flex items-center gap-3 mb-7">
                <Send className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white">Send a message</h3>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleMailTo();
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/40"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/40"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/40"
                />
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me a bit about it..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/40 resize-none"
                />
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-500 text-slate-950 font-semibold rounded-xl hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  <Send size={18} />
                  Send message
                </button>
              </form>
            </div>
          </Reveal>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-4">
            {contactMethods.map((method, index) => (
              <Reveal key={index} delay={index * 80}>
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-emerald-500/40 hover:bg-slate-900/70 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-white">{method.title}</h4>
                    <p className="text-slate-400 text-sm truncate">{method.details}</p>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={240}>
              <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
                <div className="flex items-center gap-2.5 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm font-semibold text-white">Open to new opportunities</h4>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin size={15} className="text-slate-500" />
                  <span>Chennai, India (IST) · Typically replies within 24h</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
