import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), lit()],
  output: "hybrid",
  adapter: netlify()
});