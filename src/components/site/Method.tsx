import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Entender", d: "Analizamos cómo funciona actualmente la empresa, sus procesos, herramientas, equipo y principales problemas." },
  { n: "02", t: "Diseñar", d: "Definimos qué debería cambiar y qué solución puede generar mayor impacto." },
  { n: "03", t: "Construir", d: "Desarrollamos, automatizamos e integramos las herramientas necesarias." },
  { n: "04", t: "Medir y mejorar", d: "Analizamos resultados y seguimos optimizando la solución a medida que evoluciona el negocio." },
];

export function Method() {
  return (
    <section id="metodo" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Método</div>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Primero entendemos el problema.{" "}
            <span className="brand-text-gradient">Después elegimos la tecnología.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i}>
              <div className="group relative h-full rounded-2xl border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-brand">{s.n}</span>
                  <span className="h-px flex-1 bg-border transition-colors group-hover:bg-brand/50" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <blockquote className="mt-16 border-l-2 border-brand pl-6 font-display text-2xl leading-snug sm:text-3xl">
            No empezamos preguntando qué software necesitás.
            <br />
            <span className="text-muted-foreground">Empezamos preguntando qué problema querés resolver.</span>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
