import { useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

/**
 * Main App Component
 * 
 * Portfolio Website for Debajyoti Upadhayaya
 * - Full-Stack Developer, API Engineer, Flutter Developer
 * - Founder @ Leagalmitra
 * - 2+ Years Development Experience
 * 
 * Features:
 * - Responsive design with light/dark theme
 * - Interactive animations using Motion
 * - Twilio WhatsApp integration for contact form
 * - Modern glass-morphism UI design
 * - Smooth scroll navigation
 */
export default function App() {
  // Setup smooth scrolling for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = id ? document.getElementById(id) : null;
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Portfolio Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      {/* Site Footer */}
      <Footer />
      
      {/* Toast Notification System */}
      <Toaster position="bottom-right" />
    </div>
  );
}