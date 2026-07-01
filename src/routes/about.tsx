import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { About, Chairman, Achievements, Contact } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "会社概要｜Trans Gulf Global (Pvt) Ltd 日本事業部" },
      {
        name: "description",
        content:
          "35年以上にわたる海外人材紹介の実績を持つSLBFE認可の海外雇用機関として、日本企業向けに倫理的なスリランカ人材採用を支援します。",
      },
      { property: "og:title", content: "会社概要｜Trans Gulf Global (Pvt) Ltd" },
      { property: "og:description", content: "日本企業を支える認可スリランカ人材送出機関。" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 md:pt-16">
        <About />
        <Chairman />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  ),
});
