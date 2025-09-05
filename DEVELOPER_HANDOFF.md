# Lyfevine Landing Page - Developer Handoff

## 🎯 Project Overview
This is a modern, responsive landing page for Lyfevine, a wellness technology platform. The page is built with React, TypeScript, and Tailwind CSS, featuring a sleek design with smooth animations and a professional user experience.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
npm install
npm run dev
```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/           # Main page sections
│   ├── HeroSection.tsx           # Hero with video background
│   ├── Navbar.tsx               # Navigation bar
│   ├── WhyLyfevineSection.tsx   # Benefits section
│   ├── CoreBenefitsSection.tsx  # Core features
│   ├── HowItWorksSection.tsx    # Process steps with animated arrows
│   ├── WellnessServicesSection.tsx # Services overview
│   ├── CallToActionSection.tsx  # CTA section
│   ├── Footer.tsx              # Footer
│   ├── IconPreview.tsx         # Icon testing tool (dev only)
│   └── ui/                     # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── interactive-animated-arrow-icon.tsx  # Custom arrow component
│       └── ... (other shadcn/ui components)
├── assets/              # Images and media
│   ├── hero-background.jpg
│   ├── hero-wellness-pro.jpg
│   ├── lyfevine-logo.png
│   └── lyfevine-text.png
├── pages/               # Page components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css           # Global styles and animations
```

## 🎨 Design System

### Brand Colors
- **Primary Green**: `#08a54f` (brand-green)
- **Light Green**: `#10b981` (brand-green-light)
- **Dark Green**: `#065f46` (brand-green-dark)
- **Navy**: `#1e3a8a` (brand-navy)
- **Light Navy**: `#3b82f6` (brand-navy-light)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body Text**: Inter (Google Fonts)
- **Custom Classes**: `.heading-hero`, `.body-large`, `.cta-text`, etc.

### Animations
- **Arrow Flow**: Custom animation for process arrows
- **Fade In**: `animate-fade-in` for section reveals
- **Slide Up**: `animate-slide-up` for card animations
- **Float**: `animate-float` for floating elements

## 🔧 Key Components

### InteractiveAnimatedArrowIcon
Custom arrow component used in the "How It Works" section:
- **Icon**: MoveRight from Lucide React
- **Animation**: Custom arrowFlow keyframes
- **Color**: Bright green (#10b981) with glow effect
- **Size**: 64px with proper spacing

### HeroSection
- Video background with overlay
- Responsive layout with image
- Call-to-action buttons
- Professional typography

### HowItWorksSection
- Three-step process with animated arrows
- Glass-effect cards
- Responsive grid layout
- Custom animations

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Responsive typography and spacing
- Mobile-optimized navigation

## 🎯 Development Notes

### Custom Animations
All custom animations are defined in `src/index.css`:
- `@keyframes arrowFlow` - Arrow movement animation
- `@keyframes float` - Floating animation
- `@keyframes pulse-glow` - Glow effect
- `@keyframes wave` - Wave animation
- `@keyframes breathing` - Breathing effect

### Icon System
- Uses Lucide React for all icons
- Custom IconPreview component for testing (available at `/icon-preview`)
- Consistent sizing and coloring

### Video Background
- Hero section uses `placeholder-wellness-video.mp4`
- Responsive video with overlay
- Optimized for performance

## 🚀 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📋 TODO for Developer

### Immediate Tasks
1. **Replace placeholder video** with actual Lyfevine video
2. **Update hero image** with professional wellness imagery
3. **Review and optimize** all images for web performance
4. **Test responsive design** across all devices
5. **Implement analytics** tracking

### Future Enhancements
1. **Add loading states** for better UX
2. **Implement form validation** for contact forms
3. **Add more animations** for micro-interactions
4. **Optimize bundle size** for faster loading
5. **Add accessibility features** (ARIA labels, keyboard navigation)

## 🐛 Known Issues
- None currently identified

## 📞 Support
For questions about this codebase, refer to:
- Tailwind CSS documentation
- Lucide React icon library
- React Router documentation
- Vite build tool documentation

## 🔄 Version History
- **v1.0** - Initial landing page with all sections
- **v1.1** - Added custom animations and improved typography
- **v1.2** - Implemented Lucide React icons and cleaned up codebase
- **v1.3** - Added animated arrows and enhanced visual effects

---

**Last Updated**: January 2025
**Developer**: Ready for handoff
