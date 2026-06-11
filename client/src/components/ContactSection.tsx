import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Building2, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const amapUrl =
    "https://uri.amap.com/search?keyword=%E5%B9%BF%E4%B8%9C%E7%9C%81%E4%B8%9C%E8%8E%9E%E5%B8%82%E6%9D%BE%E5%B1%B1%E6%B9%96%E5%A4%A9%E5%AE%89%E4%BA%91%E8%B0%B710%E6%A0%8B1101";
  const mapImageUrl =
    "https://staticmap.openstreetmap.de/staticmap.php?center=22.9218,113.8895&zoom=15&size=900x430&maptype=mapnik&markers=22.9218,113.8895,red-pushpin";

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
    <section
      id="contact"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      ref={ref}
    >
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
              <p
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {lang === "zh"
                  ? "工作时间：周一至周五 9:00 - 18:00（GMT+8）"
                  : "Business Hours: Mon - Fri 9:00 AM - 6:00 PM (GMT+8)"}
              </p>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <a
              href={amapUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={
                lang === "zh"
                  ? "在高德地图查看广东省东莞市松山湖天安云谷10栋1101"
                  : "Open the Dongguan office location in Amap"
              }
              className="block bg-cream rounded-sm overflow-hidden border border-border/30 h-80 lg:h-full min-h-[360px] relative group"
            >
              <img
                src={mapImageUrl}
                alt={
                  lang === "zh"
                    ? "广东省东莞市松山湖天安云谷10栋1101地图"
                    : "Map of Building 10, Room 1101, Tianan Yungu, Songshan Lake, Dongguan"
                }
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />

              <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-forest/15 animate-ping" />
                  <div className="relative w-14 h-14 rounded-full bg-forest flex items-center justify-center shadow-lg shadow-forest/20">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute left-6 right-6 bottom-6 bg-white/92 backdrop-blur-sm border border-border/40 p-5 rounded-sm shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className="text-foreground font-medium text-sm md:text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {lang === "zh"
                        ? "广东省东莞市松山湖天安云谷10栋1101"
                        : "Building 10, Room 1101, Tianan Yungu, Songshan Lake, Dongguan, Guangdong"}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-forest shrink-0 mt-1 group-hover:text-copper transition-colors" />
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-forest/15" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-forest/15" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-forest/15" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-forest/15" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
