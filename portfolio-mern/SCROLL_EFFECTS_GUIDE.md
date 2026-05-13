# Portfolio Scroll Effects & Background Image Guide

## ✨ Scroll Effects Implemented

Your portfolio now has sophisticated scroll animations that make it look professional and interactive:

### 1. **Section Entrance Animations**
- Sections fade in and slide up as you scroll to them
- Hero section animates from left with content, right with visual cards
- About section animates with left slide for content
- Skills cards scale up smoothly (staggered timing)
- Projects cards rotate slightly while fading in
- Experience timeline slides in

### 2. **Hero Section Enhancements**
- Floating gradient orbs animate up and down (6-7 second cycles)
- Background has subtle blue gradient overlay
- Title has shimmer gradient effect
- Badge pulses with a glow effect
- Call-to-action buttons have smooth hover transforms

### 3. **Parallax & Scroll Triggers**
- Created custom hooks for scroll detection:
  - `useScrollAnimation()`: Detects when elements enter viewport
  - `useParallax()`: Creates parallax scrolling effects
  - `useScrollTrigger()`: Enables scroll-based percentage calculations

### 4. **Staggered Card Animations**
- Skill cards appear one after another (0.1s delays between each)
- Project cards have rotation reveal animations
- Each card scales on hover with smooth cubic-bezier easing

### 5. **Hover Effects**
- Project cards lift up 8px on hover with color change
- Buttons have gradient backgrounds that shift
- Links have focus-visible outlines for accessibility

---

## 🖼️ Adding Your Background Image

### Option 1: Using Your Profile Photo (Recommended)

1. **Save the image file:**
   - Copy your hackathon photo to: `frontend/src/assets/profile-bg.jpg`

2. **Update Hero.js to use the image:**
   ```jsx
   <div className="hero-visual" ref={visualRef} aria-hidden="true">
     <div className="hero-visual-bg" style={{
       backgroundImage: 'url(/src/assets/profile-bg.jpg)'
     }}></div>
     {/* rest of cards... */}
   </div>
   ```

3. **The CSS already supports this** with:
   ```css
   .hero-visual-bg {
     position: absolute;
     inset: 0;
     border-radius: 28px;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     opacity: 0.25;
     filter: blur(1px) brightness(0.8);
     z-index: -1;
     will-change: transform;
   }
   ```

### Option 2: Add Image as Hero Background
Update the Hero visual cards wrapper:
```jsx
<div className="hero-visual" style={{
  backgroundImage: 'url(/src/assets/profile-bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.3
}}>
```

---

## 📁 File Structure Created

```
frontend/src/
├── hooks/
│   └── useScrollAnimation.js          (Custom scroll hooks)
├── assets/
│   └── profile-bg.jpg                 (Add your image here)
├── components/
│   ├── Hero.js                        (Updated with scroll animations)
│   ├── About.js                       (Updated with scroll animations)
│   ├── Skills.js                      (Updated with scroll animations)
│   ├── Projects.js                    (Updated with scroll animations)
│   ├── Experience.js                  (Updated with scroll animations)
│   ├── Contact.js                     (Updated with scroll animations)
│   └── [CSS files]                    (All updated with animations)
├── App.js                             (Added scroll hooks)
└── App.css                            (Added 100+ lines of animations)
```

---

## 🎨 Scroll Animation Classes Available

Use these classes on any element:

- `.animate-on-scroll` - Fade up (default)
- `.animate-on-scroll--scale` - Scale up
- `.animate-on-scroll--rotate` - Rotate and slide
- `.animate-on-scroll--left` - Slide from left
- `.animate-on-scroll--right` - Slide from right
- `.stagger-item` - Staggered animation (use on lists)

Example:
```jsx
<div className="skill-card stagger-item animate-on-scroll--scale">
  {/* content */}
</div>
```

---

## 🎯 Animation Keyframes

All animations use cubic-bezier easing for smooth, natural motion:
- **Entrance animations**: 0.7-0.8s duration
- **Hover effects**: 0.24s transition
- **Parallax**: Real-time based on scroll position
- **Stagger delays**: 0.1s - 0.7s between elements

---

## 🔧 How to Add More Animations

1. Create animation in `App.css`:
   ```css
   @keyframes customAnimation {
     from { /* ... */ }
     to { /* ... */ }
   }
   ```

2. Create animation class:
   ```css
   .animate-custom {
     animation: customAnimation 0.8s ease-out forwards;
   }
   ```

3. Use in component:
   ```jsx
   <div className="element animate-custom">
   ```

---

## 📊 Animation Performance

- Using `will-change` CSS property for optimized transforms
- All animations use GPU-accelerated properties (transform, opacity)
- Intersection Observer API for efficient scroll detection
- No animation runs when `prefers-reduced-motion` is set

---

## 🎬 Next Steps

1. Save your profile photo as `profile-bg.jpg` in `frontend/src/assets/`
2. Update `Hero.js` to reference the image (see Option 1 above)
3. Test scrolling through the entire page to see all animations
4. Hover over project cards to see enhanced hover effects
5. Check different viewport sizes for responsive animations

The portfolio now looks like a real, professionally-crafted site with smooth scroll effects!
