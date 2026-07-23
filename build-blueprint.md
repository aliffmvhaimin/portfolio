Build Blueprint

Build Target
- A single-page, responsive glassmorphic portfolio showcasing your personal bio, core technical skills, two featured projects, and direct contact buttons.

Page Structure
- Single vertical page with 3 stacked sections: Hero & Knowledge, Featured Projects, and Contact.

Section-by-Section Plan
- Section 1 (Hero & Knowledge): Headline name, short intro paragraph, and a grid of skill badges.
- Section 2 (Featured Projects): Two glassmorphic cards displaying project titles, brief summaries, tech tags, and link buttons.
- Section 3 (Contact): Closing call-to-action text with clickable mailto: email and profile buttons.

Component Plan
- Hero header banner, skill badge pills, translucent glassmorphic project cards, and external CTA link buttons.

Content Inventory
- Real: Name, short bio, list of personal skills, email address, and GitHub/LinkedIn URLs.
- Sample: Two project titles, brief descriptions, tech stack labels, and placeholder link targets (#).

Visual Direction
- Dark gradient background (deep navy to purple), translucent white glass panels with background blur (backdrop-filter), crisp sans-serif typography, and clean card spacing.

Interaction Plan
- Subtle card lift and glow on cursor hover, smooth scrolling between sections, and buttons that open external profile links in a new browser tab.

First Build Task
- Create a basic index.html file with a dark background gradient and one centered glassmorphism card containing your name, headline bio, and skill badges.

File / Folder Expectations
- A single project folder containing index.html and style.css (or Tailwind CSS loaded via CDN for rapid styling).

Acceptance Checklist
- The site renders smoothly as a responsive single page on both desktop and mobile screens.
- All three sections (Hero, Projects, Contact) are clearly visible and well-spaced.
- The glassmorphic aesthetic (translucency, subtle borders, background blur) displays cleanly.
- All external links (mailto:, GitHub, and LinkedIn) trigger their expected actions.
- The entire layout remains readable without unwanted horizontal scrollbars.

Risk / Simplification Notes
- Keep the glassmorphism CSS straightforward using basic RGBA background colors and simple backdrop blurs; avoid complex 3D tilt scripts or heavy animations.