module.exports = {
  branch: "main",
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
};
