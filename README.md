# Oliver Løbel – Portfolio

Personal portfolio website built with React + Vite.

**Live:** [oliverlobel.com](https://oliverlobel.com)

---

## Tech Stack
- **React 18** + **Vite**
- **Framer Motion** -animations & floating paths
- **React Router DOM** - client-side routing
- **Formspree** - contact form
- **Devicon CDN** - tech logo icons

---
## File Structure
```
oliverlobel2.0/
│
├── public/                     # Static assets (served as-is)
│   ├── photoP.png              # Profile photo
│   ├── og-image.png            # Social media preview banner (1200×630)
│   ├── favicon.ico             # Favicon (multi-size)
│   ├── favicon.svg             # Favicon (SVG, modern browsers)
│   ├── apple-touch-icon.png    # iOS home screen icon
│   ├── icon-192.png            # Android PWA icon
│   ├── icon-512.png            # Android PWA icon (large)
│   ├── site.webmanifest        # PWA manifest
│   └── tech/                   # Tech logo PNGs (fallback only)
│
├── src/
│   ├── components/             # Reusable components
│   │   ├── Nav.jsx             # Pill navigation with sliding cursor
│   │   ├── FloatingPaths.jsx   # Animated SVG background (hero)
│   │   ├── Reveal.jsx          # Scroll-reveal wrapper (no flash)
│   │   ├── Footer.jsx          # Site footer
│   │   └── Cookie.jsx          # Cookie consent banner
│   │
│   ├── pages/                  # One file per route
│   │   ├── Home.jsx            # Landing page
│   │   ├── Portfolio.jsx       # Project gallery with filter
│   │   ├── Contact.jsx         # Contact form + FAQ
│   │   └── Privacy.jsx         # Privacy policy (GDPR)
│   │
│   ├── App.jsx                 # Router setup
│   ├── main.jsx                # React entry point
│   └── index.css               # All styles (design tokens + components)
│
├── index.html                  # HTML shell (SEO meta, OG tags, favicons)
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

---

### Contact Form
The contact form uses [Formspree](https://formspree.io) (free tier, 50 submissions/month).


