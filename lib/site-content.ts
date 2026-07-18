export const site = {
  name: "MoelyBoley",
  logoSrc: "/mb-logo-v2.png",
  /** Transparent mark for watermarks / dark surfaces */
  logoMarkSrc: "/mb-logo-mark-v2.png",
  tagline: "Modern cuts & care in Tagbilaran City, Bohol, Philippines",
  headline: "Look sharp. Feel ready.",
  description:
    "Hair, barber, nails, and brows clean work in the heart of Tagbilaran, Bohol, Philippines.",
  phoneDisplay: "0916 579 0503",
  phoneHref: "tel:+639165790503",
  messengerHref: "https://m.me/moelyboley",
  facebookHref: "https://facebook.com/moelyboley",
  instagramHref: "https://instagram.com/moelyboley",
  tiktokHref: "https://tiktok.com/@moelyboley",
  email: "hello@moelyboley.ph",
  city: "Tagbilaran City, Bohol, Philippines",
} as const;

export const socialLinks = [
  {
    label: "Facebook",
    href: site.facebookHref,
    network: "facebook",
  },
  {
    label: "Instagram",
    href: site.instagramHref,
    network: "instagram",
  },
  {
    label: "TikTok",
    href: site.tiktokHref,
    network: "tiktok",
  },
] as const;

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
    quote: "Got my brows and nails done everything felt neat and professional.",
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
    name: "Moley Boley (in-front of BISU)",
    type: "Barber shop",
    address: "In front of BISU, Tagbilaran City, Bohol",
    note: "Main branch",
    phoneDisplay: "0916 579 0503",
    phoneHref: "tel:+639165790503",
    mapQuery: "Carlos, P. Garcia Avenue, Tagbilaran City, Bohol",
  },
  {
    name: "Moley Boley JLU",
    type: "Barber shop",
    address: "Tagbilaran City, Bohol",
    note: "JLU branch",
    phoneDisplay: "0953 778 4352",
    phoneHref: "tel:+639537784352",
    mapQuery: "MV3C+Q8P, Rajah Sikatuna Ave, Tagbilaran City, Bohol",
  },
  {
    name: "Moley Boley Galleria Branch",
    type: "Beauty salon",
    address: "Galleria, Tagbilaran City, Bohol",
    note: "Galleria branch",
    phoneDisplay: "0936 310 1218",
    phoneHref: "tel:+639363101218",
    mapQuery: "Galleria Luisa, C Galleria St, Tagbilaran City, 6300 Bohol",
  },
  {
    name: "Moley Boley BQ Branch",
    type: "Beauty salon",
    address: "BQ, Tagbilaran City, Bohol",
    note: "BQ branch",
    phoneDisplay: "0955 699 5695",
    phoneHref: "tel:+639556995695",
    mapQuery: "JVR4+P66, Poblacion II, Tagbilaran City, Bohol",
  },
] as const;

export function mapsEmbedForAddress(address: string) {
  const query = encodeURIComponent(address);
  return `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
}

/** Default map pin — first branch */
export const mapsEmbedUrl = mapsEmbedForAddress(branches[0].mapQuery);

export const heroImage = {
  src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=1920&q=80",
  alt: "Moely Boley barbershop interior",
} as const;
