import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Process, Contact } from "@/components/site/sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "採用工程｜要件確認から配属まで" },
      {
        name: "description",
        content:
          "要件確認、候補者募集、選考、書類準備、在留資格手続き、配属まで、八つの工程で進捗を明確に管理します。",
      },
      { property: "og:title", content: "採用工程｜Trans Gulf Global (Pvt) Ltd" },
      { property: "og:description", content: "要件確認から配属まで、明確な工程で進める採用支援。" },
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
