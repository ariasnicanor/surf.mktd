import { Reveal } from "@/components/site/Reveal";

const steps = [
  { n: "01", t: "Diagnóstico", d: "Revisamos tu negocio, tus cuentas publicitarias, lo que ya probaste y cómo llegan hoy tus clientes." },
  { n: "02", t: "Estrategia", d: "Definimos objetivo, plataformas, presupuesto, audiencias y los creativos que vamos a necesitar." },
  { n: "03", t: "Lanzamiento", d: "Configuramos la medición, producimos los anuncios y ponemos las campañas en marcha." },
  { n: "04", t: "Optimización", d: "Analizamos los datos, testeamos variantes y ajustamos para mejorar el costo por resultado." },
  { n: "05", t: "Escala", d: "Cuando encontramos lo que funciona, aumentamos la inversión de forma ordenada." },
];

export function PerfMethod() {
  return (
    <section id="proceso" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Proceso</div>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Sin datos, es intuición.{" "}
            <span className="brand-text-gradient">Con datos, es crecimiento.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
            No se trata de gastar más en publicidad.
            <br />
            <span className="text-muted-foreground">Se trata de invertir mejor.</span>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
