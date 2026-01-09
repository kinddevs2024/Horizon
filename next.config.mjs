/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем source maps в production для уменьшения размера билда
  productionBrowserSourceMaps: false,

  // Настройки для уменьшения предупреждений о 404
  poweredByHeader: false,

  // Отключаем статическую генерацию для API routes
  experimental: {
    dynamicIO: true,
  },
};

export default nextConfig;
