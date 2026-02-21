import Link from "next/link";
import { TaijiImage } from "./TaoistSymbols";
import { useI18n } from "../i18n";

export default function Footer() {
  const { t } = useI18n();

  const footerLinks = {
    services: [
      { href: "/fuzhou", label: t.nav.fuzhou },
      { href: "/fashi", label: t.nav.fashi },
      { href: "/zhongshengji", label: t.nav.zhongshengji },
    ],
    about: [
      { href: "/culture", label: t.nav.culture },
      { href: "/cases", label: t.nav.cases },
      { href: "/contact", label: t.nav.contact },
    ],
  };

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
                {t.footer.brand}
              </span>
            </div>
            <p className="text-white/60 text-sm">
              {t.footer.brandDesc}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: "var(--dao-huang)" }}>
              {t.footer.services}
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
              {t.footer.about}
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
              {t.footer.contact}
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>{t.footer.weChat}：wudangfuhetang</li>
              <li>{t.footer.email}：info@wudangfuhetang.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>© 2026 {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
