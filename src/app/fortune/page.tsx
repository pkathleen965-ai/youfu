"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FortuneTest from "../components/FortuneTest";
import { FadeIn } from "../components/Animations";
import ThreeDTaiji from "../components/ThreeDTaiji";
import { useI18n } from "../i18n";

export default function FortunePage() {
  const { t } = useI18n();
  const { fortune: tf } = t;

  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--qing)] to-[var(--qing-light)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ThreeDTaiji size={400} />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif">
                {tf.title}
              </h1>
              <p className="text-xl text-white/80 mb-4">
                {tf.subtitle}
              </p>
              <p className="text-white/60">
                {tf.subtitle2}
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <FortuneTest />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
