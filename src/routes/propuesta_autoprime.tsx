import { createFileRoute } from "@tanstack/react-router";

// The demo is a self-contained static page in public/demos/autoprime
// (index.html + assets/). This route only frames it full-screen.
const DEMO_SRC = "/demos/autoprime/";

const title = "Propuesta — Marketplace Auto Prime | Surf Co.";
const description =
  "Demo del catálogo marketplace para Auto Prime (Bucaramanga) desarrollado por Surf Co.";

export const Route = createFileRoute("/propuesta_autoprime")({
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
  component: PropuestaAutoPrime,
});

function PropuestaAutoPrime() {
  return (
    <iframe
      src={DEMO_SRC}
      title="Marketplace Auto Prime (demo)"
      className="fixed inset-0 block h-dvh w-full border-0 bg-[#09090a]"
    />
  );
}
