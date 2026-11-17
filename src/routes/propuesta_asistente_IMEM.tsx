import { createFileRoute } from "@tanstack/react-router";

// The demo is a self-contained static page in public/demos/asistente-imem
// (index.html + conocimiento.txt). This route only frames it full-screen.
const DEMO_SRC = "/demos/asistente-imem/index.html";

const title = "Propuesta — Asistente virtual IMEM | Surf Co.";
const description =
  "Demo del asistente virtual para IMEM (Instituto Magisterial y Empresarial Mexicano) desarrollado por Surf Co.";

export const Route = createFileRoute("/propuesta_asistente_IMEM")({
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
  component: PropuestaAsistenteIMEM,
});

function PropuestaAsistenteIMEM() {
  return (
    <iframe
      src={DEMO_SRC}
      title="Asistente IMEM (demo)"
      className="fixed inset-0 block h-dvh w-full border-0 bg-white"
    />
  );
}
