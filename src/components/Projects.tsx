import React from 'react';
// Removed ArrowUpRight import as it was unused in the previous update
import { ExternalLink, Github, Star, CalendarDays } from 'lucide-react'; // Keep used icons

const Projects: React.FC = () => {
  // Using project data directly from the resume
  const projectsData = [
    {
      title: "Profoot",
      subtitle: "Football Analytics Platform",
      description: "Engineered a full-stack football analytics platform integrating personalized training/diet plans, injury tracking, and interactive performance dashboards. Developed a community forum within the platform (React, Node.js) to facilitate user interaction and support.",
      // image: "https://images.pexels.com/photos/...", // Placeholder - Consider adding relevant images or icons
      tags: ["ReactJS", "NodeJS", "MongoDB", "Tailwind CSS"],
      liveUrl: "#", // Placeholder - Add live URL if available
      githubUrl: "https://github.com/NithinMukka/Profoot",
      date: "Feb 2025"
    },
    {
      title: "Smart Airlift Router",
      subtitle: "Pathfinding Web App",
      description: "Developed a web application using the A* pathfinding algorithm to calculate optimal airlift routes between global airports. Integrated dynamic routing based on user-selected priorities (distance, fuel, weather) and real-time weather updates to avoid hazardous conditions. Designed and implemented a visual interface (React, SVG, TypeScript) displaying the network map, routes, and aircraft movement for intuitive user interaction.",
      // image: "https://images.pexels.com/photos/...", // Placeholder
      tags: ["ReactJS", "TypeScript", "A*", "SVG"],
      liveUrl: "#", // Placeholder
      githubUrl: "https://github.com/NithinMukka/Smart-Router",
      date: "September 2024"
    },
    {
      title: "QR Code Generator",
      subtitle: "Responsive Web App",
      description: "Developed a responsive web application converting text inputs to QR codes, handling over 1000 requests daily. Integrated external APIs to guarantee 99.9% accuracy in QR code generation. Optimized frontend performance by 40% through efficient state management and lazy loading techniques.",
      // image: "https://images.pexels.com/photos/...", // Placeholder
      tags: ["Tailwind", "ReactJS", "APIs", "Performance Optimization"],
      liveUrl: "#", // Placeholder
      githubUrl: "#", // Placeholder - Resume doesn't list GitHub for this one
      date: "May 2024"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern - Kept as is */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-32 h-32 border-2 border-slate-400 rotate-12"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-slate-400 rounded-full"></div>
        <div className="absolute top-20 right-40 w-16 h-16 border border-slate-400 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
             {/* Kept Star icon as a visual element */}
            <Star className="w-6 h-6 text-amber-400 fill-current" />
            <span className="text-slate-600 font-medium">My Portfolio</span> {/* Updated Title */}
            <Star className="w-6 h-6 text-amber-400 fill-current" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Projects That
            <span className="block bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
              Showcase My Skills
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Exploring various technologies and approaches to build functional and innovative applications.
          </p>
        </div>

        {/* Projects Grid - Using a simplified grid layout for all projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid columns */}
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full" // Added flex and h-full for consistent height
            >
              {/* Using Project Title and Subtitle */}
               <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-slate-700">
                    {project.title}
                  </h4>
                  <div className="flex space-x-2 flex-shrink-0"> {/* Added flex-shrink-0 */}
                     {/* Live Link */}
                     {project.liveUrl && project.liveUrl !== '#' && (
                       <a
                         href={project.liveUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-2 text-slate-400 hover:text-amber-500 transition-colors duration-300"
                         aria-label={`View live version of ${project.title}`}
                       >
                         <ExternalLink size={18} /> {/* Slightly smaller icon */}
                       </a>
                     )}
                     {/* Github Link */}
                     {project.githubUrl && project.githubUrl !== '#' && (
                       <a
                         href={project.githubUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-2 text-slate-400 hover:text-emerald-500 transition-colors duration-300"
                          aria-label={`View source code for ${project.title} on GitHub`}
                       >
                         <Github size={18} /> {/* Slightly smaller icon */}
                       </a>
                     )}
                  </div>
               </div>

              {/* Description */}
              <p className="text-slate-600 mb-4 leading-relaxed flex-grow"> {/* Added flex-grow */}
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date/Status - Using Date from resume */}
              <div className="flex items-center justify-between mt-auto"> {/* Aligned to bottom */}
                 <div className="flex items-center space-x-1 text-slate-500 text-sm">
                     <CalendarDays size={16} className="text-slate-400"/>
                     <span>{project.date}</span> {/* Display project date */}
                 </div>
                {project.subtitle && ( // Optionally show subtitle here or as a status
                     <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-emerald-100 text-slate-700 text-sm font-medium rounded-full">
                       {project.subtitle}
                     </span>
                )}
              </div>
            </div>
          ))}
        </div>


        {/* Call to Action - Updated */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-full">
            <span className="font-medium">Find more projects on</span>
            <a
              href="https://github.com/NithinMukka" // Updated GitHub Profile Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;