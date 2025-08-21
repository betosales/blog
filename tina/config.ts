// tina/config.ts
import { defineConfig } from "tinacms";

// Branch de build
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // POSTS
      {
        name: "posts",
        label: "Posts",
        path: "src/content/posts",
        defaultItem: () => {
          const now = new Date().toISOString();
          return {
          draft: true,
          publishDate: now,
          updatedDate: now,
          tags: [],
          }
        },
        fields: [
          // frontmatter
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Description", required: true },

          {
            type: "object",
            name: "coverImage",
            label: "Cover Image",
            required: false,
            fields: [
              { type: "string", name: "alt", label: "Alt", required: true },
              { type: "image", name: "src", label: "Image", required: true },
            ],
          },

          { type: "boolean", name: "draft", label: "Draft" },
          { type: "string", name: "ogImage", label: "OG Image", required: false },

          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
            ui: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm:ssZ" },
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date",
            required: false,
            ui: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm:ssZ" },
          },

          // Series
          { type: "string", name: "seriesId", label: "Series ID", required: false },
          { type: "number", name: "orderInSeries", label: "Order in Series", required: false },

          // Corpo MDX
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },

      // NOTES
      {
        name: "notes",
        label: "Notes",
        path: "src/content/notes",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Description", required: false },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
            required: true,
            ui: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm:ssZ" },
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },

      // SERIES (coleção de metadados de séries)
      {
        name: "series",
        label: "Series",
        path: "src/content/series",
        format: "mdx",
        fields: [
          { type: "string", name: "seriesId", label: "Series ID", required: true },
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Description", required: true },
          { type: "boolean", name: "featured", label: "Featured" },
          // opcionalmente corpo, se quiser descrever a série em MDX:
          { type: "rich-text", name: "body", label: "Body", isBody: true, required: false },
        ],
      },
    ],
  },
});
