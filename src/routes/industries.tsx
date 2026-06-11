import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Industries, WhyTalent, Contact } from "@/components/site/sections";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "対応業種｜製造・建設・介護・宿泊・物流向け人材" },
      {
        name: "description",
        content:
          "建設、製造、宿泊、医療、介護、物流、食品加工など、日本の主要産業向けに技能人材を紹介します。",
      },
      { property: "og:title", content: "対応業種｜Trans Gulf Global (Pvt) Ltd" },
      {
        property: "og:description",
        content: "日本の主要産業を支えるスリランカ人材ソリューション。",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 md:pt-16">
        <Industries />
        <WhyTalent />
        <Contact />
      </main>
      <Footer />
    </div>
  ),
});
