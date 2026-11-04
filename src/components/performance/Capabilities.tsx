import { Reveal } from "@/components/site/Reveal";
import { Compass, Clapperboard, Users, Crosshair, TrendingUp, BarChart3 } from "lucide-react";

const items = [
  { icon: Compass, t: "Estrategia de campañas", d: "Definimos objetivo, presupuesto, estructura de campañas y mensajes antes de invertir el primer peso." },
  { icon: Clapperboard, t: "Creativos publicitarios", d: "Diseñamos y producimos piezas, videos y textos pensados para anuncios, con variantes para testear." },
  { icon: Users, t: "Audiencias y segmentación", d: "Armamos audiencias por intereses, similares y de remarketing con tus clientes y visitantes." },
  { icon: Crosshair, t: "Medición y tracking", d: "Configuramos Pixel, API de Conversiones, Google Analytics 4 y Tag Manager para medir resultados reales." },
  { icon: TrendingUp, t: "Optimización y escalado", d: "Revisamos las campañas de forma continua: pausamos lo que no funciona y escalamos lo que sí." },
  { icon: BarChart3, t: "Reportes claros", d: "Te mostramos qué se invirtió, qué se obtuvo y qué vamos a hacer después, sin vueltas ni jerga." },
];

export function Capabilities() {
  return (
    <section id="servicios" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Servicios</div>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Nos ocupamos de toda la campaña.{" "}
            <span className="brand-text-gradient">De la idea al resultado.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={0.05 * i}>
              <div className="group h-full rounded-2xl border border-border bg-surface p-7 transition-all duration-500 hover:border-brand/40 hover:bg-surface-elevated">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-brand-foreground">
                  <it.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{it.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
