"use client";

import Navigation from "../components/Navigation";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { TaijiSymbol, BaguaSymbol, Divider, WuXingSymbol } from "../components/TaoistSymbols";
import { motion } from "framer-motion";

const cultureTopics = [
  { title: "符的起源", content: "符，源于道家祝由术，是中华传统文化的重要组成部分。早在先秦时期，先民们就开始使用符箓来祈福禳灾、治病救人。", icon: "📜" },
  { title: "祝由术的智慧", content: "《黄帝内经》云：「古之治病，唯其移精变气，可祝由而已。」祝由术的本质，是通过意念的聚焦，疏通全身淤堵。", icon: "☯️" },
  { title: "符与福的联系", content: "符与福，音近而义通。符是福的种子，福是符的显化。每个人都可以通过修炼符力，显化属于自己的幸福。", icon: "🍀" },
  { title: "现代应用", content: "在现代社会，符道文化不仅仅是一种传统，更是一种生活智慧，帮助我们在日常生活中获得内心的平静与力量。", icon: "💫" },
];

const historyTimeline = [
  { era: "先秦时期", event: "符箓起源", desc: "先民开始使用符号进行祈福禳灾" },
  { era: "汉代", event: "道教形成", desc: "张道陵创立五斗米道，符箓系统化" },
  { era: "唐宋时期", event: "鼎盛发展", desc: "符箓文化达到顶峰，广泛应用于民间" },
  { era: "明清时期", event: "传承延续", desc: "各派道教科仪完善，符法精微" },
  { era: "现代", event: "文化复兴", desc: "传统文化复兴，符道文化焕发新生" },
];

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--hei)] via-[var(--hei)] to-[var(--qing)] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <BaguaSymbol size={400} className="absolute -top-20 -right-20 text-[var(--huang)]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
              <div className="flex justify-center mb-6">
                <TaijiSymbol size={80} className="text-[var(--huang)]" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif">符道文化</h1>
              <Divider className="my-6" />
              <p className="text-xl text-[var(--huang)]">传承千年智慧，探索符与福的奥秘</p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">什么是符道文化</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <FadeIn>
              <div className="prose prose-lg max-w-none text-[var(--hei)]/80 leading-relaxed">
                <p className="mb-6">
                  符道文化，是中华传统文化中的瑰宝。它源于道家祝由术，历经数千年发展，蕴含着深邃的哲学思想和实践智慧。在符道文化中，「符」不仅仅是写在纸上的符号，更是一种能量的载体，一种意念的聚焦，一种与天地沟通的媒介。
                </p>
                <p className="mb-6">
                  道教认为，宇宙万物皆由气构成，符箓通过特定的笔画、结构和仪式，可以调动天地灵气，调整人体能量场，达到祈福消灾、转运改命的效果。
                </p>
                <p>
                  「武当后山符合堂」致力于将这份古老智慧进行现代诠释，让更多人了解符道文化，感受符与福的内在联系。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--bai)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">符道文化的核心</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {cultureTopics.map((topic, index) => (
                <StaggerItem key={index}>
                  <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-xl shadow-taoist hover-lift">
                    <div className="text-4xl mb-4">{topic.icon}</div>
                    <h3 className="text-xl font-bold text-[var(--hei)] mb-3 font-serif">{topic.title}</h3>
                    <p className="text-[var(--hei)]/70">{topic.content}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">发展历程</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--qing)] to-[var(--huang)] md:-translate-x-1/2" />
              {historyTimeline.map((item, index) => (
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

        <section className="py-16 sm:py-20 bg-gradient-to-b from-[var(--qing)] to-[var(--qing-light)] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <TaijiSymbol size={60} className="text-[var(--huang)] mx-auto mb-6" />
              <blockquote className="text-2xl sm:text-3xl font-bold mb-4 font-serif">
                「最灵性的符，是你每一个正向的念头和坚定的行动」
              </blockquote>
              <p className="text-white/80">
                当我们将注意力从「求福」转向「修符」，福气自然显现
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--hei)] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60">© 2026 武当后山符合堂 · 符道文化传承中心</p>
        </div>
      </footer>
    </div>
  );
}
