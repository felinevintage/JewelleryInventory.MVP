import React from "react";
import { NavLink, useSearchParam } from "react-router-dom";

  const [singleType, setSingleType] = useSearchParam()

//   const getSingleType = async function () {
//     try{
//     const response = await fetch(`/api/items/type/${text}`, {
//       method: "GET",
//       headers: {
//       "Content-type": "application/json",
//       }, 
//     });
//     const data = await response.json();
//     setSingleType(data);
//    } catch (err) {
//     console.log(err)
//    }
// }

// return (
//     <div>
//         <ul>
//         {singleType.map((type) => (
//       <li key={singleType.id} >{singleType}</li>
//     ))}
//         </ul>
//     </div>
// )
