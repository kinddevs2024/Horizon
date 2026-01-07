/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем source maps в production для уменьшения размера билда
  productionBrowserSourceMaps: false,
  
  // Настройки для уменьшения предупреждений о 404
  poweredByHeader: false,
  
  // Игнорируем запросы к source maps в dev режиме
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'eval-source-map';
    }
    return config;
  },
};

export default nextConfig;
