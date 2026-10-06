import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { whyPoints } from "@/data/why";

export function WhyGenesis() {
  return (
    <Section id="why" className="bg-bg-soft">
      <SectionTitle
        eyebrow="Kenapa genesisDev"
        title="Bukan sekadar bikin website"
        description="Kami bantu bisnis Anda menyelesaikan masalah digital dengan pendekatan praktis."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyPoints.map((point) => (
          <div key={point.title} className="rounded-xl bg-white p-6 border border-line">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-ink font-bold">
              ✓
            </div>
            <h3 className="mb-2 text-[16px] font-bold text-ink">
              {point.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-ink-2">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}