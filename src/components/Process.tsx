import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <Section id="process" className="bg-ink text-white">
      <div className="mb-14 mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          Proses Kerja
        </p>
        <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-4xl">
          Bagaimana kami bekerja
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-white/60">
          Proses yang jelas dan transparan dari awal sampai setelah launch.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <div
            key={step.number}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/40"
          >
            <div className="mb-4 text-[28px] font-bold text-accent">
              {String(step.number).padStart(2, "0")}
            </div>
            <h3 className="mb-2 text-[16px] font-bold text-white">
              {step.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-white/60">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}