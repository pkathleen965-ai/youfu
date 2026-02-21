"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "./Toast";

interface FormErrors {
  name?: string;
  phone?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "请输入姓名";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "请输入联系电话";
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "请输入正确的手机号码";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("请检查表单填写", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        showToast("提交成功！我们会尽快联系您", "success");
      } else {
        showToast(result.error || "提交失败，请稍后重试", "error");
      }
    } catch (error) {
      console.error("提交错误:", error);
      showToast("提交失败，请稍后重试", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[var(--qing)]/10 rounded-xl p-8 text-center"
      >
        <div className="text-5xl mb-4">🙏</div>
        <h3 className="text-xl font-bold text-[var(--hei)] mb-2">提交成功</h3>
        <p className="text-[var(--hei)]/70">我们会尽快与您联系</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label className="block text-sm font-medium text-[var(--hei)] mb-2">
          姓名 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: undefined });
          }}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--qing)] focus:border-transparent bg-white ${
            errors.name ? "border-red-500" : "border-[var(--qing)]/30"
          }`}
          placeholder="请输入您的姓名"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--hei)] mb-2">
          联系电话 <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
            if (errors.phone) setErrors({ ...errors, phone: undefined });
          }}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--qing)] focus:border-transparent bg-white ${
            errors.phone ? "border-red-500" : "border-[var(--qing)]/30"
          }`}
          placeholder="请输入您的联系电话"
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--hei)] mb-2">
          咨询服务
        </label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 border border-[var(--qing)]/30 rounded-lg focus:ring-2 focus:ring-[var(--qing)] focus:border-transparent bg-white"
        >
          <option value="">请选择服务类型</option>
          <option value="种生基">种生基</option>
          <option value="祝由符箓">祝由符箓</option>
          <option value="法事服务">法事服务</option>
          <option value="其他咨询">其他咨询</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--hei)] mb-2">
          留言内容
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 border border-[var(--qing)]/30 rounded-lg focus:ring-2 focus:ring-[var(--qing)] focus:border-transparent bg-white resize-none"
          placeholder="请描述您的需求..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-[var(--qing)] text-white rounded-lg font-bold hover:bg-[var(--qing-light)] transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "提交中..." : "提交咨询"}
      </motion.button>
    </form>
  );
}
