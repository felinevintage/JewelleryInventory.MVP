import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Category() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypes();
  }, []);

  async function getTypes() {
    try {
      const response = await fetch("/api/items/types");
      const data = await response.json();
      setTypes(data);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="container d-flex text-uppercase fs-6 fw-semibold justify-content-center">
    <ul className="justify-content-center list-unstyled pt-4">
      {types.map((type) => (
        <li className="fs-1 pt-1 mb-1 text-success" key={type.type}>
          <Link className="text-decoration-none text-success" to={`/items?category=${type.type}`}>{type.type}</Link>
        </li>
      ))}
    </ul>
  </div>

  );
}
