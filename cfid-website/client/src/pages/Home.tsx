/*
 * CFID 中林国际 官网首页
 * Design: 「大地之韵」有机自然主义
 * Color: 深森林绿主色 + 暖铜色辅色 + 米白背景
 * Typography: Playfair Display + Source Sans 3 / Noto Serif SC + Noto Sans SC
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OperationsSection from "@/components/OperationsSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OperationsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
