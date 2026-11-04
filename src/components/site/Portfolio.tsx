import { Reveal } from "./Reveal";
import c1 from "@/assets/clients/client-01.svg";
import c2 from "@/assets/clients/client-02.svg";
import c3 from "@/assets/clients/client-03.svg";
import c4 from "@/assets/clients/client-04.svg";
import c5 from "@/assets/clients/client-05.svg";
import c6 from "@/assets/clients/client-06.svg";
import c7 from "@/assets/clients/client-07.svg";
import c8 from "@/assets/clients/client-08.svg";
import c9 from "@/assets/clients/client-09.svg";
import c10 from "@/assets/clients/client-10.svg";
import c11 from "@/assets/clients/client-11.svg";
import c12 from "@/assets/clients/client-12.svg";

const clients = [
  { src: c1, name: "Cliente 1", scale: 1.25 },
  { src: c2, name: "Cliente 2" },
  { src: c3, name: "Cliente 3" },
  { src: c4, name: "Cliente 4" },
  { src: c5, name: "Cliente 5" },
  { src: c6, name: "Cliente 6", scale: 1.25 },
  { src: c7, name: "Cliente 7" },
  { src: c8, name: "Cliente 8", scale: 1.25 },
  { src: c9, name: "Cliente 9" },
  { src: c10, name: "Cliente 10" },
  { src: c11, name: "Cliente 11" },
  { src: c12, name: "Cliente 12" },
] as { src: string; name: string; scale?: number }[];

export function Portfolio() {
  return (
    <section id="clientes" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-brand">
              / Clientes
            </div>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Empresas que confiaron en <span className="brand-text-gradient">Surf</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Más de cinco años acompañando empresas, marcas y emprendimientos en su transformación digital y crecimiento.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((client, i) => (
              <div
                key={i}
                className="group flex aspect-square items-center justify-center bg-surface p-6 transition-colors hover:bg-surface-elevated sm:p-8"
              >
                <img
                  src={client.src}
                  alt={`Logo ${client.name}`}
                  loading="lazy"
                  style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
                  className="max-h-12 w-auto max-w-full object-contain opacity-60 transition-all duration-500 group-hover:opacity-100 sm:max-h-14"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
