import { images } from "./images";

export const studioIntro = "BMS Studio is a photography studio in Karur, Tamil Nadu, creating thoughtful images for people, families, celebrations and businesses.";
export const studioDetail = "Whether you are planning a portrait session, a wedding, an event or a brand shoot, we work with you to make photographs that feel personal and true to the moment.";

export const nav = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  {
    id: "services",
    label: "Services",
    href: "#services",
    children: [
      { label: "Portrait", href: "#services" },
      { label: "Wedding", href: "#services" },
      { label: "Events", href: "#services" },
      { label: "Brands", href: "#services" },
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
      { label: "Our Approach", href: "#approach" },
      { label: "The Experience", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export const heroCards = [
  { img: images.heroCard1, title: "Portraits with a personal touch", meta: "Portrait photography · Karur" },
  { img: images.heroCard2, title: "Moments worth remembering", meta: "Wedding photography · Karur" },
];

export const socials = [
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "X", href: "#", icon: "x" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
];

/* col: which desktop column · tall: taller card · order: stacking order on mobile */
export const projects = [
  { order: 0, col: 1, tall: true, title: "Wedding stories, thoughtfully captured", category: "Wedding Photography", location: "Karur, Tamil Nadu", img: images.projects.wedding },
  { order: 1, col: 2, title: "Photography for local businesses", category: "Brand Photography", location: "Karur, Tamil Nadu", img: images.projects.tech },
  { order: 2, col: 1, title: "Portraits that feel like you", category: "Portrait Photography", location: "Karur, Tamil Nadu", img: images.projects.vogue },
  { order: 3, col: 2, title: "Spaces, details and architecture", category: "Interior Photography", location: "Karur, Tamil Nadu", img: images.projects.realEstate },
  { order: 4, col: 1, title: "Products made memorable", category: "Product Photography", location: "Karur, Tamil Nadu", img: images.projects.jewelry },
  { order: 5, col: 2, tall: true, title: "Family moments to keep", category: "Family Photography", location: "Karur, Tamil Nadu", img: images.projects.family },
];

export const services = [
  { title: "Portrait Photography", text: "Relaxed individual, couple and family portraits, planned around your style and comfort.", img: images.services.portrait },
  { title: "Wedding Photography", text: "Honest photographs of the people, rituals and small moments that make your day yours.", img: images.services.wedding },
  { title: "Brand Photography", text: "Clear, characterful images for local businesses, makers and growing brands.", img: images.services.commercial },
  { title: "Event Photography", text: "The atmosphere, details and people that bring your celebration or gathering to life.", img: images.services.event },
  { title: "Product Photography", text: "Carefully composed product images for catalogues, social media and promotions.", img: images.services.editorial },
  { title: "Space Photography", text: "Interior and architecture photography that shows a space with clarity and care.", img: images.services.architectural },
];

export const pricingPlans = [
  {
    name: "Portraits",
    tag: "Individuals and families",
    price: "Custom",
    description: "A portrait session shaped around the people, place and feeling you want to remember.",
    featured: false,
    features: [
      "Pre-shoot conversation",
      "Location and styling planning",
      "Guided photography session",
      "Carefully edited photographs",
      "Delivery options discussed in advance",
    ],
  },
  {
    name: "Celebrations",
    tag: "Weddings and events",
    price: "Custom",
    description: "Photography coverage focused on the people, traditions and moments that matter to you.",
    featured: true,
    features: [
      "Coverage planned for your event",
      "A discussion of key moments",
      "Natural, candid photographs",
      "Careful image selection and editing",
      "Schedule and delivery agreed together",
    ],
  },
  {
    name: "For Business",
    tag: "Products and brands",
    price: "Custom",
    description: "A considered image set for product launches, business profiles and ongoing brand content.",
    featured: false,
    features: [
      "Brief and creative direction discussion",
      "Product, team or workspace photography",
      "Images suited to your intended use",
      "Editing style agreed in advance",
      "A quote based on your requirements",
    ],
  },
];

export const steps = [
  { no: "01", title: "Tell us what you have in mind", text: "Share the occasion, people or products you would like photographed, along with your preferred date." },
  { no: "02", title: "Plan the session", text: "We will discuss the location, timing and style so the shoot feels clear and comfortable." },
  { no: "03", title: "Enjoy the shoot", text: "On the day, we will guide the session while making room for natural moments." },
  { no: "04", title: "Receive your photographs", text: "Your selected images will be carefully edited and delivered using the agreed format and timeline." },
];

export const studioExperience = [
  { name: "Before the shoot", role: "A plan that fits your needs", text: "We start by understanding what you want to remember or share, then shape the shoot around your people, purpose and preferences." },
  { name: "During the shoot", role: "A relaxed, guided session", text: "Whether you are used to being photographed or not, we make space for direction, conversation and natural moments." },
  { name: "After the shoot", role: "Thoughtful finishing", text: "Each selected photograph is reviewed and edited with care. Delivery details are agreed with you before the session." },
];

export const studioHighlights = [
  { no: "01", category: "Portraits", location: "Karur", title: "Personal, unhurried sessions", text: "Portraits for individuals, couples and families, with thoughtful guidance from planning through the shoot.", img: images.awards[0] },
  { no: "02", category: "Weddings and events", location: "Karur and nearby", title: "The moments in between", text: "Alongside the important rituals, we look for the expressions, details and connections that make a gathering yours.", img: images.awards[1] },
  { no: "03", category: "Businesses", location: "Karur", title: "Images with a clear purpose", text: "Photography for products, teams and spaces, planned around where and how you want to use the images.", img: images.awards[2] },
  { no: "04", category: "Every session", location: "Made around you", title: "A collaborative process", text: "We discuss the details in advance, keep the session comfortable and agree on delivery expectations together.", img: images.awards[3] },
];

export const serviceOptions = ["Portrait Photography", "Wedding Photography", "Event Photography", "Brand Photography", "Product Photography", "Interior Photography"];

export const posts = [
  { date: "Portrait guide", title: "Choosing a comfortable location for your portrait session", img: images.blog[0] },
  { date: "Wedding guide", title: "Small moments to make room for on your wedding day", img: images.blog[1] },
  { date: "Business guide", title: "Planning a useful set of photographs for your business", img: images.blog[2] },
];
