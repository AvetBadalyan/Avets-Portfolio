# Portfolio Redesign Plan

## Goal: Transform from "functional landing page" to "wow, hire this person"

---

## 🎯 Design Philosophy

### Core Principles

1. **Show, don't tell** — Let the work speak through interactive previews
2. **Progressive disclosure** — Don't overwhelm, reveal details on interaction
3. **Purposeful motion** — Every animation has meaning, not decoration
4. **Mobile-first** — 60%+ of recruiters browse on mobile
5. **Fast & accessible** — Performance IS part of the impression

### Visual Direction

- **Style**: Modern minimalist with depth (not flat, not skeuomorphic)
- **Theme**: Dark mode default (developers love it), light mode available
- **Accent**: Your existing purple/blue hue system (keeps brand consistency)
- **Typography**: Inter for headings (modern), Roboto for body (readable)
- **Spacing**: Generous whitespace — let elements breathe

---

## 📱 Section-by-Section Redesign

---

### 1. HERO SECTION (Header)

**Current problem**: Plain white, basic layout, forgettable

**New design**:

```
┌─────────────────────────────────────────────────────────────┐
│  [Animated gradient mesh background with floating orbs]     │
│                                                             │
│  ┌──────────────────────┐    ┌─────────────────────────┐   │
│  │                      │    │ 👋 Hello, I'm           │   │
│  │    [Profile Image]   │    │                         │   │
│  │    with ring effect  │    │ AVET BADALYAN           │   │
│  │    & floating badges │    │ (gradient text effect)  │   │
│  │    ⚛️ React          │    │                         │   │
│  │    🟢 Node.js        │    │ I'm a [Frontend Eng_]   │   │
│  │    💙 TypeScript     │    │ (typewriter animation)  │   │
│  │                      │    │                         │   │
│  └──────────────────────┘    │ Building scalable...    │   │
│                              │                         │   │
│  ┌──────────────────────────┐│ [View Projects] [Talk]  │   │
│  │ 3+ │ 16  │ 4   │ 5      ││ [Download CV]           │   │
│  │ Yrs│Proj │MERN │Shopify ││                         │   │
│  │ (glassmorphism stats)   ││ [GitHub] [LinkedIn]     │   │
│  └──────────────────────────┘└─────────────────────────┘   │
│                                                             │
│                    ↓ Scroll                                 │
└─────────────────────────────────────────────────────────────┘
```

**Key features**:

- Animated gradient mesh background (3 moving orbs with blur)
- Profile image with rotating decorative rings
- Floating tech badges that gently bob up/down
- Typewriter effect cycling through roles
- Gradient text effect on name
- Glassmorphism stats bar (backdrop-blur)
- Staggered fade-in animations
- Scroll indicator with bounce animation

**Files to modify**:

- `src/Pages/Header/Header.jsx` — Complete rewrite
- `src/Pages/Header/header.scss` — Complete rewrite
- `src/Components/GradientBackground/` — New component (done)

---

### 2. NAVBAR

**Current problem**: Basic solid color, no scroll feedback

**New design**:

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo]  ABOUT  EDUCATION  SKILLS  EXPERIENCE  PORTFOLIO  🎨│
│         ─────                                               │
│         (active indicator slides between items)             │
└─────────────────────────────────────────────────────────────┘
```

**Key features**:

- Glassmorphism effect on scroll (backdrop-blur + transparency)
- Active section indicator that slides smoothly between nav items
- Scroll-spy to highlight current section
- Mobile: Slide-in menu from right with staggered link animations
- Smooth height transition when scrolled

**Files to modify**:

- `src/Components/Navbar/Navbar.jsx`
- `src/Components/Navbar/Navbar.scss`

---

### 3. ABOUT SECTION

**Current problem**: Language skills + text, feels disconnected

**New design**:

```
┌─────────────────────────────────────────────────────────────┐
│                        About Me                             │
│                                                             │
│  ┌─────────────────────┐  ┌────────────────────────────┐   │
│  │                     │  │                            │   │
│  │   [Larger photo     │  │  I'm a frontend engineer   │   │
│  │    with parallax    │  │  with 3+ years of exp...   │   │
│  │    tilt effect]     │  │                            │   │
│  │                     │  │  ┌──────────────────────┐  │   │
│  │                     │  │  │ 🇦🇲 Armenian  ████░░│  │   │
│  │                     │  │  │ 🇬🇧 English   ███░░░│  │   │
│  │                     │  │  │ 🇷🇺 Russian   ████░░│  │   │
│  │                     │  │  │ 🇫🇷 French    ██░░░░│  │   │
│  └─────────────────────┘  │  └──────────────────────┘  │   │
│                           │                            │   │
│                           │  [Download CV ↓]           │   │
│                           └────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Key features**:

- Two-column layout (image | content)
- Animated language progress bars (fill on scroll into view)
- CV button with download icon micro-interaction
- Scroll-triggered fade-in from sides

**Files to modify**:

- `src/Pages/About/About.jsx`
- `src/Pages/About/About.scss`
- `src/Components/LanguageSkill/LanguageSkill.jsx`

---

### 4. SKILLS SECTION

**Current problem**: Basic progress bars, generic layout

**New design**:

```
┌─────────────────────────────────────────────────────────────┐
│                        My Skills                            │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Frontend Technologies                   │   │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │   │
│  │  │React │ │TS    │ │Redux │ │SCSS  │ │Shopify│     │   │
│  │  │ ⚛️   │ │ 💙   │ │ 🔄   │ │ 🎨   │ │ 🛒    │     │   │
│  │  │ 95%  │ │ 85%  │ │ 90%  │ │ 95%  │ │ 88%   │     │   │
│  │  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘      │   │
│  │  (cards with logos, hover to see experience level)  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Backend & Tools                         │   │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │   │
│  │  │Node  │ │Express│ │Postgres│ │AWS  │ │Git   │     │   │
│  │  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘      │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Key features**:

- Skill cards with logos (not progress bars)
- Hover effect shows proficiency level
- Grouped by category
- Staggered entrance animation
- Glassmorphism card effect

**Files to modify**:

- `src/Pages/Skills/Skills.jsx`
- `src/Pages/Skills/Skills.scss`

---

### 5. EDUCATION SECTION

**Current problem**: Generic cards, no visual hierarchy

**New design**:

```
┌─────────────────────────────────────────────────────────────┐
│                    Education & Training                     │
│                                                             │
│        ┌─────────────────────────────────────────┐         │
│        │  🏢 EPAM Armenia                        │         │
│   ●────│  Fullstack Development                  │         │
│   │    │  2024 - 2025                            │         │
│   │    │  Node.js, Express, TypeScript, AWS      │         │
│   │    └─────────────────────────────────────────┘         │
│   │                                                         │
│   │    ┌─────────────────────────────────────────┐         │
│   ●────│  Microsoft IC Armenia                   │         │
│   │    │  React.js                               │         │
│   │    │  2023                           [Cert]  │         │
│   │    └─────────────────────────────────────────┘         │
│   │                                                         │
│   │    ┌─────────────────────────────────────────┐         │
│   ●────│  Armenian Code Academy                  │         │
│        │  Frontend Bootcamp                      │         │
│        │  2021 - 2022                    [Cert]  │         │
│        └─────────────────────────────────────────┘         │
│                                                             │
│        (vertical timeline with alternating cards)           │
└─────────────────────────────────────────────────────────────┘
```

**Key features**:

- Vertical timeline design
- Cards slide in from alternating sides on scroll
- Timeline dots with pulse animation
- Institution logos
- Certificate links as badges
- Glassmorphism cards

**Files to modify**:

- `src/Pages/Education/Education.jsx`
- `src/Pages/Education/Education.scss`

---

### 6. EXPERIENCE SECTION

**Current problem**: Wall of text, hard to scan

**New design**:

```
┌─────────────────────────────────────────────────────────────┐
│                   Professional Experience                   │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  ┌────────┐                                          │  │
│  │  │ EPAM   │  EPAM Systems                           │  │
│  │  │ Logo   │  Full-Stack Developer                   │  │
│  │  └────────┘  July 2025 - Present                    │  │
│  │                                                      │  │
│  │  • Resolved 40+ UI issues on www.epam.com           │  │
│  │  • Wrote Sinon.js unit tests for 20+ modules        │  │
│  │  • Collaborated in agile sprints                    │  │
│  │                                                      │  │
│  │  [AEM] [JavaScript] [Sinon.js]        [Visit →]     │  │
│  └──────────────────────────────────────────────────────┘  │
│                           │                                 │
│                           ● (timeline connector)            │
│                           │                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Ashstone Studios — Frontend (Shopify) Developer     │  │
│  │  ...                                                 │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

**Key features**:

- Timeline layout with connector line
- Company logos prominent
- Key achievements as bullet points (scannable)
- Tech stack as badges
- Expand/collapse for detailed view
- Cards slide in on scroll

**Files to modify**:

- `src/Pages/Experience/Experience.jsx`
- `src/Pages/Experience/Experience.scss`
- `src/Pages/Experience/ExperienceCard.jsx`

---

### 7. PORTFOLIO SECTION ⭐ (THE STAR)

**Current problem**: Generic grid, tiny images, no preview

**New design**:

```
┌─────────────────────────────────────────────────────────────┐
│                      Recent Projects                        │
│                                                             │
│  [All] [Full Stack] [React.JS] [MERN] [Pure JS]            │
│   ═══                                                       │
│                                                             │
│  ┌─────────────────────────┐ ┌──────────────────────────┐  │
│  │░░░░░░░░░░░░░░░░░░░░░░░░│ │░░░░░░░░░░░░░░░░░░░░░░░░░│  │
│  │░░░ MUSIC APP ░░░░░░░░░░│ │░░░░░░░░░░░░░░░░░░░░░░░░░│  │
│  │░░░ Full Stack ░░░░░░░░░│ │░░░ EDU SCHEDULER ░░░░░░░│  │
│  │░░░░░░░░░░░░░░░░░░░░░░░░│ │░░░ Full Stack ░░░░░░░░░░│  │
│  │░░ [React][Node][PG] ░░░│ │░░░░░░░░░░░░░░░░░░░░░░░░░│  │
│  │░░░░░░░░░░░░░░░░░░░░░░░░│ │░░ [React][TS][Redux] ░░░│  │
│  │░░░ [Demo] [GitHub] ░░░░│ │░░░░░░░░░░░░░░░░░░░░░░░░░│  │
│  └─────────────────────────┘ └──────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│ │
│  │░░░░░░░░░░░░░ AVETBOOK CHAT APP ░░░░░░░░░░░░░░░░░░░░░░│ │
│  │░░░░░░░░░░░░░ Real-time MERN chat ░░░░░░░░░░░░░░░░░░░░│ │
│  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│ │
│  │░░ [React][Node][Socket.io][MongoDB] ░░░░░░░░░░░░░░░░░│ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  (Bento grid - varying card sizes based on project type)   │
│  (Hover: image dims, overlay shows title + tech + buttons) │
└─────────────────────────────────────────────────────────────┘
```

**Key features**:

- **Bento grid layout** (asymmetric, varying sizes)
- **MERN/Full Stack projects get larger cards**
- Category filter with animated underline indicator
- **Hover effect**:
  - Image slightly zooms
  - Dark overlay fades in
  - Title, description, tech badges appear
  - Demo/GitHub buttons slide up
- Bigger images (finally showcase the work!)
- Tech stack as small badges
- Smooth filter animation (projects fade out/in)
- Optional: Click to open modal with more details

**Files to modify**:

- `src/Pages/Portfolio/Portfolio.jsx`
- `src/Pages/Portfolio/Portfolio.scss`
- `src/Pages/Portfolio/Project.jsx` — Major rewrite
- `src/Pages/Portfolio/ProjectsCategories.jsx`

---

### 8. CONTACT SECTION

**Current problem**: Just 4 links floating in space

**New design**:

```
┌─────────────────────────────────────────────────────────────┐
│                       Get In Touch                          │
│           Let's build something great together              │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │   ┌──────────┐  ┌──────────┐  ┌──────────┐        │   │
│  │   │  ✉️      │  │  📱      │  │  💼      │        │   │
│  │   │  Email   │  │  Phone   │  │ LinkedIn │        │   │
│  │   │  ~~~~~~  │  │  ~~~~~~  │  │  ~~~~~~  │        │   │
│  │   └──────────┘  └──────────┘  └──────────┘        │   │
│  │                                                     │   │
│  │   ┌──────────┐                                     │   │
│  │   │  🐙      │   "Open to opportunities in        │   │
│  │   │  GitHub  │    frontend and fullstack roles"   │   │
│  │   │  ~~~~~~  │                                     │   │
│  │   └──────────┘                                     │   │
│  │                                                     │   │
│  │   (glassmorphism card with contact options)        │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Key features**:

- Centered glassmorphism card
- Contact items as hoverable cards with icons
- Subtle 3D tilt effect on main card (react-tilt or manual)
- Hover animations on each contact option
- Personal tagline about availability
- Social proof: "Based in Armenia • Open to remote"

**Files to modify**:

- `src/Components/contact/Contact.jsx`
- `src/Components/contact/Contact.scss`

---

### 9. FOOTER

**Current problem**: Basic, forgettable

**New design**:

- Simple, clean
- Copyright + "Built with React & ❤️"
- Quick links to sections
- Back to top button

---

## 🎨 Global Design Tokens to Add

```scss
// Add to index.scss

// Glassmorphism
--glass-bg: rgba(255, 255, 255, 0.1);
--glass-border: rgba(255, 255, 255, 0.2);
--glass-blur: 20px;

// Dark mode glass
--glass-bg-dark: rgba(0, 0, 0, 0.2);
--glass-border-dark: rgba(255, 255, 255, 0.1);

// Shadows (more dramatic)
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 20px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.16);
--shadow-glow: 0 0 40px hsla(var(--primary-hue), 70%, 50%, 0.3);

// RGB versions for rgba() usage
--color-black-rgb: 0, 0, 0;
--color-white-rgb: 255, 255, 255;
```

---

## 📋 Implementation Order

### Phase 1: Foundation (Do First)

1. ✅ Animation utilities (`src/utils/animations.js`)
2. ✅ Gradient background component
3. ✅ Update global styles with new tokens

### Phase 2: Hero (Biggest Impact)

4. ✅ Hero section complete rewrite

### Phase 3: Navigation

5. ✅ Navbar glassmorphism + scroll spy

### Phase 4: Portfolio (The Star)

6. ✅ Portfolio bento grid + hover effects

### Phase 5: Content Sections

7. ✅ Experience timeline
8. ✅ Education cards with sections
9. ✅ Skills card grid
10. ✅ About two-column

### Phase 6: Polish

11. ✅ Contact glassmorphism
12. ✅ Footer refresh
13. ✅ Global micro-interactions
14. ⬜ Performance optimization (lazy load images) - Optional
15. ⬜ Final testing & responsive fixes - User testing needed

---

## ✅ Ready to Implement

Say **"continue"** and I'll start with Phase 2 (Hero Section) since Phase 1 foundation is done.

Each section will be committed separately so you can review and test incrementally.
