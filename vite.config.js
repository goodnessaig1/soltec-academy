// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [react(), tailwindcss('./tailwind.config.js')],
    define: {},
  };

  if (mode === 'development') {
    config.define.global = {};
  }

  return config;
});

// export default {
//   plugins: [react(), tailwindcss('./tailwind.config.js')],
//    define: {}
// };
