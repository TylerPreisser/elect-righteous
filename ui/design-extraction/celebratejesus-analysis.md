# CelebrateJesus.org -- Complete Forensic Design Extraction
## Celebration Community Church (C3) | Hays & Colby, Kansas
### Extracted: 2026-03-31

---

# TABLE OF CONTENTS

1. [Platform & Technical Stack](#1-platform--technical-stack)
2. [Site Architecture & Navigation](#2-site-architecture--navigation)
3. [Complete Page Inventory](#3-complete-page-inventory)
4. [Design System -- Colors](#4-design-system----colors)
5. [Design System -- Typography](#5-design-system----typography)
6. [Design System -- Spacing & Layout](#6-design-system----spacing--layout)
7. [Design System -- Buttons & Interactive Elements](#7-design-system----buttons--interactive-elements)
8. [Design System -- Components](#8-design-system----components)
9. [Asset Inventory (Images, Icons, Media)](#9-asset-inventory)
10. [Page-by-Page Content Extraction](#10-page-by-page-content-extraction)
11. [JavaScript & Animation](#11-javascript--animation)
12. [Third-Party Integrations](#12-third-party-integrations)
13. [Footer Structure](#13-footer-structure)
14. [Social Media & External Links](#14-social-media--external-links)
15. [Responsive Design & Breakpoints](#15-responsive-design--breakpoints)
16. [Reconstruction Notes](#16-reconstruction-notes)

---

# 1. Platform & Technical Stack

## CMS / Platform
- **Platform**: The Church Co (thechurchco.com)
- **Platform Type**: Proprietary SaaS church website builder
- **Platform Pricing**: $29/month (Basic), Premium plan available
- **Platform URL**: https://thechurchco.com/
- **Portal URL**: https://portal.thechurchco.com/
- **Integrations**: Planning Center, PushPay, ChurchSuite

## Technical Architecture
- **Rendering**: Server-side rendered with client-side hydration (React-based)
- **CSS Approach**: Styled-components (CSS-in-JS) -- class names are hashed/obfuscated (e.g., `.eCUQH`, `.xWqPF`, `.jazShF`)
- **CSS Variables**: Extensive use of CSS custom properties for theming
- **Image CDN**: Cloudinary (`res.cloudinary.com/thechurchcov3production`)
- **Asset Storage**: `media.thechurchcoassets.com` (accounts/6004/)
- **Image Optimization**: Cloudinary auto-format (`f_auto`) with WebP delivery
- **Domain**: celebratejesus.org (www.celebratejesus.org)
- **Account ID**: 6004 (The Church Co platform account)

## Key CSS Variables (Theme System)
```css
--primary-color-bg     /* Primary brand background */
--secondary-color-bg   /* Secondary brand background */
--tertiary-color-bg    /* Tertiary/accent background */
--theme-gutter         /* Grid gutter spacing */
--theme-spacer         /* Section spacing */
```

## Data Attributes (Component System)
```
[data-hamburger]       -- Mobile menu toggle
[data-themed-icon]     -- Icon components
[data-edit-list]       -- List/content containers
[data-button-renderer] -- Button groups/CTAs
[data-bg-video]        -- Video background sections
[data-media-preview]   -- Media preview elements
[data-media-form-input]-- Form media inputs
[data-footer-content]  -- Footer sections
```

---

# 2. Site Architecture & Navigation

## Primary Navigation (Header)
| Label | URL Path | Notes |
|-------|----------|-------|
| Easter | `/easter` | Seasonal -- top of nav currently |
| Home | `/` | Homepage |
| About | `/about` | Beliefs, mission, staff link |
| Locations | `/locations` | Parent with dropdown |
|  -- Hays Campus | `/hays-campus` | Sub-item |
|  -- Colby Campus | `/colby-campus` | Sub-item |
| Messages | `/messages` | Sermon archive |
| Counseling | `/counseling` | Counseling ministry |
| Give | `/give` | Giving/donation page |

## Additional Discovered Pages
| Page | URL Path | Notes |
|------|----------|-------|
| Our Staff | `/our-staff-2/` | Staff directory (linked from About) |
| Watch Online | `/watch-online` | Livestream & service info |
| Live Stream | `/live-stream/` | Alternative livestream page |
| Resources | `/resources/` | Resource hub (RightNow Media, app, etc.) |
| Plan Your Visit | `/plan-your-visit/` | Visitor info |
| Calendar | `/calendar/` | C3 Hays calendar |
| NT26 | `/nt26` | Bible reading plan / devotional |
| Pray Today 2025 | `/pray-today-25` | Psalms & Proverbs reading plan |
| Bible Study (Colby) | `/bible-study-colby/` | Colby campus Bible study info |
| Staff Profiles | `/people/patrick-turley/` | Individual staff profile pages |
| Encounter | encounterc3.com | Separate sub-ministry site |

## Logo
- **URL**: `https://media.thechurchcoassets.com/accounts/6004/0e8bc4ff-13bf-4baf-b900-89812eb5727a-imported-asset__largepreview__.webp`
- **CDN URL**: `https://res.cloudinary.com/thechurchcov3production/image/fetch/f_auto/https://media.thechurchcoassets.com/accounts/6004/0e8bc4ff-13bf-4baf-b900-89812eb5727a-imported-asset__largepreview__.webp`
- **Format**: WebP
- **Location**: Top-left of header nav on all pages

---

# 3. Complete Page Inventory

### Pages Successfully Extracted:
1. `/` -- Homepage
2. `/about` -- About / Beliefs
3. `/easter` -- Easter 2026 landing
4. `/events` -- Events (currently empty: "No events found")
5. `/counseling` -- Counseling ministry (richest content page)
6. `/watch-online` -- Livestream info
7. `/resources/` -- Resource hub
8. `/our-staff-2/` -- Staff directory (dynamically loaded, names not in source)
9. `/nt26` -- NT26 devotional / reading plan
10. `/pray-today-25` -- 2025 Psalms & Proverbs reading plan
11. `/bible-study-colby/` -- Colby Bible study schedule
12. `/calendar/` -- Calendar (events load dynamically)
13. `/people/patrick-turley/` -- Staff profile example
14. `/give` -- Giving page
15. `/plan-your-visit/` -- Visitor information
16. `/live-stream/` -- Livestream page
17. `/hays-campus` -- Hays campus page
18. `/colby-campus` -- Colby campus page

### Pages That Returned 404:
- `/groups` (not a valid route)
- `/contact` (not a valid route -- contact info is in footer)

---

# 4. Design System -- Colors

## Primary Palette (Extracted from CSS)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Primary Text / Dark** | `#1b1c1c` | rgb(27, 28, 28) | Body text, headings on light backgrounds |
| **Secondary / Navy** | `#10405D` | rgb(16, 64, 93) | Section backgrounds, accent blocks, nav elements |
| **Tertiary / Teal** | `#1cc3af` | rgb(28, 195, 175) | Accent color, highlights, CTAs |
| **Focus Blue** | `#1545D3` | rgb(21, 69, 211) | Focus outlines (accessibility), interactive states |
| **Dark Charcoal** | `#2a2929` | rgb(42, 41, 41) | Footer background, dark section backgrounds |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Text on dark backgrounds, card backgrounds |
| **Light Gray** | `#f6f6f6` | rgb(246, 246, 246) | Alternate section background |
| **Black** | `#000000` | rgb(0, 0, 0) | True black (limited use) |
| **Dark Gray (UI)** | `#333333` | rgb(51, 51, 51) | Scroll arrows, secondary UI elements |

## Color Mapping to Sections
```
Hero sections:          Background images with overlay, white text
Content sections:       White (#FFFFFF) background, #1b1c1c text
Alternate sections:     #f6f6f6 (light gray) background
Navy sections:          #10405D background, #FFFFFF text
Dark sections:          #2a2929 background, #FFFFFF text
CTA/accent elements:    #1cc3af (teal)
Focus indicators:       3px solid #1545D3
Footer:                 #2a2929 background, #FFFFFF text
```

## CSS Variable Theme System
```css
--primary-color-bg:   /* Maps to white or light backgrounds */
--secondary-color-bg: #10405D  /* Navy blue */
--tertiary-color-bg:  #1cc3af  /* Teal accent */
--base-color:         #FFFFFF  /* White */
--alt-color:          #f6f6f6  /* Light gray */
```

---

# 5. Design System -- Typography

## Font Families

| Role | Font Family | Source | Weight(s) | Style |
|------|-------------|--------|-----------|-------|
| **Headings** | Montserrat | Google Fonts | 700 (Bold) | Normal |
| **Body Text** | Lato | Google Fonts | 100-900 (full range) | Regular |
| **Fallback** | system / inherit | -- | -- | -- |

## Font Loading
- Google Fonts loaded (Montserrat and Lato)
- Lato available in weights: 100, 200, 300, 400 (regular), 500, 600, 700, 800, 900
- Montserrat primarily used at 700 weight

## Type Scale (Responsive)
```css
/* Headings use clamp() for responsive sizing */
font-size: clamp(min, preferred, max);

/* Observed patterns: */
h1 / Hero:       Large, bold Montserrat, uppercase or title case
h2 / Section:    Semi-bold to bold, Montserrat
h3 / Subsection: Montserrat 700
Body:            Lato 400 (regular)
Buttons:         text-transform: uppercase; font-weight: 600 (semi-bold)
```

## Line Heights
- Body text: ~140% (1.4)
- Headings: ~120% (1.2) estimated
- Responsive scaling via clamp() functions

---

# 6. Design System -- Spacing & Layout

## Grid System
- **Container queries** used (not media queries for components): `@container (max-width: 768px)`
- **Primary breakpoint**: 768px (tablet/desktop transition)
- **Layout approach**: CSS Grid + Flexbox with styled-components
- **Hero padding**: 25% top, 5% bottom on desktop

## Spacing Variables
```css
--theme-gutter:  /* Grid gutter spacing between columns */
--theme-spacer:  /* Vertical section spacing */
```

## Layout Patterns Observed

### Full-Width Sections
- Hero sections span full viewport width
- Background images or solid colors fill the section
- Content constrained within centered container

### Column Layouts
- 2-column: Image + Text (alternating left/right)
- 3-column: Card grids
- Single column: Text-heavy sections (beliefs, counseling)

### Smart Columns
- Platform uses "smart columns" that restack on mobile
- Horizontal scroll option for card collections (`.layout-horizontalscroll`)

### Section Stacking Pattern (Homepage)
```
[Hero -- Full-width background image + overlay text + CTA button]
[Content Section -- White bg, centered text]
[Content Section -- Navy (#10405D) bg, white text]
[Content Section -- Image left/right + text]
[Content Section -- Alternating bg color]
[CTA Section -- Background image + overlay + button]
[Footer -- #2a2929 bg]
```

---

# 7. Design System -- Buttons & Interactive Elements

## Button Variants

### Primary Button
```css
/* Observed styling: */
background-color: var(--tertiary-color-bg); /* #1cc3af teal */
color: #FFFFFF;
text-transform: uppercase;
font-weight: 600;
border-radius: [rounded corners];
padding: [vertical] [horizontal];
transition: transform, opacity;
/* Hover: scale up slightly, opacity change */
```

### Secondary Button
```css
/* Outlined or lighter variant */
background: transparent;
border: 2px solid [color];
color: [color];
text-transform: uppercase;
```

### Ghost/Link Button
```css
text-decoration: underline;
/* or plain text with arrow */
```

## Button Hover Effects
```css
/* Scale + opacity transition on hover */
transform: scale(1.05);
opacity: 0.9;
transition: all 0.3s ease;
```

## Focus States (Accessibility)
```css
outline: 3px solid #1545D3;
/* Visible focus ring on all interactive elements */
```

## Interactive Components
- **Hamburger menu**: `[data-hamburger]` -- toggles mobile nav
- **Dropdown menus**: Staggered animation on open
- **Scroll-to-top button**: Appears on scroll
- **Horizontal scroll carousels**: Arrow navigation with `.layout-horizontalscroll`

---

# 8. Design System -- Components

## 8.1 Header / Navigation

### Structure
```
[Top Bar] -- Thin bar above main nav (may contain social links)
  |
[Main Nav Bar]
  |-- [Logo (left)] -- Image, links to /
  |-- [Desktop Menu (center/right)] -- Horizontal links
  |     |-- Menu items with dropdowns (Locations)
  |-- [Hamburger (mobile)] -- [data-hamburger], toggles overlay
```

### Mobile Navigation
- Full-screen overlay on hamburger toggle
- Staggered animation for menu items appearing
- Sub-items accordion-style within mobile menu

### Key Classes
```
.eCUQH   -- Menu component
.xWqPF   -- TopBar component
.cpotzf  -- Hamburger icon
```

## 8.2 Hero Section

### Structure
```
[Hero Container] -- Full viewport width
  |-- [Background] -- Image or video, with overlay/tint
  |-- [Content Overlay]
       |-- [Heading] -- Large, bold, white text
       |-- [Subheading] -- Smaller text below
       |-- [CTA Button] -- Uppercase, teal or white
```

### Key Class
```
.kZLWVW  -- Hero section styling
```

### Hero Padding
```css
padding-top: 25%;    /* Desktop */
padding-bottom: 5%;  /* Desktop */
/* Responsive adjustments at 768px */
```

## 8.3 Content Rows / Sections

### Row Variants
```
.jazShF  -- Row render variant 1
.gjMdoS  -- Row render variant 2
.bUooLl  -- Row render variant 3
.jXVLjy  -- Row render variant 4
.cEKxPs  -- Row render variant 5
```

### Layout Options Per Row
- **Single column centered**: Text-heavy content
- **Two columns**: Image + Text (image left or right)
- **Three columns**: Card grid
- **Horizontal scroll**: Carousel of cards

## 8.4 List / Card Components

### List Container Classes
```
.fsgivr  -- ThemedList variant 1
.guhyQW  -- ThemedList variant 2
```

### List Item Classes
```
.eIYNXa  -- ListItem variant 1
.dkErWH  -- ListItem variant 2
```

### Card Structure (Inferred)
```
[Card Container]
  |-- [Image] -- Top or background
  |-- [Content]
       |-- [Title]
       |-- [Description]
       |-- [Button / Link]
```

## 8.5 Button Renderer
```
.jDqjoj  -- ButtonRenderer component
[data-button-renderer] -- Data attribute
```
Groups of buttons/CTAs rendered together, typically centered below section content.

## 8.6 Shape Overlays
- Decorative shapes with gradient tints applied over section backgrounds
- CSS-driven (not image-based) gradient overlays

## 8.7 Footer Component
```
[Footer] -- #2a2929 background
  |-- [Footer Content] -- [data-footer-content]
       |-- [Column 1: Contact Info]
       |    |-- Email: office@c3hays.com
       |    |-- Phone: (785) 625-5483
       |    |-- Address: 5790 230th Ave, Hays, KS 67601
       |-- [Column 2: Quick Links]
       |    |-- Give (PushPay link)
       |    |-- Bible reading plan
       |-- [Column 3: Social Media]
       |    |-- Facebook, Instagram, Vimeo, Podcast
       |-- [Bottom Bar]
            |-- (c) 2026 Celebration Community Church
            |-- "The Church Co" attribution link
```

## 8.8 Notification System
- Built-in notification component (part of platform)
- Appears as top banner or toast

## 8.9 Forms
- Media form inputs: `[data-media-form-input]`, height: 50px
- Appointment booking via external link: `https://celebration.ccbchurch.com/goto/forms/258/responses/new`

---

# 9. Asset Inventory

## Images (All Discovered URLs)

### Logo
| Asset | URL |
|-------|-----|
| C3 Logo (WebP) | `https://media.thechurchcoassets.com/accounts/6004/0e8bc4ff-13bf-4baf-b900-89812eb5727a-imported-asset__largepreview__.webp` |

### Homepage
| Asset | URL |
|-------|-----|
| Homepage Hero/BG 1 | `https://media.thechurchcoassets.com/accounts/6004/8e749545-350d-4eb6-a263-a747796b5a98-imported-asset__largepreview__.webp` |
| Homepage BG 2 | `https://media.thechurchcoassets.com/accounts/6004/28aff529-5e9a-43a8-b94c-912d402600a5-imported-asset__largepreview__.webp` |

### About Page
| Asset | URL |
|-------|-----|
| About Section BG 1 | `https://media.thechurchcoassets.com/accounts/6004/cea5061b-677f-4dbc-8c13-91e05e7c4541-imported-asset__largepreview__.webp` |
| About Section BG 2 | `https://media.thechurchcoassets.com/accounts/6004/8e749545-350d-4eb6-a263-a747796b5a98-imported-asset__largepreview__.webp` |
| About Footer Section | `https://media.thechurchcoassets.com/accounts/6004/1ca307ef-f4b1-4df6-959e-5611bed96a34-imported-asset__largepreview__.webp` |

### Easter Page
| Asset | URL |
|-------|-----|
| Easter Hero Banner ("Easter at C3_DRAFT1") | `https://media.thechurchcoassets.com/accounts/6004/cf00f8a1-2261-4a73-aedd-eb7bd10b79fb-./Easter at C3_DRAFT1__largepreview__.webp` |
| Easter Section BG | `https://media.thechurchcoassets.com/accounts/6004/7b8c42f6-fa49-48d2-af86-fcc14d6e8ef2-imported-asset__largepreview__.webp` |
| Easter Egg Hunt Image | `https://media.thechurchcoassets.com/accounts/6004/574e10a2-3ed9-4fdc-b01b-5bc6fcbcaa8f-./IDD Easter Egg Hunt__largepreview__.webp` (partial -- filename truncated in source) |

### Counseling Page
| Asset | URL |
|-------|-----|
| Counseling Hero BG | `https://media.thechurchcoassets.com/accounts/6004/ad21af15-5e2c-48ac-997d-e08c0b76b04e-imported-asset__largepreview__.webp` |

### Watch Online Page
| Asset | URL |
|-------|-----|
| Watch Online Hero BG | `https://media.thechurchcoassets.com/accounts/6004/2aa1c5b8-3408-4513-acce-0c1f5a7b8bc1-imported-asset__largepreview__.webp` |

### Pray Today 2025 Page
| Asset | URL |
|-------|-----|
| Monthly reading plan cards (January through December) | Dynamically loaded -- 12 card images for each month |
| "NT26_Again" hero image | Referenced but URL not extracted from source |

## Cloudinary CDN Pattern
All images served through Cloudinary with this pattern:
```
https://res.cloudinary.com/thechurchcov3production/image/fetch/f_auto/https://media.thechurchcoassets.com/accounts/6004/[UUID]-[filename]__largepreview__.webp
```

## Icon Sets
- Themed icons via `[data-themed-icon]` attribute
- Platform-provided icon set (not FontAwesome or similar external library identified)
- Social media icons in footer (Facebook, Instagram, Vimeo, Podcast/Anchor)

---

# 10. Page-by-Page Content Extraction

## 10.1 Homepage (`/`)

### Mission Statement (Hero/Core)
> "Jesus is central to everything we do at C3. We exist to meet with Him, grow in Him, and serve through Him"

### Service Times (from search/cross-reference)
- **Saturday**: 5:00 PM
- **Sunday**: 8:00 AM, 9:30 AM, 11:00 AM

### Welcome Messaging
The church emphasizes relationship over religion, welcoming people as they are without prerequisites.

### Section Order (Observed)
1. Hero section with background image + mission text
2. Welcome / intro section
3. Service times or next steps
4. Featured content / series
5. CTA sections (Plan a Visit, Watch Online, Give)
6. Footer

---

## 10.2 About Page (`/about`)

### Hero Text
> "Jesus is central to everything we do at C3. We exist to meet with Him, grow in Him, and serve through Him"

### Staff Section
- **Heading**: "Meet Our Staff"
- **Subheading**: "Say hi to the staff of Celebration Community Church"
- **CTA Button**: "OUR STAFF" --> `/our-staff-2/`

### Theological Beliefs (Complete Doctrinal Statements)

**On God:**
> Belief in "one true and eternal God, unchanging, unchangeable" with attributes including all power, knowledge, and wisdom.

**Trinity:**
> "There is but one being of God, yet there are three Persons who share this one being: the Father, the Son, and the Holy Spirit." Each Person is "fully and completely God."

**Jesus Christ:**
> "God incarnate" who was "fully God and fully man," lived sinlessly, and "offered himself as a substitutionary sacrifice for sinners." Resurrection affirmed.

**Holy Spirit:**
> "Fully God, equal with the Father and Son." Primary ministry involves glorifying Christ and empowering believers.

**Scripture:**
> "The Bible to be revelation from God...inspired, without error in the original writings, and...complete in all respects."

**Human Nature & Suffering:**
> Humans "created by design male and female" in God's image. "All men...sinners both by nature and choice." Rejects prosperity gospel. Acknowledges pain as part of the fallen world.

**Salvation:**
> "God's free gift...by grace alone through faith alone in the shed blood of Jesus Christ alone."

**Eternity:**
> "Heaven and hell are real places of eternal existence."

---

## 10.3 Easter Page (`/easter`)

### Hero
- **Main Heading**: "Easter Changes Everything"
- **Subheading**: "Easter is more than a holiday - it's reminder that hope is alive, that grace is real, and that Jesus changed everything!"
- **Welcome**: "No matter where you've been, what questions you have, or how long it's been since you've been in church - you are welcome here!"

### Event Details

**Good Friday Service**
- Date: April 3rd
- Time: 6:00 PM
- Locations: Hays & Colby campuses

**Easter Sunday -- C3 Hays**
- Times: 8:00 AM, 9:30 AM, 11:00 AM
- Address: 5790 230th Ave, Hays, KS

**Easter Sunday -- C3 Colby**
- Easter Breakfast: 7:00 AM
- Service Times: 8:00 AM & 10:00 AM
- Address: 1923 S. Range Ave, Colby, KS

### Secondary Content
- **Section Title**: "The Greatest Story Ever Told"
- **Description**: Emphasizes Easter's significance beyond a calendar holiday, highlighting Jesus's victory. Quote: "Life, redemption, and hope is still possible - even today."

### Images
- Easter hero banner: "Easter at C3_DRAFT1"
- Easter Egg Hunt image: "IDD Easter Egg Hunt"

---

## 10.4 Events Page (`/events`)

### Content
- **Heading**: "What's On"
- **Body**: "No events found" (currently empty)

---

## 10.5 Counseling Page (`/counseling`)

### Vision Statement
Helping people develop spiritually through Jesus Christ while recognizing the importance of emotional and relational health. The pastoral team established a "team approach to counseling, centered around a trained Biblically-based Counselor."

### Counselor Profiles

**1. Richard Carter** -- Pastoral Counselor and Life Coach
- Background: "At Risk Youth" educator, 12 years as Youth Pastor, 5 years private practice in Denver
- Specialties: Men's sexual addiction, anger issues, self-worth, couples recovery
- Qualifications: Horticultural Therapy (Kansas State), Pastoral License (Charis Bible College), Counseling A. (Liberty University)

**2. Clayton Howard** -- Licensed Master's Level Psychologist
- Background: Southwest Kansas native, former military (Afghanistan service), ~10 years experience
- Education: Master's from Fort Hays State University
- Approach: "Christ-centered, solution-focused, and reality-based"
- Specialties: Anxiety, depression, relationship issues, faith struggles
- Qualifications: M.S., LMLP

**3. Patrick McGinnis** -- Licensed Master Social Worker
- Background: FHSU Sociology degree (1991), Masters in Clinical Social Work (2022), co-founder of Dialogue Ministries
- Focus: Young adults, couples, marriage, families using CBT/DBT/solutions-focused approaches
- Quote: "My goal is to help people reach their God given potential"
- Qualifications: M.S. LMSW

### FAQ Section

**Cost**: "$75/session" (reduced fee). Scholarships available case-by-case. Payment: cash, check, credit card, Venmo.

**Scheduling**: Email office@celebratejesus.org or call 785-625-5483

**Cancellation**: "Any appointments not cancelled more than 24 hours prior to your appointment and no-shows will be charged $75"

**Crisis**: "If you are experiencing a mental health emergency, we encourage you to call or text the 24-hour Suicide and Crises Lifeline at 988"

### Appointment Booking
- External form: `https://celebration.ccbchurch.com/goto/forms/258/responses/new`

---

## 10.6 Watch Online Page (`/watch-online`)

### Service Times (Livestream)
- **Saturday**: 5:00 PM
- **Sunday**: 8:00 AM, 9:30 AM, 11:00 AM

### Streaming Platforms
- **Facebook Live**: `https://facebook.com/c3hays/videos`
- **Past Messages (Vimeo)**: `https://vimeo.com/c3hays`

### C3 App
- **iOS App Store**: `https://apps.apple.com/us/app/c3-hays/id1028509278`

---

## 10.7 Resources Page (`/resources/`)

### Featured Resources
1. **Watch Past Messages** -- Sermon archive
2. **RightNow Media Partnership**: "We have partnered with RightNow Media to give everyone at C3 access to thousands of online bible studies, curriculum, conference sessions, and quality Christian content."
3. **C3 Mobile App** -- iOS (giving, sermon notes, events, registration)
4. **Prayer Resources** -- Pray Today 2021, Pray Today Hymns
5. **NEWin22** -- 2022 church-wide initiative

---

## 10.8 Pray Today 2025 (`/pray-today-25`)

### Content
- **Program**: Psalms & Proverbs Reading Plan 2025
- **Format**: 12 monthly reading plan cards (January through December)
- **Layout**: Horizontal scrollable carousel of monthly guide images
- **Themes**: Each month features thematic focus (e.g., "Trust")
- **CTA**: "Have you read your Bible today? Click here for today's reading plan and devotional."

---

## 10.9 Bible Study -- Colby (`/bible-study-colby/`)

### Description
> "Our C3 Adult Bible Study is a weekly opportunity for men and women to come together for fellowship, prayer, and most importantly study of the Word of God."

Leaders aim to establish "a foundation built upon the proper context of Scripture and how it applies to our lives."

### Schedule

**Men's Bible Study**
- Day/Time: Thursdays at 6:00 AM
- Location: 1923 S. Range, Colby, KS

**Women's Bible Study**
- Day/Time: Fridays at 9:30 AM

---

## 10.10 Staff Profile -- Patrick Turley (`/people/patrick-turley/`)

- **Name**: Patrick Turley
- **Title**: Youth Pastor
- **Role**: Oversees CrossCurrent (student ministry, grades 6-12)
- **Ministry Focus**: Helping students "discover, know, accept and live for Jesus Christ"
- **Education**: Certificate in Youth Ministry, Eternity Bible College
- **Family**: Married to Molly; children: Brinley (daughter), Grayson (son)
- **Interests**: Coffee, music, golf, Ultimate Frisbee, Dallas Cowboys

---

## 10.11 Staff Directory (`/our-staff-2/`)

### Structure
Three categories:
1. **Elder Staff**
2. **Hays Campus Staff**
3. **Colby Campus Staff**

**Note**: Staff names, photos, and details are dynamically loaded via JavaScript and were not present in static HTML. The platform renders these client-side.

---

# 11. JavaScript & Animation

## Framework
- **React-based** -- The Church Co platform renders via React with styled-components
- No Vue, Angular, or jQuery detected
- Styled-components for CSS-in-JS (`data-styled` tags in source)

## Animations & Transitions
```css
/* Button hover */
transform: scale(1.05);
opacity: 0.9;
transition: all 0.3s ease;

/* Dropdown menu */
staggered animation on open (items appear sequentially)

/* Hamburger menu */
Full-screen overlay with slide/fade animation

/* Scroll-to-top button */
Appears/disappears based on scroll position
```

## No External Animation Libraries Detected
- No GSAP
- No Framer Motion
- No Animate.css
- All animations are CSS transitions/keyframes via styled-components

---

# 12. Third-Party Integrations

| Service | Purpose | URL/Details |
|---------|---------|-------------|
| **PushPay** | Online giving/donations | `https://pushpay.com/g/4390326549?r=monthly` |
| **Church Community Builder (CCB)** | Member management, forms | `https://celebration.ccbchurch.com/` |
| **Cloudinary** | Image CDN & optimization | `res.cloudinary.com/thechurchcov3production` |
| **RightNow Media** | Bible study content library | Partnership referenced |
| **Vimeo** | Past message archive | `https://vimeo.com/c3hays` |
| **Facebook Live** | Livestream services | `https://facebook.com/c3hays/videos` |
| **Anchor FM** | Podcast hosting | Referenced in footer |
| **Apple App Store** | C3 Hays mobile app | `https://apps.apple.com/us/app/c3-hays/id1028509278` |
| **The Church Co** | Website platform | `thechurchco.com` ($29/mo) |

---

# 13. Footer Structure

## Layout
Three-to-four column layout on desktop, stacking on mobile.

## Content

### Contact Column
```
Email:    office@c3hays.com
Phone:    (785) 625-5483
Address:  5790 230th Ave, Hays, KS 67601
```

### Quick Links Column
- Online Giving (PushPay)
- Bible reading plan (`/nt26`)
- "Have you read your Bible today? Click here for today's reading plan and devotional."

### Social Media Column
- Facebook
- Instagram
- Vimeo
- Podcast (Anchor)

### Bottom Bar
```
(c) 2026 Celebration Community Church
Powered by The Church Co [link to thechurchco.com]
```

## Footer Styling
```css
background-color: #2a2929;
color: #FFFFFF;
/* Padding and spacing via --theme-spacer */
```

---

# 14. Social Media & External Links

| Platform | URL | Handle |
|----------|-----|--------|
| **Facebook** | `https://www.facebook.com/c3hays/` | @c3hays |
| **Facebook Videos** | `https://facebook.com/c3hays/videos` | -- |
| **Instagram** | `https://www.instagram.com/c3hays` | @c3hays |
| **Vimeo** | `https://vimeo.com/c3hays` | c3hays |
| **Podcast (Anchor)** | Referenced but exact URL not extracted | -- |
| **Apple App** | `https://apps.apple.com/us/app/c3-hays/id1028509278` | C3 Hays |

### Emails
- **General Office**: office@c3hays.com
- **Alternative**: office@celebratejesus.org

### Phone
- (785) 625-5483 (confirmed across multiple pages)
- (785) 623-4284 (found in external directories -- may be alternate)

---

# 15. Responsive Design & Breakpoints

## Primary Breakpoint
```css
@container (max-width: 768px) {
  /* Mobile styles */
}
```

## Approach
- **Container queries** (not traditional media queries) for component-level responsiveness
- **Mobile-first** patterns observed
- **clamp()** functions for fluid typography
- **Flexbox + CSS Grid** for layout

## Mobile Adaptations
- Hamburger menu replaces horizontal nav
- Columns stack to single column
- Horizontal scroll carousels maintain on mobile
- Hero padding reduces
- Font sizes scale down via clamp()

## Hero Section Responsive
```css
/* Desktop */
padding-top: 25%;
padding-bottom: 5%;

/* Mobile (< 768px) */
/* Reduced padding, adjusted via container query */
```

---

# 16. Reconstruction Notes

## What You Need to Rebuild This Site

### 1. Platform Choice
The Church Co is a proprietary platform. To rebuild pixel-for-pixel, you would need to either:
- **Use The Church Co** ($29/month) and match the theme configuration
- **Build custom** using React + styled-components to replicate the look

### 2. Design Tokens to Implement
```css
:root {
  /* Colors */
  --color-primary-text: #1b1c1c;
  --color-navy: #10405D;
  --color-teal: #1cc3af;
  --color-focus: #1545D3;
  --color-dark: #2a2929;
  --color-white: #FFFFFF;
  --color-light-gray: #f6f6f6;
  --color-black: #000000;
  --color-gray-ui: #333333;

  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Lato', sans-serif;
  --font-weight-heading: 700;
  --font-weight-body: 400;
  --font-weight-button: 600;

  /* Spacing (approximate -- exact values behind CSS vars) */
  --section-padding-y: 4rem;
  --container-max-width: 1200px;
  --grid-gutter: 1.5rem;

  /* Transitions */
  --transition-default: all 0.3s ease;

  /* Borders */
  --border-radius-button: 4px;
  --focus-outline: 3px solid var(--color-focus);
}
```

### 3. Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@700&display=swap" rel="stylesheet">
```

### 4. Image CDN Pattern
All images follow this Cloudinary pattern:
```
https://res.cloudinary.com/thechurchcov3production/image/fetch/f_auto/{original_url}
```
Where `{original_url}` is:
```
https://media.thechurchcoassets.com/accounts/6004/{UUID}-{filename}__largepreview__.webp
```

### 5. Key Structural Elements to Replicate
1. **Thin top bar** above main nav
2. **Centered logo** in nav with menu items flanking
3. **Full-width hero sections** with background image + dark overlay + centered white text
4. **Alternating section backgrounds** (white, light gray, navy, dark)
5. **Section pattern**: Heading + description + CTA button
6. **Card grids** with horizontal scroll option
7. **Staff profile cards** with photo, name, title
8. **Dark footer** (#2a2929) with multi-column layout
9. **Mobile hamburger** with full-screen overlay menu

### 6. Content Management
- Staff profiles load dynamically (API-driven)
- Events load dynamically
- Calendar events load dynamically
- Sermon/message content loads dynamically
- Static content: About/beliefs, counseling profiles, Easter event details

### 7. Limitations of This Extraction
- **Styled-components hashing**: CSS class names are auto-generated hashes, not semantic. They will change on each build.
- **Dynamic content**: Staff directory, events, calendar, and messages are loaded via JavaScript after page render. Names/details not in static HTML source.
- **Exact spacing values**: The platform uses CSS variables that resolve at runtime. Approximate values provided.
- **Individual staff photos**: Not extractable from HTML source (dynamically loaded).
- **Exact hero overlay opacity**: Not captured -- would need visual inspection or DevTools.
- **Animation keyframes**: Platform-specific, not fully captured in styled-components output.

---

# APPENDIX A: Complete Church Information

## Celebration Community Church (C3)

### Identity
- **Full Name**: Celebration Community Church
- **Abbreviation**: C3
- **Website**: celebratejesus.org
- **App Name**: C3 Hays

### Locations

**Hays Campus (Primary)**
- Address: 5790 230th Ave, Hays, KS 67601
- Service Times: Saturday 5:00 PM | Sunday 8:00 AM, 9:30 AM, 11:00 AM
- Phone: (785) 625-5483
- Email: office@c3hays.com / office@celebratejesus.org

**Colby Campus**
- Address: 1923 S. Range Ave, Colby, KS
- Service Times: Sunday 8:00 AM & 10:00 AM (inferred from Easter schedule)

### Mission
> "We exist to meet with Him, grow in Him, and serve through Him."

### Sub-Ministries
- **CrossCurrent**: Student ministry (grades 6-12), led by Patrick Turley
- **Encounter**: Separate website at encounterc3.com
- **Counseling**: 3 counselors ($75/session)
- **Adult Bible Study**: Men's (Thursdays 6 AM) and Women's (Fridays 9:30 AM) at Colby

### External Platforms
- Giving: PushPay
- Member Management: Church Community Builder (CCB)
- Bible Studies: RightNow Media partnership
- Livestream: Facebook Live
- Message Archive: Vimeo
- Podcast: Anchor FM
- Mobile App: iOS (App Store)

---

# APPENDIX B: All Discovered URLs (Deduped)

## Internal Pages
```
/
/about
/easter
/events
/give
/counseling
/messages
/locations
/hays-campus
/colby-campus
/watch-online
/live-stream/
/resources/
/plan-your-visit/
/calendar/
/our-staff-2/
/nt26
/pray-today-25
/bible-study-colby/
/people/patrick-turley/
```

## External URLs
```
https://pushpay.com/g/4390326549?r=monthly
https://celebration.ccbchurch.com/goto/forms/258/responses/new
https://facebook.com/c3hays/videos
https://www.facebook.com/c3hays/
https://www.instagram.com/c3hays
https://vimeo.com/c3hays
https://apps.apple.com/us/app/c3-hays/id1028509278
https://www.encounterc3.com/
https://thechurchco.com/
https://portal.thechurchco.com/
```

## Image Asset URLs
```
https://media.thechurchcoassets.com/accounts/6004/0e8bc4ff-13bf-4baf-b900-89812eb5727a-imported-asset__largepreview__.webp
https://media.thechurchcoassets.com/accounts/6004/8e749545-350d-4eb6-a263-a747796b5a98-imported-asset__largepreview__.webp
https://media.thechurchcoassets.com/accounts/6004/28aff529-5e9a-43a8-b94c-912d402600a5-imported-asset__largepreview__.webp
https://media.thechurchcoassets.com/accounts/6004/cea5061b-677f-4dbc-8c13-91e05e7c4541-imported-asset__largepreview__.webp
https://media.thechurchcoassets.com/accounts/6004/1ca307ef-f4b1-4df6-959e-5611bed96a34-imported-asset__largepreview__.webp
https://media.thechurchcoassets.com/accounts/6004/cf00f8a1-2261-4a73-aedd-eb7bd10b79fb-./Easter at C3_DRAFT1__largepreview__.webp
https://media.thechurchcoassets.com/accounts/6004/7b8c42f6-fa49-48d2-af86-fcc14d6e8ef2-imported-asset__largepreview__.webp
https://media.thechurchcoassets.com/accounts/6004/574e10a2-3ed9-4fdc-b01b-5bc6fcbcaa8f-./IDD Easter Egg Hunt__largepreview__.webp
https://media.thechurchcoassets.com/accounts/6004/ad21af15-5e2c-48ac-997d-e08c0b76b04e-imported-asset__largepreview__.webp
https://media.thechurchcoassets.com/accounts/6004/2aa1c5b8-3408-4513-acce-0c1f5a7b8bc1-imported-asset__largepreview__.webp
```

---

# APPENDIX C: CSS-in-JS Class Name Reference

These are the hashed styled-component class names observed. They WILL change on platform rebuilds but document the current component structure:

```
.eCUQH    -- Menu
.xWqPF    -- TopBar
.jazShF   -- RowRender variant 1
.gjMdoS   -- RowRender variant 2
.bUooLl   -- RowRender variant 3
.jXVLjy   -- RowRender variant 4
.cEKxPs   -- RowRender variant 5
.fsgivr   -- ThemedList variant 1
.guhyQW   -- ThemedList variant 2
.kZLWVW   -- Hero section
.jDqjoj   -- ButtonRenderer
.eIYNXa   -- ListItem variant 1
.dkErWH   -- ListItem variant 2
.igNMPs   -- Button variant 1
.bpCSMV   -- Button variant 2
.gnTJxq   -- Button variant 3
.cpotzf   -- Hamburger icon
.gPUSxD   -- (unidentified component)
```

---

*End of extraction. Document generated 2026-03-31 via forensic web analysis.*
*Platform: The Church Co | Account: 6004 | Domain: celebratejesus.org*
