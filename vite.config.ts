import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    outDir:"jimmy-ui",
    lib:{
      entry: path.resolve(__dirname,'./src/components/muk-ui/index.ts'),
      name:'jimmy-ui',
      fileName:'jimmy-ui'
    },
    rollupOptions:{
      external :['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    }
  }
})
