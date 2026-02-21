"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BookingSystem from "../components/BookingSystem";
import { FadeIn } from "../components/Animations";
import ThreeDTaiji from "../components/ThreeDTaiji";
import { useI18n } from "../i18n";

export default function BookingPage() {
  const { t } = useI18n();
  const { booking: tb } = t;

  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-pattern text-white relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--huo-dark), var(--huo))' }}>
          <div className="absolute inset-0 opacity-10">
            <ThreeDTaiji size={400} />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif">
                {tb.title}
              </h1>
              <p className="text-xl text-white/80">
                {tb.subtitle}
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
