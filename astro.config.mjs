import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://franco-ortiz.com",
  integrations: [tailwind(), icon()],
  build: {
    assets: "assets",
  },
});
