import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Skillbridge",
        short_name: "Skillbridge",
        description: "Education Website Template for a Educational Brand",
        theme_color: "#FF9500",
        background_color: "#E4E4E7",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            purpose: "maskable",
            sizes: "48x48",
            src: "/icon/maskable_icon_x48.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "72x72",
            src: "/icon/maskable_icon_x72.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "96x96",
            src: "/icon/maskable_icon_x96.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "128x128",
            src: "/icon/maskable_icon_x128.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "192x192",
            src: "/icon/maskable_icon_x192.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "384x384",
            src: "/icon/maskable_icon_x384.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "/icon/maskable_icon_x512.png",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "icon",
              expiration: {
                maxEntries: 10,
              },
            },
          },
        ],
      },
    }),
  ],
});
