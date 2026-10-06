import type { PortfolioItem } from "@/types";

export const portfolio: PortfolioItem[] = [
  {
    title: "Website genesisDev",
    description:
      "Website portofolio dan landing page untuk layanan digital genesisDev.",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/portfolio/genesisDevWeb.png",
    label: "Personal Project",
  },
  {
    title: "Demo Landing Page Kedai Kopi",
    description:
      "Landing page untuk kedai kopi lokal dengan menu, lokasi, dan form kontak.",
    category: "Web Development",
    technologies: ["Next.js", "Tailwind CSS"],
    image: "/images/portfolio/kopi-senja.png",
    label: "Demo Project",
  },
];