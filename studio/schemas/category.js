export default {
  name: "category",
  type: "object",
  title: "Category",
  fields: [
    {
      name: "category",
      type: "string",
      title: "Category",
    },
    {
      name: "slug",
      type: "string",
      title: "Slug",
    },
    {
      name: "subcategory",
      type: "array",
      of: [{ type: "subcategory" }],
    },
  ],
};
