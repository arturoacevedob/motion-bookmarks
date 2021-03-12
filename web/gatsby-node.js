// const path = require("path");
//
// // create pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       allSanityContent {
//         nodes {
//           category {
//             slug
//           }
//         }
//       }
//     }
//   `);
//   result.data.allSanityContent.nodes.forEach((node) => {
//     node.category.forEach((category) => {
//       createPage({
//         path: `/${category.slug}`,
//         component: path.resolve(`src/templates/category-template.js`),
//         context: {
//           slug: category.slug,
//         },
//       });
//     })
//   });
// };