export const COMPANY = {
  name: "KH Global Trading FZC LLC",
  legalName: "KH GLOBAL TRADING FZC LLC",
  short: "KH Global Trading",
  tagline: "Your Trusted Partner for Fire Safety & Industrial Supply Solutions",
  phone: "+971 50 247 5226",
  whatsapp: "971502475226",
  email: "sales@khglobaltrading.com",
  address: "United Arab Emirates",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/why-us", label: "Why Choose Us" },
  { to: "/industries", label: "Industries" },
  { to: "/certifications", label: "Quality & Compliance" },
  { to: "/downloads", label: "Downloads" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export const NAV_PRIMARY = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/why-us", label: "Why Choose Us" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 4, suffix: "", label: "Core Business Divisions" },
  { value: 30, suffix: "+", label: "Product Categories" },
  { value: 7, suffix: "", label: "Emirates Served" },
  { value: 24, suffix: "/7", label: "Sales Support" },
];

/* ---------- Business activities (from brief) ---------- */
export const BUSINESS_ACTIVITIES = [
  {
    slug: "fire-fighting-equipment",
    name: "Fire Fighting Equipment",
    highlight: "Main Business",
    tagline:
      "Certified fire safety equipment for every facility type across the UAE.",
    items: [
      "Fire Extinguishers",
      "Fire Hose Reels",
      "Fire Blankets",
      "Fire Cabinets",
      "Fire Hydrant Accessories",
      "Smoke Detectors",
      "Heat Detectors",
      "Fire Alarm Accessories",
      "Emergency Exit Lights",
      "Emergency Lighting Systems",
      "Safety Signages",
      "Fire Safety Accessories",
    ],
  },
  {
    slug: "ppe",
    name: "Personal Protective Equipment (PPE)",
    tagline:
      "Protecting your workforce with quality-focused, compliant safety gear.",
    items: [
      "Safety Helmets",
      "Safety Gloves",
      "Safety Shoes",
      "Reflective Jackets",
      "Protective Eyewear",
      "Respiratory Protection",
      "Coveralls",
    ],
  },
  {
    slug: "industrial-building-materials",
    name: "Industrial & Building Materials",
    tagline:
      "Dependable supply for construction, MEP and industrial operations.",
    items: [
      "Hardware Supplies",
      "Electrical Materials",
      "Plumbing Materials",
      "Industrial Consumables",
      "Hand Tools",
      "Power Tools",
      "Fasteners",
      "Adhesives",
    ],
  },
  {
    slug: "general-trading",
    name: "General Trading",
    tagline:
      "Commercial and facility management supplies, plus custom sourcing.",
    items: [
      "Commercial Supplies",
      "Office Supplies",
      "Cleaning Materials",
      "Facility Management Products",
      "Maintenance Consumables",
      "Custom Sourcing Services",
    ],
  },
];

/* Flat product-category list kept for the /products search & card grid */
export const PRODUCT_CATEGORIES = BUSINESS_ACTIVITIES.map((a) => ({
  slug: a.slug,
  name: a.name,
  tagline: a.tagline,
  items: a.items,
}));

export const WHY_CHOOSE_US = [
  {
    title: "Certified Quality Products",
    desc: "We source equipment that meets recognised safety and quality standards.",
  },
  {
    title: "Trusted UAE Supplier",
    desc: "A dependable local partner for businesses across the Emirates.",
  },
  {
    title: "Competitive Pricing",
    desc: "Transparent, competitive pricing on every order — large or small.",
  },
  {
    title: "Fast Delivery",
    desc: "Efficient logistics to keep your project and operations on schedule.",
  },
  {
    title: "Professional Support",
    desc: "A responsive team that understands fire safety and industrial supply.",
  },
  {
    title: "Reliable Supply Chain",
    desc: "Consistent stock availability backed by a dependable sourcing network.",
  },
  {
    title: "Customer-Focused Service",
    desc: "We build long-term partnerships, not one-off transactions.",
  },
  {
    title: "Wide Product Range",
    desc: "From fire safety to general trading — one supplier for multiple needs.",
  },
];

export const INDUSTRIES = [
  { name: "Construction", icon: "HardHat" },
  { name: "Facilities Management", icon: "Building2" },
  { name: "Hospitality", icon: "Hotel" },
  { name: "Healthcare", icon: "HeartPulse" },
  { name: "Oil & Gas", icon: "Fuel" },
  { name: "Manufacturing", icon: "Factory" },
  { name: "Retail & Commercial", icon: "ShoppingBag" },
  { name: "Government", icon: "Landmark" },
  { name: "Logistics & Warehousing", icon: "Warehouse" },
  { name: "Education", icon: "GraduationCap" },
];

export const FAQS = [
  {
    q: "What does KH Global Trading FZC LLC supply?",
    a: "Fire fighting equipment and safety solutions are our core business, alongside personal protective equipment (PPE), industrial and building materials, and general trading products for businesses across the UAE.",
  },
  {
    q: "Do you supply businesses across all the Emirates?",
    a: "Yes. We supply commercial, industrial and facility management customers across the United Arab Emirates.",
  },
  {
    q: "Can you source products that aren't on your standard list?",
    a: "Yes. Our custom sourcing service is built for exactly this — tell us what you need and we'll work to source it.",
  },
  {
    q: "How do I request a quote?",
    a: "Use the contact form on this site, call us, or email sales@khglobaltrading.com with your requirements and quantities.",
  },
  {
    q: "Do you work with both large and small orders?",
    a: "Yes. We support one-off facility orders as well as ongoing supply arrangements for larger operations.",
  },
  {
    q: "How quickly can you deliver?",
    a: "Delivery timelines depend on the product and quantity — our team will confirm exact lead times when you request a quote.",
  },
];
