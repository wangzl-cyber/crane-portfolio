// ============================================================
// 站点基础信息
// 内容在 data/site.json 中维护，也可以登录 /admin/ 后台修改。
// 这里只保留导航配置。
// ============================================================

import siteData from "./site.json";

export const site = siteData;

export const navItems = [
  { href: "/works/", label: "作品" },
  { href: "/about/", label: "关于" },
  { href: "/project/", label: "项目" },
  { href: "/cv/", label: "简历" },
  { href: "/contact/", label: "联系" },
];
