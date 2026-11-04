import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { PerfNavbar } from "@/components/performance/PerfNavbar";
import { PerfHero } from "@/components/performance/PerfHero";
import { Platforms } from "@/components/performance/Platforms";
import { Capabilities } from "@/components/performance/Capabilities";
import { Goals } from "@/components/performance/Goals";
import { PerfMethod } from "@/components/performance/PerfMethod";
import { PerfContact } from "@/components/performance/PerfContact";
import { PerfFooter } from "@/components/performance/PerfFooter";
import { Toaster } from "@/components/ui/sonner";

const title = "Surf Performance — Publicidad digital en Meta, Google y TikTok";
const description =
  "La unidad de publicidad de Surf Co. Planificamos, lanzamos y optimizamos campañas en Meta Ads, Google Ads y TikTok Ads para generar consultas, ventas y crecimiento medible.";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "publicidad digital, Meta Ads, Google Ads, TikTok Ads, campañas pagas, performance marketing, generación de leads, San Luis Argentina" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_AR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/performance" }],
  }),
  component: Performance,
});

function Performance() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground">
        <PerfNavbar />
        <main>
          <PerfHero />
          <Platforms />
          <Capabilities />
          <Goals />
          <PerfMethod />
          <PerfContact />
        </main>
        <PerfFooter />
        <Toaster theme="dark" position="top-center" />
      </div>
    </MotionConfig>
  );
}
