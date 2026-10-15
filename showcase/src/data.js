// Verified: prices, features, timings and the add-on facts come from the live packages page.
// Provisional: project descriptions and all imagery (to be supplied by the team).
export const PACKAGES = [
  { id: "starter", name: "The Starter", price: 199, tagline: "Get online properly", ideal: "New businesses and sole traders", delivery: "5–7 days", features: ["Up to 3 pages", "Professional copywriting", "Mobile-first design", "Contact form and WhatsApp", "Google Maps", "Basic SEO", "1 revision round"] },
  { id: "sorted", name: "The Sorted", price: 399, tagline: "Look established, win trust", ideal: "Growing businesses", delivery: "7–10 days", recommended: true, features: ["Up to 6 pages", "Conversion-focused layout", "Reviews and trust signals", "Booking system included", "Full on-page SEO", "Free domain, first year", "Business email setup", "2 revision rounds"] },
  { id: "works", name: "The Works", price: 649, tagline: "Compete seriously, scale", ideal: "Established businesses", delivery: "10–14 days", features: ["Up to 10 pages", "SEO-led architecture", "Location pages for local SEO", "Blog setup and 1 post", "Google Analytics setup", "Advanced booking", "Full legal pages", "3 revision rounds"] },
];

// Each trade: the sections its page leads with, in order, and what it should make easy.
export const TRADES = [
  { id: "trades", name: "Plumbers and electricians", leads: "Which areas you cover, and a fast way to ask for a quote.", plan: ["Hero with coverage area", "Services", "Areas covered on a map", "Recent work", "Quote request"] },
  { id: "salons", name: "Barbers and salons", leads: "Services, a booking route and a map for people choosing between nearby options.", plan: ["Hero with book button", "Services and prices", "The team", "Find us", "Booking"] },
  { id: "tutors", name: "Tutors", leads: "Clear subjects, the areas you teach or visit, and a simple enquiry route.", plan: ["Hero with subjects", "How lessons work", "Areas and online", "About you", "Enquiry"] },
  { id: "cafes", name: "Cafés", leads: "Who you are, and getting people through the door or onto your ordering route.", plan: ["Hero with opening times", "Menu", "The place", "Find us", "Order or visit"] },
  { id: "garages", name: "Garages", leads: "A quote or a booking quickly, with your coverage area clear.", plan: ["Hero with book button", "Services", "Areas covered", "Trust and accreditations you hold", "Quote or booking"] },
  { id: "clinics", name: "Clinics and practices", leads: "Credibility and being easy to contact.", plan: ["Hero with contact", "Treatments", "The practitioners", "Fees and what to expect", "Contact and map"] },
];

export const PEOPLE = [
  { name: "Farhan M", initials: "FM", role: "Client Director", remit: "Client relationships, briefs, communication and project coordination." },
  { name: "Abukar S", initials: "AS", role: "Creative Director", remit: "Creative direction, website strategy, design and overall experience." },
  { name: "Matt R", initials: "MR", role: "Design Director", remit: "Website design, interaction, visual systems and digital experience." },
];

export const TEAM_QUOTE = "We want it to look right, feel right and actually work for the business.";

export const PROJECTS = [
  { slug: "true-to-detail", name: "True To Detail", tone: "#c9531e" },
  { slug: "brightlearn-tutoring", name: "BrightLearn Tutoring", tone: "#2f6fb0" },
  { slug: "quantum-biotesting", name: "Quantum BioTesting", tone: "#013275" },
];

export const FAQ = [
  { q: "How much does a website cost?", a: "Packages are fixed-price: The Starter £199, The Sorted £399 and The Works £649. What each includes, and anything that costs extra, is listed on the packages page. The price is the same wherever you are in the UK." },
  { q: "What if I have no copy or photos?", a: "Tell us what you have. Every package includes professional copywriting, so you can start from a few notes about what you do and where you work." },
  { q: "Can you guarantee my business will rank on Google?", a: "No, and nobody honestly can. A well-built site is a strong foundation. Rankings also depend on your competition, your reviews and your Google Business Profile." },
  { q: "Do I need to meet you?", a: "No. We work online with businesses across the UK. The project brief, email and your review of the finished pages cover everything." },
];

export const EMAIL = "hello@onesimplesite.co.uk";
