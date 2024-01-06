import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import replace from '@rollup/plugin-replace'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      'process.env.REACT_APP_API_KEY': JSON.stringify(
        process.env.REACT_APP_API_KEY
      ),
      'process.env.REACT_APP_API_URL': JSON.stringify(
        process.env.REACT_APP_API_URL
      ),
    }),
  ],
})
