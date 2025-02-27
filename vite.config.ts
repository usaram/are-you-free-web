import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // server: {
  //   cors: {
  //     origin: ["*"],
  //     methods: ["GET", "POST"],
  //     allowedHeaders: ["Content-Type"],
  //   },
  //   allowedHosts: ["*"], //added this
  // },
})
