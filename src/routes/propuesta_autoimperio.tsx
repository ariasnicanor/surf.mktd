import { createFileRoute } from "@tanstack/react-router";

// The demo is a self-contained static page in public/demos/autoimperio
// (index.html + assets/). This route only frames it full-screen.
const DEMO_SRC = "/demos/autoimperio/";

const title = "Propuesta — Marketplace Auto Imperio | Surf Co.";
const description =
  "Demo del catálogo marketplace para Auto Imperio (Bucaramanga) desarrollado por Surf Co.";

export const Route = createFileRoute("/propuesta_autoimperio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PropuestaAutoImperio,
});

function PropuestaAutoImperio() {
  return (
    <iframe
      src={DEMO_SRC}
      title="Marketplace Auto Imperio (demo)"
      className="fixed inset-0 block h-dvh w-full border-0 bg-[#0c0b0d]"
    />
  );
}
