import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SrilankaOverview, WhyTalent, Contact } from "@/components/site/sections";

export const Route = createFileRoute("/srilanka")({
  head: () => ({
    meta: [
      { title: "スリランカについて｜Trans Gulf Global (Pvt) Ltd 日本事業部" },
      {
        name: "description",
        content:
          "スリランカの地理、人口、言語、宗教構成などの国概要と、日本企業向けスリランカ人労働者の強みについてご紹介します。",
      },
      { property: "og:title", content: "スリランカについて｜Trans Gulf Global (Pvt) Ltd" },
      { property: "og:description", content: "スリランカの基本情報と人材の強みのご紹介。" },
      { property: "og:url", content: "/srilanka" },
    ],
    links: [{ rel: "canonical", href: "/srilanka" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 md:pt-16">
        <SrilankaOverview />
        <WhyTalent />
        <Contact />
      </main>
      <Footer />
    </div>
  ),
});
