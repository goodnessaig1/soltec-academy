// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default {
  plugins: [react(), tailwindcss('./tailwind.config.js')],
};
