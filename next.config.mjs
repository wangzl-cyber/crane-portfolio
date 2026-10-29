/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出：npm run build 后会生成 out/ 目录。
  output: "export",

  // 静态导出时 Next.js 的图片优化服务不可用，因此关闭优化。
  // 本项目使用原生 <img>，换成 next/image 时也请保留 unoptimized。
  images: {
    unoptimized: true,
  },

  // 导出为 /works/slug/index.html 形式，部署到静态服务器时路径更稳定。
  trailingSlash: true,
};

export default nextConfig;
