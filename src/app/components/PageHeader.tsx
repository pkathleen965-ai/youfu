import { ReactNode } from "react";
import { FadeIn } from "./Animations";
import { TaijiImage, Divider } from "./TaoistSymbols";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  theme?: "default" | "chi" | "qing" | "huang" | "zi";
  children?: ReactNode;
}

const themeStyles = {
  default: "from-[var(--hei)] via-[var(--hei)] to-[var(--qing)]",
  chi: "from-[var(--chi)] to-[var(--chi-light)]",
  qing: "from-[var(--qing)] to-[var(--qing-light)]",
  huang: "from-[var(--huang)] to-[var(--huang-light)]",
  zi: "from-[var(--zi)] to-[var(--zi-light)]",
};

export default function PageHeader({ title, subtitle, theme = "default", children }: PageHeaderProps) {
  return (
    <section
      className={`py-16 sm:py-24 bg-gradient-to-b ${themeStyles[theme]} text-white relative overflow-hidden bg-pattern-dark`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          {children || (
            <>
              <div className="flex justify-center mb-6 mt-12">
                <TaijiImage size={120} className="text-[var(--huang)]" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-serif">{title}</h1>
              <Divider className="my-6" />
              {subtitle && <p className="text-xl text-white/80">{subtitle}</p>}
            </>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
