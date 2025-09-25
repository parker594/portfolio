import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Contact Section Component
 * 
 * Features:
 * - Contact form with Gmail SMTP integration
 * - Automatically sends emails to debajyotiupadhayaya@gmail.com
 * - From notification12457@gmail.com using app password
 * - Professional HTML email formatting
 * - Reply-to functionality for easy responses
 * - Social media links and contact information
 * - Responsive design with animations
 * - Fallback to email client if backend fails
 */

const PERSONAL_INFO = {
  email: 'debajyotiupadhayaya@gmail.com',
  githubUrl: 'https://github.com/parker594',
  linkedinUrl: 'https://linkedin.com/in/Debajyoti-Upadhayaya'
};

const CONTACT_INFO = {
  availability: 'Currently available for new projects',
  responseTime: 'Usually responds within 3 hours',
  location: 'Bhubaneswar,odisha,india'
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handle form submission
   * Sends email automatically to debajyotiupadhayaya@gmail.com using Gmail SMTP
   * Works in both development (localhost) and production (Netlify Functions)
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Determine API endpoint based on environment
      const apiEndpoint = process.env.NODE_ENV === 'production' 
        ? '/api/send-email'  // Netlify Functions endpoint
        : 'http://localhost:3003/api/send-email';  // Development endpoint

      // Send email using our Gmail SMTP backend
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Email sent successfully:', result);
        toast.success("Message sent successfully! I'll get back to you soon.");
        resetForm();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Email sending failed');
      }
      
    } catch (error) {
      console.error('Email send error:', error);
      
      // Fallback to mailto if backend fails
      const subject = `Portfolio Contact: ${formData.name}`;
      const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent from portfolio contact form
From: notification12457@gmail.com`;
      
      const mailtoLink = `mailto:debajyotiupadhayaya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      toast.error("Direct send failed. Opening email client as fallback.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  /**
   * Handle input changes
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  /**
   * Open social media links
   */
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {CONTACT_INFO.availability}. Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Email Integration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Send Message
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {CONTACT_INFO.responseTime}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      required
                      className="border-border/50 focus:border-primary resize-none transition-colors"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Message will be sent directly to my email
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Information Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{CONTACT_INFO.location} (Remote)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-muted-foreground">Available for new projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Primary Social Links */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    onClick={() => openLink(PERSONAL_INFO.githubUrl)}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    onClick={() => openLink(PERSONAL_INFO.linkedinUrl)}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </div>
                
                {/* Direct Contact Options */}
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me Directly
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fun Fact Card */}
            <Card className="bg-primary/5 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">💡</div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Fun Fact:</strong> I love solving complex problems and believe that 
                    the best solutions come from understanding both the technical challenges 
                    and the human needs behind them.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}