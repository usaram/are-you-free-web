import path from 'node:path'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

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
