import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
   return (
      <div className="py-32 bg-white relative overflow-hidden">
         {/* Background graphic */}
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-emerald-50/50 blur-3xl opacity-80 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-teal-50/50 blur-3xl opacity-80 pointer-events-none"></div>

         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                  <span className="w-8 h-0.5 bg-emerald-600 rounded-full"></span>
                  Connect
                  <span className="w-8 h-0.5 bg-emerald-600 rounded-full"></span>
               </h2>
               <p className="text-4xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
                  Get In Touch
               </p>
               <p className="max-w-2xl mx-auto text-xl text-slate-600 font-medium leading-relaxed">
                  I'm currently looking for new opportunities. Whether you have a question or just want to collaborate, feel free to reach out!
               </p>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-12 border border-slate-100 flex flex-col md:flex-row gap-12 items-center justify-center relative overflow-hidden">

               <div className="w-full flex flex-col gap-8 relative z-10">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

                     {/* Email */}
                     <a href={`mailto:${personalInfo.contact.email}`} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 hover:shadow-lg transition-all flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white text-emerald-600 shadow-sm flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                           <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Email Me</h3>
                        <span className="text-slate-500 font-medium group-hover:text-emerald-700 transition-colors">{personalInfo.contact.email}</span>
                     </a>

                     {/* Phone */}
                     <a href={`tel:${personalInfo.contact.phone}`} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 hover:shadow-lg transition-all flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-white text-teal-600 shadow-sm flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                           <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Call Me</h3>
                        <span className="text-slate-500 font-medium group-hover:text-teal-700 transition-colors">{personalInfo.contact.phone}</span>
                     </a>
                  </div>

                  {/* Location */}
                  <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left hover:border-emerald-200 transition-all">
                     <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-16 h-16 shrink-0 rounded-2xl bg-white text-emerald-600 shadow-sm flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                           <MapPin size={32} />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-slate-900 mb-1">Location</h3>
                           <span className="text-slate-500 font-medium text-lg">{personalInfo.contact.location}</span>
                        </div>
                     </div>
                  </div>

                  {/* Socials */}
                  <div className="flex justify-center gap-6 mt-4">
                     <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300">
                        <Linkedin size={24} />
                     </a>
                     <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300">
                        <Github size={24} />
                     </a>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
