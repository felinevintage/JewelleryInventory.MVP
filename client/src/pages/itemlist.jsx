import React from "react";
import { NavLink, useSearchParam } from "react-router-dom";
import { useEffect, useState } from "react";

function ItemList () {

  const [singleType, setSingleType] = useState()

  useEffect(() => { 
    fetch("/api/items")
    .then((res) => res.json())
    .then((json) => {

      getSingleType(json);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const getSingleType = async function () {
    try{
    const response = await fetch(`/api/items/type/(text)`, {
      method: "GET",
      headers: {
      "Content-type": "application/json",
      }, 
    });
    const data = await response.json();
    setSingleType(data);
   } catch (err) {
    console.log(err)
   }


return (
    <div>
        <ul>
        {singleType.map((text) => (
      <li key={singleType.id} >{singleType}</li>
    ))}
        </ul>
    </div>
)
}
}