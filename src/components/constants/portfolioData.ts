/**
 * Portfolio Data Constants
 * 
 * Centralized data store for portfolio content
 * Edit these values to update portfolio information
 */

// Personal Information
export const PERSONAL_INFO = {
  name: "Debajyoti Upadhayaya",
  title: "Full-Stack Developer | API Engineer | Flutter Developer",
  company: "Founder @ Leagalmitra",
  experience: "2+ Years",
  email: "debajyotiupadhyaya@gmail.com",
  phone: "+91-XXXXXXXXXX", // Add your phone number
  location: "India",
  githubUsername: "parker594",
  linkedinUrl: "https://linkedin.com/in/debajyoti-upadhayaya", // Update with your LinkedIn
  githubUrl: "https://github.com/parker594",
} as const;

// About Section
export const ABOUT_INFO = {
  description: `As a Flutter developer and startup founder, I'm building an innovative 
    Online Dispute Resolution (ODR) system. My expertise spans full-stack development, 
    Node.js, and API creation, with a strong foundation in data structures.`,
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Technologies Mastered" },
    { value: "1", label: "Startup Founded" },
  ],
} as const;

// Skills organized by category
export const SKILLS = {
  "Frontend Development": [
    "React.js", "Flutter", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"
  ],
  "Backend Development": [
    "Node.js", "Express.js", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"
  ],
  "Mobile Development": [
    "Flutter", "Dart", "iOS Development", "Android Development", "Cross-platform"
  ],
  "Tools & Technologies": [
    "Git", "Docker", "AWS", "Firebase", "Vercel", "VS Code", "Postman"
  ],
  "Programming Languages": [
    "JavaScript", "TypeScript", "Dart", "Python", "C++", "Java"
  ],
} as const;

// Certifications
export const CERTIFICATIONS = [
  {
    title: "Flutter Development",
    issuer: "Google",
    date: "2023",
    description: "Advanced Flutter app development and state management"
  },
  {
    title: "Full-Stack JavaScript",
    issuer: "FreeCodeCamp",
    date: "2022",
    description: "Complete full-stack development with MERN stack"
  },
  {
    title: "API Design & Development",
    issuer: "Postman",
    date: "2023",
    description: "RESTful API design, testing, and documentation"
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "AWS",
    date: "2023",
    description: "AWS cloud services and deployment strategies"
  },
] as const;

// Projects - Update with your actual GitHub repositories
export const PROJECTS = [
  {
    title: "Hotel Booking App",
    description: "Full-stack hotel booking application with real-time availability, secure payments, and admin dashboard. Built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    githubUrl: "https://github.com/parker594/hotel-booking-app", // Update with actual URL
    liveUrl: "", // Add if deployed
    image: "hotel booking app", // For Unsplash search
  },
  {
    title: "Military Heat Sensor Detector",
    description: "IoT-based heat detection system for military applications with real-time monitoring, alert systems, and data analytics dashboard.",
    technologies: ["Flutter", "Firebase", "IoT", "Arduino", "Python"],
    githubUrl: "https://github.com/parker594/military-heat-sensor", // Update with actual URL
    liveUrl: "",
    image: "military sensor technology",
  },
  {
    title: "Leagalmitra ODR Platform",
    description: "Online Dispute Resolution platform connecting legal professionals with clients. Features video conferencing, document management, and case tracking.",
    technologies: ["Flutter", "Firebase", "Node.js", "WebRTC", "MongoDB"],
    githubUrl: "", // Private repository
    liveUrl: "https://leagalmitra.com", // Add if available
    image: "legal technology platform",
  },
  {
    title: "API Gateway Service",
    description: "Microservices API gateway with authentication, rate limiting, monitoring, and automatic documentation generation.",
    technologies: ["Node.js", "Express", "Redis", "MongoDB", "Docker"],
    githubUrl: "https://github.com/parker594/api-gateway", // Update with actual URL
    liveUrl: "",
    image: "api development",
  },
] as const;

// Experience Timeline
export const EXPERIENCE = [
  {
    period: "2024 - Present",
    title: "Founder & Lead Developer",
    company: "Leagalmitra",
    description: "Founded and developing an innovative Online Dispute Resolution (ODR) platform. Leading full-stack development, system architecture, and business strategy.",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    type: "startup" as const,
  },
  {
    period: "2023 - 2024",
    title: "Flutter Developer",
    company: "Freelance Projects",
    description: "Developed multiple mobile applications for clients, focusing on cross-platform development, UI/UX implementation, and backend integration.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
    type: "freelance" as const,
  },
  {
    period: "2022 - 2023",
    title: "Full-Stack Developer",
    company: "Personal Projects",
    description: "Built various web applications and APIs, learning modern development practices, database design, and deployment strategies.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    type: "learning" as const,
  },
  {
    period: "2022",
    title: "Programming Journey Started",
    company: "Self-Learning",
    description: "Began learning programming with C++, data structures, and algorithms. Transitioned to web development and mobile app development.",
    technologies: ["C++", "JavaScript", "HTML", "CSS"],
    type: "education" as const,
  },
] as const;

// Contact Information
export const CONTACT_INFO = {
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  location: PERSONAL_INFO.location,
  availability: "Available for freelance projects and full-time opportunities",
  responseTime: "Usually responds within 24 hours",
} as const;

// Social Links
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: PERSONAL_INFO.githubUrl,
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: PERSONAL_INFO.linkedinUrl,
    icon: "linkedin",
  },
  {
    name: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: "mail",
  },
] as const;

// Navigation Items
export const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

// Theme Configuration
export const THEME_CONFIG = {
  defaultTheme: "light",
  accentColor: "#0A74DA",
  fonts: {
    primary: "Inter, system-ui, sans-serif",
    secondary: "Poppins, system-ui, sans-serif",
  },
} as const;