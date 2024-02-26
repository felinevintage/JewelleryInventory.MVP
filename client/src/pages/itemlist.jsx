import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
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
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.type}</li>
        ))}
      </ul>
    </div>
  );
}
