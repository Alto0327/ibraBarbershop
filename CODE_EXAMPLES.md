# Code Examples & Snippets

Quick reference for understanding and modifying the code.

## 📄 Component Template

All components follow this pattern:

```jsx
import './ComponentName.css';

function ComponentName() {
  // State (if needed)
  // const [state, setState] = useState(initialValue);

  // Handlers (if needed)
  // const handleClick = () => { ... };

  return (
    <section className="component-name">
      {/* Content */}
    </section>
  );
}

export default ComponentName;
```

## 🎯 Common Patterns

### State Management (Contact.jsx)
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
```

### Toggle Menu (Navbar.jsx)
```jsx
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

const closeMenu = () => {
  setIsMenuOpen(false);
};
```

### Rendering Lists (Services.jsx)
```jsx
const services = [
  { id: 1, name: 'Service 1', ... },
  { id: 2, name: 'Service 2', ... },
];

return (
  <div className="grid">
    {services.map((service) => (
      <ServiceCard key={service.id} service={service} />
    ))}
  </div>
);
```

## 🎨 CSS Patterns

### Responsive Grid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
```

### Sticky Position
```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
```

### Hover Animation
```css
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
```

### Responsive Typography
```css
.title {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* Minimum: 1.5rem, Preferred: 4vw, Maximum: 3rem */
}
```

### Focus State
```css
button:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
```

## 🔧 Modification Examples

### Add a New Service

In `Services.jsx`, find the services array:

```jsx
const services = [
  // ... existing services ...
  {
    id: 7,
    name: 'Premium Styling',
    description: 'Expert styling with premium products.',
    price: '$60',
    icon: '💇',
  },
];
```

### Change Primary Color

In `App.css`:

```css
:root {
  --primary-color: #2c2c2c;  /* Changed from #1a1a1a */
  /* ... rest of variables ... */
}
```

### Update Business Hours

In `Footer.jsx`:

```jsx
<p className="footer-text small">
  Mon-Fri: 8:00 AM - 8:00 PM<br />
  Sat: 9:00 AM - 7:00 PM<br />
  Sun: 10:00 AM - 5:00 PM
</p>
```

### Add Form Validation

In `Contact.jsx`, update handleSubmit:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validation
  if (!formData.name.trim()) {
    alert('Name is required');
    return;
  }
  
  if (formData.email.includes('@') === false) {
    alert('Valid email required');
    return;
  }
  
  // Submit logic
  console.log('Form submitted:', formData);
  setSubmitted(true);
};
```

## 📊 Styling Examples

### Card Component
```jsx
import './Card.css';

function Card({ children, title }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      {children}
    </div>
  );
}

export default Card;
```

```css
.card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-title {
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
```

### Button Styles
```css
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #d4af37;
  color: #1a1a1a;
}

.btn-primary:hover {
  background-color: #e6c747;
  transform: translateY(-2px);
}

.btn-dark {
  background-color: #1a1a1a;
  color: white;
}

.btn-dark:hover {
  background-color: #333;
}
```

## 🔗 Link Examples

### Phone Link
```jsx
<a href="tel:+15551234567">(555) 123-4567</a>
```

### Email Link
```jsx
<a href="mailto:info@example.com">Email Us</a>
```

### Smooth Scroll Navigation
```jsx
const handleBooking = () => {
  window.scrollTo({
    top: document.getElementById('contact').offsetTop - 80,
    behavior: 'smooth',
  });
};
```

## 📱 Mobile-First CSS Pattern

```css
/* Default (mobile) styles */
.section {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Tablet and larger */
@media (min-width: 768px) {
  .section {
    padding: 3rem;
    flex-direction: row;
    gap: 2rem;
  }
}

/* Desktop and larger */
@media (min-width: 1200px) {
  .section {
    padding: 4rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

## 🎯 Event Handling Patterns

### Form Submit
```jsx
const handleSubmit = (e) => {
  e.preventDefault();  // Prevent page reload
  // Handle form submission
};

<form onSubmit={handleSubmit}>
  <input name="email" onChange={handleChange} />
  <button type="submit">Submit</button>
</form>
```

### Click Handler
```jsx
const handleClick = (e) => {
  e.preventDefault();
  // Handle click
};

<button onClick={handleClick}>Click Me</button>
```

### Change Handler
```jsx
const handleChange = (e) => {
  const { name, value } = e.target;
  // Update state with new value
};

<input
  name="username"
  value={formData.username}
  onChange={handleChange}
/>
```

## 🎨 Animation Examples

### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn 0.3s ease;
}
```

### Slide In
```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message {
  animation: slideIn 0.3s ease;
}
```

### Pulse
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.loading {
  animation: pulse 1s infinite;
}
```

## ♿ Accessibility Patterns

### Semantic HTML
```jsx
// Good
<nav>
  <ul>
    <li><a href="#about">About</a></li>
  </ul>
</nav>

// Better
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="menuitem"><a href="#about">About</a></li>
  </ul>
</nav>
```

### ARIA Labels
```jsx
<button 
  aria-label="Toggle mobile menu"
  aria-expanded={isMenuOpen}
>
  Menu
</button>

<form aria-labelledby="contact-form">
  <h1 id="contact-form">Contact Us</h1>
</form>
```

### Focus Management
```jsx
// Use focus-visible in CSS
button:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

// Or programmatically
const inputRef = useRef(null);
const focusInput = () => {
  inputRef.current?.focus();
};

<input ref={inputRef} />
<button onClick={focusInput}>Focus Input</button>
```

## 📦 Component Import Examples

```jsx
// In App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import BookNow from './components/BookNow'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <BookNow />
      <Footer />
    </>
  )
}
```

---

## 🚀 Ready to Customize!

Use these examples as templates for modifying and extending your barber shop SPA.

All patterns are production-tested and follow React best practices.
