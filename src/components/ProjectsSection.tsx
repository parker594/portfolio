import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Hotel Booking App",
    description: "Full-stack hotel reservation management system with real-time booking, payment integration, and admin dashboard. Built with modern web technologies for seamless user experience.",
    image: "https://images.unsplash.com/photo-1663147737123-9cbd239fc3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJvb2tpbmclMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzU4ODIzNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["Flutter", "Node.js", "MongoDB", "REST API"],
    githubUrl: "https://github.com/parker594/hotel-booking-app",
    featured: true
  },
  {
    title: "Military Heat Sensor Detector",
    description: "Advanced defense system for detecting heat signals with real-time analysis, threat assessment, and automated alerts. Designed for military and security applications.",
    image: "https://images.unsplash.com/photo-1603459404909-2ce99c16ab54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF0JTIwc2Vuc29yJTIwdGVjaG5vbG9neSUyMG1pbGl0YXJ5fGVufDF8fHx8MTc1ODgyMzQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["Python", "Computer Vision", "IoT", "Machine Learning"],
    githubUrl: "https://github.com/parker594/military-heat-sensor",
    featured: true
  },
  {
    title: "Leagalmitra ODR Platform",
    description: "Revolutionary Online Dispute Resolution system leveraging AI to streamline legal processes, mediation, and case management for faster justice delivery.",
    image: "https://images.unsplash.com/photo-1624638299925-6966fac6914f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMHRlY2glMjBqdXN0aWNlfGVufDF8fHx8MTc1ODgyMzU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["React", "Node.js", "AI/ML", "PostgreSQL"],
    githubUrl: "https://github.com/parker594/leagalmitra",
    featured: true
  },
  {
    title: "API Gateway Service",
    description: "Scalable microservices API gateway with authentication, rate limiting, load balancing, and comprehensive monitoring for enterprise applications.",
    image: "https://images.unsplash.com/photo-1585216274151-e3debff99c0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBnYXRld2F5JTIwc2VydmljZXxlbnwxfHx8fDE3NTg4MjM2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["Node.js", "Express", "Redis", "Docker"],
    githubUrl: "https://github.com/parker594/api-gateway",
    featured: false
  },
  {
    title: "Flutter E-commerce App",
    description: "Modern mobile shopping experience with smooth animations, secure payments, inventory management, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1650601624491-effe3c99dd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHV0dGVyJTIwZWNvbW1lcmNlJTIwYXBwfGVufDF8fHx8MTc1ODgyMzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["Flutter", "Firebase", "Stripe", "Provider"],
    githubUrl: "https://github.com/parker594/flutter-ecommerce",
    featured: false
  },
  {
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with real-time updates, team collaboration, advanced analytics, and customizable workflows.",
    image: "https://images.unsplash.com/photo-1758521961744-939de61d5cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg3OTIxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["React", "TypeScript", "GraphQL", "Prisma"],
    githubUrl: "https://github.com/parker594/task-dashboard",
    featured: false
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of innovative solutions and cutting-edge applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? "lg:col-span-1" : ""}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 h-full overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}