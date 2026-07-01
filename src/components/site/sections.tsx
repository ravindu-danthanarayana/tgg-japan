import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ShieldCheck,
  Award,
  Users,
  Clock,
  HeartHandshake,
  BadgeCheck,
  TrendingUp,
  Headphones,
  Search,
  ClipboardCheck,
  Wrench,
  FileCheck2,
  FileText,
  Plane,
  Stethoscope,
  GraduationCap,
  PackageCheck,
  Building2,
  HardHat,
  Factory,
  Hotel,
  Truck,
  UtensilsCrossed,
  Sprout,
  BriefcaseBusiness,
  MapPinned,
} from "lucide-react";
import chairmanImg from "@/assets/chairman.jpg";
import lobbyImg from "@/assets/office-lobby.jpg";
import teamImg from "@/assets/team.jpg";
import collaborateImg from "@/assets/new-collabarate.jpg";
import about1Img from "@/assets/about-1.jpg";
import about2Img from "@/assets/about-2.jpg";
import about3Img from "@/assets/about-3.jpg";
import trophyStar from "@/assets/award-excellence-star.png";
import trophyGlobe from "@/assets/award-excellence-globe.png";
import trophySlbfe from "@/assets/award-slbfe-golden.png";

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 pb-20 md:pb-28 overflow-hidden">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Trans Gulf Global・1989年創業</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-[2.5rem] leading-[1.04] sm:text-6xl lg:text-[5.25rem] tracking-tight"
          >
            日本企業と
            <br className="sm:hidden" />
            <span className="serif italic">信頼できる</span>スリランカ人材をつなぐ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-xl text-base md:text-lg text-[color:var(--ink-soft)] leading-relaxed"
          >
            Trans Gulf Global (Pvt) Ltdは、倫理的な採用体制と円滑な送出支援により、
            日本企業が安心して任せられる、実務対応力の高いスリランカ人材の採用を支援します。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link to="/contact" className="btn-primary">
              人材を相談する <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[color:var(--hairline)]">
            <img
              src={teamImg}
              alt="笑顔のスリランカ人の男女"
              className="h-full w-full object-cover"
              width={1600}
              height={1200}
            />
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="container-page mt-20 md:mt-28">
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-[color:var(--hairline)]">
          {[
            { k: "35年以上", l: "事業実績" },
            { k: "2,500名以上", l: "紹介実績" },
            { k: "100%", l: "法令順守の採用" },
            { k: "日本語", l: "日本国内のサポート体制" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`py-8 md:py-10 px-4 md:px-6 ${i !== 0 ? "md:border-l border-[color:var(--hairline)]" : ""} ${i % 2 !== 0 ? "border-l border-[color:var(--hairline)] md:border-l" : ""}`}
            >
              <div className="serif text-4xl md:text-6xl tracking-tight">{s.k}</div>
              <div className="mono text-[10px] md:text-[11px] tracking-widest uppercase text-[color:var(--ink-soft)] mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION SHELL ---------- */
function SectionHead({
  eyebrow,
  title,
  lede,
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  id?: string;
}) {
  return (
    <div className="max-w-3xl" id={id}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl md:text-5xl tracking-tight leading-[1.08]">{title}</h2>
      {lede && (
        <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed md:text-lg max-w-2xl">
          {lede}
        </p>
      )}
    </div>
  );
}

/* ---------- WHY CHOOSE ---------- */
export function WhyChoose() {
  const items = [
    {
      i: Award,
      t: "35年以上にわたる海外人材紹介の実績",
      d: "海外人材採用における長年の運用経験と実務知見。",
    },
    { i: ShieldCheck, t: "政府認可の送出機関", d: "SLBFE認可を受けた正式な海外雇用機関です。" },
    { i: Users, t: "豊富な人材ネットワーク", d: "技能確認済みのスリランカ人材を全国規模で確保。" },
    { i: Clock, t: "迅速な採用進行", d: "募集から配属まで、合意した期限に沿って効率的に進行。" },
    { i: HeartHandshake, t: "倫理的な採用", d: "候補者負担を抑えた、公正で透明性の高い採用方針。" },
    { i: BadgeCheck, t: "候補者確認", d: "書類、本人確認、職務能力を各段階で丁寧に確認。" },
    { i: TrendingUp, t: "高い定着率", d: "職務適性と企業文化を踏まえた精度の高いマッチング。" },
    { i: Headphones, t: "専任サポート", d: "配属前後を通じて、専任担当者が一貫して対応。" },
  ];
  return (
    <section className="py-24 md:py-32 bg-[color:var(--paper-warm)]">
      <div className="container-page">
        <SectionHead
          eyebrow="選ばれる理由"
          title={
            <>
              日本企業の人材計画を
              <br className="sm:hidden" />
              確実に支える採用パートナー
            </>
          }
          lede="認可機関としての厳格な運用と、日本の人事部門が求める迅速な対応力を両立しています。"
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--hairline)] border border-[color:var(--hairline)] rounded-2xl overflow-hidden">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="bg-white p-7 transition hover:bg-[color:var(--paper)]">
              <Icon className="h-6 w-6 text-[color:var(--brand-red)]" strokeWidth={1.5} />
              <div className="mt-6 text-base font-medium">{t}</div>
              <p className="mt-2 text-sm text-[color:var(--ink-soft)] leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
export function About() {
  const teamGallery = [
    { src: collaborateImg, alt: "Trans Gulf Global (Pvt) Ltdの採用打ち合わせ" },
    { src: teamImg, alt: "Trans Gulf Global (Pvt) Ltdの採用チーム" },
    { src: about1Img, alt: "Trans Gulf Global (Pvt) Ltdの事業活動" },
    { src: about2Img, alt: "Trans Gulf Global (Pvt) Ltdのチーム紹介" },
    { src: about3Img, alt: "Trans Gulf Global (Pvt) Ltdの現場風景" },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">会社概要</span>
          <h2 className="mt-5 text-3xl md:text-5xl tracking-tight leading-[1.08]">
            政府認定の
            <br className="sm:hidden" />
            <span className="serif italic">人材送出機関</span>
          </h2>
          <div className="mt-8 rounded-2xl overflow-hidden border border-[color:var(--hairline)] aspect-[16/10] bg-[color:var(--paper-warm)] shadow-sm group">
            <img
              src={lobbyImg}
              alt="Trans Gulf Global (Pvt) Ltd本社受付ロビー"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
        <div className="lg:col-span-7 grid gap-10">
          <p className="text-[color:var(--ink-soft)] md:text-lg leading-relaxed">
            Trans Gulf Global (Pvt) Ltdは、スリランカを拠点とする送出機関です。
            35年以上の運用実績をもとに、製造、建設、宿泊、介護分野などの日本企業に対し、
            事業規模に応じた人材確保を支援しています。
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-[color:var(--hairline)] border border-[color:var(--hairline)] rounded-2xl overflow-hidden">
            <div className="bg-white p-7">
              <div className="mono text-[10px] tracking-widest uppercase text-[color:var(--brand-red)]">
                ミッション
              </div>
              <p className="mt-3 text-sm leading-relaxed">
                倫理的に採用し、厳格に選考したスリランカ人材を通じて、
                日本企業の安定した人員体制づくりに貢献します。
              </p>
            </div>
            <div className="bg-white p-7">
              <div className="mono text-[10px] tracking-widest uppercase text-[color:var(--brand-red)]">
                ビジョン
              </div>
              <p className="mt-3 text-sm leading-relaxed">
                法令順守、定着率、長期的な信頼関係を軸に、
                スリランカ人材と日本企業をつなぐ最も信頼される架け橋を目指します。
              </p>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              "35年以上にわたる海外人材紹介の実績",
              "政府認定の送出機関",
              "信頼性の高い人材支援",
              "長期的な企業連携",
              "倫理的な採用運用",
              "海外配属の専門知識",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <Check className="h-4 w-4 text-[color:var(--brand-red)]" strokeWidth={2} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {teamGallery.map((image, idx) => (
              <div
                key={image.alt}
                className={`group aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--paper-warm)] shadow-md ring-1 ring-black/5 ${
                  idx >= 3 ? "col-span-1" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
export function Services() {
  const items = [
    { i: Search, t: "人材募集", d: "職種要件に合わせ、技能人材プールから的確に候補者を抽出。" },
    { i: ClipboardCheck, t: "候補者選考", d: "面接、経歴確認、職務適性の確認を複数段階で実施。" },
    { i: Wrench, t: "技能確認", d: "職種別の実技確認により、現場で必要な能力を検証。" },
    { i: ShieldCheck, t: "身元・経歴確認", d: "本人確認、無犯罪証明、過去就業歴を丁寧に確認。" },
    { i: FileText, t: "書類手続き支援", d: "契約、認証、各種証明書類の準備を一貫して支援。" },
    { i: FileCheck2, t: "在留資格手続き", d: "特定技能、技能実習、技術系区分の申請進行を支援。" },
    {
      i: Stethoscope,
      t: "健康診断調整",
      d: "日本側要件に対応した指定医療機関での事前健診を調整。",
    },
    { i: GraduationCap, t: "出国前準備", d: "生活・文化研修、基礎日本語、職場マナーを事前指導。" },
    { i: PackageCheck, t: "大量採用対応", d: "工場、現場、季節需要に合わせた集団採用を設計。" },
    { i: Headphones, t: "企業サポート", d: "専任担当者が進捗報告、調整、配属後フォローまで対応。" },
  ];
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[color:var(--ink)] text-[color:var(--paper)]"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow !text-white/60">サービス</span>
          <h2 className="mt-5 text-3xl md:text-5xl tracking-tight leading-[1.08]">
            募集から配属まで
            <br className="sm:hidden" />
            採用プロセスを一貫して支援
          </h2>
          <p className="mt-5 text-white/70 md:text-lg leading-relaxed max-w-2xl">
            要件確認から来日後のフォローまで、専任チームが各工程を責任を持って進行します。
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="bg-[color:var(--ink)] p-7 hover:bg-white/[0.04] transition">
              <Icon className="h-6 w-6 text-[color:var(--brand-red)]" strokeWidth={1.5} />
              <div className="mt-6 text-base font-medium">{t}</div>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES ---------- */
export function Industries() {
  const fields = [
    { t: "自動車運送業", i: Truck },
    { t: "介護", i: HeartHandshake },
    { t: "建設", i: HardHat },
    { t: "宿泊", i: Hotel },
    { t: "物流", i: PackageCheck },
    { t: "食品加工", i: UtensilsCrossed },
    { t: "物流倉庫", i: Sprout },
    { t: "施設管理", i: Building2 },
    { t: "航空グランドハンドリング", i: Plane },
    { t: "外食業", i: UtensilsCrossed },
    { t: "リネンサプライ", i: PackageCheck },
  ];
  return (
    <section id="industries" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHead
          eyebrow="対応業種"
          title={
            <>
              技能実習（育成就労）・特定技能に
              <br className="sm:hidden" />
              対応
            </>
          }
          lede="技能実習制度および特定技能制度の全分野において、人材支援を行っています。"
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[color:var(--hairline)] border border-[color:var(--hairline)] rounded-2xl overflow-hidden">
          {fields.map(({ t, i: Icon }, idx) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="bg-white p-7 flex flex-col items-start gap-4 transition hover:bg-[color:var(--paper)]"
            >
              <Icon className="h-6 w-6 text-[color:var(--brand-red)]" strokeWidth={1.5} />
              <div>
                <div className="mono text-[10px] tracking-widest text-[color:var(--ink-soft)]">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="text-base font-medium mt-1">{t}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-sm text-[color:var(--ink-soft)] leading-relaxed max-w-2xl">
          上記以外の分野についても、技能実習制度・特定技能制度の対象職種であればご相談を承ります。
        </p>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
export function Process() {
  const steps = [
    {
      title: "候補者募集・選考",
      body: "企業様の採用ニーズに応じて候補者を募集。面接を通じて、身元、経歴、職務適性を確認します。",
    },
    {
      title: "書類準備・渡航手続き支援",
      body: "証明書類準備、SLBFE登録、ビザ申請、健康診断、出国手続きをサポートします。",
    },
    {
      title: "日本語教育",
      body: "日本語教育、日本文化、生活マナー、職場マナー、就労前研修を実施します。",
    },
    {
      title: "企業サポート",
      body: "採用相談、日本語サポート、就労開始後サポートを提供します。",
    },
  ];
  return (
    <section id="process" className="py-24 md:py-32 bg-[color:var(--paper-warm)]">
      <div className="container-page">
        <SectionHead
          eyebrow="採用・送出しサポート"
          title={
            <>
              一貫したサポートで
              <br className="sm:hidden" />
              <span className="serif italic">安心できる採用を</span>
            </>
          }
        />
        <div className="mt-16 grid gap-px bg-[color:var(--hairline)] border border-[color:var(--hairline)] rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="bg-white p-7 relative">
              <div className="mono text-[11px] tracking-widest text-[color:var(--brand-red)]">
                0{i + 1}
              </div>
              <div className="mt-4 text-base font-medium">{step.title}</div>
              <p className="mt-2 text-sm text-[color:var(--ink-soft)] leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY SRI LANKAN TALENT ---------- */
export function WhyTalent() {
  const cards = [
    {
      t: "高い学習意欲",
      d: "海外就労を通じて成長したいという意欲を持ち、日本語や専門技能の習得に貪欲な人材が多くいます。",
    },
    {
      t: "誠実で協調性のある人柄",
      d: "職場のルールを守り、周囲と協力しながら働く姿勢を大切にします。",
    },
    {
      t: "粘り強く働く姿勢",
      d: "困難な環境にも前向きに向き合い、長く安定して働く意欲があります。",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">スリランカ人材の強み</span>
          <h2 className="mt-5 text-3xl md:text-5xl tracking-tight leading-[1.08]">
            日本の現場が
            <br className="sm:hidden" />
            <span className="serif italic">安心して任せられる</span>人材
          </h2>
          <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed">
            スリランカ人材は、規律、礼節、柔軟性、サービス意識を兼ね備えています。
            日本企業が重視する現場適応力と安定した勤務姿勢を、採用段階から丁寧に確認します。
          </p>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div key={c.t} className="card-soft p-6">
              <div className="mono text-[10px] tracking-widest text-[color:var(--brand-red)]">
                0{i + 1}
              </div>
              <div className="mt-3 text-base font-medium">{c.t}</div>
              <p className="mt-1.5 text-sm text-[color:var(--ink-soft)] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
export function Testimonials() {
  const quotes = [
    {
      q: "40名規模の製造人材について、合意したスケジュール通りに候補者を紹介いただきました。候補者の質と出国前研修の丁寧さは、他社と比べても明確に優れていました。",
      n: "田中 弘",
      r: "人事部長、精密部品株式会社",
    },
    {
      q: "日本企業が求める法令順守の姿勢を理解している点が非常に安心でした。書類、健康診断、在留資格手続きまで、こちらが追いかける必要なく進行しました。",
      n: "山本 愛子",
      r: "採用責任者、さくらケアグループ",
    },
    {
      q: "複数回の受け入れで協力していますが、配属後12か月時点の定着率は90％を超えています。以前の採用パートナーでは得られなかった水準です。",
      n: "渡辺 健二",
      r: "運営部長、日本物流株式会社",
    },
  ];
  return (
    <section className="py-24 md:py-32 bg-[color:var(--paper-warm)]">
      <div className="container-page">
        <SectionHead
          eyebrow="導入企業の声"
          title={
            <>
              日本企業から
              <br className="sm:hidden" />
              寄せられる評価
            </>
          }
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-4">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white border border-[color:var(--hairline)] rounded-2xl p-8 flex flex-col"
            >
              <div className="serif text-5xl text-[color:var(--brand-red)] leading-none">“</div>
              <blockquote className="mt-2 text-[15px] leading-relaxed text-[color:var(--ink)]">
                {q.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-[color:var(--hairline)]">
                <div className="text-sm font-medium">{q.n}</div>
                <div className="mono text-[10px] tracking-widest uppercase text-[color:var(--ink-soft)] mt-1">
                  {q.r}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
import { useState } from "react";
export function Faq() {
  const faqs = [
    {
      q: "採用から配属までどのくらいかかりますか。",
      a: "一般的には3ヶ月から6ヶ月程度です。在留資格区分、健康診断、書類認証の進行状況により変動します。大量採用では初期段階で工程表を作成します。",
    },
    {
      q: "候補者から採用手数料を徴収しますか。",
      a: "いいえ。候補者に不当な負担をかけない倫理的な採用方針に基づき、SLBFEの指針に沿って運用します。",
    },
    {
      q: "候補者の日本語レベルはどの程度ですか。",
      a: "多くの候補者はJLPT N5〜N4相当の日本語学習経験を持っています。当社では、日本で働くために必要な基礎的な会話力や、業務で使用する職場日本語を含め、日本語能力をさらに向上させるための出国前日本語教育を提供しています。",
    },
    {
      q: "認可を受けた機関ですか。",
      a: "はい。Trans Gulf Global (Pvt) Ltdは、スリランカ海外雇用局（SLBFE）よりライセンスを受けた人材採用機関であり、スリランカ政府認定の送出機関です。OTIT登録番号はLKA000138です。",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">よくある質問</span>
          <h2 className="mt-5 text-3xl md:text-5xl tracking-tight leading-[1.08]">
            採用に関する
            <br className="sm:hidden" />
            <span className="serif italic">ご質問</span>
          </h2>
        </div>
        <div className="lg:col-span-8 border-t border-[color:var(--hairline)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[color:var(--hairline)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base md:text-lg font-medium">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full border border-[color:var(--hairline)] transition ${isOpen ? "bg-[color:var(--ink)] text-white rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[color:var(--ink-soft)] leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[color:var(--paper-warm)]">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">お問い合わせ</span>
          <h2 className="mt-5 text-3xl md:text-5xl tracking-tight leading-[1.08]">
            人材のご相談は、
            <br />
            <span className="serif italic">お気軽にお問い合わせください</span>
          </h2>

          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-4 w-4 text-[color:var(--brand-red)]" />
              <span>japan@tggkandy.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="h-4 w-4 text-[color:var(--brand-red)]" />
              <span>+94 81 222 1080</span>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="h-4 w-4 text-[color:var(--brand-red)]" />
              <span>+94 77 5300221</span>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="h-4 w-4 text-[color:var(--brand-red)]" />
              <span>スリランカ、キャンディ、ディー・エス・セナナヤケ通り163/3</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const workers = form.elements.namedItem("workers") as HTMLInputElement | null;
            if (workers && Number(workers.value) < 1) {
              workers.setCustomValidity("1以上の人数を入力してください。");
              workers.reportValidity();
              return;
            }
            workers?.setCustomValidity("");
            alert("お問い合わせありがとうございます。担当者より折り返しご連絡いたします。");
          }}
          className="lg:col-span-7 bg-white border border-[color:var(--hairline)] rounded-2xl p-7 md:p-10 grid sm:grid-cols-2 gap-5"
        >
          {[
            { n: "company", l: "会社名", t: "text" },
            { n: "contact", l: "ご担当者名", t: "text" },
            { n: "email", l: "メールアドレス", t: "email" },
            { n: "phone", l: "電話番号", t: "tel" },
            { n: "industry", l: "業種", t: "text" },
            { n: "positions", l: "募集職種", t: "text" },
            { n: "workers", l: "予定採用人数", t: "number" },
          ].map((f) => (
            <label key={f.n} className="block">
              <span className="mono text-[10px] tracking-widest uppercase text-[color:var(--ink-soft)]">
                {f.l}
              </span>
              <input
                required
                name={f.n}
                type={f.t}
                maxLength={200}
                min={f.t === "number" ? 1 : undefined}
                inputMode={f.t === "number" ? "numeric" : undefined}
                onKeyDown={
                  f.t === "number"
                    ? (e) => {
                        if (["-", "+", "e", "E", "."].includes(e.key)) e.preventDefault();
                      }
                    : undefined
                }
                onPaste={
                  f.t === "number"
                    ? (e) => {
                        const value = e.clipboardData.getData("text");
                        if (!/^[1-9]\d*$/.test(value)) e.preventDefault();
                      }
                    : undefined
                }
                onInput={
                  f.t === "number"
                    ? (e) => {
                        const input = e.currentTarget;
                        input.value = input.value.replace(/[^\d]/g, "");
                        if (input.value && Number(input.value) < 1) input.value = "1";
                        input.setCustomValidity(
                          input.value && Number(input.value) < 1
                            ? "1以上の人数を入力してください。"
                            : "",
                        );
                      }
                    : undefined
                }
                className="mt-2 w-full bg-transparent border-b border-[color:var(--hairline)] focus:border-[color:var(--ink)] outline-none py-2.5 text-[15px] transition"
              />
            </label>
          ))}
          <label className="block sm:col-span-2">
            <span className="mono text-[10px] tracking-widest uppercase text-[color:var(--ink-soft)]">
              ご相談内容
            </span>
            <textarea
              name="message"
              rows={4}
              maxLength={2000}
              className="mt-2 w-full bg-transparent border-b border-[color:var(--hairline)] focus:border-[color:var(--ink)] outline-none py-2.5 text-[15px] transition resize-none"
            />
          </label>
          <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-xs text-[color:var(--ink-soft)] max-w-sm">
              送信により、当社採用チームからの連絡に同意したものとします。企業情報を第三者に共有することはありません。
            </p>
            <button type="submit" className="btn-primary">
              人材を相談する <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---------- CHAIRMAN'S MESSAGE ---------- */
export function Chairman() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[color:var(--hairline)] relative group shadow-md">
            <img
              src={chairmanImg}
              alt="会長 A. M. Rafique"
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--ink)]/85 via-[color:var(--ink)]/40 to-transparent p-6 text-white">
              <h3 className="serif text-2xl font-medium">A. M. Rafique</h3>
              <p className="mono text-[10px] tracking-widest uppercase opacity-85 mt-1">
                会長、Trans Gulf Global (Pvt) Ltd
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <span className="eyebrow">会長メッセージ</span>
          <h2 className="mt-5 text-3xl md:text-5xl tracking-tight leading-[1.08]">
            企業に価値を届け
            <br className="sm:hidden" />
            人材の未来を<span className="serif italic">切り拓く</span>
          </h2>
          <div className="mt-8 space-y-6 text-[color:var(--ink-soft)] md:text-lg leading-relaxed">
            <p className="serif italic text-[color:var(--ink)] text-xl font-medium">
              「Trans Gulf Global (Pvt)
              Ltdにとって採用支援とは、単に欠員を埋めることではありません。企業に確かな価値を届け、スリランカ人材の可能性を広げる取り組みです。」
            </p>
            <p>
              30年以上にわたり、私たちは多様な業界の海外企業に対し、信頼でき、勤勉で、誠実な人材を送出してきました。倫理的な採用、透明な手続き、迅速な動員体制が当社の強みです。
            </p>
            <p>
              当社と連携する企業は、単なる労働力ではなく、成果に向き合う人材チームを得ることができます。専門性と信頼をもって、貴社の人材ニーズを支援できることを心より願っています。
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-[color:var(--hairline)]">
            <div className="font-semibold text-[color:var(--ink)]">A. M. Rafique</div>
            <div className="mono text-xs text-[color:var(--ink-soft)] mt-1">
              会長、Trans Gulf Global (Pvt) Ltd
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- JAPAN OPERATIONS SPECIALIZATION ---------- */
export function JapanSpecialization() {
  const features = [
    {
      title: "日本語学校との連携",
      desc: "日本人スタッフも関与する日本語学校と連携し、出国前の候補者に対して実践的な日本語教育と、日本の生活・職場文化に関する研修を提供します。",
      label: "日本語・文化",
    },
    {
      title: "日本国内のサポート体制",
      desc: "日本在住の経験豊富なスリランカ人スタッフによる支援体制を整え、配属後も人材と受け入れ企業の双方に対して、言語、生活、職場適応を継続的に支援します。",
      label: "現地支援",
    },
    {
      title: "日本人スタッフによるサポート",
      desc: "当社には日本人スタッフが在籍しており、日本企業様と日本語でスムーズにコミュニケーションをとることが可能です。",
      label: "日本語対応",
    },
    {
      title: "認定送出機関",
      desc: "スリランカ政府に認定された送出機関として登録されており、技能実習制度におけるOTIT登録番号も保有しています。",
      label: "政府認定",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[color:var(--paper-warm)]">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">日本向け運用体制</span>
          <h2 className="mt-5 text-3xl md:text-5xl tracking-tight leading-[1.08]">
            日本国内の<span className="serif italic">サポート体制</span>
          </h2>
          <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed md:text-lg max-w-2xl">
            スリランカ・キャンディから日本国内まで、候補者と受け入れ企業の双方を継続的に支援します。
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white border border-[color:var(--hairline)] rounded-2xl p-8 flex flex-col justify-between transition hover:border-[color:var(--ink)]"
            >
              <div>
                <div className="mono text-[10px] tracking-widest uppercase text-[color:var(--brand-red)]">
                  {f.label}
                </div>
                <h3 className="text-xl font-medium mt-4">{f.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--ink-soft)] leading-relaxed">
                  {f.desc}
                </p>
              </div>
              {i === 3 && (
                <div className="mt-6 pt-4 border-t border-[color:var(--hairline)] flex justify-between text-xs mono text-[color:var(--ink-soft)]">
                  <span>SLBFE認可番号 3687</span>
                  <span>OTIT番号 LKA000138</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ACHIEVEMENTS & AWARDS ---------- */
export function Achievements() {
  const items = [
    {
      title: "5つ星評価",
      desc: "採用実績と運用品質が評価され、スリランカ政府機関SLBFEより5つ星評価を受けています。",
      metric: "5★ 認定機関",
      img: trophySlbfe,
    },
    {
      title: "優秀賞受賞",
      desc: "海外雇用分野での優れた実績により、2012年および2014年に国内表彰を受けました。",
      metric: "金賞受賞",
      img: trophyStar,
    },
    {
      title: "紹介実績",
      desc: "12か国にわたり2,500名以上の技能人材を送出し、高い定着実績を築いています。",
      metric: "2,500名以上",
      img: trophyGlobe,
    },
    {
      title: "法令順守の運用",
      desc: "2025年の苦情登録はゼロ。SLBFEおよびOTITの要件に沿った適正な送出を徹底しています。",
      metric: "苦情 0件",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-[color:var(--hairline)]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <span className="eyebrow">実績・表彰</span>
            <h2 className="mt-5 text-3xl md:text-4xl tracking-tight leading-[1.08]">
              積み重ねてきた
              <br className="sm:hidden" />
              <span className="serif italic">信頼と実績</span>
            </h2>
            <p className="mt-4 text-sm text-[color:var(--ink-soft)] leading-relaxed">
              法令順守と品質への継続的な取り組みにより、スリランカ海外雇用局SLBFEから高い評価と表彰を受けています。
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.title}
                className="p-6 border border-[color:var(--hairline)] rounded-2xl bg-[color:var(--paper-warm)]/30 flex gap-5 items-start"
              >
                {item.img ? (
                  <div className="w-16 h-24 flex-shrink-0 bg-white rounded-lg p-1.5 border border-[color:var(--hairline)] flex items-center justify-center shadow-sm">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-24 flex-shrink-0 bg-white rounded-lg border border-[color:var(--hairline)] flex items-center justify-center shadow-sm">
                    <item.icon
                      className="h-8 w-8 text-[color:var(--brand-red)]"
                      strokeWidth={1.5}
                    />
                  </div>
                )}
                <div>
                  <div className="serif text-2xl text-[color:var(--brand-red)] tracking-tight">
                    {item.metric}
                  </div>
                  <h3 className="text-base font-semibold mt-2">{item.title}</h3>
                  <p className="mt-1 text-sm text-[color:var(--ink-soft)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SRI LANKA OVERVIEW ---------- */
export function SrilankaOverview() {
  const info = [
    {
      label: "位置・地理",
      value: "インドの南側に位置する美しい島国で、「インド洋の真珠」とも呼ばれています。",
      detail: "位置: 南アジア / インド洋",
    },
    {
      label: "人口と面積",
      value: "人口は約2,200万人。国土面積は約65,610㎢で、日本の北海道の約0.8倍に相当します。",
      detail: "人口: 約2,200万人 / 面積: 65,610㎢",
    },
    {
      label: "言語",
      value: "公用語はシンハラ語とタミル語ですが、ビジネスや高等教育では英語も広く普及しています。",
      detail: "公用語: シンハラ語、タミル語、英語",
    },
    {
      label: "宗教構成",
      value:
        "仏教（約70%）をはじめ、ヒンドゥー教、イスラム教、キリスト教など多様な宗教が共存しています。",
      detail: "仏教徒が約70%を占める",
    },
    {
      label: "国民性・特徴",
      value:
        "親日的で非常に真面目。識字率は92%以上と高く、礼儀正しさと協調性を重んじる温和な国民性です。",
      detail: "高い識字率と親日的な文化",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">スリランカについて</span>
          <h2 className="mt-5 text-3xl md:text-5xl tracking-tight leading-[1.08]">
            インド洋に浮かぶ親日国
            <br className="sm:hidden" />
            <span className="serif italic">スリランカ</span>
          </h2>
          <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed md:text-lg max-w-2xl">
            豊かな歴史と高い教育水準を持ち、近年日本での就労を目指す優秀な人材が増加しているスリランカの基本情報をご紹介します。
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 bg-[color:var(--paper-warm)]/30 border border-[color:var(--hairline)] rounded-2xl p-8 flex flex-col justify-between overflow-hidden">
            <div>
              <MapPinned className="h-7 w-7 text-[color:var(--brand-red)]" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-medium">Sri Lanka</h3>
              <p className="mt-3 text-sm text-[color:var(--ink-soft)] leading-relaxed">
                インド洋に位置する島国で、日本企業に紹介できる意欲ある人材を育んでいます。
              </p>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden border border-[color:var(--hairline)] shadow-sm">
              <div className="h-10 bg-[#8d153a]" />
              <div className="h-10 bg-[#ffb81c]" />
              <div className="h-10 grid grid-cols-[1fr_1fr]">
                <div className="bg-[#00534e]" />
                <div className="bg-[#eb7400]" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {info.map((item, idx) => (
              <div
                key={item.label}
                className="bg-[color:var(--paper-warm)]/30 border border-[color:var(--hairline)] rounded-2xl p-8 flex flex-col justify-between transition hover:border-[color:var(--ink)]"
              >
                <div>
                  <div className="mono text-[10px] tracking-widest uppercase text-[color:var(--brand-red)]">
                    0{idx + 1} . {item.detail}
                  </div>
                  <h3 className="text-xl font-medium mt-4">{item.label}</h3>
                  <p className="mt-3 text-sm text-[color:var(--ink-soft)] leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
