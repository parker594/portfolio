import { motion } from "motion/react";
import debajyotiPhoto from "figma:asset/b8bd7bce3b4041f1b1b2302d568feaead7690c79.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-30 scale-110"></div>
              <img
                src={debajyotiPhoto}
                alt="Debajyoti Upadhayaya"
                className="w-80 h-80 object-cover rounded-full relative z-10 border-4 border-primary/20"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <p className="text-lg leading-relaxed text-muted-foreground">
                As a Flutter developer and startup founder, I'm building an innovative 
                <span className="text-primary font-semibold"> Online Dispute Resolution (ODR) system</span>. 
                My expertise spans full-stack development, Node.js, and API creation, with a strong 
                foundation in data structures.
              </p>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}