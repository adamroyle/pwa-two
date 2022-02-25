import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "PWA Two",
        short_name: "PWA Two",
        theme_color: "#feb6c1",
        background_color: "#feb6c1",
      },
    }),
  ],
});
