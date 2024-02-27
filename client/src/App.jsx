import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import AddItem from "./pages/AddItem";
import Itemlist from "./pages/Itemlist";
import SingleItem from "./pages/SingleItem";

function App() {
  return (
    <>
      <ul className="nav nav-tabs fw-semibold text-uppercase fs-5 pt-3 bg-light justify-content-start border-success">
        <li className="nav-item">
          <Link
            className="nav-link active border-success"
            aria-current="page"
            to="/"
          >
            Categories
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link
            className="nav-link active border-success"
            aria-current="page"
            to="/items"
          >
            All items
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link active border-success"
            aria-current="page"
            to="/singleitem"
          >
            Single item
          </Link>
        </li> */}
        <li className="nav-item">
          <Link
            className="nav-link active border-success"
            aria-current="page"
            to="/items/new"
          >
            Add Item
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/items" element={<Itemlist />} />
        <Route path="/singleitem" element={<SingleItem />} />
        <Route path="/items/new" element={<AddItem />} />
      </Routes>
    </>
  );
}

export default App;
