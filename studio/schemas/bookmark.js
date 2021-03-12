export default {
  name: "bookmark",
  type: "object",
  title: "Bookmark",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: Rule => Rule.max(100).warning(`A title shouldn't be more than 100 characters.`)
    },
    {
      name: "cover",
      type: "image",
      title: "Cover",
    },
    {
      name: "detail",
      type: "string",
      title: "Detail",
    },
    {
      name: "url",
      type: "string",
      title: "URL",
    },
    // {
    //   name: 'category',
    //   type: 'reference',
    //   to: [
    //     {
    //       type: 'category',
    //     }
    //   ]
    // },
  ],
};
