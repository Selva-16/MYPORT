import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Award,
  Globe,
  Database,
  Monitor
} from "lucide-react";

export const personalInfo = {
  name: "SELVANARAYANAN P.",
  role: "Web Developer / Software Engineer",
  tagline: "Building elegant full-stack web experiences.",
  about: "To obtain a challenging position as a Web Developer or Software Engineer in a growth-oriented IT company where I can apply my full-stack development skills and contribute to innovative projects.",
  contact: {
    email: "selvanarayanan1607@gmail.com",
    phone: "93603 69822",
    location: "Sivakasi – 626124", 
    linkedin: "https://www.linkedin.com/in/", // Update with your actual profile ID
    github: "https://github.com/Selva-16"
  }
};

export const skills = [
  "HTML & CSS", "JavaScript", "React.js", "Bootstrap",
  "Node.js", "PHP", "MongoDB", "MySQL", "MERN Stack", "Git & GitHub", "VS Code", "Postman"
];

export const experience = [
  {
    id: 1,
    title: "XML Processing",
    company: "AAA Techno Park, Sivakasi",
    duration: "5 Months",
    description: "Gained hands-on experience in structured data formatting and XML processing routines.",
    icon: <Briefcase size={20} />
  },
  {
    id: 2,
    title: "MERN Stack Web Development Training",
    company: "Secrolis Technologies, Chennai",
    duration: "6 Months",
    description: "Underwent comprehensive training in building full-stack applications using MongoDB, Express, React, and Node.js.",
    icon: <Monitor size={20} />
  },
  {
    id: 3,
    title: "Web Development Training",
    company: "Spike Technologies, Tuticorin",
    duration: "30 Days",
    description: "A short-term intensive training focused on core web development principles.",
    icon: <Globe size={20} />
  }
];

export const education = [
  {
    id: 1,
    degree: "MCA (Master of Computer Applications)",
    institution: "Ayya Nadar Janaki Ammal College, Sivakasi",
    year: "2023 - 2025",
    score: "79%",
    icon: <GraduationCap size={20} />
  },
  {
    id: 2,
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Ayya Nadar Janaki Ammal College, Sivakasi",
    year: "2020 - 2023",
    score: "69%",
    icon: <GraduationCap size={20} />
  },
  {
    id: 3,
    degree: "HSC",
    institution: "AVM Marimuthu Nadar Hr. Sec. School, Vilampatti",
    year: "2020",
    score: "59%",
    icon: <Award size={20} />
  }
];

export const achievements = [
  "Achieved 62% score in TCS National Qualifier Test conducted by Tata Consultancy Services."
];

export const projects = [
  {
    id: 1,
    title: "Website for Perfect Banker's Academy",
    description: "A full-stack platform for an educational academy to manage student registrations, mock exams, and result tracking.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    icon: <Globe size={24} />,
    color: "from-emerald-500 to-teal-500",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Client List Management System",
    description: "A CRUD-based client data management tool allowing record updates, additions, and deletions.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    icon: <Database size={24} />,
    color: "from-teal-500 to-cyan-500",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Furniture E-Commerce Website",
    description: "A dynamic furniture store site with cart functionality, category filters, and secure checkout process.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    icon: <Monitor size={24} />,
    color: "from-emerald-500 to-teal-500",
    link: "#",
    github: "#"
  }
];
