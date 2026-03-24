# Component Architecture & Code Overview

## 🏗️ Application Structure

```
┌─────────────────────────────────────────────────────────────┐
│                      App.jsx (Root)                         │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
    ┌────────┐          ┌──────────┐          ┌──────────┐
    │ Navbar │          │ Hero     │          │ About    │
    │        │          │          │          │          │
    │• Sticky│          │• Hero CTA│          │• Stats   │
    │• Burger│          │• BG      │          │• Info    │
    │• Links │          │• Anim    │          │• Image   │
    └────────┘          └──────────┘          └──────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
    ┌──────────┐         ┌─────────┐          ┌─────────┐
    │ Services │         │ Gallery │          │ Contact │
    │          │         │         │          │         │
    │ ┌──────┐ │         │• Grid   │          │• Form   │
    │ │Card  │ │  (x6)   │• Images │  (x6)    │• Info   │
    │ └──────┘ │         │• Hover  │          │• Fields │
    │ (Reuse)  │         │• SVG    │          │• Submit │
    └──────────┘         └─────────┘          └─────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
    ┌──────────┐         ┌──────────┐          ┌────────┐
    │ BookNow  │         │ Footer   │          │ (Layout)
    │          │         │          │          │
    │• Dark BG │         │• Links   │          │
    │• Options │         │• Hours   │          │
    │• Features│         │• Socials │          │
    └──────────┘         └──────────┘          └────────┘
```

## 📋 Component Details

### 1. Navbar.jsx
**Purpose**: Sticky header with navigation and mobile menu

```javascript
State:
  - isMenuOpen (boolean)

Functions:
  - toggleMenu()
  - closeMenu()
  - handleNavClick()

Features:
  - Sticky positioning
  - Hamburger animation
  - Mobile menu with smooth open/close
  - Navigation links
  - CTA button
  - Accessibility: ARIA labels
```

**Key Styling**:
- Position: sticky; top: 0
- Mobile: max-height animation
- Hamburger: transform rotation

### 2. Hero.jsx
**Purpose**: Full-screen welcome section with CTA

```javascript
Content:
  - Main heading
  - Subtitle
  - CTA button

Features:
  - Animated background gradient
  - Responsive typography (clamp)
  - Smooth scroll to contact
  - Dark premium aesthetic
```

**Key Styling**:
- Min-height: 100vh
- Animated background
- Gradient overlays
- Flexbox centering

### 3. About.jsx
**Purpose**: Business information and statistics

```javascript
Content:
  - Company story (2 paragraphs)
  - Three statistics cards
  - Placeholder image

Features:
  - Two-column layout (desktop)
  - Hover effects on stats
  - SVG placeholder with circles/paths
  - Responsive grid
```

**Key Styling**:
- Grid: 1fr 1fr (desktop) → 1fr (mobile)
- Hover: translateY(-4px)
- Stats background with rounded corners

### 4. Services.jsx & ServiceCard.jsx
**Purpose**: Display services in responsive grid with reusable cards

**Services.jsx**:
```javascript
Data:
  - services array (6 items)
  - Each has: id, name, description, price, icon

Children:
  - ServiceCard component (x6)
```

**ServiceCard.jsx**:
```javascript
Props:
  - service (object)

Render:
  - Icon emoji
  - Service name
  - Description
  - Price
  - Book button

Features:
  - Hover scale animation
  - Button color inversion
  - Flex column layout
```

**Key Styling**:
- Grid: repeat(auto-fit, minmax(300px, 1fr))
- Card: box-shadow, hover transform
- Flex: height 100% for consistent sizing

### 5. Gallery.jsx
**Purpose**: Responsive image showcase grid

```javascript
Data:
  - galleryImages array (6 items)
  - Each has: id, title

Render:
  - Grid of gallery items
  - SVG placeholder per item
  - Hover overlay with title

Features:
  - Hover overlay effect
  - Gradient SVG backgrounds
  - Responsive square aspect ratio
  - Smooth opacity transitions
```

**Key Styling**:
- Grid: repeat(auto-fit, minmax(250px, 1fr))
- Aspect ratio: 1 (square)
- Overlay: position absolute, opacity animation

### 6. Contact.jsx
**Purpose**: Contact form and business information

```javascript
State:
  - formData (object with name, email, phone, message)
  - submitted (boolean)

Functions:
  - handleChange()
  - handleSubmit()

Features:
  - Form validation (required fields)
  - Success message feedback
  - Business info cards
  - Phone/email links
  - Responsive form layout
```

**Form Fields**:
- Name (text, required)
- Email (email, required)
- Phone (tel, optional)
- Message (textarea, required)

**Key Styling**:
- Two-column layout (desktop)
- Form inputs with focus styles
- Success message animation
- Info cards with hover

### 7. BookNow.jsx
**Purpose**: Call-to-action section with booking options

```javascript
Features:
  - Three booking method cards
  - Feature checklist (4 items)
  - Links to call, email, contact form
  - Dark gradient background
  - Smooth scroll on "Go to Form"

Content:
  - Call option with phone link
  - Email option with mailto link
  - Form option with scroll function
  - Feature checkmarks
```

**Key Styling**:
- Dark gradient background
- Card hover: scale & border color
- Feature icons: circular badges
- Mobile: single column

### 8. Footer.jsx
**Purpose**: Complete footer with links and information

```javascript
Content:
  - Company name & description
  - Quick navigation links
  - Business hours
  - Contact information
  - Social media links
  - Copyright with dynamic year

Features:
  - Four-column layout (desktop)
  - Social icons with hover effects
  - Links with underline hover
  - Dynamic copyright year
  - Semantic footer element
```

**Key Styling**:
- Grid: repeat(auto-fit, minmax(250px, 1fr))
- Dark background
- Gold accent colors
- Social icons: circular with borders

---

## 🎨 Global Styling

### CSS Variables (App.css)
```css
:root {
  --primary-color: #1a1a1a;      /* Deep black */
  --accent-color: #d4af37;        /* Premium gold */
  --text-light: #ffffff;          /* White */
  --text-dark: #333333;           /* Dark gray */
  --bg-light: #f5f5f5;            /* Light gray */
  --border-color: #e0e0e0;        /* Light border */
  --transition: all 0.3s ease;    /* Standard transition */
}
```

### Responsive Breakpoints
```css
Desktop:  1200px and above   (full 2-3 column layouts)
Tablet:   769px - 1199px    (flexible grid)
Mobile:   768px and below    (single column, hamburger)
```

### Typography
```css
Font Stack: System fonts (-apple-system, BlinkMacSystemFont, etc.)
Responsive: clamp(min, preferred, max)

Example: font-size: clamp(1rem, 3vw, 2rem)
```

### Animations
```css
Hover Effects:
  - Scale: transform: scale(1.05)
  - Lift: transform: translateY(-4px)
  - Colors: smooth color transitions

Transitions:
  - Standard: all 0.3s ease
  - Menu: max-height 0.3s ease
  - Fade: opacity 0.3s ease
```

---

## 🔄 Data Flow

```
User Action
    │
    ▼
Component State Update (e.g., isMenuOpen)
    │
    ▼
Re-render with new state
    │
    ▼
CSS transitions/animations
    │
    ▼
Visual update
```

### Form Data Flow (Contact.jsx)
```
Form Input
    │
    ▼
handleChange() updates formData state
    │
    ▼
Input value updates in real-time
    │
    ▼
User submits form
    │
    ▼
handleSubmit() validates
    │
    ▼
Success message displayed
    │
    ▼
Form reset after 3 seconds
```

---

## 🔌 Props & State Summary

| Component | State | Props |
|-----------|-------|-------|
| Navbar | isMenuOpen | - |
| Hero | - | - |
| About | - | - |
| Services | - | - |
| ServiceCard | - | service (obj) |
| Gallery | - | - |
| Contact | formData, submitted | - |
| BookNow | - | - |
| Footer | - | - |

---

## 📦 Reusability

### ServiceCard
The only component that's reused is ServiceCard, which is used 6 times in Services.jsx with different data passed as props.

### Extending Reusability
To create more reusable components:
1. Create a `Button` component
2. Create an `Card` wrapper
3. Create a `Section` container
4. Extract common patterns

---

## 🎯 CSS Organization

Each component has a paired CSS file:

```
Component:    Hero.jsx
Styles:       Hero.css
Pattern:      hero { }
              .hero-title { }
              .hero-subtitle { }
              .hero-cta { }
              @media (max-width: 768px) { }
```

Benefits:
- Clear organization
- Easy to maintain
- Self-contained styling
- No style conflicts
- Global App.css for base styles

---

## 🚀 Performance Considerations

✅ **Minimal Dependencies**: React only
✅ **CSS Efficiency**: Flat selectors, no nesting overhead
✅ **No Heavy Libraries**: Plain React hooks
✅ **Vite Optimization**: Fast builds and hot reload
✅ **Code Splitting**: Automatic with Vite
✅ **Image Optimization**: SVG placeholders (lightweight)

---

## 🔐 Accessibility Features

| Component | A11y Features |
|-----------|---------------|
| Navbar | aria-label, aria-expanded, semantic nav |
| Hero | Semantic heading hierarchy |
| Services | Semantic article structure |
| ServiceCard | aria-label on buttons |
| Gallery | Semantic figure elements |
| Contact | Form labels, semantic form |
| BookNow | Semantic section |
| Footer | Semantic footer |

All Components:
- Focus states on interactive elements
- Color contrast (AA level)
- Semantic HTML
- Screen reader friendly

---

## 📊 Code Metrics

- **Total Components**: 9
- **Reusable Components**: 1 (ServiceCard)
- **Lines of Code**: ~1,500
- **CSS Files**: 9
- **Total CSS**: ~1,200 lines
- **Dependencies**: 1 (React)
- **Bundle Size**: ~50KB (React included)

---

**This architecture provides a solid foundation for a professional, maintainable, and scalable barber shop website.**
