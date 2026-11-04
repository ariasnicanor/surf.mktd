import { Reveal } from "@/components/site/Reveal";
import { MessageCircle, ShoppingBag, MapPin, Megaphone } from "lucide-react";

const goals = [
  { icon: MessageCircle, t: "Más consultas", d: "Mensajes de WhatsApp, formularios y llamadas de personas interesadas en lo que vendés." },
  { icon: ShoppingBag, t: "Más ventas online", d: "Campañas de catálogo y conversión para tiendas online y e-commerce." },
  { icon: MapPin, t: "Más visitas al local", d: "Anuncios geolocalizados para atraer clientes de tu zona a tu negocio físico." },
  { icon: Megaphone, t: "Más reconocimiento", d: "Lanzamientos, nuevas sucursales o una marca que necesita hacerse conocida." },
];

export function Goals() {
  return (
    <section id="objetivos" className="relative py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-brand">/ Objetivos</div>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Cada campaña empieza con <span className="brand-text-gradient">una pregunta.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              ¿Qué necesitás que pase en tu negocio? A partir de esa respuesta elegimos la
              plataforma, el formato y la forma de medir el éxito.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {goals.map((g, i) => (
            <Reveal key={g.t} delay={0.06 * i}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40">
                <g.icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl font-semibold">{g.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
