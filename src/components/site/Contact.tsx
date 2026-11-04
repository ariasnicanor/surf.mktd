import { useState } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { Instagram, MessageCircle, Mail, Music2, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Ingresá tu nombre").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  whatsapp: z.string().trim().min(6, "WhatsApp inválido").max(30),
  email: z.string().trim().email("Email inválido").max(255),
  topic: z.string().min(1, "Elegí en qué podemos ayudarte"),
  message: z.string().trim().min(5, "Contanos un poco más").max(1000),
});

const topics = ["Desarrollo de software", "Automatización", "Inteligencia Artificial", "Marketing", "Contenido", "No estoy seguro / Quiero analizar mi empresa"];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/" },
  { icon: Music2, label: "TikTok", href: "https://tiktok.com" },
  { icon: Mail, label: "Email", href: "mailto:hola@surfco.com" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("¡Mensaje enviado! Te contactamos a la brevedad.");
      form.reset();
    }, 700);
  }

  return (
    <section id="contacto" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="grid lg:grid-cols-12">
            <div className="relative p-10 lg:col-span-5 lg:p-14">
              <div className="absolute inset-0 brand-gradient opacity-10" />
              <div className="relative">
                <Reveal>
                  <div className="text-xs uppercase tracking-[0.25em] text-brand">
                    / Contacto
                  </div>
                  <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
                    ¿Qué problema podemos resolver juntos?
                  </h2>
                  <p className="mt-6 text-muted-foreground">
                    Contanos cómo funciona hoy tu empresa, qué proceso querés mejorar o qué idea querés construir. Nosotros analizamos cómo la tecnología, la automatización, la inteligencia artificial y el marketing pueden ayudarte.
                  </p>
                </Reveal>

                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/50 px-5 py-3 text-sm transition-colors hover:bg-brand hover:text-brand-foreground">
                  <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
                </a>
                <div className="mt-10 space-y-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-border bg-background/40 px-4 py-3 transition-all hover:border-brand/50 hover:bg-background"
                    >
                      <span className="flex items-center gap-3">
                        <s.icon className="h-4 w-4 text-brand" strokeWidth={1.5} />
                        <span className="text-sm">{s.label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border p-10 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-14">
              <Reveal>
                <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                  <Field name="name" label="Nombre" placeholder="Tu nombre" required />
                  <Field name="company" label="Empresa" placeholder="Opcional" />
                  <Field name="whatsapp" label="WhatsApp" placeholder="+54 9 ..." required />
                  <Field name="email" label="Email" type="email" placeholder="tu@email.com" required />
                  <div className="sm:col-span-2">
                    <Label>¿En qué podemos ayudarte?</Label>
                    <select name="topic" required defaultValue="" className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-brand">
                      <option value="" disabled>Elegí una opción</option>
                      {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Mensaje</Label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      maxLength={1000}
                      placeholder="Contanos tu proyecto..."
                      className="mt-2 w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      disabled={loading}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-brand-foreground transition-all hover:shadow-brand hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
                    >
                      {loading ? "Enviando..." : "Enviar consulta"}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs uppercase tracking-widest text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  name, label, placeholder, type = "text", required,
}: {
  name: string; label: string; placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand"
      />
    </div>
  );
}
