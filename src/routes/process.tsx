import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Process, Contact } from "@/components/site/sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "採用・送出しサポート｜候補者募集から就労開始後サポートまで" },
      {
        name: "description",
        content:
          "候補者募集、選考、書類準備、渡航手続き、日本語教育、就労開始後サポートまで一貫して支援します。",
      },
      { property: "og:title", content: "採用・送出しサポート｜Trans Gulf Global (Pvt) Ltd" },
      {
        property: "og:description",
        content: "候補者募集から就労開始後まで、一貫して進める採用支援。",
      },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14 md:pt-16">
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  ),
});
