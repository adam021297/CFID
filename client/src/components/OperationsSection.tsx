// 产业布局板块 - 首页
// Design: 「大地之韵」有机自然主义 - 添加详情页跳转链接
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { TreePine, Coffee, Droplets, Layers, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const icons: Record<string, React.ReactNode> = {
  plantation: <TreePine className="w-5 h-5" />,
  coffee: <Coffee className="w-5 h-5" />,
  forestchemicals: <Droplets className="w-5 h-5" />,
  panels: <Layers className="w-5 h-5" />,
};

export default function OperationsSection() {
  const { lang, t } = useLanguage();

  const { ref, inView } = useInView({ threshold: 0.08 });

  return (
    <section
      id="operations"
      className="py-24 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Top organic curve transition */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,40 Q1080,80 720,50 Q360,20 0,60 Z"
            fill="oklch(0.98 0.005 80)"
          />
        </svg>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/30 to-background" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="section-title-en text-sm text-copper tracking-[0.3em] block mb-2">
            {t.operations.sectionTitleEn}
          </span>
          <h2 className="section-title-cn text-3xl md:text-4xl text-foreground">
            {t.operations.sectionTitle}
          </h2>
          <div className="w-16 h-[2px] bg-copper mt-4 mx-auto" />
        </motion.div>

        {/* Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h3
            className="text-lg md:text-xl font-semibold text-forest mb-3"
            style={{ fontFamily: "var(--font-serif-cn)" }}
          >
            {t.operations.strategy.title}
          </h3>
          <p
            className="text-foreground/55 text-sm md:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.operations.strategy.description}
          </p>
        </motion.div>

        {/* Operations Grid */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-10">
          {t.operations.items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              className="group relative overflow-hidden rounded-sm bg-white border border-border/30 hover:shadow-2xl hover:shadow-forest/8 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 md:h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-forest shadow-sm">
                  {icons[item.id]}
                </div>

                {/* Title overlay on image */}
                <div className="absolute bottom-4 left-4">
                  <h4
                    className="text-lg font-semibold text-white drop-shadow-md"
                    style={{ fontFamily: "var(--font-serif-cn)" }}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <p
                  className="text-foreground/60 text-sm leading-[1.8] mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.description}
                </p>

                {/* Detail link */}
                <Link
                  href={`/operations/${item.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-copper transition-colors duration-300 group/link"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span>{lang === "zh" ? "了解详情" : "Learn More"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-forest via-copper to-forest scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Industrial Scale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <span className="section-title-en text-xs text-copper tracking-[0.28em] block mb-2">
              {t.operations.scale.sectionTitleEn}
            </span>
            <h3
              className="text-2xl md:text-3xl text-foreground"
              style={{ fontFamily: "var(--font-serif-cn)" }}
            >
              {t.operations.scale.sectionTitle}
            </h3>
            <div className="w-12 h-[2px] bg-copper mt-3 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {t.operations.scale.items.map((item, i) => (
              <div
                key={item.title}
                className="bg-white border border-border/40 rounded-sm p-6 md:p-7"
              >
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
                  className="text-xl text-foreground mb-5"
                  style={{ fontFamily: "var(--font-serif-cn)" }}
                >
                  {item.title}
                </h4>
                <div className="space-y-3 mb-4">
                  {item.metrics.map(metric => (
                    <p
                      key={metric}
                      className="text-sm text-foreground/70 leading-[1.7]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {metric}
                    </p>
                  ))}
                </div>
                {item.description && (
                  <p
                    className="text-xs text-muted-foreground leading-[1.8] pt-4 border-t border-border/40"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
