"use client";

import { motion } from "framer-motion";

export default function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: 24,
    md: 40,
    lg: 60,
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="border-4 border-[var(--qing)]/30 border-t-[var(--qing)] rounded-full"
        style={{ width: sizes[size], height: sizes[size] }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bai)]">
      <motion.div
        className="border-4 border-[var(--qing)]/30 border-t-[var(--qing)] rounded-full w-12 h-12 mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-[var(--hei)]/60">加载中...</p>
    </div>
  );
}
