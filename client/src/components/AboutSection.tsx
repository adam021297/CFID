import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export default function AboutSection() {
  const { t, lang } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      ref={ref}
    >
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

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24"
        >
          <div className="mb-8">
            <span className="section-title-en text-xs text-copper tracking-[0.28em] block mb-2">
              {t.about.team.titleEn}
            </span>
            <h3
              className="text-2xl md:text-3xl text-foreground"
              style={{ fontFamily: "var(--font-serif-cn)" }}
            >
              {t.about.team.title}
            </h3>
            <div className="w-12 h-[2px] bg-copper mt-3" />
          </div>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-2 flex items-center">
              <p
                className="text-foreground/70 leading-[1.9] text-base md:text-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.about.team.description}
              </p>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-5">
              {t.about.team.images.map(image => (
                <div
                  key={image.src}
                  className="relative h-64 md:h-72 overflow-hidden rounded-sm border border-border/30 bg-cream"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <div className="mb-8">
            <span className="section-title-en text-xs text-copper tracking-[0.28em] block mb-2">
              {t.about.culture.titleEn}
            </span>
            <h3
              className="text-2xl md:text-3xl text-foreground"
              style={{ fontFamily: "var(--font-serif-cn)" }}
            >
              {t.about.culture.title}
            </h3>
            <div className="w-12 h-[2px] bg-copper mt-3" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.about.culture.items.map((item, i) => (
              <div
                key={item.title}
                className="group bg-white border border-border/40 rounded-sm overflow-hidden hover:shadow-xl hover:shadow-forest/8 transition-all duration-500"
              >
                <div className="h-52 overflow-hidden bg-cream">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div
                    className={`w-10 h-[3px] mb-5 ${
                      i === 0
                        ? "bg-forest"
                        : i === 1
                          ? "bg-copper"
                          : "bg-forest-light"
                    }`}
                  />
                  <h4
                    className="text-xl text-foreground mb-3"
                    style={{ fontFamily: "var(--font-serif-cn)" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm text-foreground/60 leading-[1.8]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
