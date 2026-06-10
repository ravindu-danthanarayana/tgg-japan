import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  Hero, WhyChoose, JapanSpecialization, Industries, Process, Faq, Contact,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trans Gulf Global (Pvt) Ltd 日本事業部｜日本企業向けスリランカ人材採用支援" },
      { name: "description", content: "建設、製造、宿泊、介護、物流分野の日本企業向けに、倫理的に採用し技能確認を行ったスリランカ人材を紹介します。" },
      { property: "og:title", content: "Trans Gulf Global (Pvt) Ltd 日本事業部" },
      { property: "og:description", content: "日本企業向けのスリランカ人材採用・送り出し支援。" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar transparent />
      <main>
        <Hero />
        <WhyChoose />
        <JapanSpecialization />
        <Industries />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
