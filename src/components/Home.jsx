import React from 'react';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { personalInfo } from '../data';
import selvaPdf from '../assets/SELVANARAYANAN P.pdf';

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center relative overflow-hidden bg-slate-50">
      {/* Background decoration with Emerald/Teal Theme */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-200/40 blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-12 md:py-0">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up w-full md:max-w-xl lg:max-w-2xl mt-8 md:mt-0">
          <p className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-0.5 bg-emerald-600 rounded-full hidden md:block"></span> 
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              {personalInfo.name}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-700 font-semibold mb-6 flex items-center justify-center md:justify-start gap-3">
             {personalInfo.role}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed font-medium px-4 md:px-0">
            {personalInfo.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-4 md:px-0">
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-200 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>
            <a
              href={selvaPdf}
              download="Selvanarayanan_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-200 text-base font-semibold rounded-full text-slate-700 bg-white hover:border-emerald-600 hover:text-emerald-600 shadow-sm transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image Placeholder */}
        <div className="flex-1 flex justify-center animate-fade-in-up md:delay-150 w-full relative pt-8 md:pt-0">
          
          {/* Decorative backing for the image */}
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-[2rem] sm:rounded-[3rem] transform rotate-6 scale-105 -z-10 transition-transform hover:rotate-12 duration-500"></div>
          
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl shadow-emerald-900/10 flex items-center justify-center group flex-shrink-0 bg-gradient-to-br from-emerald-500 to-teal-600">
             
             <span className="text-[10rem] sm:text-[12rem] md:text-[16rem] lg:text-[18rem] font-black text-white leading-none transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 select-none opacity-90">
               {personalInfo.name.charAt(0)}
             </span>
             
          </div>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center text-slate-400 font-medium pb-4 cursor-pointer" onClick={scrollToProjects}>
        <span className="text-sm mb-2 uppercase tracking-widest text-emerald-600">Explore</span>
        <ChevronDown size={24} className="text-emerald-600" />
      </div>
    </div>
  );
};

export default Home;
