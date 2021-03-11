export default {
  name: "content",
  type: "document",
  title: "Content",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "category",
      type: "array",
      of: [{ type: "category" }],
    },
  ],
};
