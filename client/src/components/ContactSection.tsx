import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const contactItems = [
    {
      icon: <Building2 className="w-5 h-5" />,
      label: lang === "zh" ? "公司" : "Company",
      value: t.contact.company,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: lang === "zh" ? "电话" : "Phone",
      value: t.contact.phone,
      href: `tel:${t.contact.phone}`,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: lang === "zh" ? "邮箱" : "Email",
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: lang === "zh" ? "地址" : "Address",
      value: t.contact.address,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-border to-transparent" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-title-en text-sm text-copper tracking-[0.3em] block mb-2">
            {t.contact.sectionTitleEn}
          </span>
          <h2 className="section-title-cn text-3xl md:text-4xl text-foreground">
            {t.contact.sectionTitle}
          </h2>
          <div className="w-16 h-[2px] bg-copper mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="flex gap-4 items-start group"
              >
                <div className="w-10 h-10 rounded-full bg-forest/8 flex items-center justify-center text-forest shrink-0 group-hover:bg-forest group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <span
                    className="text-[11px] text-muted-foreground uppercase tracking-[0.15em] block mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground/80 hover:text-forest transition-colors text-sm md:text-[15px] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="text-foreground/80 text-sm md:text-[15px] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Working hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-4 border-t border-border/50"
            >
              <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
                {lang === "zh"
                  ? "工作时间：周一至周五 9:00 - 18:00（GMT+8）"
                  : "Business Hours: Mon - Fri 9:00 AM - 6:00 PM (GMT+8)"}
              </p>
            </motion.div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cream to-cream-dark rounded-sm overflow-hidden border border-border/30 h-80 lg:h-full min-h-[360px] relative">
              {/* Stylized map representation */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                {/* Concentric circles */}
                <div className="relative w-32 h-32 mb-6">
                  <div className="absolute inset-0 rounded-full border border-forest/10 animate-pulse" />
                  <div className="absolute inset-3 rounded-full border border-forest/15" />
                  <div className="absolute inset-6 rounded-full border border-forest/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-forest/15 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-forest" />
                    </div>
                  </div>
                </div>

                <p
                  className="text-foreground/50 text-sm text-center leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {lang === "zh"
                    ? "广东省东莞市松山湖天安云谷"
                    : "Tianan Yungu, Songshan Lake, Dongguan"}
                </p>
                <p
                  className="text-foreground/35 text-xs mt-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {lang === "zh" ? "10栋1101" : "Building 10, Room 1101"}
                </p>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-forest/15" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-forest/15" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-forest/15" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-forest/15" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
