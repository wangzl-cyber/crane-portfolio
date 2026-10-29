import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name}｜生态野生动物艺术`,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  keywords: [
    "生态艺术",
    "野生动物艺术",
    "黑颈鹤",
    "摄影",
    "装置雕塑",
    "p5.js",
  ],
  openGraph: {
    title: `${site.name}｜生态野生动物艺术`,
    description: site.description,
    type: "website",
    locale: "zh_CN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F3F2EE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-xs focus:text-paper"
        >
          跳到主要内容
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
