import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'redux-persist/integration/react': '/node_modules/redux-persist/integration/react',
    },
  },
});
