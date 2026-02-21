"use client";

import { motion } from "framer-motion";

export function TaijiSymbol({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${className} bg-transparent`}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {/* 标准太极图 - 参考百度百科太极图 */}
      {/* 外圈 */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#000000" strokeWidth="1" />
      
      {/* S形分割线 */}
      <path
        d="M50 2 A48 48 0 0 1 50 98"
        fill="none"
        stroke="#000000"
        strokeWidth="1"
      />
      <path
        d="M50 2 A48 48 0 0 0 50 98"
        fill="none"
        stroke="#000000"
        strokeWidth="1"
      />
      
      {/* 黑色部分 (阴鱼) - 在右侧 */}
      <path
        d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2"
        fill="#000000"
      />
      
      {/* 白色部分 (阳鱼) - 在左侧 */}
      <path
        d="M50 2 A48 48 0 0 0 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2"
        fill="#FFFFFF"
      />
      
      {/* 阴阳鱼眼 - 标准位置 */}
      <circle cx="50" cy="26" r="7" fill="#000000" />      {/* 白鱼中的黑眼 */}
      <circle cx="50" cy="74" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="0.5" />      {/* 黑鱼中的白眼 */}
    </motion.svg>
  );
}

export function TaijiImage({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <motion.img
      src="/taiji.png"
      alt="太极图"
      width={size}
      height={size}
      className={`${className} bg-transparent`}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function BaguaSymbol({ className = "", size = 200 }: { className?: string; size?: number }) {
  const trigrams = [
    { name: "乾", lines: [1, 1, 1] },
    { name: "兑", lines: [0, 1, 1] },
    { name: "离", lines: [1, 0, 1] },
    { name: "震", lines: [0, 0, 1] },
    { name: "巽", lines: [1, 1, 0] },
    { name: "坎", lines: [0, 1, 0] },
    { name: "艮", lines: [1, 0, 0] },
    { name: "坤", lines: [0, 0, 0] },
  ];

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" />
      {trigrams.map((trigram, i) => {
        const angle = (i * 45 - 90) * (Math.PI / 180);
        const x = 100 + 70 * Math.cos(angle);
        const y = 100 + 70 * Math.sin(angle);
        return (
          <g key={i} transform={`translate(${x}, ${y})`}>
            {trigram.lines.map((line, j) => (
              <rect
                key={j}
                x={-10}
                y={-12 + j * 8}
                width={line ? 20 : 8}
                height={3}
                fill="currentColor"
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-[var(--huang)] to-transparent" />
        <TaijiImage size={30} />
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-[var(--huang)] to-transparent" />
    </div>
  );
}

export function WuXingSymbol({ className = "" }: { className?: string }) {
  const elements = [
    { name: "木", color: "#3A8B6B", x: 50, y: 10 },
    { name: "火", color: "#B8423A", x: 85, y: 35 },
    { name: "土", color: "#C9A227", x: 70, y: 80 },
    { name: "金", color: "#888888", x: 30, y: 80 },
    { name: "水", color: "#1A1A1A", x: 15, y: 35 },
  ];

  return (
    <svg viewBox="0 0 100 100" className={className}>
      {elements.map((el, i) => (
        <g key={i}>
          <circle cx={el.x} cy={el.y} r="12" fill={el.color} opacity="0.8" />
          <text
            x={el.x}
            y={el.y + 4}
            textAnchor="middle"
            fontSize="10"
            fill="white"
            fontWeight="bold"
          >
            {el.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function CloudPattern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className} preserveAspectRatio="none">
      <path
        d="M0 30 Q25 10 50 30 T100 30 T150 30 T200 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M0 40 Q25 20 50 40 T100 40 T150 40 T200 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  );
}

// 传统太极符号 - 保持简洁，只确保阴阳鱼眼清晰可见
