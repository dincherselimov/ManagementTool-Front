// import React, { useState } from "react";
// import { addItem } from "../api/addItem";

// export default function HomePage() {
//   const [itemName, setItemName] = useState("");
//   const [itemDescription, setItemDescription] = useState("");
//   const [itemSize, setItemSize] = useState("");

//   const handleSubmit = async (event:any) => {
//     event.preventDefault();
//     try {
//       const responseData = await addItem(itemName, itemDescription, itemSize);
//       console.log(responseData);
//     } catch (error) {
//       console.error("Error:");
//     }
//   };

//   return (
//     <section>
//       <div>Test Your API HERE</div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} style={{ color: "red" }} />
//           <input type="text" placeholder="Item Description" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} style={{ color: "black" }} />
//           <input type="text" placeholder="Item Size" value={itemSize} onChange={(e) => setItemSize(e.target.value)} style={{ color: "black" }} />
//           <button type="submit" style={{ color: "black" }}>Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// }
