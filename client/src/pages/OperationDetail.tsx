// 产业详情子页面
// Design: 「大地之韵」有机自然主义 - 保持与首页一致的设计语言
import { useLanguage } from "@/contexts/LanguageContext";
import { zhOperationDetails, enOperationDetails } from "@/data/operationsDetail";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import {
  ArrowLeft,
  Leaf,
  Globe,
  Recycle,
  Coffee,
  Factory,
  Truck,
  Droplets,
  FlaskConical,
  Shield,
  Layers,
  Cog,
  Award,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  recycle: <Recycle className="w-6 h-6" />,
  coffee: <Coffee className="w-6 h-6" />,
  factory: <Factory className="w-6 h-6" />,
  truck: <Truck className="w-6 h-6" />,
  droplets: <Droplets className="w-6 h-6" />,
  flask: <FlaskConical className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  layers: <Layers className="w-6 h-6" />,
  cog: <Cog className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
};

function DetailNavbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo + Back */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled ? "text-forest hover:text-copper" : "text-white/80 hover:text-white"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span style={{ fontFamily: "var(--font-body)" }}>
                {lang === "zh" ? "返回首页" : "Back to Home"}
              </span>
            </Link>
            <div className={`w-[1px] h-5 ${scrolled ? "bg-border" : "bg-white/30"}`} />
            <a
              href="/"
              className={`flex flex-col transition-colors duration-500 ${scrolled ? "text-forest" : "text-white"}`}
            >
              <span className="text-lg font-bold tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
                {lang === "zh" ? "中林国际" : "CFID"}
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {[
              { label: t.nav.home, href: "/" },
              { label: t.nav.about, href: "/#about" },
              { label: t.nav.operations, href: "/#operations" },
              { label: t.nav.careers, href: "/#careers" },
              { label: t.nav.contact, href: "/#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-foreground/60 hover:text-forest"
                    : "text-white/70 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-300 ${
                scrolled
                  ? "border-forest/20 text-forest hover:bg-forest hover:text-white"
                  : "border-white/30 text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-white pt-20"
        >
          <div className="flex flex-col items-center gap-6 pt-12">
            {[
              { label: t.nav.home, href: "/" },
              { label: t.nav.about, href: "/#about" },
              { label: t.nav.operations, href: "/#operations" },
              { label: t.nav.careers, href: "/#careers" },
              { label: t.nav.contact, href: "/#contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-foreground/60 hover:text-forest transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setLang(lang === "zh" ? "en" : "zh"); setMobileOpen(false); }}
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-forest/20 text-forest hover:bg-forest hover:text-white transition-all"
            >
              <Globe className="w-4 h-4" />
              {lang === "zh" ? "English" : "简体中文"}
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default function OperationDetail() {
  const { lang } = useLanguage();
  const params = useParams<{ id: string }>();
  const id = params.id;

  const details = lang === "zh" ? zhOperationDetails : enOperationDetails;
  const data = id ? details[id] : null;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {lang === "zh" ? "页面未找到" : "Page Not Found"}
          </h1>
          <Link href="/" className="text-forest hover:text-copper transition-colors">
            {lang === "zh" ? "返回首页" : "Back to Home"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DetailNavbar />

      {/* Hero Section */}
      <HeroBlock data={data} lang={lang} />

      {/* Introduction Section */}
      <IntroductionBlock data={data} lang={lang} />

      {/* Highlights Section */}
      <HighlightsBlock data={data} lang={lang} />

      {/* Process Section */}
      <ProcessBlock data={data} lang={lang} />

      {/* Features Section */}
      <FeaturesBlock data={data} lang={lang} />

      {/* Bottom CTA */}
      <BottomCTA lang={lang} />

      {/* Footer */}
      <DetailFooter lang={lang} />
    </div>
  );
}

// ===== Hero Block =====
function HeroBlock({ data, lang }: { data: any; lang: string }) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={data.heroImage}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      <div className="container relative z-10 pb-16 md:pb-20">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-white/60 text-sm mb-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <Link href="/" className="hover:text-white transition-colors">
            {lang === "zh" ? "首页" : "Home"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#operations" className="hover:text-white transition-colors">
            {lang === "zh" ? "产业布局" : "Operations"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/90">{data.title}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {data.title}
          </h1>
          <p
            className="text-lg md:text-xl text-white/70 max-w-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {data.subtitle}
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-8 md:gap-12 mt-10"
        >
          {data.stats.map((stat: any, i: number) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl md:text-3xl font-bold text-copper-light"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/60 mt-1" style={{ fontFamily: "var(--font-body)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ===== Introduction Block =====
function IntroductionBlock({ data, lang }: { data: any; lang: string }) {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-20 md:py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-copper" />
            <span
              className="text-sm text-copper tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {lang === "zh" ? "产业概述" : "Overview"}
            </span>
          </div>

          <div className="space-y-6">
            {data.introduction.map((para: string, i: number) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 * i }}
                className="text-foreground/70 text-base md:text-lg leading-[2] md:leading-[2]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ===== Highlights Block =====
function HighlightsBlock({ data, lang }: { data: any; lang: string }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-background" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm text-copper tracking-[0.3em] block mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {lang === "zh" ? "HIGHLIGHTS" : "HIGHLIGHTS"}
          </span>
          <h2
            className="text-2xl md:text-3xl text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {lang === "zh" ? "核心优势" : "Core Advantages"}
          </h2>
          <div className="w-16 h-[2px] bg-copper mt-4 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {data.highlights.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-forest/8 rounded-full flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-all duration-500">
                {iconMap[item.icon] || <Leaf className="w-6 h-6" />}
              </div>
              <h3
                className="text-lg font-semibold text-foreground mb-3"
                style={{ fontFamily: "var(--font-serif-cn)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-foreground/55 text-sm leading-relaxed max-w-xs mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Process Block =====
function ProcessBlock({ data, lang }: { data: any; lang: string }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-forest-dark" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm text-copper-light tracking-[0.3em] block mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {lang === "zh" ? "PROCESS" : "PROCESS"}
          </span>
          <h2
            className="text-2xl md:text-3xl text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {lang === "zh" ? "产业流程" : "Industrial Process"}
          </h2>
          <div className="w-16 h-[2px] bg-copper-light mt-4 mx-auto" />
        </motion.div>

        {/* Process Steps - Timeline */}
        <div className="max-w-4xl mx-auto">
          {data.processSteps.map((step: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="flex gap-6 md:gap-8 mb-8 last:mb-0"
            >
              {/* Step number */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-copper/20 border border-copper/40 flex items-center justify-center">
                  <span
                    className="text-sm font-bold text-copper-light"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.step}
                  </span>
                </div>
                {i < data.processSteps.length - 1 && (
                  <div className="w-[1px] h-full min-h-[40px] bg-gradient-to-b from-copper/40 to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h4
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-serif-cn)" }}
                >
                  {step.title}
                </h4>
                <p
                  className="text-white/55 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Features Block =====
function FeaturesBlock({ data, lang }: { data: any; lang: string }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm text-copper tracking-[0.3em] block mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {lang === "zh" ? "FEATURES" : "FEATURES"}
          </span>
          <h2
            className="text-2xl md:text-3xl text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {lang === "zh" ? "产业特色" : "Industry Features"}
          </h2>
          <div className="w-16 h-[2px] bg-copper mt-4 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.features.map((feature: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i }}
              className="group relative bg-white border border-border/30 p-8 hover:shadow-xl hover:shadow-forest/5 transition-all duration-500"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-forest via-copper to-forest scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 flex-shrink-0 bg-forest/8 rounded-full flex items-center justify-center text-forest text-sm font-bold mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-base font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-serif-cn)" }}
                >
                  {feature.title}
                </h3>
              </div>
              <p
                className="text-foreground/55 text-sm leading-relaxed pl-12"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Bottom CTA =====
function BottomCTA({ lang }: { lang: string }) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cream to-cream-dark" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3
              className="text-xl md:text-2xl font-semibold text-foreground mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {lang === "zh" ? "探索更多产业板块" : "Explore More Sectors"}
            </h3>
            <p className="text-foreground/55 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              {lang === "zh"
                ? "了解中林国际的全产业链布局与跨国协同发展战略"
                : "Discover CFID's full value chain and cross-border growth strategy"}
            </p>
          </div>
          <Link
            href="/#operations"
            className="inline-flex items-center gap-2 px-8 py-3 bg-forest text-white text-sm font-medium tracking-wide hover:bg-forest-light transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {lang === "zh" ? "查看全部产业" : "View All Operations"}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ===== Detail Footer =====
function DetailFooter({ lang }: { lang: string }) {
  return (
    <footer className="bg-forest-dark py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            {lang === "zh"
              ? "版权所有 © 中林国际（境内主体：广东军辉达进出口贸易有限公司）"
              : "© China Forestry International Development Limited"}
          </div>
          <div className="text-white/30 text-xs" style={{ fontFamily: "var(--font-body)" }}>
            粤ICP备2022014426号
          </div>
        </div>
      </div>
    </footer>
  );
}
