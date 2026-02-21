/** @type {import('next').NextConfig} */
const nextConfig = {
  // 开发模式下注释掉静态导出配置
  // output: 'export',
  // distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
