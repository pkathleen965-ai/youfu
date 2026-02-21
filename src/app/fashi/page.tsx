"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { TaijiImage, Divider } from "../components/TaoistSymbols";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "../i18n";

export default function FashiPage() {
  const { t } = useI18n();
  const { fashi: tf } = t;
  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-pattern text-white relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--huo-dark), var(--huo))' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
               <div className="flex justify-center mb-6 mt-12">
                   <TaijiImage size={120} className="text-white" />
               </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif text-white">{tf.title}</h1>
              <Divider className="my-6" style={{ backgroundColor: 'var(--huo-light)' }} />
              <p className="text-xl text-white/80">{tf.subtitle}</p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white bg-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">{tf.introTitle}</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <FadeIn>
              <div className="prose prose-lg max-w-none text-[var(--hei)]/80 leading-relaxed">
                <p className="mb-6">
                  {tf.intro}
                </p>
                <p>
                  {tf.intro2}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--bai)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">{tf.services}</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tf.types.map((item: { id: number; name: string; desc: string; icon: string; detail: string }, index: number) => (
                <StaggerItem key={index}>
                   <motion.div whileHover={{ y: -5 }} className="bg-white bg-pattern rounded-xl overflow-hidden shadow-taoist hover-lift">
                    <div className="bg-gradient-to-br from-[var(--chi)] to-[var(--chi-light)] p-6 text-center">
                      <div className="text-5xl mb-2">{item.icon}</div>
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-[var(--hei)]/70 text-sm mb-3">{item.desc}</p>
                      <p className="text-[var(--hei)]/50 text-xs">{item.detail}</p>
                    </div>
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
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">{tf.process}</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tf.steps.map((item: { step: string; title: string; desc: string }, index: number) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-[var(--bai)] rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-[var(--chi)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-[var(--hei)] mb-2">{item.title}</h3>
                    <p className="text-[var(--hei)]/60 text-sm">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-gradient-to-b from-[var(--chi)] to-[var(--chi-light)] text-white bg-pattern-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6 font-serif">{tf.cta}</h2>
              <p className="mb-8 text-white/80">{tf.ctaDesc}</p>
              <Link href="/contact" className="inline-block px-10 py-4 bg-white text-[var(--chi)] rounded-full font-bold text-lg hover:bg-[var(--bai)] transition-all">
                {tf.ctaButton}
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
