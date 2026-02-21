import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "./components/Toast";
import { I18nProvider } from "./i18n";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://wudangfuhetang.com"),
  title: {
    default: "武当后山符合堂 | 符道文化传承",
    template: "%s | 武当后山符合堂",
  },
  description: "武当后山符合堂，传承千年符道文化，提供种生基、祝由符箓、法事服务，助您转运改命、趋吉避凶。",
  keywords: ["种生基", "符箓", "法事", "祝由术", "风水", "道教", "武当", "转运", "改命"],
  authors: [{ name: "武当后山符合堂" }],
  creator: "武当后山符合堂",
  publisher: "武当后山符合堂",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://wudangfuhetang.com",
    siteName: "武当后山符合堂",
    title: "武当后山符合堂 | 符道文化传承",
    description: "武当后山符合堂，传承千年符道文化，提供种生基、祝由符箓、法事服务，助您转运改命、趋吉避凶。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "武当后山符合堂 - 符道文化传承",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "武当后山符合堂 | 符道文化传承",
    description: "武当后山符合堂，传承千年符道文化，提供种生基、祝由符箓、法事服务，助您转运改命、趋吉避凶。",
    images: ["/og-image.jpg"],
    creator: "@wudangfuhetang",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <I18nProvider>
          <ToastProvider>
            {children}
            <BackToTop />
          </ToastProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
