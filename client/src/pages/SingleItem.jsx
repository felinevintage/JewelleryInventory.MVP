import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


  export default function Singleitem() {
    const [singleItem, setSingleItem] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [deleted, setDeleted] = useState(false);
    
    const id = searchParams.get("item");
    
    useEffect(() => {
      getItem();
    }, [id]);
    
    const getItem = async function () {
      console.log(id)
      try {
        const response = await fetch(`/api/items/${id}`);
        const data = await response.json();
        setSingleItem(data);
      } catch (err) {
        console.log(err);
      }
    };

    async function deleteItem() {
      try {
        const response = await fetch(`/api/items/${id}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          setDeleted(true);
        } else {
          console.log("Error deleting item");
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function handleClick(id) {
      await deleteItem(id);
      
      
    }
    
    if (deleted) {
      return (
        <div className="container text-center">
          <p className="text-uppercase text-success fw-semibold fs-2">Item deleted!</p>
        </div>
      );
    }

     return (
        <div>
        <div className="container d-flex text-uppercase fs-6 fw-semibold justify-content-center">
       <ul className="justify-content-center list-unstyled pt-4">
        {singleItem.map((singleItem) => (
        <li className="text-decoration-none text-success fs-1 pt-1 mb-1 text-success" key={singleItem.id}>
          {singleItem.type}
          <li>{singleItem.era}</li>
          <li>{singleItem.maker}</li>
          <li>{singleItem.material}</li>
          <li>£{singleItem.paid}</li>
          <li>{singleItem.description}</li>
              </li>
          ))}
        </ul> 
      </div>
      <div className="container justify-content-center">
        <button className="btn fw-semibold text-uppercase fs-6 pt-2 bg-light border-success" 
        onClick={() => handleClick(singleItem.id)}>Delete Item</button>
        </div>
      </div>
      );
    
  }
   
  