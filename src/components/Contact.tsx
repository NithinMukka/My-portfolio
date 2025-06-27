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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '', projectType: 'web-app' });
    setIsSubmitting(false);
    alert('Thanks for reaching out! I\'ll get back to you within 24 hours.');
  };

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
      link: "https://linkedin.com/in/mukka-nithin",
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
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      url: "https://twitter.com", // Placeholder - Update if you have a Twitter
      color: "hover:text-sky-400"
    }
  ];

  const projectTypes = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'e-commerce', label: 'E-commerce Site' },
    { value: 'portfolio', label: 'Portfolio Website' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
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
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <Send className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-slate-800">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-900 font-semibold rounded-lg hover:shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information - Updated */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${method.color} rounded-lg text-white`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-slate-200">
                        {method.title}
                      </h4>
                      <p className="text-slate-300 font-medium">{method.details}</p>
                      <p className="text-slate-400 text-sm mt-1">{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability - Updated Location */}
            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-emerald-400" />
                <h4 className="text-lg font-semibold text-white">Availability</h4>
              </div>
              <div className="space-y-2 text-slate-300">
                {/* CHANGED <p> to <div> here */}
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Available for new projects</span>
                </div>
                {/* CHANGED <p> to <div> here */}
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Chennai, India (IST)</span> {/* Updated Location/Timezone */}
                </div>
                {/* CHANGED <p> to <div> here */}
                <div className="text-slate-400 text-sm mt-3"> {/* This one didn't have a div child, but changing for consistency */}
                  Typically respond within 24 hours
                </div>
              </div>
            </div>

            {/* Social Links - Updated */}
            <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl">
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