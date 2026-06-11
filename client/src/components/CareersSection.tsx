import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Briefcase, GraduationCap } from "lucide-react";

export default function CareersSection() {
  const { t, lang } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const careerIcons = [
    <Briefcase className="w-7 h-7" />,
    <GraduationCap className="w-7 h-7" />,
  ];

  return (
    <section id="careers" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-forest-dark" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      {/* Decorative glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-copper/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-light/10 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="section-title-en text-sm text-copper-light tracking-[0.3em] block mb-2">
            {t.careers.sectionTitleEn}
          </span>
          <h2 className="section-title-cn text-3xl md:text-4xl text-white">
            {t.careers.sectionTitle}
          </h2>
          <div className="w-16 h-[2px] bg-copper-light mt-4 mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white/60 max-w-2xl mx-auto mb-16 text-sm md:text-base leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.careers.description}
        </motion.p>

        {/* Career Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.careers.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-8 md:p-10 rounded-sm hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-copper/15 flex items-center justify-center text-copper-light mb-6 group-hover:bg-copper/25 transition-colors duration-300">
                {careerIcons[i]}
              </div>

              <h3
                className="text-xl font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-serif-cn)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/50 text-sm leading-[1.8]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute -inset-px rounded-sm bg-gradient-to-br from-copper/10 via-transparent to-forest-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 text-sm mb-3" style={{ fontFamily: "var(--font-body)" }}>
            {lang === "zh" ? "投递简历" : "Send your resume"}
          </p>
          <a
            href="mailto:service@cfid-ug.com"
            className="inline-flex items-center gap-2 text-copper-light hover:text-white transition-colors text-sm tracking-wider"
            style={{ fontFamily: "var(--font-body)" }}
          >
            service@cfid-ug.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
