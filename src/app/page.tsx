"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/Animations";
import { TaijiImage, BaguaSymbol, Divider, WuXingSymbol } from "./components/TaoistSymbols";
import { useI18n } from "./i18n";

const ParticleBackground = dynamic(() => import("./components/ParticleBackground"), {
  ssr: false,
  loading: () => null,
});

const AIChat = dynamic(() => import("./components/AIChat"), {
  ssr: false,
});

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="home-page min-h-screen">
      <Navigation />
      <ParticleBackground />
      <AIChat />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start pt-12 justify-center overflow-hidden bg-wu-tu bg-pattern-dark">
        <div className="absolute inset-0 opacity-10">
          <BaguaSymbol size={600} className="absolute -top-20 -right-20 text-on-wu-tu" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse-glow" style={{ background: 'rgba(200, 159, 104, 0.3)' }} />

        <div className="relative z-10 text-center px-12 max-w-5xl mx-auto pt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 mt-4"
          >
            <div className="relative inline-block">
              <TaijiImage size={200} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 font-serif text-on-wu-tu drop-shadow-lg"
          >
            <span>有</span><span className="text-[var(--chi)]">符</span><span>之</span><span>人</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl sm:text-3xl mb-4 font-serif text-on-wu-tu"
          >
            {t.home.heroSubtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12 max-w-2xl mx-auto text-lg text-on-wu-tu"
          >
            {t.home.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a href="#services" className="btn-huang text-lg px-10 py-4 text-force-readable">
              {t.home.exploreServices}
            </a>
            <Link href="/booking" className="btn-primary text-lg px-10 py-4 text-force-readable">
              {t.home.bookNow}
            </Link>
            <Link href="/fortune" className="btn-chi text-lg px-10 py-4 text-force-readable">
              {t.home.fortuneTest}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 三大核心服务 */}
      <section id="services" className="py-24 bg-pattern-dark" style={{ background: 'linear-gradient(180deg, var(--dao-qing-dark), var(--dao-qing))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-serif text-gradient-huang">
                {t.home.services}
              </h2>
              <p className="text-white/70 text-lg">{t.home.servicesDesc}</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center mb-8">
              <p className="text-white/80 text-lg mb-4">{t.home.clickExplore}</p>
              <Divider />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 祝由符箓 */}
            <FadeIn delay={0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="card-glass text-center glow-zi"
              >
                <div className="text-6xl mb-6">📜</div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.home.fuzhou}</h3>
                <p className="text-[var(--dao-qing-light)] mb-4">{t.home.fuzhouDesc}</p>
                <p className="text-white/60 text-sm">{t.home.fuzhouDetail}</p>
                <Link href="/fuzhou" className="mt-6 inline-block" style={{ color: 'var(--dao-huang-light)' }}>
                  {t.home.learnMore}
                </Link>
              </motion.div>
            </FadeIn>

            {/* 道家法事 */}
            <FadeIn delay={0.2}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="card-glass text-center glow-chi"
              >
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.home.fashi}</h3>
                <p className="text-[var(--dao-chi-light)] mb-4">{t.home.fashiDesc}</p>
                <p className="text-white/60 text-sm">{t.home.fashiDetail}</p>
                <Link href="/fashi" className="mt-6 inline-block" style={{ color: 'var(--dao-huang-light)' }}>
                  {t.home.learnMore}
                </Link>
              </motion.div>
            </FadeIn>

            {/* 种生基 */}
            <FadeIn delay={0.3}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="card-glass text-center glow-huang"
              >
                <div className="text-6xl mb-6">🏔️</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--dao-huang-light)' }}>{t.home.zhongshengji}</h3>
                <p className="mb-4" style={{ color: 'var(--dao-huang)' }}>{t.home.zhongshengjiDesc}</p>
                <p className="text-white/60 text-sm">{t.home.zhongshengjiDetail}</p>
                <Link href="/zhongshengji" className="mt-6 inline-block" style={{ color: 'var(--dao-chi-light)' }}>
                  {t.home.learnMore}
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 符道文化 */}
      <section id="culture" className="py-24 bg-pattern" style={{ backgroundColor: 'var(--dao-xuan)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-serif text-gradient-zi">
                {t.home.cultureTitle}
              </h2>
              <div className="divider-dao max-w-xs mx-auto" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t.home.cultureIntro}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t.home.cultureIntro2}
                </p>
                <Link href="/culture" className="inline-flex items-center gap-2 font-bold transition-all" style={{ color: 'var(--dao-zi)' }}>
                  {t.home.exploreCulture} <span>→</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, rgba(200,159,104,0.2), rgba(106,13,173,0.2))' }} />
                <WuXingSymbol className="w-full max-w-md mx-auto relative z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 真实案例 */}
      <section id="cases" className="py-24 bg-pattern-dark" style={{ background: 'linear-gradient(180deg, var(--dao-zi-dark), var(--dao-zi))' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-serif">{t.home.casesTitle}</h2>
              <p className="text-[var(--dao-zi-light)] text-lg">{t.home.casesDesc}</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center mt-12">
              <Link href="/cases" className="btn-huang inline-block">
                {t.home.viewAll}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-24 bg-dao-qing bg-cloud bg-pattern-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="relative inline-block mb-8 glow-huang">
              <TaijiImage size={120} className="text-[var(--dao-huang-light)]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient-huang mb-6 font-serif">{t.home.contactTitle}</h2>
            <p className="text-white/80 mb-8 text-lg">{t.home.contactDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-huang text-lg px-10 py-4">
                {t.home.consulting}
              </Link>
              <Link href="/zhongshengji" className="btn-primary text-lg px-10 py-4">
                {t.home.bookAppointment}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
