import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

const skills = [
  { name: "Flutter", level: 85, icon: "📱", category: "Mobile" },
  { name: "JavaScript", level: 75, icon: "🟨", category: "Frontend" },
  { name: "TypeScript", level: 70, icon: "🔷", category: "Frontend" },
  { name: "React", level: 70, icon: "⚛️", category: "Frontend" },
  { name: "Node.js", level: 75, icon: "🟢", category: "Backend" },
  { name: "API Development", level: 80, icon: "🔗", category: "Backend" },
  { name: "Git & GitHub", level: 85, icon: "🐙", category: "Tools" },
  { name: "Firebase", level: 70, icon: "🔥", category: "Database" },
  { name: "MongoDB", level: 65, icon: "🍃", category: "Database" },
  { name: "Express.js", level: 70, icon: "🚀", category: "Backend" },
  { name: "Dart", level: 85, icon: "🎯", category: "Language" },
  { name: "HTML/CSS", level: 80, icon: "🎨", category: "Frontend" }
];

const categories = ["Mobile", "Frontend", "Backend", "Database", "Tools", "Language"];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            2 years of hands-on development experience building mobile apps, web applications, and APIs
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-center mb-6 text-primary">{category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.filter(skill => skill.category === category).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-3xl">{skill.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Proficiency</span>
                              <span className="text-primary font-medium">{skill.level}%</span>
                            </div>
                            <Progress 
                              value={skill.level} 
                              className="h-2"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}