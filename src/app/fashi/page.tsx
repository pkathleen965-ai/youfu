"use client";

import Navigation from "../components/Navigation";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { TaijiImage, Divider } from "../components/TaoistSymbols";
import { motion } from "framer-motion";
import Link from "next/link";

const fashiServices = [
  { id: 1, name: "安太岁", desc: "化解流年不利，祈福平安顺遂", icon: "🐉", detail: "本命年或犯太岁者，通过安太岁法事化解流年不利，祈求一年平安顺遂。" },
  { id: 2, name: "增补财库", desc: "提升财运，财源滚滚而来", icon: "💰", detail: "为财运不佳者补财库，增强财富运势，让财源滚滚而来。" },
  { id: 3, name: "斩桃花", desc: "斩断烂桃花，守护感情", icon: "✂️", detail: "斩除影响感情的烂桃花，守护夫妻感情，化解第三者干扰。" },
  { id: 4, name: "招桃花", desc: "招来正缘，姻缘美满", icon: "🌸", detail: "单身人士招正缘桃花，早日遇到有缘人，成就美满姻缘。" },
  { id: 5, name: "文昌法事", desc: "学业进步，考试顺利", icon: "📚", detail: "为学子祈福，增强学业运势，考试顺利，金榜题名。" },
  { id: 6, name: "还阴债", desc: "化解业障，转运改命", icon: "🕯️", detail: "偿还阴债，化解前世今生业障，改善运势，转运改命。" },
  { id: 7, name: "婴灵超度", desc: "化解灾厄，心灵安宁", icon: "👼", detail: "超度婴灵，化解因果，让心灵得到安宁与解脱。" },
  { id: 8, name: "化解小人", desc: "驱除是非，贵人相助", icon: "🛡️", detail: "化解小人干扰，驱除是非口舌，招贵人相助。" },
  { id: 9, name: "和合法事", desc: "感情修复，家庭和睦", icon: "💑", detail: "修复破裂的感情，让夫妻情侣重归于好，家庭和睦。" },
  { id: 10, name: "驱邪化煞", desc: "清除邪气，化解煞气", icon: "⚡", detail: "清除住宅或身上的邪气煞气，恢复平安祥和。" },
  { id: 11, name: "拜太岁", desc: "本命年祈福，化解冲煞", icon: "🙏", detail: "本命年拜太岁，祈求太岁星君保佑，一年顺遂平安。" },
  { id: 12, name: "送冤亲债主", desc: "化解冤结，消除障碍", icon: "🌟", detail: "送走冤亲债主，化解前世今生的冤结，消除人生障碍。" },
];

export default function FashiPage() {
  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--chi)] to-[var(--chi-light)] text-white relative overflow-hidden bg-pattern-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
               <div className="flex justify-center mb-6 mt-12">
                   <TaijiImage size={120} className="text-[var(--huang)]" />
               </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif">法事服务</h1>
              <Divider className="my-6" />
              <p className="text-xl text-white/80">正统道家法事，祈福消灾转运</p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white bg-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">什么是道家法事</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <FadeIn>
              <div className="prose prose-lg max-w-none text-[var(--hei)]/80 leading-relaxed">
                <p className="mb-6">
                  道家法事是道教传承千年的仪式，通过诵经、画符、祭祀等方式，沟通天地神灵，为信众祈福消灾、转运改命。每场法事都由专业道长主持，依循古法科仪，诚心祈愿。
                </p>
                <p>
                  我们承袭武当法脉，精通各类道家法事，为您提供正规、专业的服务。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--bai)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">法事服务项目</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fashiServices.map((item, index) => (
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
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">法事流程</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "在线咨询", desc: "了解需求，推荐合适法事" },
                { step: "02", title: "提供信息", desc: "姓名生辰，详细资料" },
                { step: "03", title: "择吉日", desc: "选定良辰，准备法事" },
                { step: "04", title: "施法祈福", desc: "道长施法，虔诚祈福" },
              ].map((item, index) => (
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
              <h2 className="text-3xl font-bold mb-6 font-serif">预约法事服务</h2>
              <p className="mb-8 text-white/80">添加微信咨询，获取专业指导</p>
              <Link href="/contact" className="inline-block px-10 py-4 bg-white text-[var(--chi)] rounded-full font-bold text-lg hover:bg-[var(--bai)] transition-all">
                立即咨询
              </Link>
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
