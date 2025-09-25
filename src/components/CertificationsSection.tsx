import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Award } from "lucide-react";

const certifications = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    issueDate: "Oct 2024",
    logo: "🚀",
    status: "Active"
  },
  {
    title: "Apna College Delta Batch",
    issuer: "Apna College",
    issueDate: "May 2023",
    expiryDate: "May 2025",
    logo: "🎓",
    status: "In Progress"
  },
  {
    title: "Apna College Alpha Batch",
    issuer: "Apna College",
    issueDate: "Apr 2022",
    expiryDate: "Nov 2024",
    logo: "📚",
    status: "Completed"
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Licenses & Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-4">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-4xl">{cert.logo}</div>
                    <div className="flex-1">
                      <Badge 
                        variant={cert.status === 'Active' ? 'default' : cert.status === 'In Progress' ? 'secondary' : 'outline'}
                        className="mb-2"
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        Issued: {cert.issueDate}
                        {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                      </span>
                    </div>
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