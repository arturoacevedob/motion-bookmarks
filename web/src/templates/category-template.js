// import React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/layout";
// import BookmarkCard from "../components/bookmark-card";
// // import SEO from '../components/seo';
//
// export const getContent = graphql`
//   {
//     allSanityContent {
//       nodes {
//         category {
//           category
//           subcategory {
//             subcategory
//             bookmark {
//               title
//               description
//               cover {
//                 asset {
//                   fluid {
//                     src
//                   }
//                 }
//               }
//               detail
//               url
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
//       {data.allSanityContent.nodes.map((content) => (
//         <div>
//           {content.category.map((category) => {
//             if (category === props) {
//               return (
//                 <div>
//                   <h3>{category.category}</h3>
//                   {category.subcategory.map((subcategory) => {
//                     return (
//                       <div>
//                         <h4>{subcategory.subcategory}</h4>
//                         <div className="card-layout">
//                           {subcategory.bookmark.map((content) => {
//                             return (
//                               <BookmarkCard key={content.id} {...content} />
//                             );
//                           })}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               );
//             }
//           })}
//         </div>
//       ))}
//     </layout>
//   );
// };
//
// export default Category;
