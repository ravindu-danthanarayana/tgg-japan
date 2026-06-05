import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "お問い合わせ｜スリランカ人材採用のご相談" },
      { name: "description", content: "採用人数、職種、時期などをご共有ください。専任担当者が24時間以内に貴社向けの提案をご案内します。" },
      { property: "og:title", content: "お問い合わせ｜Trans Gulf Global (Pvt) Ltd" },
      { property: "og:description", content: "スリランカ人材採用のご相談を24時間以内にご案内します。" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16 md:pt-20"><Contact /></main>
      <Footer />
    </div>
  ),
});
