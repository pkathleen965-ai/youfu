"use client";

import Navigation from "../components/Navigation";
import { FadeIn } from "../components/Animations";
import { TaijiImage, BaguaSymbol, Divider } from "../components/TaoistSymbols";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  { icon: "💰", title: "招财进宝", desc: "更多商业机会，出门遇贵人，财运亨通" },
  { icon: "🏥", title: "延年益寿", desc: "增强生命力，改善身体状况，精神充沛" },
  { icon: "💕", title: "姻缘美满", desc: "改善爱情运，缔结美好姻缘，家庭幸福" },
  { icon: "👶", title: "添丁旺子", desc: "促进子嗣缘份，家庭人丁兴旺" },
  { icon: "📚", title: "启智开慧", desc: "提升智慧，学业进步，思维敏捷" },
  { icon: "📈", title: "催官进禄", desc: "事业亨通，贵人扶持，官运亨通" },
  { icon: "✨", title: "转运改命", desc: "改变运势，逢凶化吉，趋吉避凶" },
  { icon: "💪", title: "元气充沛", desc: "吸收大地磁场，精力旺盛，正能量满满" },
];

const fengShuiElements = [
  { name: "龙", icon: "🐉", desc: "选择有龙脉之地，象征活力与繁荣" },
  { name: "穴", icon: "🌀", desc: "寻找真穴之处，是风水学中最具挑战性的环节" },
  { name: "砂", icon: "🏔️", desc: "代表周围的山势环境，形成藏风聚气的格局" },
  { name: "水", icon: "💧", desc: "表示寿命与财运，水流环绕生基" },
  { name: "向", icon: "🧭", desc: "指方位朝向，需配合个人命理选择最佳坐向" },
];

const process = [
  { step: "01", title: "风水选址", desc: "由专业风水师勘测，寻找藏风聚气之风水宝地" },
  { step: "02", title: "命理分析", desc: "根据生辰八字详细分析，确定最佳方位与时机" },
  { step: "03", title: "择吉日时", desc: "选择黄道吉日良辰，配合天时地利" },
  { step: "04", title: "准备物品", desc: "收集头发、指甲、贴身衣物等物品，进行净化" },
  { step: "05", title: "开坛作法", desc: "依循古法举行种生基仪式，注入灵气能量" },
  { step: "06", title: "诵经加持", desc: "可选连续诵经49天，达到最佳效果" },
  { step: "07", title: "后续养护", desc: "定期祭拜维护，行善积德，确保灵气不衰" },
];

export default function ZhongShengJiPage() {
  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--hei)] via-[var(--hei)] to-[var(--hei)]/95 text-white relative overflow-hidden bg-pattern-dark">
          <div className="absolute inset-0 opacity-5">
            <BaguaSymbol size={600} className="absolute -top-40 -right-40 text-[var(--huang)]" />
              <TaijiImage size={400} className="absolute -bottom-30 -left-30" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--huang)] to-[var(--huang-light)] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl">🏔️</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif">种生基 · 改命转运秘法</h1>
              <Divider className="my-6" />
              <p className="text-xl text-[var(--huang)] max-w-3xl mx-auto">
                种生基，乃「生命的根基」，是道家千年秘传的改命转运之法
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white bg-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="prose prose-lg max-w-none text-[var(--hei)]/80 leading-relaxed">
                <p className="text-xl mb-6">
                  运用<strong className="text-[var(--qing)]">天地灵气</strong>，将生人的头发、牙齿、皮肤、指甲、衣物，连同生辰八字埋入风水龙穴中。毛发、指甲、精血里的DNA能与地气相应，感应到当事人身上，使其直接吸收大地磁场和宇宙自然能量。
                </p>
                <p className="mb-6">
                  这门独特的风水技术源于中国江西，在港澳台、新加坡、马来西亚等地广受道教信徒欢迎。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--bai)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">种生基八大功效</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                   <motion.div whileHover={{ y: -5 }} className="bg-white bg-pattern rounded-xl p-5 shadow-taoist hover-lift text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-[var(--qing)] mb-1">{item.title}</h3>
                    <p className="text-[var(--hei)]/60 text-sm">{item.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white bg-pattern">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">风水选址五要素</h2>
                <Divider className="my-6" />
                <p className="text-[var(--hei)]/60">龙、穴、砂、水、向，缺一不可</p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {fengShuiElements.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-b from-[var(--qing)]/10 to-transparent rounded-xl p-5 border border-[var(--qing)]/20 text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-[var(--qing)] mb-2">{item.name}</h3>
                    <p className="text-[var(--hei)]/60 text-sm">{item.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--bai)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">种生基服务流程</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                   <div className="bg-white bg-pattern rounded-xl p-5 shadow-taoist">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--huang)] to-[var(--huang-light)] rounded-full flex items-center justify-center text-[var(--hei)] font-bold shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[var(--hei)] mb-1">{item.title}</h3>
                        <p className="text-[var(--hei)]/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white bg-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="bg-[var(--chi)]/10 border border-[var(--chi)]/30 rounded-xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-[var(--chi)] mb-4 flex items-center gap-2">
                  <span>⚠️</span> 种生基注意事项
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-[var(--hei)] mb-2">保密原则</h4>
                    <p className="text-[var(--hei)]/70 text-sm">种生基后建议保密，否则可能影响效果</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--hei)] mb-2">行善积德</h4>
                    <p className="text-[var(--hei)]/70 text-sm">鼓励当事人多多行善积德，以增福报</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--hei)] mb-2">专业选址</h4>
                    <p className="text-[var(--hei)]/70 text-sm">需由专业师傅勘测选址，非随意可为之</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--hei)] mb-2">定期维护</h4>
                    <p className="text-[var(--hei)]/70 text-sm">定期祭拜养护，确保灵气不衰</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-gradient-to-b from-[var(--huang)] to-[var(--huang-light)] text-[var(--hei)] bg-pattern-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4 font-serif">种生基为高端定制服务</h2>
              <p className="mb-8 text-[var(--hei)]/70">名额有限，需提前预约咨询</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-[var(--hei)] text-white rounded-full font-bold text-lg hover:bg-[var(--hei)]/90 transition-all">
                  立即预约咨询
                </Link>
                <Link href="/contact" className="px-10 py-4 border-2 border-[var(--hei)] text-[var(--hei)] rounded-full font-bold text-lg hover:bg-[var(--hei)]/10 transition-all">
                  了解更多
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--hei)] text-white py-8 bg-pattern-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60">© 2026 武当后山符合堂 · 符道文化传承中心</p>
        </div>
      </footer>
    </div>
  );
}
