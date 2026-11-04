import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const nodes = ["Marketing", "Automatización", "Software", "Inteligencia Artificial", "Contenido"];
const chain = [
  "Marketing genera un lead",
  "Automatización lo procesa",
  "Software centraliza la información",
  "IA ayuda a responder",
  "Los datos optimizan el marketing",
];

// positions on a circle (viewBox 600x600, center 300,280)
const pts = nodes.map((_, i) => {
  const a = (-90 + i * 72) * (Math.PI / 180);
  return { x: 300 + Math.cos(a) * 200, y: 280 + Math.sin(a) * 200 };
});

export function Ecosystem() {
  return (
    <section id="ecosistema" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-10 tech-grid opacity-60" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Ecosistema</div>
              <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
                No son servicios aislados. <span className="brand-text-gradient">Es un sistema.</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                Las capacidades se conectan según el problema de cada cliente. Venimos del marketing,
                así que entendemos cómo una empresa atrae clientes. Ahora también construimos la
                tecnología para atenderlos, convertirlos y gestionarlos mejor.
              </p>
            </Reveal>
            <ol className="mt-10 space-y-3">
              {chain.map((c, i) => (
                <Reveal key={c} delay={0.06 * i}>
                  <li className="flex items-center gap-4 text-sm">
                    <span className="font-mono text-xs text-brand">0{i + 1}</span>
                    <span className="h-px w-6 bg-border" />
                    <span className="text-foreground/85">{c}</span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative mx-auto aspect-square w-full max-w-[560px]">
                <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" aria-hidden>
                  <circle cx="300" cy="280" r="200" fill="none" stroke="var(--border)" strokeDasharray="2 6" />
                  {pts.map((p, i) => {
                    const n = pts[(i + 1) % pts.length];
                    return (
                      <g key={i}>
                        <line x1="300" y1="280" x2={p.x} y2={p.y} stroke="var(--border)" />
                        <motion.line
                          x1={p.x} y1={p.y} x2={n.x} y2={n.y}
                          stroke="var(--brand)" strokeWidth="1.5" strokeDasharray="6 10"
                          initial={{ strokeDashoffset: 0, opacity: 0.25 }}
                          animate={{ strokeDashoffset: -64, opacity: [0.25, 0.9, 0.25] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
                        />
                      </g>
                    );
                  })}
                  <line x1="300" y1="280" x2="300" y2="565" stroke="var(--brand)" strokeOpacity="0.6" strokeDasharray="3 5" />
                </svg>

                {nodes.map((n, i) => (
                  <div
                    key={n}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${(pts[i].x / 600) * 100}%`, top: `${(pts[i].y / 600) * 100}%` }}
                  >
                    <div className="whitespace-nowrap rounded-full border border-border bg-surface/90 px-3 py-1.5 text-[11px] font-medium backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                      {n === "Inteligencia Artificial" ? <><span className="sm:hidden">IA</span><span className="hidden sm:inline">{n}</span></> : n}
                    </div>
                  </div>
                ))}

                <div className="absolute left-1/2 top-[46.6%] -translate-x-1/2 -translate-y-1/2">
                  <div className="grid h-24 w-24 place-items-center rounded-full border border-brand/60 bg-background font-display text-sm font-semibold tracking-widest shadow-brand sm:h-32 sm:w-32 sm:text-base">
                    SURF CO.
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-brand px-5 py-2 font-mono text-xs uppercase tracking-[0.25em] text-brand-foreground">
                    Crecimiento
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
