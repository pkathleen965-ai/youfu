"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

interface ThreeDTaijiProps {
  size?: number;
}

export default function ThreeDTaiji({ size = 300 }: ThreeDTaijiProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(66);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted || isSpinning) return;
    
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsSpinning(true);
    }
  }, [timeLeft, isMounted, isSpinning]);

  const trigrams = useMemo(() => [
    { lines: [1, 1, 1], angle: 0 },
    { lines: [0, 1, 1], angle: 45 },
    { lines: [1, 0, 1], angle: 90 },
    { lines: [0, 0, 1], angle: 135 },
    { lines: [1, 1, 0], angle: 180 },
    { lines: [0, 1, 0], angle: 225 },
    { lines: [1, 0, 0], angle: 270 },
    { lines: [0, 0, 0], angle: 315 },
  ], []);

  return (
    <motion.div
      className="relative cursor-pointer"
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        rotateX: mousePosition.y,
        rotateY: -mousePosition.x,
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div
        className={`absolute inset-0 rounded-full transition-all duration-1000 ${
          isSpinning ? "animate-spin-slow" : ""
        }`}
        style={{
          background: isSpinning
            ? "conic-gradient(from 0deg, #1E8D8D, #6A0DAD, #C89F68, #D43A2F, #1E8D8D)"
            : "linear-gradient(135deg, #1E8D8D 0%, #6A0DAD 50%, #C89F68 100%)",
          boxShadow: isSpinning
            ? "0 0 80px rgba(200, 159, 104, 0.8), 0 0 150px rgba(106, 13, 173, 0.6), 0 0 200px rgba(30, 141, 141, 0.4)"
            : isHovered
            ? "0 0 60px rgba(200, 159, 104, 0.6), 0 0 100px rgba(106, 13, 173, 0.4)"
            : "0 0 30px rgba(200, 159, 104, 0.3)",
        }}
      />

      <div
        className="absolute inset-2 rounded-full bg-[var(--bai)]"
        style={{
          background: "radial-gradient(circle at 30% 30%, #ffffff, #f5f5f5)",
        }}
      />

      {isSpinning && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="relative"
            style={{ width: size * 0.9, height: size * 0.9 }}
          >
            {trigrams.map((trigram, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: size * 0.08,
                  height: size * 0.12,
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${trigram.angle}deg) translateY(-${size * 0.35}px)`,
                }}
              >
                {trigram.lines.map((line, j) => (
                  <div
                    key={j}
                    className="absolute bg-gradient-to-r from-[var(--huang)] to-[var(--chi)]"
                    style={{
                      width: line ? "100%" : "60%",
                      height: 2,
                      top: j * 4,
                      left: line ? 0 : "20%",
                      boxShadow: "0 0 10px rgba(200, 159, 104, 0.8)",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {!isSpinning && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={isSpinning ? { rotate: 360 } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative" style={{ width: size * 0.9, height: size * 0.9 }}>
            <div
              className="absolute rounded-full"
              style={{
                width: size * 0.45,
                height: size * 0.45,
                background: "linear-gradient(180deg, #1A1A1A 0%, #333 100%)",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="absolute rounded-full bg-white"
                style={{
                  width: size * 0.15,
                  height: size * 0.15,
                  top: "25%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)",
                }}
              />
            </div>

            <div
              className="absolute rounded-full"
              style={{
                width: size * 0.45,
                height: size * 0.45,
                background: "linear-gradient(180deg, #333 0%, #1A1A1A 100%)",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="absolute rounded-full bg-black"
                style={{
                  width: size * 0.15,
                  height: size * 0.15,
                  bottom: "25%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>

            <div
              className="absolute rounded-full border-2 border-[var(--huang)]/30"
              style={{
                width: size * 0.9,
                height: size * 0.9,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </motion.div>
      )}

      {isSpinning ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-[var(--huang)] font-medium"
        >
          八卦运转 · 阴阳平衡
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-[var(--huang)] font-medium"
        >
          即将运转 · {timeLeft}秒
        </motion.div>
      )}
    </motion.div>
  );
}
