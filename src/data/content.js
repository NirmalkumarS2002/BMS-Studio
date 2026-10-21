import { images } from "./images";

const LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";
const LOREM_MED = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
export const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.";

export const nav = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  {
    id: "services",
    label: "Service",
    href: "#services",
    children: [
      { label: "Portrait", href: "#services" },
      { label: "Wedding", href: "#services" },
      { label: "Commercial", href: "#services" },
      { label: "Architectural", href: "#services" },
    ],
  },
  { id: "blog", label: "Blog", href: "#blog" },
  {
    id: "pages",
    label: "Pages",
    href: "#projects",
    children: [
      { label: "Projects", href: "#projects" },
      { label: "Process", href: "#process" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Awards", href: "#awards" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export const heroCards = [
  { img: images.heroCard1, title: "The Fishing Port of Seydisfjordur, Iceland.", meta: "Shot with Leika P300" },
  { img: images.heroCard2, title: "A Hot Air Balloon Over the Cappadocian Valley.", meta: "Shot with Leika P300" },
];

export const socials = [
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "X", href: "#", icon: "x" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
];

/* col: which desktop column · tall: taller card · order: stacking order on mobile */
export const projects = [
  { order: 0, col: 1, tall: true, title: "Modern Minimalist Wedding - Sarah & James", category: "Wedding Photography", location: "Napa Valley, California", img: images.projects.wedding },
  { order: 1, col: 2, title: "Tech Startup Brand Identity Campaign", category: "Commercial Photography", location: "Napa Valley, California", img: images.projects.tech },
  { order: 2, col: 1, title: "Vogue Fashion Editorial - Urban Elegance", category: "Editorial Photography", location: "Austin, Texas", img: images.projects.vogue },
  { order: 3, col: 2, title: "Real Estate Portfolio - Coastal Properties", category: "Architectural Photography", location: "New York, USA", img: images.projects.realEstate },
  { order: 4, col: 1, title: "Artisan Jewelry Collection Launch", category: "Product Photography", location: "Washington, USA", img: images.projects.jewelry },
  { order: 5, col: 2, tall: true, title: "Family Legacy Portrait Series", category: "Family Legacy Portrait Series", location: "Chicago, USA", img: images.projects.family },
];

export const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "", label: "International Awards" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "", label: "Years Experience" },
];

export const services = [
  { title: "Portrait Photography Sessions", text: LOREM_SHORT, img: images.services.portrait },
  { title: "Wedding Photography Coverage", text: LOREM_SHORT, img: images.services.wedding },
  { title: "Commercial Photography Solutions", text: LOREM_SHORT, img: images.services.commercial },
  { title: "Event Photography Services", text: LOREM_SHORT, img: images.services.event },
  { title: "Editorial & Magazine Work", text: LOREM_SHORT, img: images.services.editorial },
  { title: "Architectural Photography", text: LOREM_SHORT, img: images.services.architectural },
];

export const pricingPlans = [
  {
    name: "Starter",
    tag: "For personal shoots",
    price: "399",
    description: "Perfect for portraits, mini-brand sessions, and content refreshes.",
    featured: false,
    features: [
      "One location session",
      "Up to 1 hour photography",
      "30 edited images",
      "Online gallery delivery",
      "Two outfit changes",
    ],
  },
  {
    name: "Signature",
    tag: "Most popular",
    price: "899",
    description: "Designed for events, campaigns, and creators who need polished storytelling.",
    featured: true,
    features: [
      "Two shooting locations",
      "Up to 4 hours coverage",
      "80 edited images",
      "Creative direction planning",
      "Priority turnaround",
    ],
  },
  {
    name: "Luxury",
    tag: "Tailored experience",
    price: "1,799",
    description: "A premium collection for weddings, branded launches, and full-day editorial work.",
    featured: false,
    features: [
      "Full-day coverage",
      "Unlimited planning support",
      "200+ edited images",
      "Print-ready gallery",
      "Second shooter available",
    ],
  },
];

export const steps = [
  { no: "01", title: "Discovery Consultation", text: LOREM_MED },
  { no: "02", title: "Detailed Planning Phase", text: LOREM_MED },
  { no: "03", title: "Professional Shoot Day", text: LOREM_MED },
  { no: "04", title: "Final Delivery Package", text: LOREM_MED },
];

export const testimonials = [
  { name: "Sarah Chen", role: "Wedding Clients", text: LOREM_MED, avatar: images.avatars[0] },
  { name: "Jennifer Martinez", role: "Marketing Director", text: LOREM_MED, avatar: images.avatars[1] },
];
export const testimonialFeature = { name: "David Kim", role: "Creative Director", text: LOREM_MED, img: images.testimonialFeature };

export const awards = [
  { no: "01", category: "Professional Category", date: "Feb 2024", title: "International Photography Awards 2024", img: images.awards[0] },
  { no: "02", category: "Annual Competition", date: "Jun 2023", title: "Professional Photographers of America", img: images.awards[1] },
  { no: "03", category: "Regional Award", date: "Mar 2025", title: "Regional Excellence in Wedding Photography", img: images.awards[2] },
  { no: "04", category: "ASMP Excellence Award", date: "Mar 2026", title: "American Society of Media Photographers", img: images.awards[3] },
];

export const serviceOptions = ["Portrait Photography", "Wedding Photography", "Commercial Photography", "Event Photography", "Editorial & Magazine", "Architectural Photography"];

export const posts = [
  { date: "April 27, 2026", title: "Mastering Natural Light Portrait Photograph", img: images.blog[0] },
  { date: "April 27, 2026", title: "Behind the Scenes of a Fashion Editorial Shoot", img: images.blog[1] },
  { date: "April 27, 2026", title: "Essential Camera Gear for Wedding Photographers", img: images.blog[2] },
];
