export const site = {
  name: "genesisDev",
  tagline: "Build Better. Automate Smarter.",
  description:
    "genesisDev membantu bisnis kecil membangun website profesional dan mengotomatisasi proses kerja menggunakan teknologi web dan AI.",
  url: "https://genesisdev.vercel.app",
  whatsapp: "6285855360005", 
  whatsappMessage:
    "Halo genesisDev, saya ingin berkonsultasi mengenai solusi digital untuk bisnis saya.",
  email: "studiogenesis828@gmail.com", 
  instagram: "https://instagram.com/genesisdevv", 
  linkedin: "-",
  nav: [
    { label: "Layanan", href: "#services" },
    { label: "Proses", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;