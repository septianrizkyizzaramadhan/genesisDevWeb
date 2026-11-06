import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Website profesional yang cepat, responsive, dan dirancang untuk membantu bisnis terlihat lebih kredibel di internet.",
    icon: "globe", // Pastikan icon 'globe' dan 'server' sudah didaftarkan di komponen Services.tsx
    items: [
      "Landing page",
      "Website bisnis",
      "Company profile",
      "Katalog produk",
      "Website event",
      "Form kontak",
      "Maintenance & deployment",
    ],
    longDescription: "Kami membangun website modern menggunakan teknologi terkini (React, Next.js, Tailwind CSS). Fokus kami adalah performa tinggi, ramah SEO, dan desain UI/UX yang memukau untuk meningkatkan konversi bisnis Anda.",
    benefits: [
      "Meningkatkan kredibilitas dan profesionalisme bisnis",
      "Akses informasi 24/7 untuk calon pelanggan",
      "Optimasi SEO agar mudah ditemukan di Google",
      "Desain responsif yang nyaman dilihat di HP maupun PC"
    ]
  },
  {
    slug: "backend-api",
    title: "Backend API Setup",
    description:
      "Pengembangan arsitektur backend yang kokoh menggunakan Node.js dan TypeScript untuk mendukung aplikasi Anda.",
    icon: "server", 
    items: [
      "RESTful API Design",
      "Integrasi Database (SQL/NoSQL)",
      "Autentikasi & Otorisasi (JWT)",
      "Dokumentasi API (Swagger)",
      "Server Deployment",
      "Microservices Architecture",
      "Optimasi Query Database",
    ],
    longDescription: "Layanan pembuatan API (Application Programming Interface) yang aman, cepat, dan scalable menggunakan Node.js & TypeScript. Sangat cocok untuk Anda yang ingin membangun aplikasi mobile atau web yang membutuhkan pertukaran data yang andal.",
    benefits: [
      "Integrasi sistem antar aplikasi berjalan mulus",
      "Keamanan data pelanggan lebih terjamin",
      "Arsitektur scalable, siap menampung pengguna dalam jumlah besar",
      "Mempermudah pengembangan aplikasi mobile di masa depan"
    ]
  },
];