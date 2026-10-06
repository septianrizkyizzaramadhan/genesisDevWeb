"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site, waLink } from "@/data/site";
import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              scrolled ? "text-ink" : "text-white"
            )}
          >
            genesisDev<span className="text-accent">.</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-[12px] font-bold uppercase tracking-[0.15em] transition-colors",
                    scrolled
                      ? "text-ink-2 hover:text-accent"
                      : "text-white/80 hover:text-accent"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <ButtonLink href={waLink} external variant="primary" size="sm">
              Konsultasi
            </ButtonLink>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              scrolled ? "text-ink" : "text-white"
            )}
          >
            <div className="flex flex-col gap-1.5">
              <span className={cn("block h-0.5 w-6 bg-current transition-transform duration-300", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-6 bg-current transition-opacity duration-300", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-6 bg-current transition-transform duration-300", open && "-translate-y-2 -rotate-45")} />
            </div>
          </button>
        </nav>

        {open && (
          <div className="rounded-2xl bg-white p-4 shadow-xl lg:hidden">
            <ul className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-[13px] font-bold uppercase tracking-[0.15em] text-ink-2 hover:bg-bg-soft hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <ButtonLink href={waLink} external className="w-full">
                  Konsultasi
                </ButtonLink>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}