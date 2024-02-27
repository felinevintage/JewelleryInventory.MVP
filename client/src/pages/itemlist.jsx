import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Itemlist() {
  const [items, setItems] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async function () {
    try {
      const response = await fetch(`/api/items?category=${category}`);
      const data = await response.json();
      setItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container d-flex text-uppercase fs-6 fw-semibold justify-content-center">
      <ul className="justify-content-center list-unstyled pt-4">
        {items.map((item) => (
          <li className="fs-1 pt-1 mb-1 text-success" key={item.id}>
          <Link className="text-decoration-none text-success" to={`/singleitem?item=${item.id}`}>{item.type}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
