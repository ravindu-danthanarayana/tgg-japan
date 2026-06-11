import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Faq, Contact } from "@/components/site/sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "よくある質問｜在留資格・採用期間・法令順守" },
      {
        name: "description",
        content:
          "在留資格区分、採用期間、倫理的な採用、大量採用、認可状況など、日本企業が確認する質問に回答します。",
      },
      { property: "og:title", content: "よくある質問｜Trans Gulf Global (Pvt) Ltd" },
      { property: "og:description", content: "在留資格、採用期間、法令順守に関するよくある質問。" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 md:pt-16">
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  ),
});
