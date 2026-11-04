import { Reveal } from "./Reveal";
import { Code2, Workflow, BrainCircuit, LineChart, Clapperboard } from "lucide-react";

const areas = [
  { icon: Code2, n: "01", name: "Desarrollo de software", title: "Software pensado alrededor de tu negocio.", desc: "Diseñamos herramientas, plataformas, sistemas internos, dashboards, aplicaciones web y soluciones digitales adaptadas a procesos reales.", items: ["Sistemas de gestión", "Aplicaciones web", "Plataformas internas", "Dashboards", "CRM personalizados", "Portales para clientes", "MVPs y productos digitales", "Integraciones entre sistemas"] },
  { icon: Workflow, n: "02", name: "Automatización", title: "Menos tareas manuales. Más tiempo para crecer.", desc: "Detectamos procesos repetitivos y los convertimos en flujos automáticos que conectan herramientas, datos y equipos.", items: ["Automatización de procesos", "Integración entre plataformas", "Flujos comerciales", "Automatización de leads", "Notificaciones", "Procesamiento de información", "Automatización administrativa"] },
  { icon: BrainCircuit, n: "03", name: "Inteligencia Artificial", title: "IA aplicada a problemas reales.", desc: "Implementamos inteligencia artificial donde realmente puede generar impacto dentro de una empresa.", items: ["Agentes de IA", "Asistentes internos", "Atención automatizada", "Clasificación de consultas", "Procesamiento inteligente de información", "IA integrada a sistemas existentes", "Automatizaciones potenciadas con IA"] },
  { icon: LineChart, n: "04", name: "Marketing & Growth", title: "Tecnología para operar. Marketing para crecer.", desc: "Diseñamos estrategias de adquisición, comunicación y crecimiento conectadas con los sistemas y procesos de la empresa.", items: ["Meta Ads", "Google Ads", "Estrategia digital", "Performance", "Embudos", "Generación de leads", "Analítica", "Optimización de conversión"] },
  { icon: Clapperboard, n: "05", name: "Contenido & Producción", title: "Contenido que conecta marcas con personas.", desc: "Mantenemos nuestra experiencia original en comunicación y producción para ayudar a las empresas a construir una presencia digital profesional.", items: ["Gestión de redes sociales", "Estrategia de contenido", "Diseño", "Fotografía", "Producción audiovisual", "Reels", "Creativos publicitarios", "Edición de video"] },
];

export function Services() {
  return (
    <section id="soluciones" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Capacidades</div>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Unimos tecnología <span className="brand-text-gradient">y crecimiento.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground">
              No vendemos herramientas porque sí. Analizamos problemas y construimos la solución
              adecuada para cada empresa.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-4">
          {areas.map((a, i) => (
            <Reveal key={a.n} delay={0.04 * i}>
              <article className="group grid gap-6 rounded-2xl border border-border bg-surface p-6 transition-all duration-500 hover:border-brand/40 hover:bg-surface-elevated sm:p-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-brand-foreground">
                      <a.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{a.n}</span>
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.2em] text-brand">{a.name}</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{a.title}</h3>
                </div>
                <p className="text-muted-foreground lg:col-span-4">{a.desc}</p>
                <ul className="flex flex-wrap content-start gap-2 lg:col-span-4">
                  {a.items.map((it) => (
                    <li key={it} className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-foreground/80">
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
