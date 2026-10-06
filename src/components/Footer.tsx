import Link from "next/link";
import { Container } from "./ui/Container";
import { site, waLink } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-soft">
      <Container>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold">
              genesisDev<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-ink-2">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
              Navigasi
            </h3>
            <ul className="space-y-3 text-[14px] text-ink-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
              Kontak
            </h3>
            <ul className="space-y-3 text-[14px] text-ink-2">
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-[12px] text-ink-3 sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Dibuat dengan teliti di Indonesia.</p>
        </div>
      </Container>
    </footer>
  );
}