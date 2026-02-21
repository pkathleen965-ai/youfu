"use client";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { FadeIn } from "../components/Animations";
import { motion } from "framer-motion";

interface Submission {
  id: number;
  name: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
  status: string;
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "new" | "contacted">("all");

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("/api/contact");
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (error) {
      console.error("获取数据失败:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSubmissions = submissions.filter((sub) => {
    if (filter === "all") return true;
    return sub.status === filter;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const updateStatus = async (id: number, status: string) => {
    const updated = submissions.map((sub) =>
      sub.id === id ? { ...sub, status } : sub
    );
    setSubmissions(updated);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[var(--qing)]/30 border-t-[var(--qing)] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[var(--hei)]/60">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bai)]">
      <Navigation />

      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--hei)] mb-4 font-serif">
                客户咨询管理
              </h1>
              <p className="text-[var(--hei)]/60">
                共 {submissions.length} 条咨询记录
              </p>
            </div>
          </FadeIn>

          <div className="flex gap-2 mb-6">
            {(["all", "new", "contacted"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === f
                    ? "bg-[var(--qing)] text-white"
                    : "bg-gray-100 text-[var(--hei)] hover:bg-gray-200"
                }`}
              >
                {f === "all" ? "全部" : f === "new" ? "新咨询" : "已联系"}
              </button>
            ))}
          </div>

          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-[var(--hei)]/60">暂无咨询记录</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredSubmissions.map((sub) => (
                <motion.div
                  key={sub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--hei)]">
                        {sub.name}
                      </h3>
                      <p className="text-[var(--qing)] font-medium">
                        {sub.phone}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          sub.status === "new"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {sub.status === "new" ? "新咨询" : "已联系"}
                      </span>
                      <span className="text-sm text-[var(--hei)]/50">
                        {formatDate(sub.createdAt)}
                      </span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-[var(--hei)]/50">服务类型：</span>
                      <span className="text-[var(--hei)]">{sub.service}</span>
                    </div>
                  </div>

                  {sub.message && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <span className="text-sm text-[var(--hei)]/50">留言内容：</span>
                      <p className="text-[var(--hei)] mt-1">{sub.message}</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <a
                      href={`tel:${sub.phone}`}
                      className="px-4 py-2 bg-[var(--qing)] text-white rounded-lg hover:bg-[var(--qing-light)] transition-colors"
                    >
                      拨打电话
                    </a>
                    <a
                      href={`https://wa.me/${sub.phone.replace(/^1/, "86")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      WhatsApp
                    </a>
                    <button
                      onClick={() =>
                        updateStatus(
                          sub.id,
                          sub.status === "new" ? "contacted" : "new"
                        )
                      }
                      className="px-4 py-2 border border-[var(--qing)] text-[var(--qing)] rounded-lg hover:bg-[var(--qing)]/10 transition-colors"
                    >
                      {sub.status === "new" ? "标记已联系" : "标记新咨询"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
