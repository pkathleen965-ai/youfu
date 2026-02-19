import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "武当后山符合堂 | 符道文化传承",
  description: "武当后山符合堂，传承千年符道文化，提供种生基、祝由符箓、法事服务，助您转运改命、趋吉避凶。",
  keywords: "种生基,符箓,法事,祝由术,风水,道教,武当",
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
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
