import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const eyebrow = ["Tecnología", "Automatización", "IA", "Marketing"];
const flow = ["Estrategia", "Tecnología", "Automatización", "Crecimiento"];
const stats = [
  ["+5", "Años acompañando empresas"],
  ["+45", "Clientes y proyectos"],
  ["4", "Áreas de especialización"],
  ["AR", "Soluciones desde Argentina"],
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <img src={heroBg} alt="" width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 -z-10 tech-grid" />
      <div className="absolute inset-0 -z-10 grain" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs">
            {eyebrow.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                {i > 0 && <span className="h-1 w-1 rounded-full bg-brand" />}
                {w}
              </motion.span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl"
          >
            Tecnología para hacer <span className="brand-text-gradient italic">crecer</span> tu empresa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
          >
            Diseñamos sistemas, automatizaciones, soluciones con IA y estrategias digitales para que
            las empresas trabajen mejor, vendan más y puedan escalar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <a href="#contacto" className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-brand-foreground transition-all hover:-translate-y-0.5 hover:shadow-brand">
              Hablemos de tu empresa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#soluciones" className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-4 text-sm font-medium backdrop-blur transition-colors hover:bg-surface">
              Conocé nuestras soluciones
              <ArrowDown className="h-4 w-4 text-brand transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
            {flow.map((f, i) => (
              <motion.span
                key={f}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.2, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                {i > 0 && <span className="text-brand">→</span>}
                <span className={i === flow.length - 1 ? "text-foreground" : ""}>{f}</span>
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4"
        >
          {stats.map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl font-semibold sm:text-4xl">{n}</div>
              <div className="mt-1 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
