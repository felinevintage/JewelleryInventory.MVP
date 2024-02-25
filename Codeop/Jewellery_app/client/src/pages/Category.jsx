import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Category() {
  const [type, setType] = useState([]);
  

  useEffect(() => { 
    fetch("/api/items")
    .then((res) => res.json())
    .then((json) => {

      getTypes(json);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
   
 async function getTypes() {
  try{
  const response = await fetch('/api/items/type', {
    method: "GET",
    headers: {
    "Content-type": "application/json",
    }, 
  });
  const data = await response.json();
  setType(data);
 } catch (err) {
  console.log(err)
 }
}

// async function getTypeList() {
//   try{
//   const response = await fetch('/api/items/type', {
//     method: "GET",
//     headers: {
//     "Content-type": "application/json",
//     }, 
//   });
//   const data = await response.json();
//   setType(data);
//  } catch (err) {
//   console.log(err)
//  }
// }

// let [searchParams, setSearchParams] = useSearchParams();

//   function handleSubmit(event) {
//     event.preventDefault();
//     // The serialize function here would be responsible for
//     // creating an object of { key: value } pairs from the
//     // fields in the form that make up the query.
//     let params = serializeFormQuery(event.target);
//     setSearchParams(params);
//   }
 
  return (
    <div className="container d-flex text-uppercase fs-6 fw-semibold justify-content-center">
    <ul className="justify-content-center list-unstyled pt-4">
      {type.map((type) => (
        <li className="fs-1 pt-1 mb-1 text-success" key={type.type}>{type.type}</li>
      ))}     
      </ul>

    
    
    
   </div>
   
  )


}

{/* return <NavLink to={`/type?itemlist=${type.text}`} key={type.type}>{type.type}</NavLink>
  // })} */}