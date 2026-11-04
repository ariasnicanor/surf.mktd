import { Reveal } from "./Reveal";

export function SanLuis() {
  return (
    <section id="san-luis" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Desde San Luis</div>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Construimos desde San Luis.{" "}
              <span className="brand-text-gradient">Pensamos mucho más allá.</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Surf Co. desarrolla tecnología, automatización, inteligencia artificial y estrategias
              digitales desde San Luis, Argentina.
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Nuestro objetivo es acompañar empresas de distintos sectores y tamaños, trabajando tanto
              de manera local como remota y expandiendo nuestras soluciones hacia nuevos mercados.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface">
              <div className="absolute inset-0 dot-grid" />
              {[1, 2, 3].map((r) => (
                <span
                  key={r}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/30"
                  style={{ width: `${r * 28}%`, height: `${r * 28}%` }}
                />
              ))}
              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-brand" />
              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-brand/60 motion-reduce:animate-none" />
              <div className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                San Luis, AR
                <div className="text-foreground">33.30° S · 66.34° O</div>
              </div>
              <div className="absolute right-5 top-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Local · Remoto
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
