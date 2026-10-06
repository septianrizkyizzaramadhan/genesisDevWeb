import Image from "next/image";
import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";
import { portfolio } from "@/data/portfolio";

export function Portfolio() {
  return (
    <Section id="portfolio">
      <SectionTitle
        eyebrow="Portfolio"
        title="Project & demo yang kami kerjakan"
        description="Setiap project dilabeli dengan jujur — demo, konsep, personal, atau client."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item) => (
          <Card key={item.title} className="flex flex-col overflow-hidden p-0">
            {/* Image */}
            <div className="relative aspect-[16/10] border-b border-line bg-bg-soft">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={`Preview ${item.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-xs text-ink-3">No preview</span>
                </div>
              )}
              <span className="absolute left-3 top-3 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-2 shadow-sm">
                {item.label}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-1.5 text-[16px] font-bold text-ink">
                {item.title}
              </h3>
              <p className="mb-4 text-[14px] leading-relaxed text-ink-2">
                {item.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-2.5 py-1 text-[10.5px] font-semibold text-ink-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}