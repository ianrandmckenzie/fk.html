import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }) => {
  const isProduction = command === 'build'

  return {
    plugins: [
      tailwindcss(),
    ],
    publicDir: 'public',
    build: {
      outDir: isProduction ? 'docs' : 'devdocs',
      emptyOutDir: true,
      copyPublicDir: true,
      rollupOptions: {
        input: {
          main: './index.html',
          'security-policy': './security-policy.html'
        }
      }
    },
    server: {
      // Development server configuration
      port: 3000,
      open: true,
    },
    preview: {
      // Preview server configuration
      port: 3001,
      outDir: 'docs',
    }
  }
})
