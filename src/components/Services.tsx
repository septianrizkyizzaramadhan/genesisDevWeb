"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { Globe, Zap, Lightbulb, Server, ChevronDown, CheckCircle2 } from "lucide-react";

// Mapping icon berdasarkan string dari data
const iconMap = {
  globe: Globe,
  zap: Zap,
  lightbulb: Lightbulb,
  server: Server,
};

export function Services() {
  // State untuk menyimpan card mana yang sedang terbuka (berdasarkan slug)
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (slug: string) => {
    setExpandedId(expandedId === slug ? null : slug);
  };

  return (
    <section id="layanan" className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-[#c49a45] tracking-[0.2em] uppercase mb-4">
            Layanan Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solusi digital sesuai kebutuhan Anda
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Mulai dari website modern hingga infrastruktur backend yang kuat untuk mendukung pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* GRID CARDS (2 KOLOM) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Globe;
            const isExpanded = expandedId === service.slug;

            return (
              <div
                key={service.slug}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded ? "border-[#c49a45] shadow-lg ring-1 ring-[#c49a45]/20" : "border-gray-200 shadow-sm hover:border-gray-300"
                }`}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* List Items */}
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c49a45] mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tombol Cek Detail */}
                  <button
                    onClick={() => toggleExpand(service.slug)}
                    className={`w-full py-3 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                      isExpanded 
                        ? "bg-[#c49a45] text-white" 
                        : "border border-[#c49a45] text-[#c49a45] hover:bg-[#c49a45]/5"
                    }`}
                  >
                    {isExpanded ? "Tutup Detail" : "Cek Detail Layanan"}
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
                    />
                  </button>
                </div>

                {/* AREA DETAIL (Muncul saat diklik) */}
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out bg-gray-50/80 border-t border-gray-100 ${
                    isExpanded ? "max-h-[500px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        Penjelasan
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.longDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Keuntungan:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}