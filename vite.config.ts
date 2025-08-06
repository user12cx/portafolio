import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path"; // ¡Importa esto para los alias!

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuración clave para Render (y entornos de producción):
  server: {
    host: '0.0.0.0', // Acepta conexiones externas
    port: 5173,       // Puerto fijo (debe coincidir con el de Render)
    strictPort: true, // Evita que Vite cambie el puerto automáticamente
  },
  preview: {
    host: '0.0.0.0',  // Misma configuración para 'npm run preview'
    port: 5173,
    strictPort: true,
  }
});