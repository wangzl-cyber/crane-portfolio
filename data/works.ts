// ============================================================
// 作品数据
// 内容在 data/works.json 中维护，也可以登录 /admin/ 后台修改。
// 图片上传到 public/images/，src 使用 "/images/文件名"。
// ============================================================

import worksData from "./works.json";

export const categories = [
  "摄影",
  "装置雕塑",
  "纪录片影像",
  "3D建模",
  "交互项目",
] as const;

export type WorkCategory = (typeof categories)[number];

export type WorkImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Work = {
  slug: string;
  title: string;
  titleEn: string;
  category: WorkCategory;
  year: string;
  medium: string;
  dimensions: string;
  summary: string;
  description: string[];
  images: WorkImage[];
  featured?: boolean;
};

export const works = worksData.items as unknown as Work[];
