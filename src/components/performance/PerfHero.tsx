import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const eyebrow = ["Meta Ads", "Google Ads", "TikTok Ads"];
const funnel = [
  { label: "Alcance", w: "100%" },
  { label: "Clics", w: "72%" },
  { label: "Consultas", w: "46%" },
  { label: "Ventas", w: "28%" },
];

export function PerfHero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <img src={heroBg} alt="" width={1920} height={1080} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 -z-10 tech-grid" />
      <div className="absolute inset-0 -z-10 grain" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-brand sm:text-xs"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
            Surf Performance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Publicidad que se mide en <span className="brand-text-gradient italic">ventas</span>, no en likes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
          >
            Somos la unidad de publicidad de Surf Co. Planificamos, lanzamos y optimizamos campañas
            pagas para que cada peso invertido trabaje para tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <a href="#contacto" className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-brand-foreground transition-all hover:-translate-y-0.5 hover:shadow-brand">
              Quiero potenciar mis anuncios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#servicios" className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-4 text-sm font-medium backdrop-blur transition-colors hover:bg-surface">
              Qué hacemos
              <ArrowDown className="h-4 w-4 text-brand transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
            {eyebrow.map((f, i) => (
              <motion.span
                key={f}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                {i > 0 && <span className="h-1 w-1 rounded-full bg-brand" />}
                {f}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="rounded-3xl border border-border bg-surface/70 p-7 shadow-card backdrop-blur sm:p-9">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Embudo de campaña</span>
              <span className="font-mono text-xs text-brand">LIVE</span>
            </div>
            <div className="mt-8 space-y-5">
              {funnel.map((f, i) => (
                <div key={f.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className={i === funnel.length - 1 ? "text-foreground" : "text-muted-foreground"}>{f.label}</span>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-background/70">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: f.w }}
                      transition={{ delay: 1 + i * 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full brand-gradient"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
              Medimos cada etapa para invertir más donde la campaña rinde y cortar donde no.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
