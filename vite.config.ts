import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import reactRefresh from '@vitejs/plugin-react-refresh';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
  export default defineConfig({
  plugins: [react(),WindiCSS(),reactRefresh(), eslintPlugin()],
  resolve:{
    extensions:['.ts','.tsx','.js','.jsx','.json']
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  },
})
