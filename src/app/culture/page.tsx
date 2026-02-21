"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { TaijiImage, BaguaSymbol, Divider, WuXingSymbol } from "../components/TaoistSymbols";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";

export default function CulturePage() {
  const { t } = useI18n();
  const { culture: tc, footer: tf } = t;
  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-pattern text-white relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--jin-dark), var(--jin))' }}>
          <div className="absolute inset-0 opacity-10">
            <BaguaSymbol size={400} className="absolute -top-20 -right-20 text-[var(--huang)]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
               <div className="flex justify-center mb-6 mt-12">
                   <TaijiImage size={120} className="text-white" />
               </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif text-white">{tc.title}</h1>
              <Divider className="my-6" style={{ backgroundColor: 'var(--jin-light)' }} />
              <p className="text-xl text-white/80">{tc.subtitle}</p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white bg-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">{tc.whatIs}</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <FadeIn>
              <div className="prose prose-lg max-w-none text-[var(--hei)]/80 leading-relaxed">
                <p className="mb-6">
                  {tc.intro}
                </p>
                <p className="mb-6">
                  {tc.intro2}
                </p>
                <p>
                  {tc.intro3}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--bai)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">{tc.core}</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {tc.topics.map((topic: { title: string; content: string; icon: string }, index: number) => (
                <StaggerItem key={index}>
                   <motion.div whileHover={{ y: -5 }} className="bg-white bg-pattern p-8 rounded-xl shadow-taoist hover-lift">
                    <div className="text-4xl mb-4">{topic.icon}</div>
                    <h3 className="text-xl font-bold text-[var(--hei)] mb-3 font-serif">{topic.title}</h3>
                    <p className="text-[var(--hei)]/70">{topic.content}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white bg-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">{tc.history}</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--qing)] to-[var(--huang)] md:-translate-x-1/2" />
              {tc.timeline.map((item: { era: string; event: string; desc: string }, index: number) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[var(--qing)] rounded-full border-4 border-[var(--huang)]/30 md:-translate-x-1/2 z-10" />
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-[var(--bai)] p-6 rounded-xl">
                        <span className="text-[var(--qing)] font-bold text-sm">{item.era}</span>
                        <h3 className="text-lg font-bold text-[var(--hei)] mt-1 mb-2">{item.event}</h3>
                        <p className="text-[var(--hei)]/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-pattern text-white" style={{ background: 'linear-gradient(180deg, var(--jin), var(--jin-light))' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
                <TaijiImage size={80} className="text-white mx-auto mb-6" />
              <blockquote className="text-2xl sm:text-3xl font-bold mb-4 font-serif text-white">
                {tc.quote}
              </blockquote>
              <p className="text-white/80">
                {tc.quoteDesc}
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
