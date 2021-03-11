export default {
    name: "subcategory",
    type: "object",
    title: "Subcategory",
    fields: [
    {
      name: "subcategory",
      type: "string",
      title: "Subcategory",
    },
    {
      name: 'bookmark',
      type: 'array',
      of: [{type: 'bookmark'}]
    }
  ],
}