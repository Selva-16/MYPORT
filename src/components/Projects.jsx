import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data';
import { Github } from 'lucide-react';

const Projects = () => {
  return (
    <div className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Background graphic */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-100 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase">Portfolio</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Selected Work
          </p>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a
            href="https://github.com/Selva-16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-200 text-lg font-bold rounded-full text-slate-700 bg-white hover:border-slate-900 hover:text-slate-900 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
          >
            <Github size={24} />
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
