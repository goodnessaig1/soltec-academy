import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react(), tailwindcss('./tailwind.config.js')],
    define: {},
    assetsInclude: ['**/*.JPG'],
  };

  if (mode === 'development') {
    config.define.global = {};
  }

  return config;
});
