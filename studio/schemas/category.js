export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
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
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
