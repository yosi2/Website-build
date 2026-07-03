import { Education, Experience, Project, SkillCategory, Certification, Reference } from './types';

export const developerProfile = {
  name: "Yosef Ygezu Girma",
  title: "Information Systems Professional & Network Engineer",
  location: "North Shewa, Amhara, Ethiopia",
  email: "yosefygezu21@gmail.com",
  phone: "+251 920500096",
  summary: "Result-oriented and highly certified Information Systems professional with hands-on experience in network engineering, infrastructure management, and technical troubleshooting. Proven track record in successfully implementing routing, switching, and robust security protocols within university enterprise networks. Adept at integrating advanced data analysis, artificial intelligence architectures, and secure networking principles to optimize system infrastructure, mitigate vulnerabilities, and advance corporate technology objectives.",
  github: "https://github.com", // generic link
  linkedin: "https://linkedin.com", // generic link
};

export const educationData: Education = {
  school: "Injibara University",
  degree: "Bachelor of Science in Information Systems",
  date: "June 20, 2025",
  gpa: "3.51 / 4.00",
  exitExamScore: "76%",
  focus: [
    "Network Administration",
    "Computer Security",
    "Advanced Routing and Switching",
    "Database Systems"
  ]
};

export const experienceData: Experience[] = [
  {
    company: "Injibara University Department of ICT",
    department: "Enterprise Network & Infrastructure Division",
    role: "Network Engineer & Infrastructure Intern",
    period: "Oct 15, 2024 - Jan 17, 2025",
    responsibilities: [
      "Deployed, configured, and managed university-wide routing and enterprise switching hardware.",
      "Orchestrated advanced IPv4/IPv6 subnetting and logical IP addressing schemes across multiple campuses and departments.",
      "Implemented advanced network defense methodologies using robust firewall access control lists (ACLs) to mitigate potential security vulnerabilities.",
      "Diagnosed and resolved complex logical routing, dynamic switches, and physical hardware connectivity issues."
    ],
    award: "Awarded a formal Certificate of Excellence from the ICT Executive Director for outstanding contributions."
  }
];

export const projectData: Project[] = [
  {
    title: "Web-Based Tourism Management System (TMS) for Awi Zone",
    year: "2025",
    role: "Lead Software & Database Developer",
    description: "A comprehensive, fully functional tourism management system designed to showcase, track, and administer destinations, lodging, and tourist records in the Awi Zone of Ethiopia.",
    highlights: [
      "Full-Stack Engineering: Architected a complete web system with a highly structured coding layout to facilitate destination tracking and dynamic admin dashboards.",
      "Database Integration: Modeled, configured, and integrated a relational MySQL database within a local XAMPP stack environment.",
      "Performance Tuning: Optimized table structures, foreign keys, and query execution times to ensure fast responses and high reliability under multi-user access simulations."
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "XAMPP Stack", "CSS3 Grid/Flexbox", "HTML5"]
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Networking & Security",
    skills: [
      "Cisco Router & Switch Config",
      "IPv4/IPv6 Subnetting",
      "Firewalls & ACLs",
      "Network Security Protocols",
      "Systems Troubleshooting"
    ]
  },
  {
    category: "Software & Database Systems",
    skills: [
      "Full-Stack Web Programming",
      "SQL (MySQL)",
      "XAMPP Stack Deployment",
      "Object-Oriented Programming",
      "Android Development"
    ]
  },
  {
    category: "Platforms & Workspaces",
    skills: [
      "AWS AI Architectures",
      "Enterprise Data Analysis Platforms",
      "Microsoft Teams Workspace Systems",
      "Cloud Infrastructure Admin"
    ]
  },
  {
    category: "Languages",
    skills: [
      "Amharic (Native)",
      "English (Professional Full Proficiency)"
    ]
  }
];

export const certificationsData: Certification[] = [
  // 1. Artificial Intelligence & Cloud
  {
    id: "cert-1",
    title: "AWS AI Practitioner Challenge Certification",
    issuer: "Udacity & AWS",
    date: "March 28, 2026",
    category: "ai_cloud"
  },
  {
    id: "cert-2",
    title: "Artificial Intelligence Fundamentals Nanodegree",
    issuer: "Udacity & Accenture",
    date: "April 8, 2025",
    category: "ai_cloud"
  },
  // 2. Networking & Cyber Security
  {
    id: "cert-3",
    title: "CCNA (ICND1 v3)",
    issuer: "Alison CPD Certified",
    date: "2025",
    category: "networking_cyber"
  },
  {
    id: "cert-4",
    title: "CISSP (Certified Information Systems Security Professional)",
    issuer: "Alison CPD Certified",
    date: "2025",
    category: "networking_cyber"
  },
  {
    id: "cert-5",
    title: "ISO 27001:2022/Amd 1:2024 Update (ISMS)",
    issuer: "Alison CPD Certified",
    date: "2025",
    category: "networking_cyber"
  },
  {
    id: "cert-6",
    title: "Diploma in Computer Networking & Cyber Security",
    issuer: "Alison CPD Certified",
    date: "2025",
    category: "networking_cyber"
  },
  // 3. Software & Data Systems
  {
    id: "cert-7",
    title: "Android Developer Fundamentals Nanodegree",
    issuer: "Udacity & Accenture",
    date: "April 24, 2025",
    category: "software_data"
  },
  {
    id: "cert-8",
    title: "Programming Fundamentals Nanodegree",
    issuer: "Udacity & Accenture",
    date: "April 24, 2025",
    category: "software_data"
  },
  {
    id: "cert-9",
    title: "Data Analysis Fundamentals Nanodegree",
    issuer: "Udacity & Accenture",
    date: "April 4, 2025",
    category: "software_data"
  },
  {
    id: "cert-10",
    title: "e-SHE Systems Suite Certification",
    issuer: "Ministry of Education & ASU (Arizona State University)",
    date: "Jan 2025",
    category: "software_data"
  },
  // 4. Marketing & Analytics
  {
    id: "cert-11",
    title: "Facebook Marketing and Advertising",
    issuer: "Simplilearn SkillUp",
    date: "Oct 31, 2025",
    category: "marketing_analytics"
  },
  {
    id: "cert-12",
    title: "Digital Advertising and Marketing 201",
    issuer: "Alison CPD",
    date: "2025",
    category: "marketing_analytics"
  }
];

export const referencesData: Reference[] = [
  {
    name: "Assistant Professor Kassahun Azezew",
    role: "Senior Lecturer & Academic Advisor",
    affiliation: "Injibara University",
    emailPlaceholder: "kassahun.azezew@injibara.edu.et"
  },
  {
    name: "Coordinator Adugnaw Alebel",
    role: "Department Coordinator",
    affiliation: "Injibara University",
    emailPlaceholder: "adugnaw.alebel@injibara.edu.et"
  },
  {
    name: "Instructor Birhane Wondmneh",
    role: "ICT & Information Systems Instructor",
    affiliation: "Injibara University",
    emailPlaceholder: "birhane.wondmneh@injibara.edu.et"
  }
];
