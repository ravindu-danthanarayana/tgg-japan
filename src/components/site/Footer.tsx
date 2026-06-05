import { Link } from "@tanstack/react-router";
import { Mail, Phone, Globe, ArrowUpRight } from "lucide-react";
import tggLogo from "@/assets/tgg-logo.png";

export function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--paper)]">
      <div className="container-page py-20 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-md bg-[color:var(--paper)] p-1">
              <img src={tggLogo} alt="Trans Gulf Global (Pvt) Ltd" className="h-full w-full object-contain" />
            </span>
            <div>
              <div className="text-base font-semibold">Trans Gulf Global (Pvt) Ltd</div>
              <div className="mono text-[10px] tracking-widest uppercase opacity-60">日本向け人材支援</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed opacity-70 max-w-sm">
            Trans Gulf Global (Pvt) Ltdは、35年以上の採用実績を持つ認可海外雇用機関です。
            倫理的に採用したスリランカ人材と日本企業を、安心できる手続きでつなぎます。
          </p>
          <Link to="/contact" className="btn-primary mt-8 bg-[color:var(--paper)] text-[color:var(--ink)] hover:bg-[color:var(--brand-red)] hover:text-white">
            人材を相談する <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="lg:col-span-3">
          <div className="mono text-[10px] tracking-widest uppercase opacity-50 mb-5">サイト内リンク</div>
          <ul className="space-y-3 text-sm">
            {[
              { l: "ホーム", to: "/" }, { l: "会社概要", to: "/about" },
              { l: "サービス", to: "/services" }, { l: "対応業種", to: "/industries" },
              { l: "採用工程", to: "/process" }, { l: "よくある質問", to: "/faq" },
              { l: "お問い合わせ", to: "/contact" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="opacity-70 hover:opacity-100 hover:text-[color:var(--brand-red)] transition">{i.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="mono text-[10px] tracking-widest uppercase opacity-50 mb-5">お問い合わせ</div>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 opacity-60" /><a href="mailto:japan@tggkandy.com" className="hover:text-[color:var(--brand-red)]">japan@tggkandy.com</a></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 opacity-60" /><a href="tel:+94812220000">+94 81 222 0000</a></li>
            <li className="flex gap-3"><Globe className="h-4 w-4 mt-0.5 opacity-60" /><a href="https://www.tggkandy.com" className="hover:text-[color:var(--brand-red)]">www.tggkandy.com</a></li>
          </ul>
          <div className="mt-8 p-4 rounded-xl border border-white/10">
            <div className="mono text-[10px] tracking-widest uppercase opacity-50">認可・コンプライアンス</div>
            <div className="text-sm mt-1">SLBFE認可番号 387</div>
            <div className="text-[11px] mt-1 opacity-70">OTIT送り出し機関番号 LKA000138</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs opacity-60">
          <div>© {new Date().getFullYear()} Trans Gulf Global (Pvt) Ltd. 無断転載を禁じます。</div>
          <div className="mono tracking-widest uppercase">キャンディ・スリランカ → 東京・日本</div>
        </div>
      </div>
    </footer>
  );
}
