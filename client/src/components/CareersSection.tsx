import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Briefcase, GraduationCap, Send } from "lucide-react";
import { type FormEvent, useState } from "react";

export default function CareersSection() {
  const { t, lang } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [consentChecked, setConsentChecked] = useState(false);

  const careerIcons = [
    <Briefcase className="w-7 h-7" />,
    <GraduationCap className="w-7 h-7" />,
  ];

  const formText = {
    title: lang === "zh" ? "在线投递意向" : "Online Application",
    hint:
      lang === "zh"
        ? "填写后将自动生成邮件，请在邮件客户端中确认并发送。如需附简历，请在邮件中添加附件。"
        : "After submitting, your email app will open with the details filled in. Please attach your resume before sending.",
    name: lang === "zh" ? "姓名" : "Name",
    phone: lang === "zh" ? "手机 / WhatsApp" : "Phone / WhatsApp",
    email: lang === "zh" ? "邮箱" : "Email",
    category: lang === "zh" ? "招聘类型" : "Recruitment Type",
    position: lang === "zh" ? "意向岗位" : "Target Position",
    experience: lang === "zh" ? "工作经验" : "Experience",
    availability: lang === "zh" ? "可到岗时间" : "Availability",
    message: lang === "zh" ? "补充说明" : "Message",
    consent:
      lang === "zh"
        ? "我同意中林国际仅将以上信息用于招聘联系与候选人评估。"
        : "I agree that CFID may use this information only for recruitment contact and candidate evaluation.",
    submit: lang === "zh" ? "生成投递邮件" : "Create Application Email",
    required:
      lang === "zh"
        ? "请先勾选隐私同意。"
        : "Please agree to the privacy notice first.",
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!consentChecked) {
      alert(formText.required);
      return;
    }

    const formData = new FormData(event.currentTarget);
    const getValue = (name: string) => String(formData.get(name) || "").trim();
    const subject =
      lang === "zh"
        ? `招聘申请 - ${getValue("name")} - ${getValue("position") || "未填写岗位"}`
        : `Job Application - ${getValue("name")} - ${getValue("position") || "Position not specified"}`;

    const labels = {
      name: formText.name,
      phone: formText.phone,
      email: formText.email,
      category: formText.category,
      position: formText.position,
      experience: formText.experience,
      availability: formText.availability,
      message: formText.message,
    };

    const bodyLines = [
      lang === "zh"
        ? "您好，我希望投递中林国际招聘岗位。"
        : "Hello, I would like to apply for a role at CFID.",
      "",
      `${labels.name}: ${getValue("name")}`,
      `${labels.phone}: ${getValue("phone")}`,
      `${labels.email}: ${getValue("email")}`,
      `${labels.category}: ${getValue("category")}`,
      `${labels.position}: ${getValue("position")}`,
      `${labels.experience}: ${getValue("experience")}`,
      `${labels.availability}: ${getValue("availability")}`,
      `${labels.message}: ${getValue("message")}`,
      "",
      lang === "zh"
        ? "我会在本邮件中添加简历附件，请查收。"
        : "I will attach my resume to this email for your review.",
    ];

    const mailto = `mailto:${t.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };

  return (
    <section
      id="careers"
      className="py-24 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-forest-dark" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

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

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 max-w-4xl mx-auto bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] p-6 md:p-8 rounded-sm"
        >
          <div className="mb-6">
            <h3
              className="text-xl text-white mb-2"
              style={{ fontFamily: "var(--font-serif-cn)" }}
            >
              {formText.title}
            </h3>
            <p
              className="text-white/50 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {formText.hint}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <label className="space-y-2 text-sm text-white/70">
              <span>{formText.name}</span>
              <input
                name="name"
                required
                className="w-full h-11 bg-white/[0.06] border border-white/10 px-3 text-white placeholder:text-white/25 outline-none focus:border-copper-light/70 transition-colors"
                placeholder={lang === "zh" ? "请输入姓名" : "Enter your name"}
              />
            </label>

            <label className="space-y-2 text-sm text-white/70">
              <span>{formText.phone}</span>
              <input
                name="phone"
                required
                className="w-full h-11 bg-white/[0.06] border border-white/10 px-3 text-white placeholder:text-white/25 outline-none focus:border-copper-light/70 transition-colors"
                placeholder={
                  lang === "zh" ? "请输入联系方式" : "Enter contact number"
                }
              />
            </label>

            <label className="space-y-2 text-sm text-white/70">
              <span>{formText.email}</span>
              <input
                name="email"
                type="email"
                required
                className="w-full h-11 bg-white/[0.06] border border-white/10 px-3 text-white placeholder:text-white/25 outline-none focus:border-copper-light/70 transition-colors"
                placeholder="name@example.com"
              />
            </label>

            <label className="space-y-2 text-sm text-white/70">
              <span>{formText.category}</span>
              <select
                name="category"
                required
                className="w-full h-11 bg-white/[0.06] border border-white/10 px-3 text-white outline-none focus:border-copper-light/70 transition-colors"
              >
                <option
                  value={
                    lang === "zh" ? "社会招聘" : "Professional Recruitment"
                  }
                  className="text-foreground"
                >
                  {lang === "zh" ? "社会招聘" : "Professional Recruitment"}
                </option>
                <option
                  value={lang === "zh" ? "校园招聘" : "Campus Recruitment"}
                  className="text-foreground"
                >
                  {lang === "zh" ? "校园招聘" : "Campus Recruitment"}
                </option>
              </select>
            </label>

            <label className="space-y-2 text-sm text-white/70">
              <span>{formText.position}</span>
              <input
                name="position"
                required
                className="w-full h-11 bg-white/[0.06] border border-white/10 px-3 text-white placeholder:text-white/25 outline-none focus:border-copper-light/70 transition-colors"
                placeholder={
                  lang === "zh"
                    ? "例如：外贸、生产管理、财务"
                    : "E.g. trade, operations, finance"
                }
              />
            </label>

            <label className="space-y-2 text-sm text-white/70">
              <span>{formText.availability}</span>
              <input
                name="availability"
                className="w-full h-11 bg-white/[0.06] border border-white/10 px-3 text-white placeholder:text-white/25 outline-none focus:border-copper-light/70 transition-colors"
                placeholder={
                  lang === "zh"
                    ? "例如：两周内 / 一个月内"
                    : "E.g. within 2 weeks / 1 month"
                }
              />
            </label>

            <label className="space-y-2 text-sm text-white/70 md:col-span-2">
              <span>{formText.experience}</span>
              <input
                name="experience"
                className="w-full h-11 bg-white/[0.06] border border-white/10 px-3 text-white placeholder:text-white/25 outline-none focus:border-copper-light/70 transition-colors"
                placeholder={
                  lang === "zh"
                    ? "请简述相关经验或专业背景"
                    : "Briefly describe relevant experience or background"
                }
              />
            </label>

            <label className="space-y-2 text-sm text-white/70 md:col-span-2">
              <span>{formText.message}</span>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-white/[0.06] border border-white/10 p-3 text-white placeholder:text-white/25 outline-none focus:border-copper-light/70 transition-colors resize-none"
                placeholder={
                  lang === "zh"
                    ? "可填写期望薪资、工作地点偏好或其他说明"
                    : "Share salary expectation, location preference, or other notes"
                }
              />
            </label>

            <label className="md:col-span-2 flex gap-3 items-start text-xs md:text-sm text-white/50 leading-relaxed">
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={event => setConsentChecked(event.target.checked)}
                className="mt-1 h-4 w-4 accent-copper-light shrink-0"
              />
              <span>{formText.consent}</span>
            </label>

            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between pt-2">
              <a
                href={`mailto:${t.contact.email}`}
                className="text-copper-light hover:text-white transition-colors text-sm"
              >
                {t.contact.email}
              </a>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-copper-light text-forest-dark px-6 h-11 text-sm font-medium hover:bg-white transition-colors"
              >
                <Send className="w-4 h-4" />
                {formText.submit}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
