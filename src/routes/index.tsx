import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Method } from "@/components/site/Method";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Results } from "@/components/site/Results";
import { Tools } from "@/components/site/Tools";
import { Portfolio } from "@/components/site/Portfolio";
import { SanLuis } from "@/components/site/SanLuis";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

const title = "Surf Co. — Tecnología, Automatización, IA y Marketing";
const description =
  "Consultora tecnológica de San Luis, Argentina. Desarrollamos software, automatizaciones, soluciones con inteligencia artificial y estrategias digitales para ayudar a empresas a trabajar mejor y crecer.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "consultora tecnológica, desarrollo de software, automatización de procesos, inteligencia artificial, IA para empresas, software para empresas, transformación digital, marketing digital, San Luis Argentina" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_AR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Method />
          <Ecosystem />
          <Results />
          <Tools />
          <Portfolio />
          <SanLuis />
          <Contact />
        </main>
        <Footer />
        <Toaster theme="dark" position="top-center" />
      </div>
    </MotionConfig>
  );
}
