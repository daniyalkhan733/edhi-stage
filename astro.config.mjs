import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://localhost:4321/",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  // adapter: cloudflare(),
  // output: "server",
  redirects: {
    "/services/honorary-volantry-service": {
      status: 301,
      destination: "/services/honorary-voluntary-service",
    },
    "/activities/high-ways-project": {
      status: 301,
      destination: "/activities/highways-project",
    },
    "/activities/destitue-homes": {
      status: 301,
      destination: "/activities/destitute-homes",
    },
  },
  integrations: [
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  build: {
    format: "file",
  },
});
