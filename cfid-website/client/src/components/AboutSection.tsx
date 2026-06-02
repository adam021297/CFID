import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const { t, lang } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-copper/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-title-en text-sm text-copper tracking-[0.3em] block mb-2">
            {t.about.sectionTitleEn}
          </span>
          <h2 className="section-title-cn text-3xl md:text-4xl text-foreground">
            {t.about.sectionTitle}
          </h2>
          <div className="w-16 h-[2px] bg-copper mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Text Content - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            {t.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-foreground/75 leading-[1.9] text-[15px] md:text-base"
                style={{
                  fontFamily: "var(--font-body)",
                  textIndent: lang === "zh" ? "2em" : "0",
                }}
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Stats - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-5">
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="bg-white border border-border/40 p-6 rounded-sm hover:shadow-md hover:shadow-forest/5 transition-all duration-300"
                >
                  <span
                    className="text-3xl md:text-4xl font-bold text-forest block mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs text-muted-foreground tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Decorative quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 p-6 border-l-2 border-copper/60 bg-gradient-to-r from-cream/50 to-transparent rounded-r-sm"
            >
              <p
                className="text-sm text-foreground/50 italic leading-relaxed"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.operations.strategy.title}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
