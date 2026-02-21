"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FadeIn } from "../components/Animations";
import { TaijiImage, Divider } from "../components/TaoistSymbols";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { useI18n } from "../i18n";

export default function ContactPage() {
  const { t } = useI18n();
  const { contact: tc } = t;

  const paymentMethods = [
    { 
      title: "微信收款码", 
      desc: "扫码添加微信并支付",
      qrPlaceholder: "微信收款码",
      account: ""
    },
    { 
      title: "支付宝收款码", 
      desc: "扫码直接支付",
      qrPlaceholder: "支付宝收款码",
      account: ""
    },
    { 
      title: "银行转账", 
      desc: "对公账户转账",
      qrPlaceholder: "",
      account: "开户行：中国建设银行\n户名：武当后山符合堂\n账号：6217 **** **** ****"
    },
  ];

  const faqs = [
    { question: "符箓真的有效吗？", answer: "符箓的效果因人而异，需要诚心诚意，配合自身努力。根据我们的统计，98%的客户都获得了满意的效果。" },
    { question: "定制符箓需要提供什么信息？", answer: "一般需要提供姓名、出生日期（农历或阳历）、具体愿望或需求。某些特殊符箓可能需要更多信息。" },
    { question: "符箓多久能见效？", answer: "根据不同的符箓类型和个人情况，见效时间不同。一般在7-49天之间。" },
    { question: "种生基如何预约？", answer: "种生基为高端定制服务，需提前咨询预约，由专业师傅勘测选址后进行。" },
  ];
  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 sm:py-24 bg-pattern text-white relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--shui-dark), var(--shui))' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
               <div className="flex justify-center mb-6 mt-12">
                   <TaijiImage size={120} className="text-white" />
               </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif text-white">{tc.title}</h1>
              <Divider className="my-6" style={{ backgroundColor: 'var(--shui-light)' }} />
              <p className="text-xl text-white/80">{tc.subtitle}</p>
            </FadeIn>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white bg-pattern">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 -mt-20 relative z-10">
              {tc.info.map((item: { icon: string; title: string; content: string; desc: string; color: string }, index: number) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white bg-pattern rounded-xl shadow-lg p-6 sm:p-8 text-center border border-gray-100">
                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[var(--hei)] mb-2">{item.title}</h3>
                    <p className="text-xl font-bold text-[var(--hei)] mb-2">{item.content}</p>
                    <p className="text-sm text-[var(--hei)]/50">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--bai)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <FadeIn direction="left">
                <div>
                  <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">{tc.formTitle}</h2>
                  <p className="text-[var(--hei)]/70 mb-8">{tc.formDesc}</p>
                  <ContactForm />
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">{tc.paymentTitle}</h2>
                  <p className="text-[var(--hei)]/70 mb-8">{tc.paymentDesc}</p>

                  <div className="space-y-4">
                    {paymentMethods.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -2 }}
                        className="bg-white bg-pattern rounded-xl p-6 shadow-taoist hover-lift"
                      >
                        <h3 className="text-lg font-bold text-[var(--hei)] mb-2">{item.title}</h3>
                        <p className="text-[var(--hei)]/60 text-sm mb-4">{item.desc}</p>
                        {item.qrPlaceholder && (
                          <div className="w-32 h-32 bg-[var(--bai)] rounded-lg flex items-center justify-center text-[var(--hei)]/30 text-sm">
                            {item.qrPlaceholder}
                          </div>
                        )}
                        {item.account && (
                          <div className="bg-[var(--bai)] rounded-lg p-4 text-sm text-[var(--hei)]/70 whitespace-pre-line">
                            {item.account}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 bg-white bg-pattern rounded-xl p-6 shadow-taoist">
                    <h3 className="font-bold text-[var(--hei)] mb-4">工作时间</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[var(--hei)]/60">周一至周五</span>
                        <span className="font-medium text-[var(--hei)]">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--hei)]/60">周六</span>
                        <span className="font-medium text-[var(--hei)]">10:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--hei)]/60">周日</span>
                        <span className="font-medium text-[var(--hei)]">休息</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white bg-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[var(--hei)] mb-4 font-serif">{tc.faqTitle}</h2>
                <Divider className="my-6" />
              </div>
            </FadeIn>

            <div className="space-y-4">
              {tc.faqs.map((faq: { question: string; answer: string }, index: number) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-[var(--bai)] rounded-xl p-6">
                    <h3 className="font-bold text-[var(--hei)] mb-3 flex items-start gap-2">
                      <span className="text-[var(--qing)]">Q:</span>
                      {faq.question}
                    </h3>
                    <p className="text-[var(--hei)]/70 text-sm leading-relaxed pl-6">{faq.answer}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
