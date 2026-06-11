import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ChevronDown, ArrowDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/hero-forest-AUMH4t3nnmtFxGESNPkDiW.webp";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="East African tropical forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[2px] bg-copper-light mb-8"
          />

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.hero.companyName}
          </h1>

          <p
            className="text-sm md:text-base tracking-[0.25em] text-white/60 uppercase mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.hero.companyNameEn}
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-white/80 font-light max-w-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.hero.tagline}
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="inline-flex items-center gap-2 mt-12 px-8 py-3 border border-white/30 text-white/90 text-sm tracking-wider uppercase hover:bg-white/10 transition-all duration-300 rounded-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.nav.home === "首页" ? "了解中林" : "Discover CFID"}
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.div>

      {/* Bottom organic curve */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,120 L0,80 Q360,0 720,60 Q1080,120 1440,40 L1440,120 Z" fill="oklch(0.98 0.005 80)" />
        </svg>
      </div>
    </section>
  );
}
