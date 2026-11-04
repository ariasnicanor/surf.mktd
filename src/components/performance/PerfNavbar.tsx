import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-white.svg";

const links = [
  { href: "#plataformas", label: "Plataformas" },
  { href: "#servicios", label: "Servicios" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function PerfNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Surf Co." className="h-9 w-auto" />
          <span className="border-l border-border pl-3 font-display text-sm font-medium uppercase tracking-[0.2em] text-brand">
            Performance
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/"
            className="hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground xl:inline-flex"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Surf Co.
          </a>
          <a
            href="#contacto"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-all hover:shadow-brand hover:-translate-y-0.5 lg:inline-flex"
          >
            Quiero anunciar
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-foreground transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-foreground transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-full bg-foreground transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-surface"
              >
                {l.label}
              </a>
            ))}
            <a href="/" className="rounded-lg px-3 py-3 text-base text-muted-foreground hover:bg-surface">
              ← Volver a Surf Co.
            </a>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand px-5 py-3 text-center text-sm font-medium text-brand-foreground"
            >
              Quiero anunciar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
