"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "./Toast";

interface Booking {
  id: number;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: string;
}

const services = [
  { id: "fushen", name: "符箓定制", duration: "7-14天", price: "299起" },
  { id: "fashi", name: "道家法事", duration: "1-3天", price: "999起" },
  { id: "zhongshengji", name: "种生基", duration: "需面谈", price: "9999起" },
];

const timeSlots = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

const getDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    if (date.getDay() !== 0) {
      dates.push(date);
    }
  }
  return dates.slice(0, 14);
};

export default function BookingSystem() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { showToast } = useToast();

  const dates = getDates();

  const validateStep1 = () => {
    if (!formData.service) {
      showToast("请选择服务类型", "error");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.date) newErrors.date = "请选择日期";
    if (!formData.time) newErrors.time = "请选择时间";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "请输入姓名";
    if (!formData.phone.trim()) {
      newErrors.phone = "请输入电话";
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "请输入正确的手机号";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const submitBooking = async () => {
    if (!validateStep3()) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: `预约${formData.service} - ${formData.date} ${formData.time}`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        showToast("预约成功！我们会尽快联系您确认", "success");
        setStep(4);
      } else {
        showToast(result.error || "预约失败", "error");
      }
    } catch (error) {
      showToast("预约失败，请稍后重试", "error");
    }
  };

  const selectedService = services.find((s) => s.id === formData.service);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= s
                    ? "bg-[var(--qing)] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {s}
              </div>
              {s < 4 && (
                <div
                  className={`w-16 sm:w-24 h-1 ${
                    step > s ? "bg-[var(--qing)]" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>选择服务</span>
          <span>选择时间</span>
          <span>填写信息</span>
          <span>完成</span>
        </div>
      </div>

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold text-[var(--hei)] mb-6 text-center">
            选择服务类型
          </h2>
          <div className="space-y-4">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setFormData({ ...formData, service: service.id })}
                className={`w-full p-6 rounded-xl text-left transition-all ${
                  formData.service === service.id
                    ? "border-2 border-[var(--qing)] bg-[var(--qing)]/5"
                    : "border-2 border-gray-100 hover:border-[var(--qing)]/50"
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--hei)]">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      预计时长：{service.duration}
                    </p>
                  </div>
                  <span className="text-[var(--qing)] font-bold">
                    {service.price}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
          <button
            onClick={nextStep}
            className="w-full mt-8 py-4 bg-[var(--qing)] text-white rounded-xl font-bold hover:bg-[var(--qing-light)] transition-colors"
          >
            下一步
          </button>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold text-[var(--hei)] mb-6 text-center">
            选择预约时间
          </h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[var(--hei)] mb-3">
              选择日期
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {dates.map((date) => {
                const dateStr = date.toISOString().split("T")[0];
                const isSelected = formData.date === dateStr;
                return (
                  <button
                    key={dateStr}
                    onClick={() => setFormData({ ...formData, date: dateStr })}
                    className={`p-2 rounded-lg text-center transition-all ${
                      isSelected
                        ? "bg-[var(--qing)] text-white"
                        : "bg-gray-100 hover:bg-[var(--qing)]/10"
                    }`}
                  >
                    <div className="text-xs">{date.getMonth() + 1}月</div>
                    <div className="text-lg font-bold">{date.getDate()}</div>
                    <div className="text-xs">
                      {["日", "一", "二", "三", "四", "五", "六"][date.getDay()]}
                    </div>
                  </button>
                );
              })}
            </div>
            {errors.date && (
              <p className="text-red-500 text-sm mt-2">{errors.date}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[var(--hei)] mb-3">
              选择时间段
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setFormData({ ...formData, time })}
                  className={`p-3 rounded-lg text-center transition-all ${
                    formData.time === time
                      ? "bg-[var(--qing)] text-white"
                      : "bg-gray-100 hover:bg-[var(--qing)]/10"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
            {errors.time && (
              <p className="text-red-500 text-sm mt-2">{errors.time}</p>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-4 border-2 border-gray-200 text-[var(--hei)] rounded-xl font-bold hover:bg-gray-50 transition-colors"
            >
              上一步
            </button>
            <button
              onClick={nextStep}
              className="flex-1 py-4 bg-[var(--qing)] text-white rounded-xl font-bold hover:bg-[var(--qing-light)] transition-colors"
            >
              下一步
            </button>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-bold text-[var(--hei)] mb-6 text-center">
            填写联系信息
          </h2>

          <div className="bg-[var(--qing)]/5 rounded-xl p-4 mb-6">
            <h3 className="font-bold text-[var(--hei)] mb-2">预约信息确认</h3>
            <p className="text-sm text-[var(--hei)]/70">
              服务：{selectedService?.name}
            </p>
            <p className="text-sm text-[var(--hei)]/70">
              日期：{formData.date} {formData.time}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--hei)] mb-2">
                姓名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--qing)] bg-white ${
                  errors.name ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="请输入您的姓名"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--hei)] mb-2">
                电话 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--qing)] bg-white ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="请输入您的联系电话"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--hei)] mb-2">
                备注
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--qing)] bg-white resize-none"
                placeholder="请描述您的具体需求..."
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => setStep(2)}
              className="flex-1 py-4 border-2 border-gray-200 text-[var(--hei)] rounded-xl font-bold hover:bg-gray-50 transition-colors"
            >
              上一步
            </button>
            <button
              onClick={submitBooking}
              className="flex-1 py-4 bg-[var(--qing)] text-white rounded-xl font-bold hover:bg-[var(--qing-light)] transition-colors"
            >
              确认预约
            </button>
          </div>
        </motion.div>
      )}

      {step === 4 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-2xl font-bold text-[var(--hei)] mb-4">
            预约成功！
          </h2>
          <p className="text-[var(--hei)]/60 mb-8">
            我们已收到您的预约信息，工作人员将在24小时内与您联系确认。
          </p>
          <div className="bg-gray-50 rounded-xl p-6 text-left mb-8">
            <h3 className="font-bold text-[var(--hei)] mb-3">预约详情</h3>
            <p className="text-sm text-[var(--hei)]/70">
              服务：{selectedService?.name}
            </p>
            <p className="text-sm text-[var(--hei)]/70">
              日期：{formData.date}
            </p>
            <p className="text-sm text-[var(--hei)]/70">
              时间：{formData.time}
            </p>
            <p className="text-sm text-[var(--hei)]/70">
              姓名：{formData.name}
            </p>
            <p className="text-sm text-[var(--hei)]/70">
              电话：{formData.phone}
            </p>
          </div>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-[var(--qing)] text-white rounded-xl font-bold hover:bg-[var(--qing-light)] transition-colors"
          >
            返回首页
          </a>
        </motion.div>
      )}
    </div>
  );
}
