import { Reveal } from "./Reveal";
import { Code2, Workflow, BrainCircuit, BarChart3, Clapperboard } from "lucide-react";

const cats = [
  { icon: Code2, name: "Desarrollo", items: ["Aplicaciones web", "APIs", "Bases de datos", "Cloud"] },
  { icon: Workflow, name: "Automatización", items: ["n8n", "Make", "Webhooks", "Integraciones"] },
  { icon: BrainCircuit, name: "Inteligencia Artificial", items: ["LLMs", "Agentes", "RAG", "Automatizaciones inteligentes"] },
  { icon: BarChart3, name: "Marketing & Data", items: ["Meta", "Google", "Analytics", "CRM"] },
  { icon: Clapperboard, name: "Contenido", items: ["Producción audiovisual", "Diseño", "Fotografía", "Video"] },
];

export function Tools() {
  return (
    <section id="tecnologia" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Tecnología</div>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Herramientas para construir, conectar y <span className="brand-text-gradient">automatizar.</span>
            </h2>
            <p className="mt-8 border-l-2 border-brand pl-5 font-display text-xl leading-snug">
              Elegimos la tecnología en función del problema, no al revés.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:col-span-7">
            {cats.map((c, i) => (
              <Reveal key={c.name} delay={0.05 * i}>
                <div className="group flex flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-elevated sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                    <c.icon className="h-5 w-5 text-brand" strokeWidth={1.5} />
                    <span className="font-display text-lg font-medium">{c.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                    {c.items.map((it, j) => (
                      <span key={it} className="flex items-center gap-3">
                        {j > 0 && <span className="text-brand/60">·</span>}
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
