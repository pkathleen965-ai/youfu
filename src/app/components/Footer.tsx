import Link from "next/link";
import { TaijiImage } from "./TaoistSymbols";

const footerLinks = {
  services: [
    { href: "/fuzhou", label: "祝由符箓" },
    { href: "/fashi", label: "道家法事" },
    { href: "/zhongshengji", label: "种生基" },
  ],
  about: [
    { href: "/culture", label: "符道文化" },
    { href: "/cases", label: "真实案例" },
    { href: "/contact", label: "联系我们" },
  ],
};

const contactInfo = [
  { label: "微信", value: "wudangfuhetang" },
  { label: "邮箱", value: "info@wudangfuhetang.com" },
];

export default function Footer() {
  return (
    <footer
      className="py-12 border-t bg-pattern-dark"
      style={{ backgroundColor: "var(--dao-mo)", borderColor: "rgba(200,159,104,0.2)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TaijiImage size={48} className="text-[var(--dao-huang)]" />
              <span className="text-lg font-bold font-serif text-gradient-huang">
                武当后山符合堂
              </span>
            </div>
            <p className="text-white/60 text-sm">
              传承道家符箓文化
              <br />
              弘扬祝由智慧
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: "var(--dao-huang)" }}>
              服务项目
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: "var(--dao-qing-light)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: "var(--dao-huang)" }}>
              了解更多
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: "var(--dao-zi-light)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: "var(--dao-huang)" }}>
              联系方式
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              {contactInfo.map((info) => (
                <li key={info.label}>
                  {info.label}：{info.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>© 2026 武当后山符合堂 · 符道文化传承中心</p>
        </div>
      </div>
    </footer>
  );
}
