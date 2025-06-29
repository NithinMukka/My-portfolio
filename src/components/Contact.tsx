import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Twitter, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'web-app'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMailTo = () => {
    const mailtoLink = `mailto:nithinmukka51234@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi, I'm ${formData.name} (${formData.email})\n\n${formData.message}\n\nProject Type: ${formData.projectType}`
    )}`;
    window.location.href = mailtoLink;
  };

  const projectTypes = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'e-commerce', label: 'E-commerce Site' },
    { value: 'portfolio', label: 'Portfolio Website' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Me",
      details: "nithinmukka51234@gmail.com",
      description: "For project inquiries and collaborations",
      link: "mailto:nithinmukka51234@gmail.com",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "Connect on LinkedIn",
      details: "linkedin.com/in/mukka-nithin",
      description: "Let's connect professionally",
      link: "https://www.linkedin.com/in/nithin-mukka-a92345278/",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "Explore My Code",
      details: "github.com/NithinMukka",
      description: "See my repositories and contributions",
      link: "https://github.com/NithinMukka",
      color: "from-slate-700 to-slate-600"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/NithinMukka",
      color: "hover:text-slate-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/mukka-nithin",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-emerald-400"></div>
            <span className="text-slate-400 font-medium">Get In Touch</span>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Discuss Your Project
            <span className="block bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Or Connect
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have an idea that needs bringing to life, or want to connect about tech? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <Send className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleMailTo(); }} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                  />
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                  >
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-slate-800">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Project Details..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-900 font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a key={index} href={method.link} target="_blank" rel="noopener noreferrer"
                  className="group block p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${method.color} rounded-lg text-white`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-slate-200">{method.title}</h4>
                      <p className="text-slate-300 font-medium">{method.details}</p>
                      <p className="text-slate-400 text-sm mt-1">{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-emerald-400" />
                <h4 className="text-lg font-semibold text-white">Availability</h4>
              </div>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Available for new projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Chennai, India (IST)</span>
                </div>
                <div className="text-slate-400 text-sm mt-3">
                  Typically respond within 24 hours
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">Connect Online</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-700 text-slate-400 rounded-lg hover:bg-slate-600 ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
