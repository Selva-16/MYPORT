import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out group p-8 flex flex-col h-full transform hover:-translate-y-2 relative overflow-hidden">
      
      {/* Dynamic Top Hue line */}
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${project.color || 'from-emerald-500 to-teal-500'}`}></div>

      <div className="flex justify-between items-start mb-6 mt-2">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-md bg-gradient-to-br ${project.color || 'from-emerald-500 to-teal-500'} group-hover:scale-110 transition-transform duration-300`}>
          {project.icon || project.title.charAt(0)}
        </div>
        <div className="flex space-x-3 text-slate-400 bg-slate-50 px-3 py-2 rounded-full border border-slate-100">
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
              <Github size={18} />
            </a>
          )}
          {project.link && project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-2xl font-extrabold text-slate-800 mb-4 group-hover:text-emerald-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-500 font-medium mb-8 flex-grow leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-200 uppercase tracking-widest"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
