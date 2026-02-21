"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  id: number;
  question: string;
  options: { text: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "您的出生年份属于哪个阶段？",
    options: [
      { text: "1940-1959年", score: 1 },
      { text: "1960-1979年", score: 2 },
      { text: "1980-1999年", score: 3 },
      { text: "2000-2019年", score: 4 },
    ],
  },
  {
    id: 2,
    question: "您目前最关心哪个方面？",
    options: [
      { text: "事业财运", score: 1 },
      { text: "感情婚姻", score: 2 },
      { text: "健康平安", score: 3 },
      { text: "学业考试", score: 4 },
    ],
  },
  {
    id: 3,
    question: "您做事通常凭直觉还是理性？",
    options: [
      { text: "完全凭直觉", score: 1 },
      { text: " mostly直觉", score: 2 },
      { text: " mostly理性", score: 3 },
      { text: "完全理性", score: 4 },
    ],
  },
  {
    id: 4,
    question: "您喜欢安静还是热闹？",
    options: [
      { text: "喜欢安静", score: 1 },
      { text: "偏安静", score: 2 },
      { text: "偏热闹", score: 3 },
      { text: "喜欢热闹", score: 4 },
    ],
  },
  {
    id: 5,
    question: "您相信命运吗？",
    options: [
      { text: "完全相信", score: 1 },
      { text: "有点相信", score: 2 },
      { text: "半信半疑", score: 3 },
      { text: "不太相信", score: 4 },
    ],
  },
];

const elements = [
  { name: "木", element: "东方甲乙木", color: "#1E8D8D", trait: "生发之气", direction: "东" },
  { name: "火", element: "南方丙丁火", color: "#D43A2F", trait: "阳火驱邪", direction: "南" },
  { name: "土", element: "中央戊己土", color: "#C89F68", trait: "厚德载物", direction: "中" },
  { name: "金", element: "西方庚辛金", color: "#6A0DAD", trait: "尊贵纯净", direction: "西" },
  { name: "水", element: "北方壬癸水", color: "#2E5A8C", trait: "智慧流动", direction: "北" },
];

export default function FortuneTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [result, setResult] = useState<typeof elements[0] | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = newScores.reduce((a, b) => a + b, 0);
      const avgScore = totalScore / questions.length;
      const elementIndex = Math.min(
        Math.floor((avgScore - 1) * (elements.length / 4)),
        elements.length - 1
      );
      setResult(elements[elementIndex]);
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setScores([]);
    setResult(null);
    setShowResult(false);
  };

  return (
    <div className="max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-[var(--qing)]/10 rounded-full text-[var(--qing)] text-sm mb-4">
                第 {currentQuestion + 1} / {questions.length} 题
              </div>
              <h3 className="text-xl font-bold text-[var(--hei)]">
                {questions[currentQuestion].question}
              </h3>
            </div>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full p-4 bg-white border-2 border-gray-100 rounded-xl text-left hover:border-[var(--qing)] hover:bg-[var(--qing)]/5 transition-all group"
                >
                  <span className="text-[var(--hei)] group-hover:text-[var(--qing)] transition-colors">
                    {option.text}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= currentQuestion
                      ? "bg-[var(--qing)]"
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div
              className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-6"
              style={{ backgroundColor: result?.color + "20" }}
            >
              <span
                className="text-6xl font-bold"
                style={{ color: result?.color }}
              >
                {result?.name}
              </span>
            </div>

            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: result?.color }}
            >
              {result?.element}
            </h2>

            <p className="text-[var(--hei)]/70 mb-6">{result?.trait}</p>

            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 text-left">
              <h3 className="font-bold text-[var(--hei)] mb-4">运势建议</h3>
              <ul className="space-y-3 text-sm text-[var(--hei)]/70">
                <li>• 宜往 {result?.direction} 方发展</li>
                <li>• 今日幸运色：{result?.color}</li>
                <li>• 宜佩戴相应用色服饰</li>
                <li>• 保持内心平静，顺势而为</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={reset}
                className="flex-1 py-3 border-2 border-[var(--qing)] text-[var(--qing)] rounded-xl font-bold hover:bg-[var(--qing)]/10 transition-colors"
              >
                重新测试
              </button>
              <a
                href="/contact"
                className="flex-1 py-3 bg-[var(--qing)] text-white rounded-xl font-bold hover:bg-[var(--qing-light)] transition-colors text-center"
              >
                预约咨询
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
