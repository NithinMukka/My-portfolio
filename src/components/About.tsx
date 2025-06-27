import React from 'react';
import { Code2, Palette, Rocket, Users, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  // Values section kept as it represents a philosophy, adaptable to resume
  const values = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Building reliable, scalable systems with clean, intentional code."
    },
    {
      icon: <Palette className="w-6 h-6" />, // Using Palette icon for Design/Problem-Solving blend
      title: "Problem Solving",
      description: "Driven by a passion to tackle complex challenges and find elegant solutions."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Continuous Growth",
      description: "Thriving in fast-paced environments and pushing boundaries with new tech."
    }
  ];

  // Removed the generic stats as they don't directly map to resume numbers like CGPA/Score
  // const stats = [ ... ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-slate-400 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-slate-400 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-slate-400 rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-emerald-400"></div>
                <span className="text-slate-600 font-medium">About Me</span> {/* Updated title */}
              </div>

              {/* Updated Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Driven by Passion for
                <span className="block bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
                  Software Engineering
                </span>
              </h2>
            </div>

            {/* Updated About Paragraphs */}
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I'm Mukka Nithin, a Computer Science undergraduate at VIT Chennai. My journey is driven by a passion for problem-solving and building impactful software.
              </p>

              <p>
                 Currently, I'm interning at Dell Technologies, focusing on backend development, test automation, and data visualization. I enjoy the challenge of creating reliable, scalable systems and thrive in fast-paced engineering environments.
              </p>
               <p>
                While the resume captures my professional and academic highlights, this space lets me share the *why* behind my work – the commitment to technical excellence, user-centered design, and the continuous pursuit of learning.
              </p>
            </div>

            {/* Removed Stats Section */}
            {/* <div className="grid grid-cols-3 gap-8 py-8 border-t border-b border-slate-200">...</div> */}

            {/* Personal Touch - Kept and slightly updated */}
            <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex space-x-2">
                <Coffee className="w-5 h-5 text-amber-500" />
                <Heart className="w-5 h-5 text-red-400" /> {/* Kept as a personal touch */}
                <Users className="w-5 h-5 text-emerald-500" /> {/* Users aligns with user-centered design */}
              </div>
              <p className="text-slate-600">
                Beyond the code, I value continuous learning, contributing to projects that matter, and connecting with others in the tech community.
              </p>
            </div>
          </div>

          {/* Right Column - Values Cards - Kept as is but updated descriptions */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index === 1 ? 'lg:translate-x-8' : index === 2 ? 'lg:translate-x-4' : ''
                }`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl text-slate-700 group-hover:from-amber-100 group-hover:to-emerald-100 group-hover:text-slate-800 transition-all duration-300">
                    {value.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-amber-200 transition-all duration-300"></div>
              </div>
            ))}

            {/* Floating Quote - Kept as is */}
            <div className="relative p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-amber-400 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full"></div>
              <blockquote className="text-lg font-medium italic">
                 "Building impactful software is a blend of deep technical understanding and a clear vision of the problem it solves."
              </blockquote>
              <cite className="block mt-3 text-sm text-slate-400">— My approach to engineering</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;