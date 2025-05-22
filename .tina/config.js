import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "98047762-ce0f-4653-bbbc-ae1fa20e4ff3", // from TinaCloud
  token: process.env.TINA_GITHUB_TOKEN, // from your .env.local file

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "posts",
        label: "Posts",
        path: "content/posts",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "rich-text", name: "body", label: "Body" },
        ],
      },
    ],
  },
});

