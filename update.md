# Vishnu Shaji — Portfolio Redesign Specification
> This document is the single source of truth for rebuilding vishnushaji.vercel.app into a freelance agency-grade portfolio. Work through every item in order. Do not skip sections. All content is provided — use it exactly as written.

---

## Context & Goal

**Who this is for:** Vishnu Shaji — Full-Stack & AI Developer based in Kannur, Kerala.  
**Current stack:** Next.js, Tailwind CSS, deployed on Vercel.  
**Design language:** Dark theme — pure black background (`#0a0a0a`), cyan/teal accent (`#00e5ff`), monospace code aesthetic, clean sans-serif body text.  
**Goal shift:** Transform from a developer portfolio (targeting recruiters) into a freelance agency site (targeting clients). Every section must answer the client's question: *"Can this person solve my problem, and can I trust them?"*

---

## Global Design Rules (apply everywhere)

- Background: `#0a0a0a` (not `#000000` — pure black looks harsh)
- Accent: `#00e5ff` (cyan) — use sparingly as highlight only
- Text primary: `#f0f0f0`
- Text secondary: `#888888`
- Text muted: `#444444`
- Card background: `#111111`
- Card border: `1px solid #1e1e1e`
- Border radius: `4px` for pills/badges, `8px` for cards — no large rounded corners
- Font — body: inherit from existing globals (do NOT introduce Inter or Arial)
- Font — code/labels: `Space Mono` or `Fira Code` monospace
- No gradients on backgrounds. Flat surfaces only.
- Accent lines: 1px horizontal cyan lines at section tops (opacity 0.3) are allowed
- Animations: fade-in on scroll only. No bouncing, no parallax, no heavy JS animation libraries.
- All sections must be fully mobile responsive (breakpoints: 640px, 768px, 1024px)

---

## SECTION 1 — Navigation Bar

### What needs to change
The current nav is missing key elements that a freelance client expects.

### Required changes

**Add to nav links:**
- Keep existing: Home, Story, Projects, About, Skills, Contact
- Add new: `Services` (links to new Services section)
- Add new: `Blog` (links to `/blog`)

**Add to nav right side:**
- GitHub icon link → `https://github.com/vishnushaji` (placeholder if not correct)
- LinkedIn icon link → Vishnu's LinkedIn URL
- `Book a Call` button → links to Calendly URL (placeholder `#` for now)

**Button style for "Book a Call":**
```css
padding: 8px 18px;
background: #00e5ff;
color: #000;
font-family: monospace;
font-size: 11px;
letter-spacing: 0.1em;
border-radius: 4px;
font-weight: 700;
```

**Sticky nav:** Make nav sticky on scroll with `backdrop-filter: blur(12px)` and `background: rgba(10,10,10,0.85)`.

---

## SECTION 2 — Hero Section

### What needs to change
Current headline "CRAFTING DIGITAL EXPERIENCES" targets developers. Needs to speak to clients.

### Required changes

**Replace headline with:**
```
I build web apps, mobile apps,
and automations that help
businesses grow.
```
- Font size: `clamp(36px, 7vw, 72px)`
- Font weight: 800
- The word "grow" should be in cyan (`#00e5ff`)

**Replace subtext with:**
```
Full-stack developer based in Kerala — I turn your business problems into 
clean, fast digital products. Schools, startups, and small businesses.
```

**Keep:** The code snippet block — it's a strong visual element. Update the content to:
```javascript
const developer = {
  name: "Vishnu Shaji",
  based: "Kannur, Kerala",
  services: ["Web Apps", "Mobile Apps", "Automations"],
  clients: ["Schools", "Startups", "Small Businesses"],
  async solve(yourProblem) {
    return await this.build(yourProblem);
  }
};
```

**Replace CTA buttons:**
- Primary: `Book a Free Call` → Calendly link (placeholder `#`)
- Secondary: `See My Work` → `/#projects`

**Add stat row below CTAs:**
```
3 Live Projects  ·  35+ Screens Built  ·  Kerala & Remote
```
Style: monospace, `#444444` color, `letter-spacing: 0.15em`, `font-size: 12px`

---

## SECTION 3 — Story / Timeline Section

### What needs to change
The large decorative "1", "2", "3" numbers inside circles look broken and unintentional. The stats are too vague.

### Required changes

**Redesign the step indicator:**
- Remove: large rotated numbers in decorative circles
- Replace with: small filled cyan circle (24px diameter) containing the step number in black, connected to the next step by a thin vertical line (1px, `#1a5a5a` color)

**Component pattern per step:**
```
[●] ← filled cyan dot, 24px, number inside in black monospace
 |  ← 1px vertical line, color #1a5a5a, height 60px
 |
[●] next step
```

**Replace vague stats:**
- "1000+ Hours Building & Learning" → `"3 client products shipped"`
- "10+ Product Ideas Prototyped" → `"35-screen React Native app delivered"`
- "Next: Full Product Launch" → `"Currently building Stella Bridge v2"`

**Keep:** The year labels (2022, 2024, 2025) and section headings — they tell a good story.

---

## SECTION 4 — Services Section (NEW — does not exist yet)

### What to build
A new section between Story and Projects. This is the most important new addition for client conversion.

### Section label (monospace, cyan, small caps):
```
// WHAT I BUILD
```

### Section title:
```
Services
```

### Three service packages — render as cards side by side (stack on mobile):

**Card 1: Landing Page**
- Title: `Landing Page`
- Description: `A fast, mobile-first website that represents your business professionally and converts visitors into leads.`
- Includes: `Design + Development · CMS Integration · Contact Form · SEO Basics · 2 Rounds of Revisions`
- Timeline: `1–2 weeks`
- Starting from: `₹15,000`
- CTA button: `Get a Quote` → `/#contact`

**Card 2: Full Web App** ← mark this as "Most Popular"
- Title: `Full Web App`
- Description: `A complete web application with user accounts, dashboards, and backend logic — built to scale.`
- Includes: `Frontend + Backend + Database · Auth System · Admin Dashboard · Deployment · 1 Month Support`
- Timeline: `3–6 weeks`
- Starting from: `₹45,000`
- CTA button: `Get a Quote` → `/#contact`

**Card 3: Automation Workflow**
- Title: `Automation & AI`
- Description: `Connect your tools, automate repetitive tasks, and integrate AI into your existing business workflows.`
- Includes: `n8n / FastAPI Workflows · Document Processing · API Integrations · Custom AI Pipelines`
- Timeline: `1–3 weeks`
- Starting from: `₹20,000`
- CTA button: `Get a Quote` → `/#contact`

**Card styling:**
- Dark card background `#111111`, border `1px solid #1e1e1e`
- "Most Popular" card: `border: 1px solid rgba(0,229,255,0.4)` + small badge at top
- Starting price in large cyan monospace text
- All other text in standard body style

---

## SECTION 5 — Projects Section

### What needs to change
Cards currently look like showcase items. Need to look like case studies with real outcomes.

### Required changes per project card

**Project 01 — Stella Maris School Website**
- Keep image
- Add badge: `WEB · LIVE`
- Add outcome line below description: `"Now serves 200+ parent visits per month"`
- Button text: `Visit Site` → `https://www.stellamaris-school.org/`
- Stack pills: React, Next.js, Tailwind

**Project 02 — Stella Bridge App**
- Keep image
- Add badge: `MOBILE · DELIVERED TO CLIENT · 2026`
- Replace description with: `Educational tracking platform for Stella Maris School. 35+ screens serving students, teachers, and admins. Includes fee management, quiz system, and multimedia assignment submission.`
- Add outcome line: `"Replaced WhatsApp-based school operations entirely"`
- Button text: `Read Case Study` → `/blog/stella-bridge`
- Stack pills: React Native, Node.js, MongoDB, Supabase

**Project 03 — DocuCompare Automation**
- Keep image
- Add badge: `AUTOMATION · DELIVERED TO CLIENT`
- Replace description with: `Automation workflow engine that parses and compares complex documents using n8n pipelines and a FastAPI backend. Built for a client who needed to process large volumes of structured documents.`
- Add outcome line: `"Delivered to client — read the full breakdown"`
- Button text: `Read Case Study` → `/blog/docucompare` (placeholder — blog post to be written)
- Stack pills: n8n, FastAPI, Python

**Card layout additions:**
- Add `"Delivered to client"` green badge where applicable
- Each card gets a 2-line outcome stat in muted monospace below the tech stack

---

## SECTION 6 — About Section

### What needs to change
Currently reads like a CV summary. Needs to position Vishnu as a business partner.

### Replace body text with:
```
I'm a full-stack developer based in Kannur, Kerala — and I build 
complete digital products for schools, startups, and small businesses.

Unlike most developers who hand you a finished product and disappear, 
I stay involved — from the first discovery call through to launch and 
beyond. I care about whether what I build actually solves your problem.

My work spans the full stack: React Native mobile apps, Next.js web 
platforms, Node.js backends, MongoDB databases, and AI-powered 
automation workflows. I've shipped products that are live and in use 
by real users today.

If you have a business problem that software can solve — let's talk.
```

**Replace stats:**
- `1+ Years` → `3 Products shipped`
- `5+ Projects` → `Real clients, real outcomes`

**Add:** A "Download CV" link in this section — small, monospace, muted color, with a download icon. File: placeholder `#` for now.

---

## SECTION 7 — How I Work (NEW — does not exist yet)

### What to build
A new section after About. 4-step process that shows clients what working with Vishnu looks like.

### Section label:
```
// THE PROCESS
```

### Section title:
```
How we work together
```

### Four steps — render as a horizontal row on desktop, vertical on mobile:

**Step 01: Discovery Call**
- Description: `We spend 20–30 minutes understanding your problem, your users, and your goals. No commitment required.`
- CTA: `Book a free call →`

**Step 02: Proposal**
- Description: `I send you a clear scope document — what will be built, how long it takes, and what it costs. No surprises.`

**Step 03: Build**
- Description: `I build in focused sprints and share progress updates regularly. You can give feedback at every stage.`

**Step 04: Launch & Support**
- Description: `I handle deployment and stay available for one month post-launch to fix any issues that come up.`

**Styling:**
- Steps connected by a horizontal dashed line on desktop
- Step number in large muted monospace (`#222222`) behind the step card
- Each step card: `#111111` background, `1px solid #1e1e1e` border, `24px` padding

---

## SECTION 8 — Testimonials (NEW — does not exist yet)

### What to build
Place this section after "How I Work". Start with one testimonial — even one is enough to build trust.

### Section label:
```
// WHAT CLIENTS SAY
```

### Section title:
```
Trusted by real clients
```

### Testimonial card — use this placeholder content (replace with real quote when available):
```
"Vishnu built our school's entire digital system from scratch. 
What impressed us most was how clearly he explained every step — 
we always knew what was happening and why."

— School Administrator, Stella Maris School, Kannur
```

**Card styling:**
- Large opening quote mark in cyan, low opacity (decorative)
- Quote text in `#d1d5db`, 16px, line-height 1.8
- Attribution in monospace, muted color
- Card: `#111111` background, left border `3px solid #00e5ff`, padding `32px`

**Note for Vishnu:** Replace this with a real quote from the school once obtained. Even a paraphrased WhatsApp message formatted nicely works.

---

## SECTION 9 — Skills Section

### What needs to change
Currently a plain logo grid with no context. Needs to connect each skill to actual work.

### Replace with: Skill cards grouped by category

**Group 1: Frontend**
- JavaScript, React, Next.js, React Native, Tailwind CSS
- Context line: `"Used across all 3 delivered client projects"`

**Group 2: Backend**
- Node.js, Express, Python, FastAPI, Django
- Context line: `"Powers the Stella Bridge API and DocuCompare engine"`

**Group 3: Database & Storage**
- MongoDB, Mongoose, Supabase
- Context line: `"Production databases serving live users"`

**Group 4: Automation & AI**
- n8n, FastAPI pipelines, AI integrations
- Context line: `"Used in DocuCompare — delivered to client"`

**Styling:**
- Group label in monospace cyan small caps
- Skills as rounded pills: `background: #0d0d0d`, `border: 1px solid #1e1e1e`, `color: #888`
- Context line in muted italic below each group

---

## SECTION 10 — FAQ Section (NEW — does not exist yet)

### What to build
Place before the Contact section. Kills objections before the first conversation.

### Section label:
```
// COMMON QUESTIONS
```

### Section title:
```
Things clients usually ask
```

### Questions and answers:

**Q: How long does a typical project take?**
A: It depends on scope. A landing page takes 1–2 weeks. A full web app typically takes 3–6 weeks. I'll give you a clear timeline in the proposal before we start.

**Q: What does it cost?**
A: Landing pages start from ₹15,000. Web apps from ₹45,000. Automation workflows from ₹20,000. Every project gets a fixed-price quote — no hourly billing surprises.

**Q: Do you work with clients outside Kerala?**
A: Yes. Most of my communication happens over WhatsApp and video calls. Location doesn't matter.

**Q: What happens after the project launches?**
A: I offer one month of free support after every launch. After that, I offer affordable monthly maintenance packages.

**Q: Do you sign NDAs or contracts?**
A: Yes, always. Every project is covered by a simple written agreement that protects both sides.

**Q: I have an idea but don't know if it's technically possible — can we still talk?**
A: Absolutely. The discovery call is free and there's no obligation. I'll tell you honestly if it's feasible and what it would take.

**Styling:**
- Accordion component — each question expands on click
- Closed state: question text + `+` icon on right
- Open state: answer slides down, `+` becomes `−`
- Border between each item: `1px solid #1e1e1e`
- No card borders on the outside — just the dividers between items

---

## SECTION 11 — Contact Section

### What needs to change
Currently only a contact form. Needs multiple contact options and a clearer CTA.

### Replace section headline with:
```
Let's build something together
```

### Replace subtext with:
```
Have a project in mind? Fill out the form and I'll get back to you 
within 24 hours — or reach out directly on WhatsApp.
```

### Add contact options row above the form:
```
📍 Kannur, Kerala (Available remotely)
✉  vishnu.shaji.1216@gmail.com
📱 WhatsApp: +91 7907021234  ← make this a wa.me link
```
Style as three small cards or inline items with monospace labels.

### Add primary CTA above the form:
```
[Book a Free Discovery Call →]   ← links to Calendly placeholder #
```
Style: full-width button on mobile, inline on desktop. Cyan background, black text.

### Keep the contact form — but update placeholder text:
- Name field placeholder: `Your name`
- Email field placeholder: `your@email.com`
- Message field placeholder: `Tell me about your project — what are you trying to build?`
- Submit button text: `Send Message →`

---

## SECTION 12 — Footer

### What needs to change
Current footer is minimal. Needs social links and a CV download.

### Add to footer:
- GitHub icon link
- LinkedIn icon link
- WhatsApp link (`wa.me/+917907021234`)
- `Download CV` text link (placeholder `#`)
- Copyright: `© 2026 Vishnu Shaji. All rights reserved.`
- Tagline below copyright: `Building digital products from Kerala.`

---

## SECTION 13 — Blog Index Page (`/blog`)

### What to build
A simple blog/case study listing page. Route: `/blog`

### Page title:
```
Case Studies & Writing
```

### Subtext:
```
A behind-the-scenes look at the projects I've built — 
the problems, the decisions, and the outcomes.
```

### Blog post cards — two posts to start:

**Post 1:**
- Title: `Stella Bridge App — Building a School's Complete Digital Operating System`
- Tags: `React Native · Node.js · MongoDB · Case Study`
- Date: `2026`
- Excerpt: `How I replaced WhatsApp groups and physical notebooks with a 35-screen mobile app serving students, teachers, and admins at Stella Maris School.`
- Link: `/blog/stella-bridge`
- Badge: `DELIVERED TO CLIENT`

**Post 2 (placeholder — coming soon):**
- Title: `DocuCompare — Automating Document Comparison with n8n and FastAPI`
- Tags: `n8n · FastAPI · Automation · Case Study`
- Date: `Coming soon`
- Excerpt: `A client needed to compare hundreds of structured documents automatically. Here's how I built an automation pipeline that did it in seconds.`
- Link: `#` (disabled until blog is written)
- Badge: `DELIVERED TO CLIENT`

**Card styling:**
- Match portfolio dark theme
- Tag pills in monospace
- Date in muted monospace top-right
- Hover: `border-color: rgba(0,229,255,0.3)`
- "Coming soon" card: reduced opacity (0.5), cursor default, no hover effect

---

## SECTION 14 — Stella Bridge Blog Post (`/blog/stella-bridge`)

### Fixes needed to the existing generated page

Apply all of the following to the already-generated `StellaBridgePage.jsx` and its CSS module:

1. **Font:** Remove `font-family: 'Inter'` from `.pageWrapper`. Use `inherit` to pick up the global portfolio font.

2. **Back navigation:** Add at the very top of the page, above the hero:
   ```jsx
   <Link href="/blog" className={styles.backLink}>← Back to case studies</Link>
   ```
   Style `.backLink`: monospace, 11px, `#444444` color, no underline, hover color `#00e5ff`, display block, margin-bottom 48px.

3. **Outcome cards:** Replace `background: linear-gradient(...)` with:
   ```css
   background: #0d0d0d;
   border-top: 1px solid rgba(0, 229, 255, 0.35);
   ```

4. **Hero stat row:** Add below the tagline and above the GitHub button:
   ```
   35+ Screens  ·  3 User Roles  ·  Delivered 2026
   ```
   Style: monospace, 12px, `#444444`, `letter-spacing: 0.15em`

5. **Feature card prefixes:** Add `01 —`, `02 —`, etc. in monospace muted color above each feature card title.

6. **Architecture arrows:** Between each tier block add:
   ```jsx
   <div className={styles.tierArrow}>↓</div>
   ```
   Style: centered, cyan color, monospace, opacity 0.4, margin `-8px 0`

7. **Outcome card callouts:** Add a short bold keyword above each outcome description:
   - "Time saved" above teachers outcome
   - "Instant reach" above broadcasts outcome  
   - "Fee recovery" above fee collection outcome
   - "Transparency" above parents outcome
   
   Style these keywords: `font-family: monospace`, `font-size: 10px`, `color: #00e5ff`, `letter-spacing: 0.15em`, `text-transform: uppercase`, `margin-bottom: 8px`

---

## SECTION 15 — Dead Links Fix

Apply these link fixes across the codebase:

| Location | Current | Fix |
|---|---|---|
| Project card — Stella Bridge | `href="#"` | `href="/blog/stella-bridge"` |
| Project card — DocuCompare | `href="#"` | `href="/blog/docucompare"` (placeholder page) |
| Nav — GitHub | missing | Add GitHub icon → Vishnu's GitHub URL |
| Nav — LinkedIn | missing | Add LinkedIn icon → Vishnu's LinkedIn URL |
| About section | no CV link | Add `Download CV` link → placeholder `#` |
| Contact section | no WhatsApp | Add `wa.me` WhatsApp link |
| Footer | no social links | Add GitHub, LinkedIn, WhatsApp |

---

## SECTION 16 — Copy & Messaging Fixes

The following text strings exist in the codebase and must be replaced:

| Current text | Replace with |
|---|---|
| `"CRAFTING DIGITAL EXPERIENCES"` | `"I build web apps, mobile apps, and automations that help businesses grow."` |
| `"Building cutting-edge web and mobile applications with modern technologies."` | `"Full-stack developer based in Kerala — I turn business problems into fast, clean digital products."` |
| `"VIEW PROJECTS"` button | `"See My Work"` |
| `"GET IN TOUCH"` button | `"Book a Free Call"` |
| `"1+ Years Professional experience"` | `"3 Products shipped"` |
| `"5+ Projects Successfully delivered"` | `"Real clients · Real outcomes"` |
| `"1000+ Hours Building & Learning"` | `"3 client products shipped"` |
| `"10+ Product Ideas Prototyped"` | `"35-screen app delivered"` |
| `"Next: Full Product Launch"` | `"Currently building Stella Bridge v2"` |

---

## SECTION 17 — WhatsApp Floating Button (NEW)

### What to build
A floating WhatsApp button fixed to the bottom-right of every page. In Kerala especially, clients expect to be able to WhatsApp directly.

### Implementation:
```jsx
<a
  href="https://wa.me/917907021234"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.whatsappFloat}
  aria-label="Chat on WhatsApp"
>
  <WhatsAppIcon />
</a>
```

### Styling:
```css
position: fixed;
bottom: 28px;
right: 28px;
width: 52px;
height: 52px;
background: #25D366;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35);
transition: transform 0.2s;
```
Hover: `transform: scale(1.08)`

Place this component in the root layout so it appears on every page including blog posts.

---

## Priority Order for Implementation

Work in this order — highest client impact first:

1. **Section 16** — Copy & messaging fixes (pure text, zero dev time, massive impact)
2. **Section 15** — Dead links fix (trust killer if left broken)
3. **Section 2** — Hero rewrite
4. **Section 4** — Services section (most important new section for lead conversion)
5. **Section 11** — Contact section upgrade + WhatsApp
6. **Section 17** — WhatsApp floating button
7. **Section 8** — Testimonials section
8. **Section 7** — How I Work section
9. **Section 3** — Timeline number redesign
10. **Section 5** — Project cards → case study format
11. **Section 10** — FAQ section
12. **Section 9** — Skills section redesign
13. **Section 6** — About section rewrite
14. **Section 1** — Nav additions
15. **Section 12** — Footer upgrades
16. **Section 13** — Blog index page
17. **Section 14** — Stella Bridge blog post fixes
18. **Section 18** — DocuCompare blog post (write separately after Stella Bridge is live)

---

## Notes for Antigravity

- Work on one section at a time. After each section, confirm before moving to the next.
- Do not change the existing color scheme, only build on top of it.
- Do not introduce new npm packages unless strictly necessary — use what's already installed.
- All placeholder links (`#`) should have a `// TODO:` comment so Vishnu can find them easily.
- Every new section must have an `id` attribute for nav anchor links to work:
  - Services section: `id="services"`
  - How I Work: `id="process"`
  - Testimonials: `id="testimonials"`
  - FAQ: `id="faq"`
- Test mobile layout at 375px width for every section before marking it done.