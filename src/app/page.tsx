"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/Animations";
import { TaijiImage, Divider, WuXingSymbol } from "./components/TaoistSymbols";
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

      {/* Hero Section - 土 */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-pattern" style={{ background: 'linear-gradient(180deg, var(--tu-dark), var(--tu), var(--tu-light))' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse-glow" style={{ background: 'rgba(200, 159, 104, 0.3)' }} />

        <div className="relative z-10 text-center px-12 max-w-5xl mx-auto -mt-16">
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
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 font-serif drop-shadow-lg"
            style={{ color: 'var(--mo)' }}
          >
            <span>有</span><span className="text-[var(--huo)]">符</span><span>之</span><span>人</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl sm:text-3xl mb-4 font-serif"
            style={{ color: 'var(--mo)' }}
          >
            {t.home.heroSubtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12 max-w-2xl mx-auto text-lg"
            style={{ color: 'var(--mo)' }}
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

      {/* 三大核心服务 - 木 */}
      <section id="services" className="py-24 bg-pattern-dark" style={{ background: 'linear-gradient(180deg, var(--mu-dark), var(--mu))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-serif text-white">
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
            {/* 祝由符箓 - 木 */}
            <FadeIn delay={0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="card-glass text-center"
                style={{ boxShadow: '0 0 30px rgba(13, 115, 119, 0.3)' }}
              >
                <div className="text-6xl mb-6">📜</div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.home.fuzhou}</h3>
                <p className="text-white/80 mb-4">{t.home.fuzhouDesc}</p>
                <p className="text-white/60 text-sm">{t.home.fuzhouDetail}</p>
                <Link href="/fuzhou" className="mt-6 inline-block text-white">
                  {t.home.learnMore}
                </Link>
              </motion.div>
            </FadeIn>

            {/* 道家法事 - 火 */}
            <FadeIn delay={0.2}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="card-glass text-center"
                style={{ boxShadow: '0 0 30px rgba(196, 30, 58, 0.3)' }}
              >
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.home.fashi}</h3>
                <p className="text-white/80 mb-4">{t.home.fashiDesc}</p>
                <p className="text-white/60 text-sm">{t.home.fashiDetail}</p>
                <Link href="/fashi" className="mt-6 inline-block text-white">
                  {t.home.learnMore}
                </Link>
              </motion.div>
            </FadeIn>

            {/* 种生基 - 土 */}
            <FadeIn delay={0.3}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="card-glass text-center"
                style={{ boxShadow: '0 0 30px rgba(184, 134, 11, 0.3)' }}
              >
                <div className="text-6xl mb-6">🏔️</div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.home.zhongshengji}</h3>
                <p className="text-white/80 mb-4">{t.home.zhongshengjiDesc}</p>
                <p className="text-white/60 text-sm">{t.home.zhongshengjiDetail}</p>
                <Link href="/zhongshengji" className="mt-6 inline-block text-white">
                  {t.home.learnMore}
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 符道文化 - 金 */}
      <section id="culture" className="py-24 bg-pattern" style={{ background: 'linear-gradient(180deg, var(--jin-dark), var(--jin))' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-serif text-white">
                {t.home.cultureTitle}
              </h2>
              <div className="divider-dao max-w-xs mx-auto" style={{ backgroundColor: 'var(--jin-light)' }} />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed text-lg">
                  {t.home.cultureIntro}
                </p>
                <p className="text-white/80 leading-relaxed text-lg">
                  {t.home.cultureIntro2}
                </p>
                <Link href="/culture" className="inline-flex items-center gap-2 font-bold transition-all" style={{ color: 'var(--jin-light)' }}>
                  {t.home.exploreCulture} <span>→</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, rgba(147,112,219,0.3), rgba(107,91,149,0.3))' }} />
                <WuXingSymbol className="w-full max-w-md mx-auto relative z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 真实案例 - 水 */}
      <section id="cases" className="py-24 bg-pattern-dark" style={{ background: 'linear-gradient(180deg, var(--shui-dark), var(--shui))' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-serif">{t.home.casesTitle}</h2>
              <p className="text-white/80 text-lg">{t.home.casesDesc}</p>
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

      {/* 联系我们 - 木 */}
      <section id="contact" className="py-24 bg-pattern-dark" style={{ background: 'linear-gradient(180deg, var(--mu-dark), var(--mu))' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="relative inline-block mb-8">
              <TaijiImage size={120} className="text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif">{t.home.contactTitle}</h2>
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
