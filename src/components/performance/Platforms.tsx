import { Reveal } from "@/components/site/Reveal";

const platforms = [
  { n: "01", name: "Meta Ads", where: "Facebook · Instagram · WhatsApp", desc: "Campañas para generar consultas, mensajes de WhatsApp, ventas online y reconocimiento de marca con segmentación por intereses, comportamiento y audiencias propias.", items: ["Campañas de mensajes", "Formularios de leads", "Catálogo y ventas", "Remarketing"] },
  { n: "02", name: "Google Ads", where: "Búsqueda · YouTube · Display", desc: "Aparecé justo cuando tu cliente te está buscando. Campañas de búsqueda, Performance Max, YouTube y remarketing orientadas a conversiones.", items: ["Red de búsqueda", "Performance Max", "YouTube Ads", "Google Maps / local"] },
  { n: "03", name: "TikTok Ads", where: "TikTok", desc: "Llegá a nuevas audiencias con creativos nativos en formato vertical, pensados para captar atención en los primeros segundos.", items: ["Anuncios In-Feed", "Spark Ads", "Generación de leads", "Tráfico al sitio"] },
];

export function Platforms() {
  return (
    <section id="plataformas" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Plataformas</div>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Tus anuncios donde <span className="brand-text-gradient">está tu cliente.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground">
              Elegimos las plataformas según tu negocio y tu objetivo, no por moda. Muchas veces la
              mejor combinación es más de una.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <Reveal key={p.n} delay={0.06 * i}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:bg-surface-elevated sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-brand">{p.n}</span>
                  <span className="h-px flex-1 bg-border transition-colors group-hover:bg-brand/50" />
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold">{p.name}</h3>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.where}</div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                  {p.items.map((it) => (
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
