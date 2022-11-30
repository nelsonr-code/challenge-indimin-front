import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'url'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// '@': path.resolve(dirname, './src'),
			'@assets': path.resolve(dirname, './src/assets'),
			'@styles': path.resolve(dirname, './src/assets/styles'),
			'@components': path.resolve(dirname, './src/components'),
			'@Hooks': path.resolve(dirname, './src/Hooks'),
			'@config': path.resolve(dirname, './src/config'),
			'@helpers': path.resolve(dirname, './src/helpers'),
			'@Services': path.resolve(dirname, './src/Services'),
		},
	},
})
