import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name}｜摄影艺术`,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name }],
  keywords: [
    "摄影",
    "当代摄影",
    "影像艺术",
    "跨媒介",
    "装置",
    "3D",
    "p5.js",
  ],
  openGraph: {
    title: `${site.name}｜摄影艺术`,
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
        {/* Netlify Identity：处理邀请、确认和重置密码链接 */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
