"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/Animations";
import { TaijiSymbol, BaguaSymbol, Divider, WuXingSymbol } from "./components/TaoistSymbols";

const fashiServices = [
  { id: 1, name: "安太岁", desc: "化解流年不利，祈福平安顺遂", icon: "🐉" },
  { id: 2, name: "增补财库", desc: "提升财运，财源滚滚而来", icon: "💰" },
  { id: 3, name: "斩桃花", desc: "斩断烂桃花，守护感情", icon: "✂️" },
  { id: 4, name: "招桃花", desc: "招来正缘，姻缘美满", icon: "🌸" },
  { id: 5, name: "文昌法事", desc: "学业进步，考试顺利", icon: "📚" },
  { id: 6, name: "还阴债", desc: "化解业障，转运改命", icon: "🕯️" },
  { id: 7, name: "婴灵超度", desc: "化解灾厄，心灵安宁", icon: "👼" },
  { id: 8, name: "化解小人", desc: "驱除是非，贵人相助", icon: "🛡️" },
];

const fuzhouServices = [
  { name: "和合符", desc: "夫妻情侣感情修复", icon: "💑" },
  { name: "斩桃花符", desc: "斩断外遇烂桃花", icon: "🌸" },
  { name: "防小人符", desc: "驱除职场是非", icon: "🛡️" },
  { name: "招财符", desc: "事业财运提升", icon: "💰" },
  { name: "文昌符", desc: "学业考试顺利", icon: "📚" },
  { name: "平安符", desc: "护身出行平安", icon: "🙏" },
];

const cases = [
  { name: "李女士", content: "和男友分手后各种联系方式被拉黑，经过调理后第6周他主动找我和好了。", result: "感情修复", service: "和合符" },
  { name: "王先生", content: "事业遇到小人是非，经过防小人、开运招财指导后，顺利晋升主管。", result: "事业晋升", service: "防小人符" },
  { name: "张女士", content: "老公出轨有小三，在老师指导下调整，不到两个月家庭关系明显改善。", result: "家庭和睦", service: "斩桃花符" },
  { name: "陈同学", content: "面临高考压力巨大，进行文昌祈福后，心态平稳，成绩稳步提升。", result: "学业进步", service: "文昌符" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--hei)] via-[var(--hei)] to-[var(--qing)]">
          <div className="absolute inset-0 opacity-10">
            <BaguaSymbol size={800} className="absolute -top-40 -right-40 text-[var(--huang)]" />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <TaijiSymbol size={120} className="text-[var(--huang)] mx-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif"
          >
            武当后山符合堂
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-[var(--huang)] mb-4 font-serif"
          >
            传承千年符道 · 开启幸福人生
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/80 mb-12 max-w-2xl mx-auto"
          >
            师承武当法脉，提供三大核心服务
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <a href="#fuzhou" className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all border border-white/20 hover:border-[var(--huang)]">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📜</div>
              <h3 className="text-xl font-bold text-[var(--huang)] mb-2">祝由符箓</h3>
              <p className="text-white/70 text-sm">定制灵符 · 祈福转运</p>
            </a>
            
            <a href="#fashi" className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all border border-white/20 hover:border-[var(--qing)]">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-xl font-bold text-[var(--qing)] mb-2">道家法事</h3>
              <p className="text-white/70 text-sm">科仪祈福 · 消灾转运</p>
            </a>
            
            <a href="#zhongshengji" className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all border border-white/20 hover:border-[var(--chi)]">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏔️</div>
              <h3 className="text-xl font-bold text-[var(--chi)] mb-2">种生基</h3>
              <p className="text-white/70 text-sm">改命转运 · 延年益寿</p>
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="text-white/50 text-sm">向下滚动</div>
          <div className="text-white/50 text-2xl mt-2">↓</div>
        </motion.div>
      </section>

      {/* 符道文化 */}
      <section id="culture" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-[var(--hei)] mb-4 font-serif">符道文化</h2>
              <Divider className="my-6" />
              <p className="text-lg text-[var(--hei)]/70 max-w-2xl mx-auto">
                符，源于道家祝由术，是中华传统文化的瑰宝，蕴含着深邃的哲学思想和实践智慧
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-6">
                <p className="text-[var(--hei)]/80 leading-relaxed">
                  《黄帝内经》云：「古之治病，唯其移精变气，可祝由而已。」祝由术的本质，是通过意念的聚焦，疏通全身淤堵，实现自我疗愈。
                </p>
                <p className="text-[var(--hei)]/80 leading-relaxed">
                  符与福，音近而义通。符是福的种子，福是符的显化。每个人都可以通过修炼符力，显化属于自己的幸福。
                </p>
                <Link href="/culture" className="inline-block text-[var(--qing)] font-medium hover:underline">
                  了解更多 →
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="flex justify-center">
                <WuXingSymbol className="w-64 h-64" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 种生基 */}
      <section id="zhongshengji" className="py-20 sm:py-28 bg-gradient-to-b from-[var(--hei)] to-[var(--hei)]/95 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <BaguaSymbol size={600} className="absolute -top-20 -right-20 text-[var(--huang)]" />
          <TaijiSymbol size={300} className="absolute -bottom-10 -left-10 text-[var(--huang)]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="text-5xl mb-4">🏔️</div>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 font-serif">种生基 · 改命转运秘法</h2>
              <Divider className="my-6" />
              <p className="text-xl text-[var(--huang)] max-w-3xl mx-auto">
                种生基，乃「生命的根基」，是道家千年秘传的改命转运之法
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "💰", title: "招财进宝", desc: "更多商业机会，财运亨通" },
              { icon: "🏥", title: "延年益寿", desc: "增强生命力，精神充沛" },
              { icon: "💕", title: "姻缘美满", desc: "改善爱情运，家庭幸福" },
              { icon: "📈", title: "催官进禄", desc: "事业亨通，贵人扶持" },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[var(--huang)] mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="text-center">
              <Link href="/zhongshengji" className="inline-block px-10 py-4 bg-[var(--huang)] text-[var(--hei)] rounded-full font-bold text-lg hover:bg-[var(--huang-light)] transition-all">
                了解种生基详情
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 祝由符箓 */}
      <section id="fuzhou" className="py-20 sm:py-28 bg-[var(--bai)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-[var(--hei)] mb-4 font-serif">祝由符箓</h2>
              <Divider className="my-6" />
              <p className="text-lg text-[var(--hei)]/70">依循古法绘制，为您定制专属灵符</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fuzhouServices.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-taoist hover-lift"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--hei)] mb-2">{item.name}</h3>
                  <p className="text-[var(--hei)]/70">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="text-center mt-10">
              <Link href="/fuzhou" className="inline-block text-[var(--qing)] font-medium hover:underline">
                查看全部符箓服务 →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 法事服务 */}
      <section id="fashi" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-[var(--hei)] mb-4 font-serif">法事服务</h2>
              <Divider className="my-6" />
              <p className="text-lg text-[var(--hei)]/70">正统道家法事，祈福消灾转运</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fashiServices.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-[var(--bai)] to-white rounded-xl p-6 shadow-taoist hover-lift text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[var(--hei)] mb-2">{item.name}</h3>
                  <p className="text-[var(--hei)]/60 text-sm">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="text-center mt-10">
              <Link href="/fashi" className="inline-block px-8 py-3 border-2 border-[var(--qing)] text-[var(--qing)] rounded-full font-medium hover:bg-[var(--qing)] hover:text-white transition-all">
                了解更多法事
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 真实案例 */}
      <section id="cases" className="py-20 sm:py-28 bg-[var(--bai)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold text-[var(--hei)] mb-4 font-serif">真实案例</h2>
              <Divider className="my-6" />
              <p className="text-lg text-[var(--hei)]/70">数以千计的成功案例，见证符箓效果</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-taoist"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[var(--qing)] text-white rounded-full flex items-center justify-center font-bold">
                      {item.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--hei)]">{item.name}</h3>
                      <span className="text-xs bg-[var(--huang)]/20 text-[var(--huang)] px-2 py-0.5 rounded">{item.result}</span>
                    </div>
                  </div>
                  <p className="text-[var(--hei)]/70 text-sm mb-3">「{item.content}」</p>
                  <p className="text-xs text-[var(--hei)]/50">服务：{item.service}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="text-center mt-10">
              <Link href="/cases" className="inline-block text-[var(--qing)] font-medium hover:underline">
                查看更多案例 →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-[var(--qing)] to-[var(--qing-light)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 font-serif">联系我们</h2>
            <p className="text-xl text-white/80 mb-8">
              添加微信，获取一对一专业咨询
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-10 py-4 bg-white text-[var(--qing)] rounded-full font-bold text-lg hover:bg-[var(--bai)] transition-all">
                在线咨询
              </Link>
              <Link href="/zhongshengji" className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                预约种生基
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--hei)] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TaijiSymbol size={32} className="text-[var(--huang)]" />
                <span className="text-lg font-bold font-serif">武当后山符合堂</span>
              </div>
              <p className="text-white/60 text-sm">传承道家符箓文化<br />弘扬祝由智慧</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[var(--huang)]">服务项目</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/zhongshengji" className="hover:text-white">种生基</Link></li>
                <li><Link href="/fuzhou" className="hover:text-white">祝由符箓</Link></li>
                <li><Link href="/fashi" className="hover:text-white">法事服务</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[var(--huang)]">了解更多</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="/culture" className="hover:text-white">符道文化</Link></li>
                <li><Link href="/cases" className="hover:text-white">真实案例</Link></li>
                <li><Link href="/contact" className="hover:text-white">联系我们</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[var(--huang)]">联系方式</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>微信：wudangfuhetang</li>
                <li>邮箱：info@wudangfuhetang.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
            <p>© 2026 武当后山符合堂 · 符道文化传承中心</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
