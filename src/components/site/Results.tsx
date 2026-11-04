import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export type CaseStudy = {
  category:
    | "Software"
    | "Automatización"
    | "Inteligencia Artificial"
    | "Marketing"
    | "Sistemas internos"
    | "Plataformas con IA";
  project?: string;
  problem?: string;
  solution?: string;
  stack?: string[];
  result?: string;
};

const cases: CaseStudy[] = [
  {
    category: "Software",
    project: "Atlas Sales OS",
    problem: "Información comercial dispersa entre WhatsApp, planillas y distintas herramientas.",
    solution: "CRM centralizado para gestionar leads, stock, tareas, cotizaciones y seguimiento.",
    stack: ["Web App", "CRM", "Base de datos", "Automatización", "IA"],
    result: "Toda la operación comercial centralizada en un solo sistema.",
  },
  {
    category: "Automatización",
    project: "Trade-In One",
    problem: "Cotizaciones manuales y consultas de trade-in que dependen de la disponibilidad del equipo.",
    solution: "Plataforma que automatiza cotizaciones y conecta el proceso con atención y seguimiento.",
    stack: ["Web App", "Automatización", "WhatsApp", "APIs"],
    result: "Cotizaciones 24/7 y un proceso más rápido y escalable.",
  },
  {
    category: "Inteligencia Artificial",
    project: "Agente comercial con IA",
    problem: "Consultas repetitivas, respuestas lentas y oportunidades que se pierden fuera de horario.",
    solution: "Agente de IA conectado a la información y los procesos del negocio.",
    stack: ["LLMs", "Agentes IA", "WhatsApp API", "Automatización"],
    result: "Atención inmediata y menor carga operativa para el equipo.",
  },
  {
    category: "Marketing",
    project: "Travel Services — Franquicia San Luis",
    problem: "Necesidad de sostener una comunicación profesional, constante y orientada a generar consultas.",
    solution: "Estrategia integral de contenido, producción, redes sociales y campañas digitales.",
    stack: ["Meta Ads", "Social Media", "Diseño", "Producción", "Analytics"],
    result: "+500% de alcance, +100 consultas y más de 30 piezas mensuales.",
  },
  {
    category: "Plataformas con IA",
    project: "Apolo Campus AI",
    problem: "Consultas académicas y administrativas distribuidas entre distintos canales y áreas.",
    solution: "Plataforma centralizada con IA para organizar información, consultas y notificaciones.",
    stack: ["IA", "Web App", "Automatización", "Integraciones", "Base de conocimiento"],
    result: "Atención académica centralizada y acceso más simple a la información.",
  },
];

const fields: { key: keyof CaseStudy; label: string }[] = [
  { key: "problem", label: "Problema" },
  { key: "solution", label: "Solución" },
  { key: "stack", label: "Tecnologías" },
  { key: "result", label: "Resultado" },
];

export function Results() {
  return (
    <section id="proyectos" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Soluciones</div>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Tecnología aplicada a <span className="brand-text-gradient">problemas reales.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => {
            const ready = Boolean(c.project);
            return (
              <Reveal key={c.category + i} delay={0.05 * i}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-500 hover:border-brand/40 hover:bg-surface-elevated">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-brand/40 px-3 py-1 text-[11px] uppercase tracking-widest text-brand">{c.category}</span>
                    {ready ? (
                      <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">0{i + 1}</span>
                    ) : (
                      <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">En preparación</span>
                    )}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">
                    {c.project ?? "Próximo caso"}
                  </h3>
                  <dl className="mt-6 space-y-4 border-t border-border pt-6">
                    {fields.map((f) => {
                      const v = c[f.key];
                      if (f.key === "stack" && Array.isArray(v)) {
                        return (
                          <div key={f.key}>
                            <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">{f.label}</dt>
                            <dd className="mt-2 flex flex-wrap gap-1.5">
                              {v.map((s) => (
                                <span
                                  key={s}
                                  className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-foreground/75"
                                >
                                  {s}
                                </span>
                              ))}
                            </dd>
                          </div>
                        );
                      }
                      return (
                        <div key={f.key}>
                          <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">{f.label}</dt>
                          <dd
                            className={
                              f.key === "result"
                                ? "mt-1 text-sm font-medium text-brand"
                                : "mt-1 text-sm text-foreground/85"
                            }
                          >
                            {Array.isArray(v) ? v.join(" · ") : v ?? <span className="block h-2 w-2/3 rounded-full bg-border" />}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={0.05 * cases.length}>
            <a
              href="#contacto"
              className="group flex h-full flex-col justify-between rounded-2xl border border-dashed border-brand/40 bg-brand/5 p-7 transition-all duration-500 hover:border-brand/70 hover:bg-brand/10"
            >
              <div>
                <span className="rounded-full border border-brand/40 px-3 py-1 text-[11px] uppercase tracking-widest text-brand">
                  Tu proyecto
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">¿Tenés un problema parecido?</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Contanos qué se está resolviendo a mano en tu operación y diseñamos el sistema que lo ordena.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand">
                Hablemos
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
