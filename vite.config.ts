import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
  
//   envPrefix: 'ARVO_',
//   envDir: __dirname
// })

export default defineConfig(({mode}) => {
  console.log(mode);
  require('dotenv').config({ path: `./.env` });
  return {
    plugins: [react()],
  }
});