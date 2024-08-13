
import path from 'path'
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        tsconfigPaths(),
    ],
    esbuild: {
        loader: 'tsx',
        include: [
            'resources/**/*.js',
            'resources/**/*.ts',
            'resources/**/*.jsx',
            'resources/**/*.tsx',
            'node_modules/**/*.js',
            'node_modules/**/*.ts',
            'node_modules/**/*.jsx',
            'node_modules/**/*.tsx',
        ],
        exclude: [
            'node_modules',
            'dist',
        ],
    },
})
