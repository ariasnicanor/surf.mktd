import logo from "@/assets/logo-white.svg";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#plataformas", label: "Plataformas" },
  { href: "#servicios", label: "Servicios" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function PerfFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Surf Co." className="h-12 w-auto" />
              <span className="border-l border-border pl-3 font-display text-sm font-medium uppercase tracking-[0.2em] text-brand">
                Performance
              </span>
            </div>
            <p className="mt-6 max-w-sm font-display text-2xl leading-tight tracking-tight">
              Publicidad que se mide en <span className="brand-text-gradient">ventas.</span>
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Navegación</div>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-foreground/80 transition-colors hover:text-brand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Parte de</div>
            <a href="/" className="group mt-6 inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-brand">
              Surf Co. — Tecnología, IA y Marketing
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© 2026 Surf Co. Todos los derechos reservados.</span>
          <span>San Luis, Argentina.</span>
        </div>
      </div>
    </footer>
  );
}
