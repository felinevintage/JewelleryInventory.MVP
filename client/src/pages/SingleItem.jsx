import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


  export default function Singleitem() {
    const [singleItem, setSingleItem] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    
    const id = searchParams.get("item");
    
    useEffect(() => {
      getItem();
    }, [id]);
    
    const getItem = async function () {
      console.log(id)
      try {
        const response = await fetch(`/api/items/id=${id}`);
        const data = await response.json();
        setSingleItem(data);
      } catch (err) {
        console.log(err);
      }
    };
    

     return (

        <div>
        <ul>
        {singleItem.map((singleItem) => (
            <li key={singleItem.id}>
              {singleItem.type}, {singleItem.era}
            </li>
          ))}
        </ul>
      </div>
      );
    
  }
   
  