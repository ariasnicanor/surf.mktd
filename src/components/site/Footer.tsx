import logo from "@/assets/logo-white.svg";
import { Instagram, MessageCircle, Music2, Mail } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#metodo", label: "Método" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={logo} alt="Surf Co." className="h-12 w-auto" />
            <p className="mt-6 max-w-sm font-display text-2xl leading-tight tracking-tight">
              Tecnología para hacer <span className="brand-text-gradient">crecer</span> empresas.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Navegación
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-brand"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Seguinos
            </div>
            <div className="mt-6 flex gap-3">
              {[Instagram, MessageCircle, Music2, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-brand hover:text-brand"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
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
