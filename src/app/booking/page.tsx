"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BookingSystem from "../components/BookingSystem";
import { FadeIn } from "../components/Animations";
import ThreeDTaiji from "../components/ThreeDTaiji";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--chi)] to-[var(--chi-light)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ThreeDTaiji size={400} />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif">
                在线预约
              </h1>
              <p className="text-xl text-white/80">
                选择服务类型，预约专属时间
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <BookingSystem />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
