import React from 'react';
// Removed unused icons like Feather, GitPullRequest, BookOpen, Database, Monitor
// Kept used icons (Code, Settings, Users, Wrench)
import { Code, Settings, Users, Wrench } from 'lucide-react'; // Adjusted import

const Skills: React.FC = () => {
  // Using skill categories and lists directly from the resume
  const skillCategories = [
    {
      category: "Languages",
      icon: <Code className="w-6 h-6" />, // Using Code icon
      color: "from-amber-400 to-orange-400",
      skills: ["C++", "JavaScript", "Python", "C", "SQL", "HTML", "CSS"]
    },
    {
      category: "Technologies & Frameworks", // Updated Category Name
      icon: <Settings className="w-6 h-6" />, // Using Settings icon
      color: "from-emerald-400 to-teal-400",
      skills: ["React JS", "MongoDB", "NodeJS", "ExpressJS", "Tailwind CSS", "Bootstrap", "Flask", "Git"]
    },
    {
      category: "Developer Tools", // Updated Category Name
      icon: <Wrench className="w-6 h-6" />, // Using Wrench icon
      color: "from-purple-400 to-pink-400",
      skills: ["Github", "VS Code", "IntelliJ", "DevC++"]
    },
    {
      category: "Soft Skills", // Updated Category Name
      icon: <Users className="w-6 h-6" />, // Using Users icon
      color: "from-blue-400 to-cyan-400",
      skills: ["Project management", "Leadership", "Technical Writing", "Teamwork"]
    }
    // Removed Design & UX and DevOps categories as they are covered by other categories or Soft Skills
  ];

  // Removed "Currently Learning" section as it's not on the resume
  // const currentFocus = [ ... ];

  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements - Kept as is */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-amber-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-emerald-400"></div>
            <span className="text-slate-400 font-medium">My Toolbox</span> {/* Updated Title */}
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400"></div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical & Soft
            <span className="block bg-gradient-to-r from-amber-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A versatile set of skills acquired through academic projects, personal learning, and internship experience.
          </p>
        </div>

        {/* Skills Grid - Adapted to show lists instead of progress bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16"> {/* Adjusted grid columns */}
          {skillCategories.map((skillSet, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-500 hover:transform hover:scale-105 h-full flex flex-col" // Added flex and h-full
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${skillSet.color} rounded-xl text-white`}>
                  {skillSet.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {skillSet.category}
                </h3>
              </div>

              {/* Displaying skills as a list */}
              <div className="space-y-3 flex-grow"> {/* Added flex-grow */}
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center"> {/* Added flex for potential icon */}
                       <svg className="w-2 h-2 mr-2 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg> {/* Simple bullet icon */}
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Removed Currently Learning Section */}
        {/* <div className="...">...</div> */}
      </div>
    </section>
  );
};

export default Skills;