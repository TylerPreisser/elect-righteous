# CelebrateJesus.org - Complete Site Extraction & Page-by-Page Analysis

**Crawl Date:** March 31, 2026
**Domain:** https://www.celebratejesus.org/
**Church Name:** Celebration Community Church (C3)
**Locations:** Hays, KS (primary) & Colby, KS (satellite)

---

## Table of Contents

1. [Technical Foundation](#technical-foundation)
2. [Global Design System](#global-design-system)
3. [Global Navigation & Footer](#global-navigation--footer)
4. [Homepage](#1-homepage)
5. [About / Who We Are](#2-about--who-we-are)
6. [Easter (Seasonal Landing)](#3-easter-seasonal-landing)
7. [Locations](#4-locations)
8. [Hays Campus](#5-hays-campus)
9. [Colby Campus](#6-colby-campus)
10. [Messages (Sermon Archive)](#7-messages-sermon-archive)
11. [Episode Pages (Individual Sermons)](#8-episode-pages-individual-sermons)
12. [Watch Online](#9-watch-online)
13. [Live Stream](#10-live-stream)
14. [Give / Donate](#11-give--donate)
15. [Events](#12-events)
16. [Plan Your Visit](#13-plan-your-visit)
17. [Info (Welcome)](#14-info-welcome)
18. [Counseling](#15-counseling)
19. [Staff - Hays](#16-staff---hays)
20. [Staff - Colby](#17-staff---colby)
21. [C3Kids - Hays](#18-c3kids---hays-campus)
22. [C3Kids - Colby](#19-c3kids---colby-campus)
23. [Family Ministry - Hays](#20-family-ministry---hays)
24. [Family Ministry - Colby](#21-family-ministry---colby)
25. [Overflow (Wednesday Nights)](#22-overflow-wednesday-nights)
26. [C2 Colby (Youth)](#23-c2-colby-crosscurrent-youth)
27. [Bible Study - Hays](#24-bible-study---hays)
28. [Bible Study - Colby](#25-bible-study---colby)
29. [Foundations (Bible Class)](#26-foundations-bible-class)
30. [Resources](#27-resources)
31. [Podcasts](#28-podcasts)
32. [Pray Today 2025](#29-pray-today-2025)
33. [NT26 (Bible Reading Plan)](#30-nt26-bible-reading-plan)
34. [Hymns](#31-hymns)
35. [Summer Programs](#32-summer-programs)
36. [Weddings](#33-weddings)
37. [Blog](#34-blog)
38. [Calendar](#35-calendar)
39. [Staff Forms (Protected)](#36-staff-forms-protected)
40. [Complete URL Inventory](#complete-url-inventory)

---

## Technical Foundation

### Platform
- **CMS/Builder:** The Church Co (thechurchco.com) - a church-specific website builder
- **Rendering:** React + Next.js (server-side rendered with client-side hydration)
- **Styled Components:** CSS-in-JS (styled-components library)
- **CDN:** Cloudinary for images (res.cloudinary.com/thechurchcov3production)
- **Asset CDN:** thechurchcoassets.com
- **Media Hosting:** Cloudinary image transforms with auto-format (f_auto)

### robots.txt
```
User-Agent: *
Allow: /
Disallow: /admin/
Sitemap: https://www.celebratejesus.org/sitemap-index.xml
```

### Sitemap Structure
- `/sitemap-index.xml` - Master index pointing to 6 sub-sitemaps:
  - `/page/sitemap.xml` - **37 pages** (all main site pages)
  - `/episode/sitemap.xml` - **1,187 episode URLs** (sermons, devotionals, Bible readings from 2022-2026)
  - `/blog/sitemap.xml` - Empty (no blog posts indexed)
  - `/channel/sitemap.xml` - Empty
  - `/event/sitemap.xml` - Empty
  - `/noteoutline/sitemap.xml` - Empty

### Analytics & Tracking
- **Google Analytics:** GA4 (Google Analytics 4) + Universal Analytics (both active)
- **Facebook Pixel:** Active
- **Twitter Pixel:** Active

### Third-Party Integrations
- **Pushpay** - Online giving/donations (pushpay.com)
- **CCB (Church Community Builder)** - Church management (celebration.ccbchurch.com) - used for form registrations
- **Vimeo** - Video hosting for past messages (vimeo.com/c3hays)
- **Facebook Live** - Live streaming (facebook.com/c3hays/videos)
- **Anchor.fm** - Podcast hosting (anchor.fm/c3pod)
- **Apple Podcasts** - Podcast distribution
- **RightNow Media** - Bible study streaming platform
- **Google Maps** - Location embeds

### Authentication
- Account system built into The Church Co platform
- Login at `/account/login`
- Password recovery at `/account/recover-password`
- Account signup at `/account/signup`
- Protected pages (e.g., `/staff-forms`) redirect to login

---

## Global Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary Text (Light)** | `#1b1c1c` | Body text on light backgrounds |
| **Primary Text (Dark)** | `#FFFFFF` | Text on dark backgrounds |
| **Background (Light)** | `#FFFFFF` | Primary page background |
| **Background (Dark/Footer)** | `#2a2929` | Footer, dark sections |
| **Accent (Teal)** | `#1cc3af` | Buttons, links, accent elements, CTAs |
| **Secondary (Navy)** | `#10405d` | Secondary accent, dark overlays |
| **Focus Ring** | `#1545D3` | Accessibility focus outline (3px solid) |
| **Hero Overlay** | `rgba(0,0,0,0.5)` | Semi-transparent dark overlay on hero images |

**CSS Variable System:**
- `--base-color-bg` / `--base-color-text`
- `--secondary-color-bg` / `--secondary-color-text`
- `--tertiary-color-bg` / `--tertiary-color-text`
- `--alt-color-bg` / `--alt-color-text`

### Typography

| Element | Font Family | Weight | Size |
|---------|------------|--------|------|
| **Headings** | Montserrat | 700 (Bold) | `clamp(2rem, 4.5vw, 5rem)` for h1 |
| **Body Text** | Lato | 400 (Regular) | Inherited/responsive |
| **Buttons** | Inherited | 600 (Semi-Bold) | Responsive |

- Fluid typography using `clamp()` for responsive scaling
- Mobile h1: 2rem fixed
- Desktop h1: scales up to 5rem

### Layout System

- **Max container width:** 1145px
- **Responsive breakpoint:** 768px (mobile/desktop split)
- **Layout modes available:**
  - `layout-columns` - Multi-column grid
  - `layout-smartcolumns` - Responsive 1-4 column grid
  - `layout-leftright` - Two-column left/right alternating
  - `layout-rows` - Stacked rows
  - `layout-horizontalscroll` - Horizontal scrolling container
- **Container queries** used for component-level responsive behavior
- **Border radius:** 10px (standard throughout)
- **Shadow effects:** `0px 4px 8px` with 17% opacity

### Component Library (The Church Co Themed Components)

| Component | Description |
|-----------|-------------|
| `ThemedMenu` | Desktop/mobile navigation with submenus |
| `ThemedButton` | CTA buttons with fill/outline variants |
| `ThemedButtonGarden` | Button grouping system |
| `ThemedList` | Multi-layout list (grid, columns, horizontal scroll) |
| `ThemedIcon` | Icon system |
| `ThemedNotification` | Toast notification system |
| `ThemedHero` | Hero section with background image/video + overlay |

### Global Interactive Elements
- **Scroll-to-top button:** Fixed position, appears on scroll
- **Hamburger menu:** Animated bar transitions (mobile, < 768px)
- **Stacked carousel:** Fade transitions at 3000ms intervals
- **Button hover:** Scale 1.05x with cubic-bezier transitions
- **Smooth scroll behavior** enabled globally
- **Background video support** on hero sections

---

## Global Navigation & Footer

### Primary Navigation (Desktop)
```
Easter | Home | About | Locations [v] | Messages | Counseling | Give
                          |-- Hays Campus
                          |-- Colby Campus
```

- Transparent header that becomes solid on scroll
- Logo (left-aligned): Celebration Community Church main logo from thechurchcoassets.com
- Mobile: Hamburger menu with animated bars

### Secondary Menu
- Appears in top bar above primary nav
- Contains additional utility links

### Footer (All Pages)

**Contact Block (4 cards):**
1. **Email:** office@c3hays.com
2. **Phone:** (785) 625-5483
3. **Location:** 5790 230th Ave, Hays, KS 67601 (linked to Google Maps)
4. **Give:** "Give online" (links to Pushpay)

**Social Media Links:**
- Facebook (facebook.com/c3hays)
- Instagram
- Vimeo (vimeo.com/c3hays)
- Podcast (anchor.fm/c3pod)

**Bible Reading CTA (appears on most pages):**
- "Have you read your Bible today?"
- "Click here for today's reading plan and devotional."
- Links to `/nt26`

**Copyright:** "(c) 2026 Celebration Community Church"
**Attribution:** "The Church Co" (link to thechurchco.com)

**Footer Colors:** Background `#2a2929`, text `#FFFFFF`, teal accent `#1cc3af`

---

## Page-by-Page Analysis

---

### 1. Homepage

- **URL:** `https://www.celebratejesus.org/`
- **Title:** "Home | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Full-width background image from Cloudinary CDN
   - Dark overlay tint (50% opacity black)
   - White text overlay with church name/tagline
   - Logo image prominently displayed

2. **Stacked Carousel**
   - Auto-advancing content carousel
   - 3000ms fade transitions between slides
   - Used for featured content/announcements

3. **Content Rows**
   - Multiple row blocks alternating between base, alt, secondary, and tertiary color backgrounds
   - Left-right layouts, smart columns, and full-width sections

4. **Contact/Info Section**
   - Contact cards (email, phone, location, giving)

5. **Footer**
   - Standard global footer

**Background Images:**
- Hero: Cloudinary-hosted church/ministry image with auto-format
- Additional section backgrounds from thechurchcoassets.com

**Unique Components:**
- Stacked carousel (not seen on subpages)
- Multiple background image sections
- Background video support

**Color Usage:**
- Hero: Dark overlay on image, white text
- Alternating section backgrounds using CSS variable system
- Teal accent for CTAs

---

### 2. About / Who We Are

- **URL:** `https://www.celebratejesus.org/about`
- **Title:** "About | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Logo image
   - Background image with overlay

2. **"Who We Are" Statement**
   - Tagline: "Jesus is central to everything we do at C3. We exist to meet with Him, grow in Him, and serve through Him"
   - Body: Emphasizes relationship with Jesus over religious practice. "We want you to join us as you are; there isn't a mold you have to fit before you walk through our doors."

3. **"Meet Our Staff" Section**
   - Text: "Say hi to the staff of Celebration Community Church"
   - CTA Button: **"OUR STAFF"** -> `/our-staff-2/`

4. **"The Essentials We Believe" (Doctrinal Statement)**
   - **Accordion/expandable sections** for each belief topic:
     - **About God:** "We believe in one true and eternal God, unchanging, unchangeable" - Trinitarian theology, biblical uniqueness
     - **About the Father:** God as sovereign ruler and creator actively involved in human affairs
     - **About Jesus Christ:** Incarnation, substitutionary atonement, resurrection, ascension
     - **About the Holy Spirit:** Glorification, conviction, regeneration, indwelling, sanctification, empowerment
     - **About the Bible:** "The Scriptures of both the Old and New Testaments are inspired, without error in the original writings" - grammatical-historical interpretation, final authority
     - **About Human Beings:** Created in God's image, fall into sin, universal depravity, acknowledges pain/suffering without prosperity gospel
     - **About Salvation:** Free gift through grace and faith in Christ's blood alone; eternal security
     - **About Eternity:** Heaven and hell as real places; conscious existence beyond death
     - **Second Coming:** Kingdom expansion through church ministry

5. **Contact/Footer Section**

**Unique Components:**
- **Accordion/expandable sections** for doctrinal statements (trigger/expand CSS mechanism)
- This is the ONLY page with the full doctrinal statement

**CTAs:**
- "OUR STAFF" button -> `/our-staff-2/`

**Color Usage:**
- White primary background
- Dark alternate backgrounds (`--alt-color-bg`) for contrast sections
- Standard teal accent

---

### 3. Easter (Seasonal Landing)

- **URL:** `https://www.celebratejesus.org/easter`
- **Title:** "EASTER | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Heading: **"Easter Changes Everything"**
   - Body: "Easter is more than a holiday - it's reminder that hope is alive, that grace is real, and that Jesus changed everything!"
   - Welcoming message: "No matter where you've been, what questions you have, or how long it's been since you've been in church - you are welcome here!"
   - Easter-branded hero image

2. **Service Times Section**

   **Good Friday (April 3rd)**
   - Time: 6:00 PM
   - Both Hays & Colby campuses

   **C3 Hays - Easter Sunday**
   - Times: 8:00 AM, 9:30 AM, 11:00 AM
   - Location: 5790 230th Ave, Hays, KS

   **C3 Colby - Easter Sunday**
   - Easter Breakfast: 7:00 AM
   - Service Times: 8:00 AM & 10:00 AM
   - Location: 1923 S. Range Ave, Colby, KS

3. **"The Greatest Story Ever Told" Section**
   - Describes Easter as a celebration of Jesus's victory
   - Emphasizes redemption and hope

4. **Contact/Footer**

**Unique Components:**
- Seasonal landing page with special service times for multiple locations
- Easter-specific branding/imagery
- This page appears as the FIRST item in the main navigation (seasonal prominence)

**CTAs:**
- Implied invitation CTAs throughout messaging

---

### 4. Locations

- **URL:** `https://www.celebratejesus.org/locations`
- **Title:** "Locations | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Background image with dark overlay
   - Location-specific heading

2. **Location Cards/Sections**
   - Two locations presented (Hays, Colby)
   - Background images from thechurchcoassets.com for each location
   - Links to individual campus pages

3. **Contact/Footer**

**Background Images:**
- Location detail section images (church buildings/campuses)
- Hero section image

**Color Usage:**
- Standard palette with dark overlays on images

---

### 5. Hays Campus

- **URL:** `https://www.celebratejesus.org/hays-campus`
- **Title:** "Hays Campus | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section** with background image and overlay
2. **Campus Information** - Details about the Hays location
3. **Ministry Links** - Connections to campus-specific ministries
4. **Contact/Footer**

**Key Data:**
- Address: 5790 230th Ave, Hays, KS 67601
- Phone: (785) 625-5483
- Email: office@c3hays.com

---

### 6. Colby Campus

- **URL:** `https://www.celebratejesus.org/colby-campus`
- **Title:** "Colby Campus | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Background image: `https://media.thechurchcoassets.com/accounts/6004/1012df58-b22b-4739-be5d-ce44de51e441`
   - Dark overlay

2. **Campus Information**
3. **Ministry Links**
4. **Contact/Footer**

**Key Data:**
- Address: 1923 S. Range Ave, Colby, KS (from Easter page)
- Shares Hays campus contact info in footer

---

### 7. Messages (Sermon Archive)

- **URL:** `https://www.celebratejesus.org/messages`
- **Title:** "Messages | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Background image with overlay

2. **Message/Series Grid**
   - Layout system supports: columns, smart columns, horizontal scroll, rows
   - Card-based display with series artwork/thumbnails
   - Grid layout for browsing sermon series

3. **Contact/Footer**

**Display Method:**
- Multi-column grid using `ThemedList` component
- Supports multiple layout arrangements
- Series artwork displayed as thumbnails
- Responsive: collapses to single column on mobile

**Content:**
- 1,187+ episodes in the archive (from sitemap)
- Series include: Hymns, Beatitudes, Simon Says, Flannel Board Flashback, Heaven on My Mind, Running on Empty, Big Questions, The Word, and many more
- Daily Bible reading episodes organized by month

**Unique Components:**
- Series filtering/browsing system
- Episode grid/list layout
- Video embedding infrastructure

---

### 8. Episode Pages (Individual Sermons)

- **URL Pattern:** `https://www.celebratejesus.org/episode/[episode-slug]`
- **Title Pattern:** "[Episode Name] | Celebration Community Church"
- **Example:** "The Beatitudes - Week 8" (published August 12, 2024)

**Sections (Top to Bottom):**

1. **Navigation Header**
2. **Episode Title & Date**
   - Date displayed (e.g., "August 12, 2024", "December 30, 2025")
3. **Video/Media Player**
   - Embedded video component (styled container with object-fit: cover)
   - Supports Vimeo and YouTube embeds
   - Mobile: scales to 175% on screens under 768px
4. **Sermon Notes Section** (when available)
5. **Contact/Footer**

**Content Types in Episode Archive:**
- Weekly sermons (with video)
- Daily Bible reading devotionals
- Pray Today prayer prompts
- Special holiday messages (Advent, Easter, Christmas Eve, Palm Sunday)

**Unique Components:**
- Video player component
- Episode metadata (date, series association)
- Sermon notes integration

---

### 9. Watch Online

- **URL:** `https://www.celebratejesus.org/watch-online`
- **Title:** "Watch Online | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section** with background image
2. **Service Schedule**
   - **"SAT - 5:00PM || SUN - 8:00AM, 9:30AM & 11:00AM"**

3. **Watch Options**
   - **Facebook Live** button -> facebook.com/c3hays/videos (real-time viewing)
   - **Past Messages** button -> vimeo.com/c3hays (archive)

4. **Additional Resources**
   - "OUR STAFF" button -> `/our-staff-2/`
   - "OUR BELIEFS" button -> `/about/`
   - "C3 APP" button -> Apple App Store link

5. **Social Media Links**
   - Instagram, Facebook, Vimeo, Anchor podcast

6. **Contact/Footer**

**Unique Components:**
- Service schedule display prominently
- External platform links (Facebook Live, Vimeo)
- App download CTA

**Color Usage:**
- White background `#ffffff`, dark text `#1b1c1c`
- Teal accent `#1cc3af`
- Navy `#10405d`

---

### 10. Live Stream

- **URL:** `https://www.celebratejesus.org/live-stream`
- **Title:** "Live Stream | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section** with background video/image
2. **Video Embed Area**
   - Background video component with Vimeo/YouTube support
   - `object-fit: cover` styling
   - Mobile: 175% scale on screens under 768px
3. **Contact/Footer**

**Unique Components:**
- Live video player/embed (likely active only during service times)
- Background video capability in hero

---

### 11. Give / Donate

- **URL:** `https://www.celebratejesus.org/give`
- **Title:** "Give | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Background image ID: `cea5061b-677f-4dbc-8c13-91e05e7c4541`
   - Dark overlay (50% opacity)
   - White text

2. **Giving Content**
   - Multiple row blocks with alternating colors
   - Form components (media form inputs, 50px height)
   - Button renderers with grid layouts

3. **Giving Methods**
   - Online giving through Pushpay integration
   - Circle-shaped feature icons (120px diameter)
   - Feature descriptions for different giving options

4. **Contact/Footer**

**Unique Components:**
- Pushpay integration/embed for donations
- Circle-shaped feature icons
- Form input components
- Multiple giving method cards

**Color Usage:**
- Dark sections with white text
- Standard teal accent for CTAs

---

### 12. Events

- **URL:** `https://www.celebratejesus.org/events`
- **Title:** "Events | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero/Header Area**
2. **"What's On" Section**
   - Heading: "What's On"
   - **Currently displays: "No events found"**
   - List-based presentation (not calendar)

3. **Contact/Footer**

**Current State:** Empty -- no events currently scheduled in the system.

**Display Method:** List-based (text), not calendar grid or card-based.

**Color Usage:**
- White background `#ffffff`, dark text `#1b1c1c`
- Teal accents `#1cc3af`

---

### 13. Plan Your Visit

- **URL:** `https://www.celebratejesus.org/plan-your-visit`
- **Title:** "Plan Your Visit | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section** with background image
2. **What to Expect Content**
   - Visitor information and welcome messaging
3. **Service Times/Location**
4. **Visitor Form** (form support present in component structure)
5. **Contact/Footer**

**Unique Components:**
- Visitor information form
- "What to expect" content blocks
- Full-width and half-width content rows

---

### 14. Info (Welcome)

- **URL:** `https://www.celebratejesus.org/info`
- **Title:** "INFO | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Heading: **"WELCOME HOME"**
   - Tagline: "Jesus is central to everything we do at C3. We exist to meet Him, grow in Him and serve through Him."
   - Body: "We want you to join us as you are; there isn't a mold you have to fit before you walk through our doors."

2. **"For You and Your Family" Ministry Grid**
   - **C3KIDS** - "Learn More" CTA
   - **CROSSCURRENT** - Instagram link CTA
   - **ENCOUNTER YOUNG ADULTS** - Website link CTA
   - **ADULT BIBLE STUDY** - "Learn More" CTA
   - **COUNSELING** - "More Information" CTA
   - **C3 App** - Apple App Store download link

3. **New Here Section**
   - Directs first-time visitors to the "Welcome Center"
   - Mentions complimentary gifts for newcomers

4. **Contact/Footer**

**Unique Components:**
- Ministry grid with individual CTAs for each program
- Welcome Center callout for first-time visitors
- App download link

---

### 15. Counseling

- **URL:** `https://www.celebratejesus.org/counseling`
- **Title:** "Counseling | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero/Header Section**

2. **Vision for Counseling**
   - Team approach centered around trained biblical counselors
   - Connections to psychiatric professionals for medication management and emergency care
   - "A system to help meet the needs of people who are struggling with mental health matters and interpersonal relationships"

3. **Counseling Staff Profiles**

   **Richard Carter** - Pastoral Counselor and Life Coach
   - Background: Horticultural therapy, 12 years youth ministry, private practice
   - Specialties: Men's sexual addiction, anger issues, emotional anorexia, self-worth, true intimacy
   - Qualifications: S. Horticultural Therapy (KSU), Pastoral License/Ordination (Charis Bible College), A. Counseling (Liberty University)

   **Clayton Howard** - Licensed Master's Level Psychologist
   - Background: Southwest Kansas native, military (Afghanistan), FHSU master's
   - Specialties: Anxiety, depression, relationship issues, life transitions, faith struggles
   - Qualifications: M.S., LMLP

   **Patrick McGinnis** - Licensed Masters Social Worker
   - Background: 34-year marriage, three children, Sociology/Political Science (1991), Masters Clinical Social Work (2022)
   - Previously: C3 college/young adult director, small groups pastor
   - Co-founded: Dialogue Ministries, Breathe Coffee House
   - Specialties: Young adults, couples, marriage, families (CBT, DBT, solution-focused approaches)
   - Qualifications: M.S. LMSW

4. **Service Details**
   - **Cost:** $75 per session (below market rate)
   - **Payment:** Cash, check; some accept credit cards and Venmo
   - **Scholarships:** Available case-by-case
   - **Payment Due:** At appointment

5. **Appointment Scheduling**
   - Email: office@celebratejesus.org
   - Phone: (785) 625-5483

6. **Cancellation Policy**
   - 24-hour notice required
   - No-shows/late cancellations charged $75

7. **Mental Health Emergency**
   - Call/text 988 (Suicide & Crisis Lifeline)
   - Visit nearest Emergency Room

8. **Contact/Footer**

**CTAs:**
- **"Make An Appointment"** (form link)
- "Give online" (Pushpay)

**Unique Components:**
- Individual counselor bio cards with qualifications
- Pricing/policy information blocks
- Emergency resources callout
- This is the MOST content-rich page on the site

---

### 16. Staff - Hays

- **URL:** `https://www.celebratejesus.org/our-staff-2`
- **Title:** "OUR STAFF - Hays | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero/Header**
   - Heading: "Meet Our Leadership"
   - Subheading: "Say hi to the leadership staff at Celebration Community Church"

2. **Elder Staff** section heading

3. **Hays Campus Staff** section heading

4. **Colby Campus Staff** section heading

5. **Contact/Footer**

**Display Method:**
- Grid/column layout (`layout-smartcolumns`)
- Circular profile photos (`shape-circle`, 120px diameter)
- Center-aligned text under each photo

**Note:** Individual staff member names and bios load dynamically and were not captured in the static HTML extraction. The page structure supports staff cards with circular photos and text beneath.

**Unique Components:**
- Staff grid with circular photo crops
- Three-section staff organization (Elders, Hays, Colby)

---

### 17. Staff - Colby

- **URL:** `https://www.celebratejesus.org/our-staff-colby`
- **Title:** "OUR STAFF - Colby | Celebration Community Church"

**Sections:** Same structure as Hays staff page with three sections:
1. Elder Staff
2. Colby Campus Staff
3. Hays Campus Staff

**Display:** Same circular photo grid layout

---

### 18. C3Kids - Hays Campus

- **URL:** `https://www.celebratejesus.org/c3kids-hays-campus`
- **Title:** "C3Kids - Hays Campus | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Heading: **"C3Kids"**
   - Subheading: "For Your Kids"

2. **Ministry Overview**
   - Ages: **1 through 5th grade**
   - "Every weekend all children experience safe, age-appropriate environments where the Bible is taught in a creative and relevant way using 'The Gospel Project'."
   - Partners with parents in raising faith-focused leaders

3. **Curriculum Section**
   - Program: **The Gospel Project** - Bible curriculum
   - Embedded video about the curriculum approach

4. **Resources Section - "Resources For You"**
   - **RightNow Media for Kids** (with thumbnail)
   - **The Bible App for Kids** (with thumbnail)

5. **Contact Section - "Additional Questions?"**
   - CTA: **"CONTACT OUR CHILDREN'S TEAM"** -> mailto:delynn@c3hays.com

6. **Contact Cards/Footer**

**Unique Components:**
- Embedded curriculum video player
- Resource cards with thumbnails (RightNow Media, Bible App)
- Direct email CTA to children's director (DeLynn)

---

### 19. C3Kids - Colby Campus

- **URL:** `https://www.celebratejesus.org/c3kids-colby-campus`
- **Title:** "C3Kids - Colby Campus | Celebration Community Church"

**Sections:** Nearly identical to Hays C3Kids page

**Key Differences:**
- Contact CTA: **"CONTACT OUR CHILDREN'S TEAM"** -> mailto:kelsey@celebratejesus.org (Kelsey instead of DeLynn)
- Same age range: 1 through 5th grade
- Same resources: RightNow Media for Kids, Bible App for Kids
- Does not mention "The Gospel Project" by name (says "creative and relevant way")

---

### 20. Family Ministry - Hays

- **URL:** `https://www.celebratejesus.org/family-hays`
- **Title:** "FOR YOUR FAMILY - Hays | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Heading: **"FOR YOUR FAMILY"**

2. **Ministry Programs Grid**
   - **CrossCurrent** - "Middle & High School Ministry"
   - **Encounter** - "Young Adult Ministry" (with Apple Podcasts link)
   - **C3Kids** - "Ages 1 through 5th Grade"
   - **Bible Studies** - "Men's & Women's Bible Studies"

3. **Bible Reading CTA**
   - "Have you read your Bible today?"

4. **Contact/Footer**

**Unique Components:**
- Ministry directory grid with descriptions
- External podcast link for Encounter ministry

---

### 21. Family Ministry - Colby

- **URL:** `https://www.celebratejesus.org/family-colby`
- **Title:** "FOR YOUR FAMILY - Colby | Celebration Community Church"

**Sections:** Same structure as Hays family page

**Programs Listed:**
- **C3Kids** - Children's ministry
- **Overflow** - Youth/young adult
- **CrossCurrent** - "Middle & High School Ministry"
- **Bible Studies** - "Men's & Women's Bible Studies"

**Key Difference:** Lists "Overflow" instead of "Encounter" (different youth program name at Colby)

---

### 22. Overflow (Wednesday Nights)

- **URL:** `https://www.celebratejesus.org/overflow`
- **Title:** "Overflow | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Heading: **"OVERFLOW"**
   - Subheading: "For your whole family"

2. **Two Components Described:**

   **Overflow Family Night:**
   - "The first Wednesday of every month"
   - Format: Meet around the table as a "Church Family" to fellowship, followed by worship and a message

   **Overflow Ministries (Wednesday Nights):**
   - Adult Bible study
   - CrossCurrent Student Ministry
   - Children's ministry classes

3. **Mission Statement**
   - "The goal of overflow is to help families grow together and the be so filled up in the word that we would pour out and overflow into one another and others by: Loving God, Loving Others, and Furthering His Kingdom"

4. **Meeting Time**
   - **First Wednesday of every month at 6:00pm**

5. **Contact/Footer**

**Age Groups:** Adults, Students (CrossCurrent), Children

---

### 23. C2 Colby (CrossCurrent Youth)

- **URL:** `https://www.celebratejesus.org/c2-colby`
- **Title:** "C2 Colby | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**

2. **CrossCurrent Youth Group Description**
   - "CrossCurrent is a youth group for students in 6th grade through 12th grade."
   - "Our goal in C2 is to encourage young believers in their faith through games, teaching, and small groups."

3. **Meeting Details**
   - **Wednesday nights starting at 6:00 PM**
   - Grades: 6th through 12th

4. **CTAs**
   - **"Find Us!"** -> Google Maps
   - **"Join Us!"** -> Email contact
   - **"Contact Us"** -> office@c3hays.com

5. **Contact/Footer**

---

### 24. Bible Study - Hays

- **URL:** `https://www.celebratejesus.org/bible-study`
- **Title:** "Bible Study (Hays) | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Heading: **"BIBLE STUDIES"**
   - Subheading: "Grow In Your Faith"

2. **Study Description**
   - "C3 Adult Bible Study" - weekly opportunity for men and women
   - Focus: Fellowship, prayer, study of the Word of God
   - Emphasis on proper scriptural context and real-life application

3. **Meeting Details**
   - **When:** Wednesdays, 6:30pm - 8:00pm
   - **Where:** Orange Classroom at 5790 230th Ave, Hays, KS 67601
   - **Duration:** 90 minutes

4. **CTAs**
   - **"Join Online"** -> Zoom link
   - **"Directions"** -> Google Maps
   - **"Email"** -> office@c3hays.com
   - **"Call"** -> (785) 625-5483

5. **Bible Reading CTA**
   - "Have you read your Bible today?" -> /nt26

6. **Contact/Footer**

**Unique Components:**
- Zoom link for virtual participation
- Specific room name ("Orange Classroom")

---

### 25. Bible Study - Colby

- **URL:** `https://www.celebratejesus.org/bible-study-colby`
- **Title:** "Bible Study (Colby) | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Heading: **"BIBLE STUDIES"**
   - Subheading: "Grown In Your Faith"

2. **Study Description**
   - Same description as Hays about C3 Adult Bible Study

3. **Two Separate Studies:**

   **Men's Bible Study**
   - **Schedule:** Thursdays at 6:00 AM
   - **Location:** 1923 S. Range, Colby, KS
   - CTA: "Directions" -> Google Maps

   **Women's Bible Study**
   - **Schedule:** Fridays at 9:30 AM
   - CTA: Email contact

4. **CTAs**
   - "Join Us!"
   - "Email"
   - "Call"
   - "Find Us"

5. **Contact/Footer**

**Key Difference from Hays:** Two separate gender-specific studies vs. one co-ed study

---

### 26. Foundations (Bible Class)

- **URL:** `https://www.celebratejesus.org/foundations`
- **Title:** "Bible Foundations | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Heading: **"Bible Foundations"**
   - Subheading: "Bible Foundations"
   - Description: "This is valuable information about the Bible Foundations Class. It's on the Purdue-do list of things to Purdue-do."

2. **Sign Up CTA**
   - **"SIGN UP"** -> https://celebration.ccbchurch.com/goto/forms/217/responses/new (CCB form)

3. **More Resources Section**
   - Link: "Other Resources" -> `/resources`

4. **Contact/Footer**

**Unique Components:**
- External CCB (Church Community Builder) form integration for registration

---

### 27. Resources

- **URL:** `https://www.celebratejesus.org/resources`
- **Title:** "Resources | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Heading: **"Grow Your Faith || Stay Connected"**

2. **Resource List:**

   1. **Watch Past Messages** - "Watch our past messages anytime, anywhere." -> `/messages`
   2. **RightNow Media** - Partnership with thousands of online Bible studies, curriculum, conference sessions -> rightnowmedia.org
   3. **C3 Mobile App** - Giving, sermon notes, events, registrations -> Apple App Store
   4. **Pray Today (2021 Initiative)** - Church-wide prayer initiative -> `/guided-prayer-2021`
   5. **Pray Today Hymns** -> `/hymns`
   6. **NEWin22 (2022 Initiative)** -> `/new-in-22`

3. **Bible Reading CTA**
   - "Have you read your Bible today?" -> `/nt26`

4. **Contact/Footer**

---

### 28. Podcasts

- **URL:** `https://www.celebratejesus.org/podcast-2`
- **Title:** "Podcasts | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Heading: **"Listen anywhere, anytime."**

2. **Podcast Directory:**
   1. **Encounter Young Adults Podcast** -> https://podcasts.apple.com/us/podcast/encounter-young-adults/id1504897443
   2. **C3 Podcast** -> https://anchor.fm/c3pod
   3. **Pray Today 2025** -> `/pray-today-25`
   4. **Pray Today Hymns** -> `/hymns`

3. **Contact/Footer**

---

### 29. Pray Today 2025

- **URL:** `https://www.celebratejesus.org/pray-today-25`
- **Title:** "Pray Today 2025 | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section** - Prayer/spiritual themed background photography

2. **Psalms & Proverbs Reading Plan**
   - Horizontal scrolling gallery of **12 monthly reading plan images** (January through December)
   - Each image features thematic design with "trust" as underlying concept

3. **Bible Reading CTA**
   - "Have you read your Bible today?" -> `/nt26`

4. **Contact/Footer**

**Unique Components:**
- Horizontal scrolling image gallery (12 items)
- Monthly themed reading plan artwork

---

### 30. NT26 (Bible Reading Plan)

- **URL:** `https://www.celebratejesus.org/nt26`
- **Title:** "NT26 | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**
   - Large image labeled "NT26_Again"

2. **Reading Plan Images**
   - Monthly reading plan graphics (March, January visible)
   - Search interface present but shows "No results" with "Go Back" option

3. **Contact/Footer**

**Unique Components:**
- Monthly reading plan image gallery
- Search/filter interface for finding reading plans

---

### 31. Hymns

- **URL:** `https://www.celebratejesus.org/hymns`
- **Title:** "Hymns | Celebration Community Church"

**Sections:**
- Hymn content loads dynamically via JavaScript
- Standard page structure with navigation, content area, footer
- Likely contains audio/episode listings related to hymn-themed content

**Note:** Content loads dynamically and was not fully captured in static extraction.

---

### 32. Summer Programs

- **URL:** `https://www.celebratejesus.org/summer`
- **Title:** "SUMMER | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero Section**

2. **Vacation Bible School (VBS)**
   - **Dates:** May 22-25
   - **Time:** 6:00-8:30 PM
   - **Ages:** Pre-K through 5th Grade
   - **Volunteer Contact:** delynn@celebratejesus.org
   - CTA: **"VBS REGISTRATION"**

3. **High School Camp**
   - **Dates:** June 9-11
   - **Program:** "C2 City Camp for High School students"
   - **Location:** Celebration Community Church
   - **Activities:** The Alley, roller skating, swimming, service projects, 3 sessions
   - **Overnight:** Friday and Saturday
   - CTA: **"HS CAMP REGISTRATION"**

4. **Middle School Camp**
   - **Dates:** June 28-30
   - **Program:** "C2 City Camp for Middle School students"
   - **Activities:** Trampoline Park, roller skating, putt-putt, service projects, 3 sessions
   - **Overnight:** Wednesday and Thursday
   - CTA: **"MS CAMP REGISTRATION"**

5. **YoCo :: Pursuit**
   - **Dates:** August 4-5
   - **Grades:** Incoming 6-12th graders
   - **Description:** "Different youth groups will gather together to worship and grow in their faith"
   - CTA: **"YoCo Registration"**

6. **Contact/Footer**

**Unique Components:**
- Multiple event registration CTAs (likely linking to CCB forms)
- Four distinct summer programs with detailed info
- Age-segmented programming

---

### 33. Weddings

- **URL:** `https://www.celebratejesus.org/weddings`
- **Title:** "Weddings | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Vision Statement**
   - Marriage as "a life-long commitment" between man and woman rooted in Scripture
   - Christ as the foundation reflecting His love for the church

2. **Requirements**

   **Membership:**
   - Must be actively involved members for 6+ months prior
   - Active = church attendance 2-4 times/month or participation in weekly ministries

   **Premarital Counseling:**
   - Mandatory minimum 5 sessions
   - Topics: finances, communication, intimacy, forgiveness, family dynamics
   - Schedule by emailing office@celebratejesus.org

   **Legal:** Kansas marriage license required (valid 6 months)

3. **Ceremony Details**

   **Available Times:**
   - Fridays (by request)
   - Saturdays: 11:00 AM - 1:30 PM (cleanup by 2:30 PM)

   **Required:**
   - Wedding Coordinator (church staff)
   - Music/Sound Tech
   - Rehearsal evening before at 5:00 PM
   - Photographer done by 2:30 PM

   **Prohibited:**
   - NO drugs or alcohol on premises (including parking lot)
   - No smoking within 50 feet
   - No rice (birdseed and bubbles permitted outside only)

4. **Pricing**

   **On-Site Weddings:**
   - Church Fees: $400 (Pastor, Coordinator, Music/Tech)
   - Premarital Counseling: $225 (2 free Pastor sessions + 3 paid counselor sessions)
   - Payment due 2 months before ceremony

   **Off-Site Weddings:**
   - Pastor Fee: $300
   - Counseling: $225
   - All travel expenses (fuel, food, lodging) covered by couple

5. **Process**
   - Complete online form via church calendar page
   - Staff responds within 1-2 weeks
   - Upon approval: contract + counseling scheduling

6. **Contact**
   - General: office@c3hays.com or renee@celebratejesus.org
   - Music/Ceremony: kael@celebratejesus.org (2 months prior)

7. **Contact/Footer**

**Unique Components:**
- Detailed policy document (most text-heavy page along with Counseling)
- Pricing tables
- Multi-step process description
- Specific staff email contacts (Renee, Kael)

---

### 34. Blog

- **URL:** `https://www.celebratejesus.org/blog`
- **Title:** "Blog | Celebration Community Church"

**Sections (Top to Bottom):**

1. **Hero/Banner Image**

2. **Single Blog Post**
   - **Title:** "Have you read your Bible today?"
   - **Description:** "Click here for today's reading plan and devotional."
   - CTA: **"Read more"** -> `/nt26`

3. **Contact/Footer**

**Note:** Blog is minimal - functions primarily as a devotional hub rather than a traditional multi-post blog. Only one post visible.

---

### 35. Calendar

- **URL:** `https://www.celebratejesus.org/calendar`
- **Title:** "C3 Hays Calendar"

**Current State:** Returns a **404 error page**. The calendar page is broken/non-functional.

---

### 36. Staff Forms (Protected)

- **URL:** `https://www.celebratejesus.org/staff-forms`
- **Title:** "Login | Celebration Community Church"

**Redirects to login page** with:
- Email field
- Password field
- "Sign in" button
- "Forgot password?" link -> `/account/recover-password`
- "Create an account" link -> `/account/signup`

**Note:** This is a protected internal staff page, not publicly accessible.

---

## Complete URL Inventory

### Main Pages (37 from sitemap)
| # | URL | Page Title | Status |
|---|-----|-----------|--------|
| 1 | `/` | Home | Active |
| 2 | `/about` | About | Active |
| 3 | `/bible-study-colby` | Bible Study (Colby) | Active |
| 4 | `/bible-study` | Bible Study (Hays) | Active |
| 5 | `/blog` | Blog | Active (minimal) |
| 6 | `/c2-colby` | C2 Colby (Youth) | Active |
| 7 | `/calendar` | C3 Hays Calendar | **404 Error** |
| 8 | `/c3kids-colby-campus` | C3Kids - Colby | Active |
| 9 | `/c3kids-hays-campus` | C3Kids - Hays | Active |
| 10 | `/colby-campus` | Colby Campus | Active |
| 11 | `/counseling` | Counseling | Active |
| 12 | `/easter` | Easter | Active (seasonal) |
| 13 | `/events` | Events | Active (empty) |
| 14 | `/family-colby` | Family - Colby | Active |
| 15 | `/family-hays` | Family - Hays | Active |
| 16 | `/foundations` | Bible Foundations | Active |
| 17 | `/give` | Give | Active |
| 18 | `/hays-campus` | Hays Campus | Active |
| 19 | `/hymns` | Hymns | Active |
| 20 | `/info` | Info (Welcome) | Active |
| 21 | `/live-stream` | Live Stream | Active |
| 22 | `/locations` | Locations | Active |
| 23 | `/episode` | Message Archive | Active |
| 24 | `/messages` | Messages | Active |
| 25 | `/nt26` | NT26 Reading Plan | Active |
| 26 | `/our-staff-colby` | Staff - Colby | Active |
| 27 | `/our-staff-2` | Staff - Hays | Active |
| 28 | `/overflow` | Overflow | Active |
| 29 | `/plan-your-visit` | Plan Your Visit | Active |
| 30 | `/podcast-2` | Podcasts | Active |
| 31 | `/guided-prayer-2021` | Guided Prayer 2021 | **404 Error** |
| 32 | `/pray-today-25` | Pray Today 2025 | Active |
| 33 | `/resources` | Resources | Active |
| 34 | `/summer` | Summer Programs | Active |
| 35 | `/staff-forms` | Staff Forms | Protected (login required) |
| 36 | `/watch-online` | Watch Online | Active |
| 37 | `/weddings` | Weddings | Active |

### Episode Archive
- **1,187 episode URLs** at `/episode/[slug]`
- Content spans 2022-2026
- Series include: Hymns, Beatitudes, Simon Says, Flannel Board Flashback, Heaven on My Mind, Running on Empty, Big Questions, The Word, Pray Today, Advent, and many more
- Daily Bible readings organized by month (January-December)

---

## Design System Summary for Replication

### What to Replicate for Elect Righteous UI

**Color Palette:**
```css
:root {
  --primary-text: #1b1c1c;
  --primary-bg: #ffffff;
  --dark-bg: #2a2929;
  --dark-text: #ffffff;
  --accent-teal: #1cc3af;
  --secondary-navy: #10405d;
  --focus-ring: #1545D3;
  --hero-overlay: rgba(0, 0, 0, 0.5);
  --shadow: 0px 4px 8px rgba(0, 0, 0, 0.17);
  --border-radius: 10px;
}
```

**Typography:**
```css
/* Headings */
font-family: 'Montserrat', sans-serif;
font-weight: 700;
/* h1 */ font-size: clamp(2rem, 4.5vw, 5rem);

/* Body */
font-family: 'Lato', sans-serif;
font-weight: 400;

/* Buttons */
font-weight: 600;
text-transform: uppercase;
padding: 1rem 2rem;
```

**Layout Patterns:**
- Max container: 1145px
- Mobile breakpoint: 768px
- Hero sections: full-width background image + dark overlay + centered white text
- Content sections: alternating light/dark backgrounds
- Card grids: 1-4 columns (smart columns), circular image crops for people
- Contact footer: 4-card grid (email, phone, location, give)
- Social links: Facebook, Instagram, Vimeo, Podcast

**Key UI Patterns to Borrow:**
1. Transparent navbar that solidifies on scroll
2. Hero sections with background images and dark overlays
3. Alternating section backgrounds (light/dark)
4. Teal accent color for all CTAs
5. Card-based layouts with rounded corners and subtle shadows
6. Circular photo crops for people/staff
7. Accordion/expandable sections for detailed content
8. Horizontal scrolling galleries for media content
9. Contact card grid in footer
10. "Have you read your Bible today?" persistent CTA pattern
11. Mobile hamburger menu with animated bars
12. Scroll-to-top button

**Platform Stack:**
- The Church Co (thechurchco.com) as CMS
- React + Next.js rendering
- Styled Components (CSS-in-JS)
- Cloudinary for image CDN
- Pushpay for giving
- CCB (Church Community Builder) for forms/registrations
- Vimeo for video hosting
- Facebook Live for streaming
- Anchor.fm for podcasts

---

## Key Contact Information Extracted

| Role | Contact |
|------|---------|
| **General Office** | office@c3hays.com |
| **General Office (alt)** | office@celebratejesus.org |
| **Phone** | (785) 625-5483 |
| **Hays Address** | 5790 230th Ave, Hays, KS 67601 |
| **Colby Address** | 1923 S. Range Ave, Colby, KS |
| **Children's Director (Hays)** | delynn@c3hays.com |
| **Children's Director (Colby)** | kelsey@celebratejesus.org |
| **Wedding Coordinator** | renee@celebratejesus.org |
| **Worship/Music** | kael@celebratejesus.org |
| **Online Giving** | Pushpay platform |
| **Facebook** | facebook.com/c3hays |
| **Vimeo** | vimeo.com/c3hays |
| **Podcast (C3)** | anchor.fm/c3pod |
| **Podcast (Encounter)** | Apple Podcasts ID: 1504897443 |

---

## Service Times (Current)

**Hays Campus:**
- Saturday: 5:00 PM
- Sunday: 8:00 AM, 9:30 AM, 11:00 AM

**Colby Campus:**
- Sunday: 8:00 AM, 10:00 AM (from Easter page; standard times may differ)

**Wednesday Nights:**
- Overflow Family Night: 1st Wednesday of every month, 6:00 PM
- Bible Study (Hays): Wednesdays 6:30-8:00 PM
- CrossCurrent C2 (Colby): Wednesdays 6:00 PM

**Bible Studies (Colby):**
- Men's: Thursdays 6:00 AM
- Women's: Fridays 9:30 AM

---

## Ministry Programs Inventory

| Ministry | Audience | Campus |
|----------|----------|--------|
| **C3Kids** | Ages 1 - 5th grade | Both |
| **CrossCurrent (C2)** | Grades 6-12 | Both |
| **Encounter** | Young Adults | Hays |
| **Overflow** | Whole Family (Wednesday nights) | Both |
| **Adult Bible Study** | Men & Women | Both |
| **Counseling** | All ages | Hays |
| **VBS** | Pre-K - 5th grade (summer) | Hays |
| **HS City Camp** | High School (summer) | Hays |
| **MS City Camp** | Middle School (summer) | Hays |
| **YoCo :: Pursuit** | Grades 6-12 (summer) | Multi-church |
