import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { WhyGenesis } from "@/components/WhyGenesis";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site"; // <-- Tambahkan import ini

export default function Home() {
  // <-- Tambahkan JSON-LD Schema di sini
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    // Ganti nomor di bawah dengan nomor WA asli Anda jika ada
    telephone: "+628562752631", 
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boyolali",
      addressCountry: "ID",
    },
    priceRange: "$$",
  };

  return (
    <>
      {/* Script JSON-LD untuk SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Process />
        <Portfolio />
        <WhyGenesis />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}