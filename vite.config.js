import {defineConfig} from "vite";
import { resolve } from 'path'

export default defineConfig({
    server: {
        open: 'src/404.html',
    },
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                nested: resolve(__dirname, 'src/404.html'),
            },
        },
    },
})