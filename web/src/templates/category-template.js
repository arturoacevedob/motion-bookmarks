// import React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/layout";
// import BookmarkCard from "../components/bookmark-card";
// // import SEO from '../components/seo';
//
// export const getContent = graphql`
//   {
//     allSanityCategory {
//       nodes {
//         slug
//         category
//         subcategory {
//           subcategory
//           bookmark {
//             title
//             description
//             detail
//             url
//             cover {
//               asset {
//                 fluid {
//                   src
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
//
// const Category = ({data}) => {
//   return (
//     <layout>
//       <div>
//       {data.allSanityCategory.nodes.map((category) => (
//         if (category === props) {
//           return (
//             <div>
//               <h3>{category.category}</h3>
//               {category.subcategory.map((subcategory) => {
//                 return (
//                   <div>
//                     <h4>{subcategory.subcategory}</h4>
//                     <div className="card-layout">
//                       {subcategory.bookmark.map((content) => {
//                         return (
//                           <BookmarkCard key={content.id} {...content} />
//                         );
//                       })}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           );
//         };
//       ))}
//       </div>
//     </layout>
//   );
// };
//
// export default Category;
