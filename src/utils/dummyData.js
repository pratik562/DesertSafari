"use client";

import {
  bbqDinner,
  bellyDance,
  camelRiding,
  customer1,
  customer2,

  duneBashing,

  eveningSafari,

  facebook,

  falconry,

  fireTanouraShow,

  founder1,
  founder2,


  hennaPainting,
  instagram,
  linkedin,

  morningSafari,

  overnightSafari,

  quadBiking,

  sandboarding,



  twitter,

  v1,
  v2,
  v3,
} from "@/assests";
import {
  AccessTime,
  Explore,
  People,
  TravelExplore,
} from "@mui/icons-material";



// navbar

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact Us" },
];

// Deatils 

export const bannerVideo = [
  {
    videoUrl: v2, // Replace with actual video URL
    title: "Thrilling Desert Adventures",
    description:
      "Embark on an unforgettable journey across the golden dunes of Dubai with our expert-guided safaris.",
    buttonText: "Book Now",
    link: "#contact",
  },
  {
    videoUrl: v1, // Replace with actual video URL
    title: "Exciting Activities Await",
    description:
      "Enjoy dune bashing, camel rides, sandboarding, and live entertainment in a stunning desert setting.",
    buttonText: "Explore Activities",
    link: "#services",
  },
  {
    videoUrl: v3, // Replace with actual video URL
    title: "Experience Luxury in the Desert",
    description:
      "Relax in our traditional Bedouin-style camp with a BBQ dinner, cultural performances, and more.",
    buttonText: "View Packages",
    link: "#about",
  },
];


export const company = {
  name: "Emirates Desert Safari",
  tagline: "Experience the Arabian Adventure",
  phoneNumber: "917600692107",
  description:
    "Unforgettable desert safari experiences with thrilling dune bashing, camel rides, BBQ dinner, and live entertainment. Explore the beauty of Dubai’s golden dunes with us.",
  statistics: [
    {
      label: "Happy Tourists",
      value: 10000, // Adjust this number
      icon: <People fontSize="large" color="primary" />,
    },
    {
      label: "Tours Completed",
      value: 5000, // Adjust this number
      icon: <TravelExplore fontSize="large" color="error" />,
    },
    {
      label: "Years of Experience",
      value: 18, // Adjust this number
      icon: <AccessTime fontSize="large" color="success" />,
    },
    {
      label: "Adventure Options",
      value: 10, // Adjust this number
      icon: <Explore fontSize="large" color="secondary" />,
    },
  ],
};

// services 

export const servicesData = {
  services: [
    {
      category: "Desert Safari Adventures",
      services: [
        {
          id: 1,
          name: "Morning Desert Safari",
          description: "Experience the serene beauty of the desert at sunrise with thrilling dune bashing.",
          thumbnail: morningSafari,
        },
        {
          id: 2,
          name: "Evening Desert Safari",
          description: "Enjoy an exhilarating ride over the dunes followed by entertainment and dinner.",
          thumbnail: eveningSafari,
        },
        {
          id: 3,
          name: "Overnight Desert Safari",
          description: "Camp under the stars and experience traditional Bedouin hospitality.",
          thumbnail: overnightSafari,
        },
      ],
    },
    {
      category: "Adventure Activities",
      services: [
        {
          id: 4,
          name: "Dune Bashing",
          description: "An adrenaline-pumping off-road adventure in 4x4 vehicles.",
          thumbnail: duneBashing,
        },
        {
          id: 5,
          name: "Sandboarding",
          description: "Glide down the golden dunes on a sandboard for an unforgettable experience.",
          thumbnail: sandboarding,
        },
        {
          id: 6,
          name: "Quad Biking",
          description: "Ride powerful quad bikes across the vast desert landscape.",
          thumbnail: quadBiking,
        },
      ],
    },
    {
      category: "Cultural Experiences",
      services: [
        {
          id: 7,
          name: "Camel Riding",
          description: "Enjoy a peaceful camel ride, just like ancient desert travelers.",
          thumbnail: camelRiding,
        },
        {
          id: 8,
          name: "Falconry",
          description: "Witness the majestic falcons in action with a traditional falconry show.",
          thumbnail: falconry,
        },
        {
          id: 9,
          name: "Henna Painting",
          description: "Get beautiful henna designs done by skilled artists.",
          thumbnail: hennaPainting,
        },
      ],
    },
    {
      category: "Entertainment & Dining",
      services: [
        {
          id: 10,
          name: "BBQ Buffet Dinner",
          description: "Savor a delicious BBQ dinner with a variety of Arabian delicacies.",
          thumbnail: bbqDinner,
        },
        {
          id: 11,
          name: "Belly Dance Show",
          description: "Enjoy a mesmerizing belly dance performance under the desert sky.",
          thumbnail: bellyDance,
        },
        {
          id: 12,
          name: "Fire & Tanoura Show",
          description: "Be amazed by the thrilling fire show and traditional Tanoura dance.",
          thumbnail: fireTanouraShow,
        },
      ],
    },
  ],
};


// About us

export const majorServices = [
  {
    id: 1,
    title: "Dune Bashing",
    image: duneBashing,
    shortDescription: "Experience the thrill of high-speed dune bashing.",
    fullDescription:
      "Hold on tight as our expert drivers take you on an adrenaline-pumping 4x4 ride over the golden dunes of Dubai. This heart-racing adventure is perfect for thrill-seekers looking for an unforgettable experience.",
    features: [
      "Expert drivers & top safety measures",
      "Exciting 4x4 off-road adventure",
      "Perfect for adventure lovers",
      "Available for all age groups",
      "Unmatched desert landscape views",
    ],
  },
  {
    id: 2,
    title: "Camel Riding",
    image: camelRiding,
    shortDescription: "Enjoy a peaceful ride on the ‘ship of the desert’.",
    fullDescription:
      "Take a step back in time and explore the vast Arabian desert the traditional way—on a camel! This serene experience lets you soak in the stunning beauty of the dunes at a relaxed pace.",
    features: [
      "Traditional Arabian experience",
      "Safe & family-friendly",
      "Stunning desert scenery",
      "Great for photography",
      "Includes expert guide assistance",
    ],
  },
  {
    id: 3,
    title: "Sandboarding",
    image: sandboarding,
    shortDescription: "Slide down the dunes for an ultimate adventure.",
    fullDescription:
      "Strap on your sandboard and glide down the rolling dunes just like snowboarding—only on sand! This exciting activity is perfect for adventure lovers looking for fun in the desert.",
    features: [
      "Suitable for beginners & experts",
      "No experience required",
      "Boards provided on-site",
      "Thrilling & safe experience",
      "Amazing for adventure lovers",
    ],
  },
  {
    id: 4,
    title: "Quad Biking",
    image: quadBiking,
    shortDescription: "Ride powerful quad bikes across the desert terrain.",
    fullDescription:
      "Take control of a powerful quad bike and navigate the stunning dunes of Dubai on this thrilling off-road adventure. Whether you're a beginner or an expert, quad biking is a must-try desert activity.",
    features: [
      "Automatic & easy-to-use quad bikes",
      "No prior experience needed",
      "Safety gear & instructions provided",
      "Explore the desert at your own pace",
      "Perfect for adrenaline seekers",
    ],
  },
  {
    id: 5,
    title: "BBQ Dinner & Live Entertainment",
    image: bbqDinner,
    shortDescription:
      "Savor a delicious BBQ dinner with mesmerizing live shows.",
    fullDescription:
      "Indulge in a mouthwatering BBQ buffet under the starry desert sky while enjoying traditional performances like belly dancing, Tanoura shows, and fire performances.",
    features: [
      "Unlimited BBQ buffet with vegetarian & non-vegetarian options",
      "Live entertainment featuring belly dance & fire shows",
      "Relax in a traditional Arabian-style campsite",
      "Shisha smoking & henna painting available",
      "An unforgettable cultural experience",
    ],
  },
];


// Founders 

export const FounderDetails = [
  {
    imgURL: founder1,
    name: "Muhammad Al-Fahad",
    position: "Founder & Managing Director",
    experience: "10+ years in Tourism & Hospitality",
    about:
      "A visionary leader passionate about showcasing the beauty of the Arabian desert through exceptional safari experiences.",
    rating: 4.9,
  },
  {
    imgURL: founder2,
    name: "Ayesha Al-Zahra",
    position: "Co-Founder & Operations Head",
    experience: "8+ years in Adventure Tourism",
    about:
      "An expert in curating premium desert tours, ensuring guests enjoy an authentic and seamless Arabian experience with top-notch hospitality.",
    rating: 4.8,
  },
];


// Cutomer Review

export const testimonialsData = [
  { name: "Ahmed Al-Farooq", feedback: "This service is amazing! Highly recommend.", image: customer1 },
  { name: "Fatima bint Khalid", feedback: "Absolutely love the quality of work provided.", image: customer2 },
  { name: "Omar ibn Zayd", feedback: "The team was very professional and efficient.", image: customer1 },
  { name: "Amina Al-Rashid", feedback: "It exceeded my expectations! Will come back again.", image: customer2 },
  { name: "Yusuf Al-Muhammad", feedback: "Fantastic experience, can't wait to use the service again.", image: customer1 }
];


// Footer links
export const footerLinks = [
  {
    title: "Desert Safari Packages",
    links: [
      { id: "package-1", name: "Morning Desert Safari", link: "services" },
      { id: "package-2", name: "Evening Desert Safari", link: "services" },
      { id: "package-3", name: "Overnight Desert Safari", link: "services" },
      { id: "package-4", name: "Private Desert Safari", link: "services" },
      { id: "package-5", name: "VIP Desert Safari", link: "services" },
    ],
  },
  {
    title: "About",
    links: [
      { id: "about-1", name: "About Us", link: "home" },
      { id: "about-2", name: "Our Fleet & Guides", link: "about" },
      { id: "about-3", name: "Terms & Policies", link: "/terms" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        id: "contact-1",
        name: "✉️ info@emiratesdesertsafari.com",
        link: "mailto:info@emiratesdesertsafari.com",
      },
      {
        id: "contact-2",
        name: "📞 +971 50 123 4567",
        link: "tel:+917600692107",
      },
      {
        id: "contact-3",
        name: "📍 Dubai, United Arab Emirates",
        link: "https://g.co/kgs/safarilocation",
      },
    ],
  },
];


// sOCIAL MEDIA 
export const socialMedia = [
  {
    src: facebook,
    alt: "Facebook",
    link: "https://www.facebook.com/people/OpuloTech/61565530363880",
  },
  { src: twitter, alt: "Twitter", link: "https://x.com/Pratikv68268006" },
  // { src: whatsapp, alt: "WhatsApp", link: "https://wa.me/917600692107" },
  {
    src: instagram,
    alt: "Instagram",
    link: "https://www.instagram.com/opulotech/",
  },
  {
    src: linkedin,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/toni-duncan-012536160/",
  },
];
