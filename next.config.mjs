/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем source maps в production для уменьшения размера билда
  productionBrowserSourceMaps: false,
  
  // Настройки для уменьшения предупреждений о 404
  poweredByHeader: false,
  
  // Настройки webpack для обработки source maps
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // В dev режиме используем более легкий вариант source maps
      config.devtool = 'eval-cheap-module-source-map';
    }
    return config;
  },

};

export default nextConfig;
