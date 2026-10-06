import { waLink } from "@/data/site";
import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Subtle gradient bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Selamat Datang di{" "}
            <span className="block text-accent">genesisDev</span>
          </h1>

          {/* Divider kecil */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="h-px w-8 bg-accent" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-base">
            genesisDev membantu bisnis kecil membuat website profesional,
            mengotomatisasi proses kerja, dan memanfaatkan AI agar bekerja
            lebih efisien.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={waLink} external variant="outlineLight" size="lg">
              Mulai Sekarang
            </ButtonLink>
            <ButtonLink
              href="#services"
              variant="outlineLight"
              size="lg"
              className="border-white/30"
            >
              Lihat Layanan
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <span className="h-2 w-1 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}