import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = ["#hero", "#about", "#operations", "#careers", "#contact"];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    sections.forEach(id => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.operations, href: "#operations" },
    { label: t.nav.careers, href: "#careers" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/images/cfid-logo.png"
              alt="CFID"
              className="h-10 w-auto object-contain"
            />
            <div
              className={`flex flex-col transition-colors duration-500 ${scrolled ? "text-forest" : "text-white"}`}
            >
              <span
                className="text-xl font-bold tracking-wider"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {lang === "zh" ? "中林国际" : "CFID"}
              </span>
              <div className="flex items-center gap-2">
                <div
                  className={`w-5 h-[1px] transition-colors duration-500 ${scrolled ? "bg-copper" : "bg-copper-light"}`}
                />
                <span
                  className="text-[9px] tracking-[0.2em] opacity-60 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {lang === "zh" ? "CFID" : "Est. 2017"}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? activeSection === item.href
                      ? "text-forest"
                      : "text-foreground/60 hover:text-forest"
                    : activeSection === item.href
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
                {/* Active indicator */}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                      scrolled ? "bg-copper" : "bg-copper-light"
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* Language Toggle */}
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
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="flex flex-col items-center gap-6 pt-12">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === item.href
                      ? "text-forest"
                      : "text-foreground/60 hover:text-forest"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setLang(lang === "zh" ? "en" : "zh");
                  setMobileOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-forest/20 text-forest hover:bg-forest hover:text-white transition-all"
              >
                <Globe className="w-4 h-4" />
                {lang === "zh" ? "English" : "简体中文"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
