import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import AddItem from "./pages/AddItem";
import Itemlist from "./pages/Itemlist";
import SingleItem from "./pages/SingleItem";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-3 container justify-content-center">
      <button className="btn fw-semibold text-uppercase fs-6 pt-2 bg-light border-success" onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

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
      <Navigation />
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
