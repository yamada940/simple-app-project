import { Client } from "@notionhq/client"


console.log(import.meta.env.VITE_NOTION_KEY);
const notion = new Client({ auth: import.meta.env.VITE_NOTION_KEY });
const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID;

// async function addItem(text) {
//   try {
//     const response = await notion.pages.create({
//       parent: { database_id: databaseId },
//       properties: {
//         title: {
//           title:[
//             {
//               "text": {
//                 "content": text
//               }
//             }
//           ]
//         }
//       },
//     })
//     console.log(response)
//     console.log("Success! Entry added.")
//   } catch (error) {
//     console.error(error.body)
//   }
// }

// addItem("Yurts in Big Sur, California");