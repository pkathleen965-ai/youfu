"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { TaijiImage, Divider } from "../components/TaoistSymbols";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "../i18n";

export default function FuzhouPage() {
  const { t } = useI18n();
  const { fuzhou: tf } = t;

  const fuzhouServices = [
    { name: "和合符", desc: "夫妻情侣感情修复，增进感情和谐", icon: "💑", suitable: ["分手复合", "感情冷淡", "婚姻危机"], price: "¥388" },
    { name: "斩桃花符", desc: "斩断外遇烂桃花，守护感情", icon: "🌸", suitable: ["伴侣出轨", "第三者介入", "烂桃花多"], price: "¥388" },
    { name: "防小人符", desc: "驱除职场是非，化解人际阻碍", icon: "🛡️", suitable: ["职场是非", "小人当道", "人际关系差"], price: "¥388" },
    { name: "招财符", desc: "事业财运提升，招揽财富机会", icon: "💰", suitable: ["财运不佳", "事业瓶颈", "创业初期"], price: "¥388" },
    { name: "文昌符", desc: "学业进步，考试顺利通关", icon: "📚", suitable: ["考试升学", "学业压力", "面试求职"], price: "¥388" },
    { name: "平安符", desc: "护身出行平安，化解灾厄", icon: "🙏", suitable: ["经常出行", "开车人士", "高危行业"], price: "¥388" },
    { name: "化太岁符", desc: "本命年犯太岁化解祈福", icon: "🐉", suitable: ["本命年", "犯太岁", "流年不利"], price: "¥388" },
    { name: "安宅符", desc: "镇宅保家宅平安，化解煞气", icon: "🏠", suitable: ["新居入住", "家宅不宁", "风水调整"], price: "¥388" },
  ];
  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--qing)] to-[var(--qing-light)] text-white relative overflow-hidden bg-pattern-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
               <div className="flex justify-center mb-6 mt-12">
                   <TaijiImage size={120} className="text-[var(--huang)]" />
               </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif">{tf.title}</h1>
              <Divider className="my-6" />
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
                <p className="mb-6">
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

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fuzhouServices.map((item, index) => (
                <StaggerItem key={index}>
                   <motion.div whileHover={{ y: -5 }} className="bg-white bg-pattern rounded-xl overflow-hidden shadow-taoist hover-lift">
                    <div className="bg-gradient-to-br from-[var(--qing)] to-[var(--qing-light)] p-6 text-center">
                      <div className="text-5xl mb-2">{item.icon}</div>
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-[var(--hei)]/70 text-sm mb-4">{item.desc}</p>
                      <div className="mb-4">
                        <p className="text-xs text-[var(--hei)]/50 mb-2">适用情况：</p>
                        <div className="flex flex-wrap gap-1">
                          {item.suitable.map((s, i) => (
                            <span key={i} className="text-xs bg-[var(--bai)] px-2 py-1 rounded">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-[var(--chi)]">{item.price}</span>
                        <Link href="/contact" className="text-sm text-[var(--qing)] hover:underline">咨询预约</Link>
                      </div>
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tf.steps.map((item: { step: string; title: string; desc: string }, index: number) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-[var(--bai)] rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-[var(--qing)] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
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

        <section className="py-16 sm:py-20 bg-gradient-to-b from-[var(--huang)] to-[var(--huang-light)] text-[var(--hei)] bg-pattern-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6 font-serif">{tf.cta}</h2>
              <p className="mb-8 text-[var(--hei)]/70">{tf.ctaDesc}</p>
              <Link href="/contact" className="inline-block px-10 py-4 bg-[var(--hei)] text-white rounded-full font-bold text-lg hover:bg-[var(--hei)]/90 transition-all">
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
