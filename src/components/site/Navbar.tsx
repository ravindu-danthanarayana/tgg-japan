import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import tggLogo from "@/assets/tgg-logo.png";

const nav = [
  { label: "ホーム", to: "/" },
  { label: "会社概要", to: "/about" },
  { label: "サービス", to: "/services" },
  { label: "スリランカについて", to: "/srilanka" },
  { label: "採用工程", to: "/process" },
  { label: "よくある質問", to: "/faq" },
  { label: "お問い合わせ", to: "/contact" },
] as const;

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparent || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-[color:var(--paper)]/85 backdrop-blur-xl border-b border-[color:var(--hairline)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-14 items-center justify-between md:h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={tggLogo} alt="Trans Gulf Global (Pvt) Ltd" className="h-8 w-8 object-contain" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-[color:var(--brand-navy)]">
              Trans Gulf Global (Pvt) Ltd
            </span>
            <span className="mono text-[9px] text-[color:var(--ink-soft)] tracking-widest uppercase">
              日本事業部
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-2.5 py-1 text-xs text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition rounded-full"
              activeProps={{ className: "text-[color:var(--ink)] font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://www.tggkandy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost btn-sm"
          >
            コーポレートサイト
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
          <Link to="/contact" className="btn-primary btn-sm">
            人材を相談する
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </Link>
        </div>

        <button
          aria-label="メニューを開閉"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-8 w-8 place-items-center rounded-full border border-[color:var(--hairline)]"
        >
          {open ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--hairline)] bg-[color:var(--paper)]">
          <div className="container-page py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-lg serif text-[color:var(--ink)] border-b border-[color:var(--hairline)] last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link
                to="/contact"
                className="btn-primary btn-sm self-start"
                onClick={() => setOpen(false)}
              >
                人材を相談する <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://www.tggkandy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-sm self-start"
                onClick={() => setOpen(false)}
              >
                コーポレートサイト <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
