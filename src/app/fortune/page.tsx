"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FortuneTest from "../components/FortuneTest";
import { FadeIn } from "../components/Animations";
import ThreeDTaiji from "../components/ThreeDTaiji";

export default function FortunePage() {
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
                五行运势测试
              </h1>
              <p className="text-xl text-white/80 mb-4">
                探索您的五行属性，了解专属运势建议
              </p>
              <p className="text-white/60">
                5道题 · 免费测试 · 立即出结果
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
