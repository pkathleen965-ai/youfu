"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/Animations";
import { BaguaSymbol, Divider, WuXingSymbol } from "./components/TaoistSymbols";

const ParticleBackground = dynamic(() => import("./components/ParticleBackground"), {
  ssr: false,
  loading: () => null,
});

const ThreeDTaiji = dynamic(() => import("./components/ThreeDTaiji"), {
  ssr: false,
  loading: () => (
    <div className="w-48 h-48 mx-auto flex items-center justify-center">
      <div className="w-32 h-32 border-4 border-[var(--huang)]/30 border-t-[var(--huang)] rounded-full animate-spin" />
    </div>
  ),
});

const AIChat = dynamic(() => import("./components/AIChat"), {
  ssr: false,
});

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
    <div className="home-page min-h-screen">
      <Navigation />
      <ParticleBackground />
      <AIChat />

      {/* Hero Section - 土元素主题（中央戊己土，厚德载物） */}
      <section className="relative min-h-screen flex items-start pt-12 justify-center overflow-hidden bg-wu-tu">
        <div className="absolute inset-0 opacity-10">
          <BaguaSymbol size={600} className="absolute -top-20 -right-20 text-on-wu-tu" />
        </div>
        
        {/* 土黄色光晕效果 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse-glow" style={{ background: 'rgba(200, 159, 104, 0.3)' }} />

           <div className="relative z-10 text-center px-12 max-w-5xl mx-auto pt-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-6 mt-4"
            >
              <div className="relative inline-block">
                  <ThreeDTaiji size={200} />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 font-serif text-on-wu-tu drop-shadow-lg"
            >
               有<span style={{color: 'var(--chi)'}}>符</span>之人
            </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl sm:text-3xl mb-4 font-serif text-on-wu-tu"
          >
            道法自然 · 祝由通神
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12 max-w-2xl mx-auto text-lg text-on-wu-tu"
          >
            传承千年道统，弘扬符箓文化，助您趋吉避凶、转运改命
          </motion.p>

           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
           >
            <a href="#services" className="btn-huang text-lg px-10 py-4 text-force-readable">
              探索服务
            </a>
            <Link href="/booking" className="btn-primary text-lg px-10 py-4 text-force-readable">
              在线预约
            </Link>
            <Link href="/fortune" className="btn-chi text-lg px-10 py-4 text-force-readable">
              运势测试
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 三大核心服务 - 五行色 */}
      <section id="services" className="py-24 bg-pattern-dark" style={{ background: 'linear-gradient(180deg, var(--dao-qing-dark), var(--dao-qing))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-serif text-gradient-huang">
                三大核心服务
              </h2>
              <p className="text-white/70 text-lg">承袭道统，运用五行之理，助您转运改命</p>
            </div>
           </FadeIn>

          {/* 引导文字 */}
          <FadeIn>
            <div className="text-center mb-8">
              <p className="text-white/80 text-lg mb-4">
                点击下方服务探索详情，或直接预约咨询
              </p>
              <Divider />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 祝由符箓 - 青色 */}
            <FadeIn delay={0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="card-glass text-center glow-zi"
              >
                <div className="text-6xl mb-6">📜</div>
                <h3 className="text-2xl font-bold text-white mb-3">祝由符箓</h3>
                <p className="text-[var(--dao-qing-light)] mb-4">东方甲乙木，主生发之气</p>
                <p className="text-white/60 text-sm">定制灵符，祈福转运，调理身心</p>
                <Link href="/fuzhou" className="mt-6 inline-block" style={{ color: 'var(--dao-huang-light)' }}>
                  了解详情 →
                </Link>
              </motion.div>
            </FadeIn>

            {/* 道家法事 - 红色 */}
            <FadeIn delay={0.2}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="card-glass text-center glow-chi"
              >
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-3">道家法事</h3>
                <p className="text-[var(--dao-chi-light)] mb-4">南方丙丁火，主阳火驱邪</p>
                <p className="text-white/60 text-sm">科仪祈福，消灾转运，趋吉避凶</p>
                <Link href="/fashi" className="mt-6 inline-block" style={{ color: 'var(--dao-huang-light)' }}>
                  了解详情 →
                </Link>
              </motion.div>
            </FadeIn>

            {/* 种生基 - 黄色 */}
            <FadeIn delay={0.3}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="card-glass text-center glow-huang"
              >
                <div className="text-6xl mb-6">🏔️</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--dao-huang-light)' }}>种生基</h3>
                <p className="mb-4" style={{ color: 'var(--dao-huang)' }}>中央戊己土，主厚德载物</p>
                <p className="text-white/60 text-sm">改命转运，延年益寿，福寿绵长</p>
                <Link href="/zhongshengji" className="mt-6 inline-block" style={{ color: 'var(--dao-chi-light)' }}>
                  了解详情 →
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 符道文化 - 宣纸白底色 */}
      <section id="culture" className="py-24 bg-pattern" style={{ backgroundColor: 'var(--dao-xuan)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-serif text-gradient-zi">
                符道文化
              </h2>
              <div className="divider-dao max-w-xs mx-auto" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  《黄帝内经》云：「古之治病，唯其移精变气，可祝由而已。」祝由术的本质，是通过意念的聚焦，疏通全身淤堵，实现自我疗愈。
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  符与福，音近而义通。符是福的种子，福是符的显化。每个人都可以通过修炼符力，显化属于自己的幸福。
                </p>
                <Link href="/culture" className="inline-flex items-center gap-2 font-bold transition-all" style={{ color: 'var(--dao-zi)' }}>
                  探索符道文化 <span>→</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, rgba(200,159,104,0.2), rgba(106,13,173,0.2))' }} />
                <WuXingSymbol className="w-full max-w-md mx-auto relative z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 祝由符箓服务 - 青色主题 */}
      <section id="fuzhou" className="py-24 bg-pattern-dark" style={{ background: 'linear-gradient(180deg, var(--dao-qing), var(--dao-qing-dark))' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-serif">祝由符箓</h2>
              <p className="text-[var(--dao-qing-light)] text-lg">东方甲乙木，主生发之气，生生不息</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fuzhouServices.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card-glass"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="text-center mt-12">
              <Link href="/fuzhou" className="btn-huang inline-block">
                查看全部符箓
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 道家法事服务 - 深色模式，红色点缀 */}
      <section id="fashi" className="py-24 bg-dao-dark bg-pattern-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-serif">道家法事</h2>
              <p className="text-[var(--dao-chi-light)] text-lg">南方丙丁火，阳火驱邪，光明威严</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fashiServices.slice(0, 8).map((item, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="card-glass text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="text-center mt-12">
              <Link href="/fashi" className="btn-huang inline-block">
                了解更多法事
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 种生基 - 玄黄土主题 */}
      <section id="zhongshengji" className="py-24 bg-pattern-dark" style={{ background: 'linear-gradient(180deg, var(--dao-huang), #D2691E)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="text-6xl mb-6">🏔️</div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-4 font-serif" style={{ color: 'var(--dao-mo)' }}>种生基</h2>
            <p className="text-2xl mb-6" style={{ color: 'var(--dao-mo)', opacity: 0.8 }}>中央戊己土，厚德载物，改命转运</p>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--dao-mo)', opacity: 0.7 }}>
              种生基乃道家千年秘传之法，通过将生人的贴身物品埋入风水龙穴，借助天地灵气滋养生命能量，达到趋吉避凶、延年益寿之效。
            </p>
            <Link href="/zhongshengji" className="btn-chi inline-block text-lg px-10 py-4">
              了解种生基详情
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 真实案例 - 紫色主题 */}
      <section id="cases" className="py-24 bg-pattern-dark" style={{ background: 'linear-gradient(180deg, var(--dao-zi-dark), var(--dao-zi))' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-serif">真实案例</h2>
              <p className="text-[var(--dao-zi-light)] text-lg">紫气东来，见证符箓神奇功效</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="card-glow rounded-xl p-6 border"
                  style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(200,159,104,0.3)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'var(--dao-huang)', color: 'var(--dao-mo)' }}>
                      {item.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.name}</h3>
                      <span className="text-xs" style={{ color: 'var(--dao-huang)' }}>{item.result}</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-3">「{item.content}」</p>
                  <p className="text-xs text-white/50">服务：{item.service}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="text-center mt-12">
              <Link href="/cases" className="btn-huang inline-block">
                查看更多案例
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 联系我们 - 道法青主题 */}
      <section id="contact" className="py-24 bg-dao-qing bg-cloud bg-pattern-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="relative inline-block mb-8 glow-huang">
                <ThreeDTaiji size={120} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gradient-huang mb-6 font-serif">联系我们</h2>
            <p className="text-white/80 mb-8 text-lg">传承道统 · 开启幸福人生</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-huang text-lg px-10 py-4">
                在线咨询
              </Link>
              <Link href="/zhongshengji" className="btn-primary text-lg px-10 py-4">
                预约种生基
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
