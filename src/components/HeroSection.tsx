import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const name = "Debajyoti Upadhayaya";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs that follow mouse */}
        <div 
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-accent/15 rounded-full blur-2xl transition-all duration-1500 ease-out"
          style={{
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -20, 20, -20],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      <motion.div 
        style={{ y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Interactive Name with proper spacing for descenders */}
        <motion.div
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="inline-flex flex-wrap justify-center items-baseline gap-x-1 sm:gap-x-2 leading-none py-4">
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`
                  text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
                  font-bold inline-block
                  ${char === ' ' ? 'w-2 sm:w-4 md:w-6' : 'hover:scale-110 hover:text-primary transition-all duration-300 cursor-pointer'}
                  bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent
                  [text-shadow:0_2px_10px_rgba(10,116,218,0.3)]
                  leading-[1.2] pb-2
                `}
                whileHover={char !== ' ' ? { 
                  scale: 1.2, 
                  rotate: [-5, 5, -5, 0],
                  transition: { duration: 0.3 } 
                } : {}}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        {/* Animated Role Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {['Founder @ Leagalmitra', 'Flutter Dev', 'Full-Stack Developer', 'API Engineer'].map((role, index) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm md:text-base backdrop-blur-sm hover:bg-primary/20 transition-all duration-300"
            >
              {role}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tagline with typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-10"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Building impactful digital solutions with 
            <span className="text-primary font-semibold"> AI</span>,
            <span className="text-accent font-semibold"> APIs</span>, and 
            <span className="text-primary font-semibold"> modern tech</span>
          </p>
        </motion.div>
        
        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="group-hover:mr-2 transition-all duration-300">View Projects</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="inline-block"
              >
                →
              </motion.span>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg backdrop-blur-sm hover:shadow-lg transition-all duration-300 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                className="inline-block mr-2"
              >
                ✉
              </motion.span>
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2 hidden sm:block">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}