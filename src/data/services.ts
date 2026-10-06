import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Website profesional yang cepat, responsive, dan dirancang untuk membantu bisnis terlihat lebih kredibel di internet.",
    icon: "globe",
    items: [
      "Landing page",
      "Website bisnis",
      "Company profile",
      "Katalog produk",
      "Website event",
      "Form kontak",
      "Maintenance & deployment",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Otomatisasi pekerjaan repetitif dengan workflow, API, dan AI.",
    icon: "zap",
    items: [
      "Form ke Google Sheets",
      "Notifikasi otomatis",
      "Klasifikasi lead",
      "Auto-reply FAQ",
      "Ringkasan pesan / dokumen",
      "Follow-up pelanggan",
      "Integrasi antar-tools",
    ],
  },
  {
    slug: "digital-business-solutions",
    title: "Digital Business Solutions",
    description:
      "Solusi digital yang disesuaikan dengan masalah dan kebutuhan bisnis.",
    icon: "lightbulb",
    items: [
      "Analisis proses bisnis",
      "Integrasi tools",
      "Dashboard sederhana",
      "Sistem internal",
      "Prototype aplikasi",
      "Konsultasi solusi digital",
    ],
  },
];