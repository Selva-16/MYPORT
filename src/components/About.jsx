import React from 'react';
import { personalInfo, skills, experience, education, achievements } from '../data';
import { Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase">Discover</h2>
          <p className="mt-2 text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            About Me
          </p>
          <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Bio & Skills */}
          <div className="lg:col-span-5 prose prose-lg text-slate-600 w-full max-w-none">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm mb-10 text-center sm:text-left">
               <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 flex items-center justify-center sm:justify-start gap-3">
                 <span className="w-8 h-1 bg-emerald-600 inline-block rounded-full"></span> Objective
               </h3>
               <p className="leading-relaxed font-medium text-slate-700 text-base sm:text-lg">
                 {personalInfo.about}
               </p>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 flex items-center justify-center sm:justify-start gap-3">
               <span className="w-8 h-1 bg-teal-600 inline-block rounded-full"></span> Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white text-slate-700 font-bold text-xs sm:text-sm border-2 border-slate-100 shadow-sm transition-all hover:border-emerald-500 hover:text-emerald-600 hover:-translate-y-1 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-12 text-center sm:text-left">
               <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 flex items-center justify-center sm:justify-start gap-3">
                 <span className="w-8 h-1 bg-amber-500 inline-block rounded-full"></span> Achievements
               </h3>
               <ul className="space-y-4 text-left">
                 {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-900 font-medium text-sm sm:text-base">
                       <Trophy className="text-amber-500 shrink-0 mt-0.5" size={20} />
                       <span>{achievement}</span>
                    </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* Right Column: Experience & Education Timeline */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Experience Group */}
            <div>
               <h3 className="text-3xl font-extrabold text-slate-900 mb-8 pl-4 border-l-4 border-emerald-600">
                  Experience & Training
               </h3>
               <div className="space-y-6">
                 {experience.map((item) => (
                   <div key={item.id} className="relative flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all group overflow-hidden">
                     <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                     <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                       {item.icon}
                     </div>
                     <div>
                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <h4 className="font-bold text-slate-900 text-xl">{item.title}</h4>
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-full whitespace-nowrap uppercase tracking-wider">{item.duration}</span>
                       </div>
                       <div className="text-slate-500 font-semibold mb-3">{item.company}</div>
                       <p className="text-slate-600 font-medium leading-relaxed">
                         {item.description}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Education Group */}
            <div className="pt-8 border-t border-slate-100">
               <h3 className="text-3xl font-extrabold text-slate-900 mb-8 pl-4 border-l-4 border-teal-600">
                  Education
               </h3>
               <div className="space-y-6">
                 {education.map((item) => (
                   <div key={item.id} className="relative flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-all group overflow-hidden">
                     <div className="absolute top-0 left-0 w-2 h-full bg-teal-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                     <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                       {item.icon}
                     </div>
                     <div className="w-full">
                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <h4 className="font-bold text-slate-900 text-xl">{item.degree}</h4>
                          <span className="text-xs font-bold text-teal-700 bg-teal-100 px-3 py-1.5 rounded-full whitespace-nowrap uppercase tracking-wider">{item.year}</span>
                       </div>
                       <div className="text-slate-500 font-semibold mb-3">{item.institution}</div>
                       <div className="flex items-center gap-2 text-slate-700 font-medium bg-slate-50 px-3 py-2 rounded-lg w-max">
                         <span className="text-teal-600 font-bold">Score:</span> {item.score}
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
