import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { faq } from "@/data/faq";

export function FAQ() {
  return (
    <Section id="faq">
      <SectionTitle
        eyebrow="FAQ"
        title="Pertanyaan yang sering ditanyakan"
        description="Belum ketemu jawabannya? Langsung tanya via WhatsApp."
      />

      <div className="mx-auto max-w-3xl divide-y divide-line rounded-xl border border-line bg-white">
        {faq.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 transition-colors hover:bg-bg-soft">
              <span className="text-[15px] font-semibold text-ink">
                {item.question}
              </span>
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-bg-soft text-ink-2 transition-transform duration-200 group-open:rotate-45">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </span>
            </summary>
            <p className="px-5 pb-5 text-[14px] leading-relaxed text-ink-2">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}