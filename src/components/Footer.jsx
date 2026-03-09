import React from 'react';
import { personalInfo } from '../data';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center sm:hidden mb-6">
           <span className="text-xl font-bold text-white tracking-tight">
              {personalInfo.name.split(' ')[0]}<span className="text-blue-500">.</span>
            </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-white tracking-tight">
              {personalInfo.name.split(' ')[0]}<span className="text-blue-500">.</span>
            </span>
          </div>
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
