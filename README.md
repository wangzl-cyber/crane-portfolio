# 王正磊 · 摄影艺术 portfolio

一个极简的黑白 / 低饱和灰蓝画廊风格艺术家作品集，使用 **Next.js 14 App Router + Tailwind CSS** 构建，生产构建开启静态导出（`output: "export"`），可部署到 Netlify 或 Vercel。内置 **Decap CMS** 后台：登录 `/admin/` 可以修改内容，普通访客只能浏览。

## 项目目录

```text
crane-portfolio/
├─ app/
│  ├─ about/page.tsx              # 关于 / 身份 / 获奖
│  ├─ contact/page.tsx            # 邮箱 / 社交链接
│  ├─ cv/page.tsx                 # 文字简历 / PDF 下载
│  ├─ project/page.tsx            # p5.js 容器页
│  ├─ works/
│  │  ├─ page.tsx                 # 作品列表 / 分类筛选
│  │  └─ [slug]/page.tsx          # 作品详情（多图 + 长文本）
│  ├─ globals.css
│  ├─ icon.svg
│  ├─ layout.tsx
│  ├─ not-found.tsx               # 404 页面
│  └─ page.tsx                    # 首页
├─ components/
│  ├─ ArtworkCard.tsx
│  ├─ Footer.tsx
│  ├─ Header.tsx
│  ├─ PageHeader.tsx
│  └─ WorksGallery.tsx            # 分类筛选（客户端组件）
├─ data/
│  ├─ about.json                  # 关于页内容（后台可改）
│  ├─ cv.json                     # 简历内容（后台可改）
│  ├─ site.json                   # 姓名 / 邮箱 / 社交链接（后台可改）
│  ├─ works.json                  # 作品数据（后台可改）
│  ├─ cv.ts                       # JSON 类型包装
│  ├─ site.ts                     # JSON 导入 + 导航
│  └─ works.ts                    # JSON 导入 + 类型
├─ public/
│  ├─ admin/
│  │  ├─ index.html               # /admin/ 后台入口
│  │  └─ config.yml               # 后台字段配置
│  ├─ cv.pdf                      # 占位 PDF，请替换
│  └─ images/                     # 占位图，请替换
├─ netlify.toml                   # Netlify 构建配置
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
└─ README.md
```

## 初始化命令

需要 **Node.js 18.17 或更高版本**（推荐 20 LTS）。

```bash
# 进入项目目录
cd crane-portfolio

# 安装依赖
npm install

# 启动本地开发服务器
npm run dev
```

打开 <http://localhost:3000>。

生产构建与静态预览：

```bash
npm run build
npm run preview
```

`npm run build` 会生成 `out/` 目录。`npm run preview` 会使用 `serve` 预览静态文件；第一次运行时会自动下载 `serve`。

> 说明：`next.config.mjs` 始终启用 `output: "export"`。作品详情页通过 `generateStaticParams()` 预先声明所有 slug，因此 `next dev` 与 `npm run build` 都可以正常访问 `/works/[slug]/`。

## 配置文件

### `next.config.mjs`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
```

- `output: "export"`：生产构建输出纯静态文件到 `out/`。
- `images.unoptimized: true`：静态导出时关闭 Next.js 图片优化服务。
- `trailingSlash: true`：静态托管时路径更稳定。

### `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"
```

Netlify 从 GitHub 导入项目后会自动读取这份配置。后台登录也依赖 Netlify，因此建议用 Netlify 部署主站。

### `tailwind.config.ts`

颜色、字体和内容扫描路径都在这里。主色：

- `paper` 纸白：`#F3F2EE`
- `ink` 墨黑：`#161817`
- `mist` 灰蓝浅色：`#DDE1E0`
- `steel` 低饱和灰蓝：`#8A989E`
- `muted` 辅助文字：`#6F797B`
- `line` 分割线：`#D8D8D2`

## 组件代码

- `components/Header.tsx`：吸顶导航，自动高亮当前页面。
- `components/Footer.tsx`：站点信息、导航、社交链接。
- `components/PageHeader.tsx`：内页统一标题区。
- `components/ArtworkCard.tsx`：作品卡片，点击进入详情。
- `components/WorksGallery.tsx`：作品分类筛选，客户端状态。

## 页面代码

- `/`：首页大图 hero、简短自我介绍、创作自述、精选作品。
- `/about/`：个人简介、身份信息、获奖列表。
- `/works/`：全部作品、分类筛选。
- `/works/[slug]/`：作品详情，支持任意多张图片与多段长文本。
- `/project/`：预留 `#p5-canvas` 容器，用于嵌入 p5.js。
- `/cv/`：文字简历、PDF 下载按钮。
- `/contact/`：邮箱、社交链接、合作方向。
- `/admin/`：Decap CMS 后台入口，只有被邀请的邮箱登录后可编辑。

## 修改内容

### 1. 姓名、邮箱、社交链接

编辑 `data/site.json`，或登录 `/admin/` 后台的「站点信息」修改：

```json
{
  "name": "王正磊",
  "nameEn": "Wang Zhenglei",
  "role": "摄影艺术家",
  "roleEn": "Photography Artist",
  "email": "hello@example.com",
  "location": "中国 · 云南",
  "description": "一句话介绍你的创作方向。",
  "heroTitle": "在影像之间",
  "heroTitleEn": "Between Images",
  "heroIntro": "首页大图旁的个人简介。",
  "socials": [
    { "label": "Instagram", "href": "https://www.instagram.com/" },
    { "label": "小红书", "href": "https://www.xiaohongshu.com/" }
  ]
}
```

同时检查页脚、Contact 页和 CV 页中的示例文案。导航链接仍然在 `data/site.ts` 的 `navItems` 中维护。

### 2. 作品

编辑 `data/works.json`，或登录 `/admin/` 后台的「作品」新增。新增作品时复制一个对象，确保 `slug` 唯一：

```json
{
  "items": [
    {
      "slug": "my-new-work",
      "title": "作品名",
      "titleEn": "My New Work",
      "category": "摄影",
      "year": "2026",
      "medium": "收藏级喷墨打印",
      "dimensions": "60 × 80 cm",
      "summary": "一句话简介。",
      "description": [
        "第一段长文本。",
        "第二段长文本。"
      ],
      "images": [
        {
          "src": "/images/my-work-01.jpg",
          "alt": "图片描述",
          "caption": "图注"
        }
      ],
      "featured": true
    }
  ]
}
```

图片放进 `public/images/`，把 `src` 改成 `/images/文件名.jpg`。`images` 数组可以放任意数量。

### 3. 图片替换位置

所有图片均为占位图，代码中已用中文注释标出替换位置：

- 首页 hero：`app/page.tsx` 中的 `/images/hero.svg`
- 关于页肖像：`data/about.json` 中的 `portrait`
- 作品图：`data/works.json` 中的 `images` 数组
- 作品卡片：`components/ArtworkCard.tsx` 自动读取作品第一张图

建议替换为 `.jpg` 或 `.webp`，保持较低饱和度与黑白 / 灰蓝色调。登录 `/admin/` 后也可以直接上传图片。

### 4. CV PDF

将你的 PDF 命名为 `cv.pdf`，覆盖 `public/cv.pdf` 即可。CV 页下载按钮已经指向 `/cv.pdf`。

### 5. 简历文字

编辑 `data/cv.json`，或登录 `/admin/` 后台的「简历 CV」修改教育、展览、获奖、驻留与技能。当前内容均为示例，请替换为真实信息。

### 6. 关于页文字

编辑 `data/about.json`，或登录 `/admin/` 后台的「关于页」修改个人介绍、正文段落、教育、关注方向、现居和肖像图。

## 后台管理（/admin/）

后台使用 **Decap CMS + Netlify Identity**。普通访客只能浏览；只有被邀请的邮箱登录后可以修改内容。

### 一次性设置

1. 把项目推送到 GitHub 仓库。
2. 在 Netlify 选择 **Add new site → Import an existing project**，连接这个 GitHub 仓库。不要用 Drop 上传，否则后台修改无法保存。
3. 打开 Netlify 项目 → **Project configuration → Identity → Enable Identity**。
4. 在 **Identity → Registration** 中选择 **Invite only**。
5. 在 **Identity → Services → Git Gateway** 中点击 **Enable Git Gateway**。
6. 在 **Identity → Invite users** 中输入你的邮箱，发送邀请。
7. 打开 `https://你的站点.netlify.app/admin/`，接受邀请并设置密码。
8. 登录后可以编辑「站点信息」「关于页」「作品」「简历 CV」，点击 **Publish** 发布。Netlify 会自动重新构建网站。

### 注意

- 不要把 Registration 设为 **Open**，否则任何人都能注册并尝试进入后台。
- 后台上传的图片会保存到 `public/images/`。
- `/admin/` 在本地 `next dev` 下不能直接完成登录，请在 Netlify 站点上使用。
- Git Gateway 目前仍可使用，但已进入维护状态；如果以后需要更长期方案，可以切换到 Decap CMS 的 GitHub 登录方式。

## 嵌入 p5.js

`/project/` 页面已经预留：

```html
<div id="p5-canvas"></div>
```

按下面步骤加入 p5.js：

```bash
npm install p5
npm install -D @types/p5
```

新建 `components/P5Sketch.tsx`：

```tsx
"use client";

import { useEffect } from "react";
import type p5 from "p5";

export default function P5Sketch() {
  useEffect(() => {
    let sketch: p5 | undefined;

    import("p5").then(({ default: P5 }) => {
      const container = document.getElementById("p5-canvas");
      if (!container) return;

      sketch = new P5((p) => {
        p.setup = () => {
          p.createCanvas(container.clientWidth, container.clientHeight).parent(container);
        };

        p.draw = () => {
          p.background(221, 225, 224);
          p.noFill();
          p.stroke(22, 24, 23);
          p.circle(p.mouseX, p.mouseY, 80);
        };
      }, container);
    });

    return () => sketch?.remove();
  }, []);

  return null;
}
```

然后在 `app/project/page.tsx` 中引入：

```tsx
import P5Sketch from "@/components/P5Sketch";

// 在 #p5-canvas 容器内或页面中放入：
<P5Sketch />
```

画布会挂载到 `#p5-canvas`。挂载后可以删除容器里的占位文字。

## 本地运行

```bash
npm install
npm run dev
```

打开 <http://localhost:3000>。

## 上传到 GitHub

先在 GitHub 新建一个空仓库（不要勾选初始化 README），然后：

```bash
git init
git add .
git commit -m "init: artist portfolio"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

> 如果电脑没有安装 Git，可以安装 **GitHub Desktop**：打开后选择 **File → Add local repository**，添加本项目目录，按提示初始化并 **Publish repository** 即可。

## 部署到 Netlify（后台管理必需）

1. 在 GitHub 新建空仓库（不要勾选初始化 README）。
2. 在项目目录执行上面的 GitHub 上传命令。
3. 登录 <https://app.netlify.com>，点击 **Add new site → Import an existing project**。
4. 选择 GitHub，授权并选择刚才的仓库。
5. Build command 填 `npm run build`，Publish directory 填 `out`（`netlify.toml` 已配置好）。
6. 点击 **Deploy**。
7. 部署完成后，按「后台管理（/admin/）」章节启用 Identity、Git Gateway 并邀请自己。

## 部署到 Vercel

> 如果需要在网页上登录 `/admin/` 修改内容，请使用 Netlify 部署；Vercel 只适合公开展示，后台登录依赖 Netlify Identity。

### 方式一：网页导入（推荐）

1. 登录 <https://vercel.com>。
2. 点击 **Add New → Project**。
3. 选择刚才的 GitHub 仓库并导入。
4. Framework Preset 选择 **Next.js**。
5. Build Command 保持默认 `npm run build`。
6. 点击 **Deploy**。

Vercel 会自动识别 Next.js 静态导出，部署完成后即可通过分配的域名访问。后续每次 push 到 `main` 都会自动重新部署。

### 方式二：Vercel CLI

```bash
npm i -g vercel
vercel
```

按提示登录并确认项目设置即可。

### 部署后检查

- 首页大图、作品详情、分类筛选是否正常。
- `/cv.pdf` 是否能下载。
- Contact 页邮箱与社交链接是否已替换。
- 移动端导航与作品卡片是否无横向滚动。

## 部署说明

- 项目使用纯静态导出，不需要数据库或服务端接口。
- `next build` 的输出目录是 `out/`。Netlify 会按 `netlify.toml` 自动构建；Vercel 的 Next.js 预设会自动处理；其他静态托管可直接上传 `out/`。
- 后台登录依赖 Netlify Identity + Git Gateway，因此网站需要连接 GitHub 仓库并由 Netlify 构建。
- 更换域名后，建议同步更新 `data/site.json` 中的邮箱和社交链接。
- 所有示例文字、奖项与 CV 内容均为占位信息，发布前请替换为真实内容。
