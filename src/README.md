# Debajyoti Upadhayaya - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring interactive animations and Twilio WhatsApp integration.

## 🚀 Features

- **Interactive UI**: Smooth animations and hover effects using Motion (Framer Motion)
- **Responsive Design**: Mobile-first approach with clean, modern design
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Twilio Integration**: Contact form sends messages via WhatsApp using Twilio API
- **Type Safety**: Built with TypeScript for better development experience
- **Modern Stack**: React, Tailwind CSS v4, shadcn/ui components

## 📋 Sections

- **Hero**: Interactive name animation with particle effects
- **About**: Personal information with photo and statistics
- **Skills**: Technical skills organized by category
- **Certifications**: Professional certifications and achievements
- **Projects**: Portfolio projects with GitHub links
- **Experience**: Development journey timeline
- **Contact**: Form with Twilio WhatsApp integration

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS v4
- **UI Components**: shadcn/ui component library
- **Animations**: Motion (Framer Motion)
- **API Integration**: Twilio WhatsApp Business API
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
├── components/
│   ├── constants/
│   │   └── portfolioData.ts          # Centralized data configuration
│   ├── ui/                           # shadcn/ui components
│   ├── Header.tsx                    # Navigation with theme toggle
│   ├── HeroSection.tsx              # Interactive hero with animations
│   ├── AboutSection.tsx             # About me section
│   ├── SkillsSection.tsx            # Skills and technologies
│   ├── CertificationsSection.tsx    # Certifications display
│   ├── ProjectsSection.tsx          # Portfolio projects
│   ├── ExperienceSection.tsx        # Professional timeline
│   ├── ContactSection.tsx           # Contact form (Twilio integration)
│   └── Footer.tsx                   # Site footer
├── api/
│   └── send-whatsapp.js             # Twilio WhatsApp API endpoint
├── styles/
│   └── globals.css                  # Global styles and theme tokens
└── App.tsx                          # Main application component
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
TWILIO_WHATSAPP_NUMBER=whatsapp:your_whatsapp_number
```

### Portfolio Data

All portfolio content is centralized in `/components/constants/portfolioData.ts`:

```typescript
// Personal Information
export const PERSONAL_INFO = {
  name: "Debajyoti Upadhayaya",
  title: "Full-Stack Developer | API Engineer | Flutter Developer",
  email: "your.email@example.com",
  githubUsername: "parker594",
  // ... more fields
};

// Skills, Projects, Experience, etc.
export const SKILLS = { /* ... */ };
export const PROJECTS = [ /* ... */ ];
export const EXPERIENCE = [ /* ... */ ];
```

## 🔧 Customization Guide

### Adding New Projects

1. Edit `/components/constants/portfolioData.ts`
2. Add project to `PROJECTS` array:

```typescript
{
  title: "Your Project Name",
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://project-demo.com",
  image: "project screenshot", // For Unsplash search
}
```

### Updating Skills

Modify the `SKILLS` object in `portfolioData.ts`:

```typescript
export const SKILLS = {
  "Frontend Development": [
    "React.js", "Vue.js", "Angular", // Add your skills
  ],
  "Backend Development": [
    "Node.js", "Python", "Java", // Add your skills
  ],
  // Add new categories as needed
};
```

### Customizing Theme

Update theme colors in `/styles/globals.css`:

```css
:root {
  --primary: #0A74DA;        /* Your primary color */
  --accent: #0A74DA;         /* Your accent color */
  --background: #ffffff;     /* Background color */
  /* ... other theme variables */
}
```

## 📱 Twilio WhatsApp Integration

### Setup Instructions

1. **Twilio Account**: Create account at [twilio.com](https://twilio.com)
2. **WhatsApp Sandbox**: Enable WhatsApp sandbox for testing
3. **Environment Variables**: Add Twilio credentials to `.env`
4. **API Endpoint**: Configure `/api/send-whatsapp.js` with your settings

### How It Works

1. User fills contact form
2. Form data sent to `/api/send-whatsapp.js`
3. Twilio API sends WhatsApp message
4. Fallback to email if WhatsApp fails
5. Success/error toast notifications

### Message Template

Customize the WhatsApp message format in `ContactSection.tsx`:

```typescript
const whatsappMessage = `New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;
```

## 🚀 Deployment

### Vercel Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables Setup

In your deployment platform, add:
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`
- `TWILIO_WHATSAPP_NUMBER`

## 📝 GitHub Template Usage

This portfolio serves as a template for other developers. Key files to customize:

### Essential Files to Edit:
1. `/components/constants/portfolioData.ts` - All personal information
2. `/styles/globals.css` - Theme and colors
3. `/.env` - API credentials
4. `/api/send-whatsapp.js` - Twilio configuration

### Reusable Components:
- Contact form pattern from `ContactSection.tsx`
- Animation patterns from `HeroSection.tsx`
- Theme toggle from `Header.tsx`
- Card layouts from all section components

### Navigation for Editing:
1. **Personal Info**: `portfolioData.ts` → `PERSONAL_INFO`
2. **Projects**: `portfolioData.ts` → `PROJECTS` array
3. **Skills**: `portfolioData.ts` → `SKILLS` object
4. **Experience**: `portfolioData.ts` → `EXPERIENCE` array
5. **Contact Form**: `ContactSection.tsx` → form handling
6. **Twilio Settings**: `/api/send-whatsapp.js` → API configuration
7. **Theme Colors**: `/styles/globals.css` → CSS variables

## 🐛 Troubleshooting

### Common Issues:

1. **Twilio WhatsApp Not Working**:
   - Check environment variables
   - Verify WhatsApp sandbox setup
   - Test with Twilio console

2. **Animations Not Smooth**:
   - Check browser hardware acceleration
   - Reduce motion for accessibility

3. **Theme Toggle Issues**:
   - Verify CSS variables in globals.css
   - Check dark mode class application

4. **Mobile Responsiveness**:
   - Test on actual devices
   - Use browser dev tools for debugging

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## 📞 Contact

- **Email**: debajyotiupadhayaya@gmail.com
- **GitHub**: [@parker594](https://github.com/parker594)
- **LinkedIn**: [Debajyoti Upadhayaya](https://linkedin.com/in/debajyoti-upadhayaya)

---

Built with ❤️ by Debajyoti Upadhayaya