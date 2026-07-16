export const site = {
  name: "Moely Boley",
  logoSrc: "/mb-logo.png",
  tagline: "Modern cuts & care in Tagbilaran City",
  headline: "Look sharp. Feel ready.",
  description:
    "Hair, barber, nails, and brows — clean work in the heart of Tagbilaran.",
  phoneDisplay: "+63 917 123 4567",
  phoneHref: "tel:+639171234567",
  messengerHref: "https://m.me/moelyboley",
  facebookHref: "https://facebook.com/moelyboley",
  email: "hello@moelyboley.ph",
  city: "Tagbilaran City, Bohol",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
] as const;

export const services = [
  {
    name: "Hair",
    description: "Wash, cut, and style for everyday polish or a fresh look.",
    price: "From ₱250",
  },
  {
    name: "Barber",
    description: "Classic fades, beard trims, and precise line-ups.",
    price: "From ₱200",
  },
  {
    name: "Nails",
    description: "Manicure and pedicure for clean, finished hands and feet.",
    price: "From ₱300",
  },
  {
    name: "Brows",
    description: "Shaping and tinting to frame your face cleanly.",
    price: "From ₱150",
  },
  {
    name: "Kids Cut",
    description: "Patient, simple cuts for little ones.",
    price: "From ₱180",
  },
  {
    name: "Beard Care",
    description: "Trim, shape, and tidy-up for a sharp finish.",
    price: "From ₱150",
  },
] as const;

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh fade haircut",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    alt: "Barber styling hair",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    alt: "Classic barbershop chair",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
    alt: "Beard trim detail",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    alt: "Salon styling station",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80",
    alt: "Clean styled haircut",
  },
] as const;

export const reviews = [
  {
    name: "Miguel R.",
    quote: "Best fade I’ve had in Tagbilaran. Clean, fast, and the vibe is chill.",
    initials: "MR",
  },
  {
    name: "Ana L.",
    quote: "Got my brows and nails done — everything felt neat and professional.",
    initials: "AL",
  },
  {
    name: "Carlo D.",
    quote: "Booked through Messenger, walked in, and left looking sharp.",
    initials: "CD",
  },
  {
    name: "Jessa P.",
    quote: "Friendly staff and consistent cuts. My go-to spot now.",
    initials: "JP",
  },
  {
    name: "Ryan T.",
    quote: "Beard trim was on point. Will definitely come back.",
    initials: "RT",
  },
  {
    name: "Kim S.",
    quote: "Modern shop, fair prices, and easy to find near the city center.",
    initials: "KS",
  },
] as const;

export const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 8:00 PM" },
  { day: "Sunday", time: "10:00 AM – 6:00 PM" },
] as const;

export const branches = [
  {
    name: "Moely Boley – CPG Avenue",
    address: "CPG Avenue, Tagbilaran City, Bohol",
    note: "Main branch",
  },
  {
    name: "Moely Boley – Dao",
    address: "Dao District, Tagbilaran City, Bohol",
    note: "Second branch",
  },
] as const;

/** Mock pin centered on Tagbilaran City */
export const mapsEmbedUrl =
  "https://maps.google.com/maps?q=Tagbilaran%20City%2C%20Bohol&t=&z=14&ie=UTF8&iwloc=&output=embed";

export const heroImage = {
  src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=1920&q=80",
  alt: "Moely Boley barbershop interior",
} as const;
