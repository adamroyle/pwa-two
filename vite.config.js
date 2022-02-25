import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "PWA One",
        short_name: "PWA One",
        theme_color: "#add8e6",
        background_color: "#add8e6",
      },
    }),
  ],
});
