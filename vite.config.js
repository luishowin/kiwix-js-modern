import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        open: 'www/index.html?appCache=false'
    },
    // Pre-bundle these deps on server start so Vite doesn't optimize mid-load
    // (mid-load optimization forces a full reload, which presented as the
    //  "page loads naked, styled only after refresh" bug).
    optimizeDeps: {
        include: ['core-js']
    }
});
