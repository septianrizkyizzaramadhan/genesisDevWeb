import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";
import { problems } from "@/data/problems";

export function Problems() {
  return (
    <Section id="problems" className="bg-bg-soft">
      <SectionTitle
        eyebrow="Masalah Umum"
        title="Apakah bisnis Anda mengalami hal ini?"
        description="Banyak bisnis kecil kehilangan peluang karena proses manual dan kehadiran digital yang belum optimal."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, i) => (
          <Card key={problem.title}>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-[15px] font-bold text-accent">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mb-2 text-[16px] font-bold text-ink">
              {problem.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-ink-2">
              {problem.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}