import { Reveal } from "./Reveal";

const problems = [
  "Procesos manuales.",
  "Información desordenada.",
  "Consultas sin responder.",
  "Tareas repetitivas.",
  "Herramientas desconectadas.",
  "Oportunidades comerciales que se perdían.",
];

const steps = [
  { n: "01", t: "Marketing", d: "Comunicación, contenido y adquisición." },
  { n: "02", t: "Digital", d: "Estrategia, procesos y ecosistemas digitales." },
  { n: "03", t: "Tecnología", d: "Software, automatización e inteligencia artificial." },
  { n: "04", t: "Growth", d: "Tecnología y marketing trabajando sobre un mismo objetivo: hacer crecer el negocio." },
];

export function About() {
  return (
    <section id="nosotros" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Evolución</div>
              <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
                Empezamos haciendo marketing.{" "}
                <span className="brand-text-gradient">Terminamos resolviendo problemas de negocio.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Surf Co. nació acompañando a comercios, emprendimientos y PyMEs en su comunicación,
                publicidad y presencia digital. Pero trabajar dentro de las empresas nos permitió
                detectar problemas que iban mucho más allá del marketing.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {problems.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-foreground/85">
                    <span className="h-px w-4 bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                <span className="text-foreground">Por eso evolucionamos.</span> Hoy combinamos
                nuestra experiencia en marketing con desarrollo de software, automatización e
                inteligencia artificial para construir soluciones que impacten directamente en la
                operación y el crecimiento de cada empresa.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <ol className="relative space-y-4 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-px before:bg-gradient-to-b before:from-border before:via-brand/50 before:to-brand">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={0.08 * i}>
                  <li className="relative flex gap-5 rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur transition-colors hover:bg-surface-elevated sm:p-6">
                    <span className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border font-mono text-sm ${i === steps.length - 1 ? "border-brand bg-brand text-brand-foreground" : "border-border bg-background text-brand"}`}>
                      {s.n}
                    </span>
                    <div>
                      <div className="font-display text-xl font-semibold">{s.t}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
