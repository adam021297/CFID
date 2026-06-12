import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { t, lang } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.operations, href: "#operations" },
    { label: t.nav.careers, href: "#careers" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-dark text-white/70 relative">
      {/* Back to top button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("#hero")}
          className="w-12 h-12 rounded-full bg-forest border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-forest-light transition-all duration-300 shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="pt-20 pb-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3
                className="text-xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {lang === "zh" ? "中林国际" : "CFID"}
              </h3>
              <p
                className="text-[10px] tracking-[0.2em] text-white/30 uppercase mb-5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                China Forestry International Development
              </p>
              <p
                className="text-sm text-white/40 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {lang === "zh"
                  ? "扎根非洲沃土，共筑绿色未来"
                  : "Rooted in Africa, Building a Greener Future"}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {lang === "zh" ? "快速导航" : "Quick Links"}
              </h4>
              <nav className="flex flex-col gap-2.5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-sm text-white/40 hover:text-copper-light transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {lang === "zh" ? "联系方式" : "Contact"}
              </h4>
              <div
                className="space-y-2.5 text-sm text-white/40"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p>
                  <span className="text-white/25 text-xs uppercase tracking-wider">
                    {lang === "zh" ? "电话" : "Tel"}
                  </span>
                  <br />
                  {t.contact.phone}
                </p>
                <p>
                  <span className="text-white/25 text-xs uppercase tracking-wider">
                    {lang === "zh" ? "邮箱" : "Email"}
                  </span>
                  <br />
                  <a href={`mailto:${t.contact.email}`} className="hover:text-copper-light transition-colors">
                    {t.contact.email}
                  </a>
                </p>
                <p>
                  <span className="text-white/25 text-xs uppercase tracking-wider">
                    {lang === "zh" ? "地址" : "Address"}
                  </span>
                  <br />
                  {t.contact.address}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06] pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-white/25">
              <p>{t.footer.copyright}</p>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/40 transition-colors"
              >
                {t.footer.icp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
