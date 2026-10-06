import { Section } from "./ui/Section";
import { ButtonLink } from "./ui/Button";
import { waLink } from "@/data/site";

export function CTA() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-center sm:px-14 sm:py-20">
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-[26px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl">
            Punya proses bisnis yang ingin dibuat lebih sederhana?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
            Ceritakan kebutuhan Anda dan mari temukan solusi digital yang sesuai.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={waLink} external variant="primary" size="lg" className="w-full sm:w-auto">
              Konsultasi via WhatsApp
            </ButtonLink>
            <ButtonLink href={waLink} external variant="outlineLight" size="lg" className="w-full sm:w-auto">
              Mulai Diskusi
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}