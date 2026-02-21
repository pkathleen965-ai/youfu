"use client";

import Navigation from "../components/Navigation";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { TaijiImage, Divider } from "../components/TaoistSymbols";
import { motion } from "framer-motion";
import Link from "next/link";

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

export default function FuzhouPage() {
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
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif">祝由符箓</h1>
              <Divider className="my-6" />
              <p className="text-xl text-white/80">依循古法绘制，为您定制专属灵符</p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white bg-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">什么是祝由符箓</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <FadeIn>
              <div className="prose prose-lg max-w-none text-[var(--hei)]/80 leading-relaxed">
                <p className="mb-6">
                  祝由符箓源于上古祝由术，是道家传承千年的智慧结晶。符箓通过特定的笔画、符文和开光仪式，凝聚天地灵气，调整人体能量场，达到祈福消灾、转运改命的效果。
                </p>
                <p className="mb-6">
                  每道符箓都由专业道长依循古法手工绘制，经过开光加持，注入灵性能量，为您的特定需求提供专属定制服务。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--bai)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">符箓服务</h2>
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
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">定制流程</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: "01", title: "咨询了解", desc: "通过微信或电话详细咨询，了解您的具体需求" },
                { step: "02", title: "选择符种", desc: "根据您的情况，推荐最适合的符箓类型" },
                { step: "03", title: "提供信息", desc: "提供姓名、生日、愿望等必要信息" },
                { step: "04", title: "开光加持", desc: "由法师进行开光仪式，注入符箓能量" },
                { step: "05", title: "快递寄送", desc: "顺丰包邮，附详细使用说明" },
                { step: "06", title: "后续指导", desc: "使用期间的疑问解答和指导" },
              ].map((item, index) => (
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
              <h2 className="text-3xl font-bold mb-6 font-serif">预约定制专属符箓</h2>
              <p className="mb-8 text-[var(--hei)]/70">添加微信咨询，获取一对一专业指导</p>
              <Link href="/contact" className="inline-block px-10 py-4 bg-[var(--hei)] text-white rounded-full font-bold text-lg hover:bg-[var(--hei)]/90 transition-all">
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
