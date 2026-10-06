import { Section } from "./ui/Section";
import { SectionTitle } from "./ui/SectionTitle";
import { Card } from "./ui/Card";
import { ButtonLink } from "./ui/Button";
import { services } from "@/data/services";
import { waLink } from "@/data/site";

export function Services() {
  return (
    <Section id="services">
      <SectionTitle
        eyebrow="Layanan Kami"
        title="Solusi digital sesuai kebutuhan Anda"
        description="Mulai dari website sederhana hingga automation yang membantu pekerjaan repetitif berjalan lebih efisien."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.slug} className="flex flex-col">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-[15px] font-bold text-accent">
              {service.title.charAt(0)}
            </div>

            <h3 className="mb-3 text-[18px] font-bold text-ink">
              {service.title}
            </h3>
            <p className="mb-5 text-[14px] leading-relaxed text-ink-2">
              {service.description}
            </p>

            <ul className="mb-6 space-y-2 text-[14px] text-ink-2">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-2">
              <ButtonLink
                href={waLink}
                external
                variant="outline"
                size="sm"
                className="w-full"
              >
                Konsultasi
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}