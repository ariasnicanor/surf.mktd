import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/site/Reveal";
import { MessageCircle, ArrowUpRight, Check } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Ingresá tu nombre").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  whatsapp: z.string().trim().min(6, "WhatsApp inválido").max(30),
  email: z.string().trim().email("Email inválido").max(255),
  goal: z.string().min(1, "Elegí tu objetivo principal"),
  budget: z.string().min(1, "Elegí tu inversión mensual aproximada"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const goals = ["Más consultas / mensajes", "Más ventas online", "Más visitas al local", "Más reconocimiento de marca", "No estoy seguro"];
const budgets = ["Todavía no invierto en publicidad", "Hasta $300.000 por mes", "$300.000 a $1.000.000 por mes", "Más de $1.000.000 por mes"];
const perks = ["Revisión de tus cuentas y campañas actuales", "Propuesta de plataformas y estrategia", "Te responde una persona, no un bot"];

export function PerfContact() {
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
      toast.success("¡Recibimos tu consulta! Te contactamos a la brevedad.");
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
                  <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Contacto</div>
                  <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
                    Hagamos que tu publicidad rinda.
                  </h2>
                  <p className="mt-6 text-muted-foreground">
                    Contanos qué vendés, a quién y cuánto invertís hoy. Te respondemos con una
                    primera mirada sobre cómo podemos mejorar tus campañas.
                  </p>
                </Reveal>

                <ul className="mt-8 space-y-3">
                  {perks.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {p}
                    </li>
                  ))}
                </ul>

                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full border border-brand/50 px-5 py-3 text-sm transition-colors hover:bg-brand hover:text-brand-foreground">
                  <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
                </a>
              </div>
            </div>

            <div className="border-t border-border p-10 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-14">
              <Reveal>
                <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                  <Field name="name" label="Nombre" placeholder="Tu nombre" required />
                  <Field name="company" label="Empresa o marca" placeholder="Opcional" />
                  <Field name="whatsapp" label="WhatsApp" placeholder="+54 9 ..." required />
                  <Field name="email" label="Email" type="email" placeholder="tu@email.com" required />
                  <Select name="goal" label="Objetivo principal" options={goals} />
                  <Select name="budget" label="Inversión mensual en pauta" options={budgets} />
                  <div className="sm:col-span-2">
                    <Label>Contanos sobre tu negocio</Label>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={1000}
                      placeholder="Qué vendés, dónde, qué probaste hasta ahora..."
                      className="mt-2 w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      disabled={loading}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-medium text-brand-foreground transition-all hover:shadow-brand hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
                    >
                      {loading ? "Enviando..." : "Quiero mi diagnóstico"}
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

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <Label>{label}</Label>
      <select name={name} required defaultValue="" className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-brand">
        <option value="" disabled>Elegí una opción</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
