import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import Education from "@/components/landing/Education";
import Solution from "@/components/landing/Solution";
import Transformation from "@/components/landing/Transformation";
import Differentiation from "@/components/landing/Differentiation";
import Objections from "@/components/landing/Objections";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const title = "Sorri&Dent | Tratamento Miofuncional Infantil";
const description =
  "Seu filho ronca, respira pela boca ou tem dentes tortos? Descubra o tratamento miofuncional que transforma respiração, sono e autoestima.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: "Cuidamos do sorriso, da respiração e do futuro do seu filho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PainPoints />
      <Education />
      <Solution />
      <Transformation />
      <Differentiation />
      <Objections />
      <FinalCTA />
      <Footer />
    </main>
  );
}
