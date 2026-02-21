"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/Animations";
import { TaijiImage, Divider } from "../components/TaoistSymbols";
import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "../i18n";

export default function CasesPage() {
  const { t } = useI18n();
  const { cases: tc } = t;

  const categories = ["全部", "感情修复", "事业财运", "学业进步", "家庭和睦", "健康平安", "安太岁", "种生基"];

  const cases = [
    { id: 1, name: "李女士", category: "感情修复", result: "感情修复", content: "和男友拍拖三年分手五次，最近一次吵得非常僵硬，各种联系方式拉黑。经过符道和合术调理，第6周后他主动找我和好了。", service: "和合符", duration: "6周" },
    { id: 2, name: "王先生", category: "事业财运", result: "事业晋升", content: "在公司努力工作5年，本来有机会晋升主管，但是遇到小人是非阻碍。经过防小人、开运招财指导后，顺利坐上主管职位。", service: "防小人符+招财符", duration: "3个月" },
    { id: 3, name: "张女士", category: "家庭和睦", result: "家庭和睦", content: "结婚后老公出轨有小三，经常深夜才回家。自从做了斩桃花、夫妻和合术后，不到两个月老公就不再搞婚外情。", service: "斩桃花符", duration: "2个月" },
    { id: 4, name: "陈同学", category: "学业进步", result: "学业进步", content: "面临高考压力巨大，学业停滞不前。请了文昌符之后，心态平稳，成绩稳步提升，最后考上了理想的大学。", service: "文昌符", duration: "1学期" },
    { id: 5, name: "刘先生", category: "事业财运", result: "生意兴隆", content: "自己开店做生意，但生意一直不温不火。经过招财符调理后，店铺客流量明显增加，营业额提升了近50%。", service: "招财符", duration: "2个月" },
    { id: 6, name: "赵女士", category: "健康平安", result: "平安顺利", content: "经常需要出差，总觉得心神不宁。佩戴平安符后，每次出行都感觉安心许多，工作顺利，身体健康。", service: "平安符", duration: "长期佩戴" },
    { id: 7, name: "周先生", category: "安太岁", result: "太岁化解", content: "本命年犯太岁，做事总觉得不顺心，事业也遇到瓶颈。做了安太岁法事后，感觉整个人顺了很多，年底还升职加薪了。", service: "安太岁法事", duration: "1年" },
    { id: 8, name: "吴女士", category: "种生基", result: "运势好转", content: "生活中总是各种不顺，财运也不好。师傅说我有阴债未还，做了种生基后，感觉人生开始顺利了，财运也慢慢好转。", service: "种生基", duration: "3个月见效" },
    { id: 9, name: "郑先生", category: "种生基", result: "财库充盈", content: "做生意多年，虽然收入不错但总是存不住钱。做了增补财库配合种生基后，现在不仅能存下钱，生意也越来越好。", service: "种生基+增补财库", duration: "半年" },
    { id: 10, name: "林女士", category: "感情修复", result: "姻缘美满", content: "单身多年，相亲总是不成。做了姻缘符调理后，很快遇到了现在的男朋友，性格很合得来，已经在筹备婚事了。", service: "姻缘符", duration: "3个月" },
    { id: 11, name: "许先生", category: "学业进步", result: "考研成功", content: "考研二战压力大，心里很焦虑。请了文昌符后，心态平和了很多，考试发挥很好，成功考上了心仪的研究生院校。", service: "文昌符", duration: "半年" },
    { id: 12, name: "何先生", category: "安太岁", result: "冲太岁化解", content: "冲太岁那年特别倒霉，出门都摔跤，工作也不顺。做了安太岁法事后，下半年开始转运，之前的烦心事都解决了。", service: "安太岁法事", duration: "半年" },
  ];
  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--hei)] to-[var(--hei)] text-white relative overflow-hidden bg-pattern-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif">{tc.title}</h1>
              <Divider className="my-6" />
              <p className="text-xl text-[var(--huang)]">{tc.subtitle}</p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white bg-pattern border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {tc.stats.map((stat: { number: string; label: string }, index: number) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-[var(--qing)] mb-2">{stat.number}</div>
                    <div className="text-[var(--hei)]/60">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--bai)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      index === 0 ? "bg-[var(--qing)] text-white" : "bg-white text-[var(--hei)] hover:bg-[var(--qing)]/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((item) => (
                <StaggerItem key={item.id}>
                   <motion.div whileHover={{ y: -5 }} className="bg-white bg-pattern rounded-xl p-6 shadow-taoist h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[var(--qing)] text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.name[0]}
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--hei)]">{item.name}</h3>
                        <span className="text-xs bg-[var(--huang)]/20 text-[var(--huang)] px-2 py-0.5 rounded">{item.category}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-[var(--qing)]/10 text-[var(--qing)] text-xs px-3 py-1 rounded-full font-medium">
                        {item.result}
                      </span>
                    </div>
                    <p className="text-[var(--hei)]/70 text-sm leading-relaxed flex-1 mb-4">「{item.content}」</p>
                    <div className="pt-4 border-t border-gray-100 text-sm">
                      <div className="flex justify-between text-[var(--hei)]/50">
                        <span>服务: {item.service}</span>
                        <span>周期: {item.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-gradient-to-b from-[var(--qing)] to-[var(--qing-light)] text-white bg-pattern-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6 font-serif">{tc.title}</h2>
              <p className="mb-8 text-white/80">{tc.subtitle}</p>
              <Link href="/contact" className="inline-block px-10 py-4 bg-white text-[var(--qing)] rounded-full font-bold text-lg hover:bg-[var(--bai)] transition-all">
                {tc.subtitle}
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
