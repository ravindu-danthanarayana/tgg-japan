import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Services, Process, Contact } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "サービス｜日本企業向け海外人材採用支援" },
      { name: "description", content: "募集、選考、技能確認、書類手続き、在留資格手続き、出国前研修まで、日本企業向けに一貫して支援します。" },
      { property: "og:title", content: "サービス｜Trans Gulf Global (Pvt) Ltd" },
      { property: "og:description", content: "日本企業向けの一貫したスリランカ人材採用支援。" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16 md:pt-20"><Services /><Process /><Contact /></main>
      <Footer />
    </div>
  ),
});
