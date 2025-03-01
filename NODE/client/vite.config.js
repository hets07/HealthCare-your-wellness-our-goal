import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [react()],
 server: {
  host: '0.0.0.0',
  port: process.env.PORT || 5173,
  allowedHosts: ['healthcare-your-wellness-our-goal-4.onrender.com']
},
  compression({
            algorithm: 'gzip',  
            ext: '.gz',          
            deleteOriginFile: false, 
            threshold: 1024    
        })
})
