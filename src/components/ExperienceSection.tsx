import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Personal Projects & Freelance",
    period: "Jan 2024 – Present",
    location: "Remote",
    description: "Developing mobile and web applications as a self-taught developer. Building real-world projects including hotel booking systems and IoT applications while continuously learning new technologies.",
    achievements: [
      "Built Hotel Booking App with Flutter and Firebase",
      "Developed Military Heat Sensor Detector using IoT integration",
      "Created multiple API endpoints using Node.js and Express",
      "Implemented responsive web designs with React and TypeScript"
    ],
    type: "Development",
    current: true
  },
  {
    title: "Open Source Contributor",
    company: "GitHub Community",
    period: "Jun 2023 – Present",
    location: "Remote",
    description: "Active contributor to open source projects, focusing on Flutter development, API design, and web technologies. Participating in hackathons and coding challenges to improve skills.",
    achievements: [
      "Contributed to 8+ open source repositories",
      "Participated in 3 online hackathons",
      "Built portfolio of 12+ personal projects",
      "Maintained consistent GitHub activity with 200+ commits"
    ],
    type: "Open Source",
    current: true
  },
  {
    title: "Self-Taught Developer Journey",
    company: "Independent Learning",
    period: "Jan 2023 – Dec 2023",
    location: "Self-paced",
    description: "Started programming journey with Flutter and Dart. Progressed through online courses, documentation, and hands-on projects to build a strong foundation in mobile and web development.",
    achievements: [
      "Completed Flutter & Dart Bootcamp course",
      "Built first mobile app with basic CRUD operations",
      "Learned JavaScript, Node.js, and React fundamentals",
      "Established daily coding practice and problem-solving routine"
    ],
    type: "Learning",
    current: false
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Journey</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-4">
            Two years of continuous learning and building impactful projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            {exp.current && (
                              <Badge className="bg-primary text-primary-foreground text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="border-primary text-primary">
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <p className="font-semibold text-sm">Key Achievements:</p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}