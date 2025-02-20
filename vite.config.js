import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-redux': 'node_modules/react-redux',
      '@reduxjs/toolkit': 'node_modules/@reduxjs/toolkit',
      'formik': 'node_modules/formik',
      'yup': 'node_modules/yup'
    }
  },
  build: {
    rollupOptions: {
      external: ['formik', 'react-redux', 'yup', '@reduxjs/toolkit']
    }
  }
});
