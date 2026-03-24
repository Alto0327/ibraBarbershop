# Ibra Barbershop - React SPA

A production-style, mobile-first single-page application for a premium barber shop built with React and Vite.

## 🎯 Features

- **Sticky Navbar** with smooth scroll navigation and responsive hamburger menu
- **Mobile-First Design** fully responsive across all devices
- **Smooth Scrolling** with automatic menu closing on link clicks
- **Complete Sections**:
  - Home (Hero)
  - About
  - Services (responsive card grid)
  - Gallery (responsive image grid)
  - Contact (with business info and contact form)
  - Book Now (CTA with multiple booking options)
  - Footer (with social links and business details)
- **Reusable Components** with clean architecture
- **Accessible Navigation** with semantic HTML
- **Professional Styling** with premium barber shop aesthetic
- **Subtle Animations** and hover effects throughout
- **Performance Optimized** with Vite bundling

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx & Navbar.css
│   ├── Hero.jsx & Hero.css
│   ├── About.jsx & About.css
│   ├── Services.jsx & Services.css
│   ├── ServiceCard.jsx & ServiceCard.css
│   ├── Gallery.jsx & Gallery.css
│   ├── Contact.jsx & Contact.css
│   ├── BookNow.jsx & BookNow.css
│   └── Footer.jsx & Footer.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173/`

## 🎨 Design System

### Color Palette
- **Primary**: #1a1a1a (Deep Black)
- **Accent**: #d4af37 (Premium Gold)
- **Text Light**: #ffffff (White)
- **Text Dark**: #333333 (Dark Gray)
- **Background Light**: #f5f5f5 (Light Gray)

### Typography
- Font Family: System fonts (-apple-system, BlinkMacSystemFont, etc.)
- Font Smoothing: Optimized for all platforms
- Responsive sizing with clamp() for fluid typography

### Transitions & Animations
- Smooth transitions: 0.3s ease
- Hover effects on interactive elements
- Reduced motion support for accessibility

## 🔧 Component Overview

### Navbar
- Sticky positioning
- Mobile hamburger menu with smooth animation
- Auto-close on link click
- Accessible navigation with aria labels
- CTA button highlighting

### Hero
- Full viewport height with animated background
- Prominent headline and CTA
- Responsive typography with clamp()

### About
- Two-column layout (desktop) / single column (mobile)
- Statistics display with hover effects
- SVG placeholder image

### Services
- Responsive grid layout (auto-fit)
- Service cards with icons, description, and price
- Interactive book buttons

### Gallery
- Responsive image grid
- Hover overlay effects
- Placeholder SVG images with gradients

### Contact
- Two-column layout (desktop)
- Business information cards
- Functional contact form with validation
- Success message feedback

### BookNow
- Dark background with gradient
- Multiple booking method cards
- Feature checklist
- Smooth scroll navigation to contact form

### Footer
- Multi-column layout
- Social media links
- Quick navigation
- Business hours and contact info
- Current year dynamic copyright

## 💻 Customization Guide

### Adding Your Content

1. **Update Business Info** in `components/Contact.jsx` and `components/Footer.jsx`
   - Replace placeholder address, phone, email

2. **Modify Services** in `components/Services.jsx`
   - Edit the `services` array with your offerings

3. **Replace Images**
   - Gallery images in `components/Gallery.jsx`
   - About section image: Update SVG or add real images

4. **Customize Colors**
   - Edit CSS variables in `src/App.css`:
     - `--primary-color`
     - `--accent-color`

### Extending Components

All components follow a consistent pattern:
- Functional components with React hooks
- CSS modules (component.css paired with component.jsx)
- Semantic HTML
- Accessibility attributes

To add a new component:
1. Create `ComponentName.jsx` in `src/components/`
2. Create `ComponentName.css` with styling
3. Import in `App.jsx`
4. Add to the main render

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on navigation and interactive elements
- Focus states on all interactive elements
- Reduced motion media query support
- Color contrast compliant

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (2-column layouts)
- **Tablet**: 769px - 1199px (flexible grids)
- **Mobile**: 768px and below (single column, optimized spacing)

## 🚀 Production Deployment

```bash
# Build optimized production bundle
npm run build

# The 'dist' folder contains all static files ready for deployment
```

### Deployment Options
- Vercel (recommended, zero-config)
- Netlify (with netlify.toml)
- GitHub Pages
- Traditional hosting (copy dist/ folder)

## 📝 License

This project is provided as a complete template for barber shop websites.

## ✨ Future Enhancements

Potential additions:
- Online booking integration
- Client testimonials section
- Team member profiles
- Blog section
- Photo upload to gallery
- Email notifications for bookings
- Analytics integration
- Dark mode toggle

---

Built with ❤️ for premium barber shops. Ready to scale and customize.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
