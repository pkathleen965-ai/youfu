"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const quickReplies = [
  "如何预约服务？",
  "符箓效果如何？",
  "种生基是什么？",
  "如何支付？",
];

const responses: Record<string, string> = {
  "如何预约服务？": `您好！预约服务非常简单：

1. 填写联系表单（姓名+电话）
2. 选择您感兴趣的服务
3. 我们会尽快联系您确认

或者直接添加微信：wudangfuhetang
电话：400-888-8888`,

  "符箓效果如何？": `符箓的效果因人而异，需要诚心诚意，配合自身努力。

根据我们的统计，98%的客户都获得了满意的效果。

符箓一般7-49天见效，建议持续佩戴并保持正念。`,

  "种生基是什么？": `种生基是道家千年秘传之法：

• 将生人贴身物品埋入风水龙穴
• 借助天地灵气滋养生命能量
• 达到趋吉避凶、延年益寿之效

这是高端定制服务，需要专业师傅勘测选址。`,

  "如何支付？": `我们支持多种支付方式：

• 微信支付
• 支付宝
• 银行转账

具体支付方式会在确认服务后由客服指导完成。`,
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      content:
        "您好！我是武当后山符合堂的智能客服☯️\n\n我可以帮您解答：\n• 如何预约服务\n• 符箓的效果\n• 种生基是什么\n• 支付方式\n\n请直接输入您的问题，或点击下方快捷问题。",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let response = "";

      const searchWords = ["预约", "符箓", "效果", "种生基", "支付", "费用"];
      
      for (const word of searchWords) {
        if (content.includes(word)) {
          if (content.includes("预约")) {
            response = responses["如何预约服务？"];
            break;
          } else if (content.includes("符箓") || content.includes("效果")) {
            response = responses["符箓效果如何？"];
            break;
          } else if (content.includes("种生基")) {
            response = responses["种生基是什么？"];
            break;
          } else if (content.includes("支付") || content.includes("费用")) {
            response = responses["如何支付？"];
            break;
          }
        }
      }

      if (!response) {
        response = "感谢您的咨询！为了给您更准确的回复，建议您直接联系客服微信：wudangfuhetang 或拨打 400-888-8888。";
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 w-16 h-16 bg-gradient-to-br from-[var(--qing)] to-[var(--qing-light)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="联系客服"
      >
        <span className="text-2xl">💬</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-24 left-8 z-50 w-96 max-w-[calc(100vw-4rem)] bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[var(--qing)] to-[var(--qing-light)] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">☯️</span>
                  <div>
                    <h3 className="text-white font-bold">智能客服</h3>
                    <p className="text-white/70 text-xs">24小时在线</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                        msg.role === "user"
                          ? "bg-[var(--qing)] text-white"
                          : "bg-gray-100 text-[var(--hei)]"
                      }`}
                    >
                      <p className="whitespace-pre-line text-sm">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <span
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <span
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => sendMessage(reply)}
                      className="px-3 py-1 bg-gray-100 text-[var(--hei)]/70 text-xs rounded-full hover:bg-[var(--qing)]/10 hover:text-[var(--qing)] transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                    placeholder="输入您的问题..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-[var(--qing)] text-sm"
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    className="w-10 h-10 bg-[var(--qing)] text-white rounded-full flex items-center justify-center hover:bg-[var(--qing-light)] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
