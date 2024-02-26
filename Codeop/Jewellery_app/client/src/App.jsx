import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Category from "./pages/Category";
import AddItem from "./pages/AddItem";
import itemlist from "./components/itemlist";



function App() {
    return(
    <>
    {/* <ul>Menu
        <li>
            <Link to="/category">Category</Link>
        </li>
            <li>
            <Link to="/AddItem">Add Item</Link>
            </li>   
    </ul> */}

    <ul className="nav nav-tabs fw-semibold text-uppercase fs-5 pt-3 bg-light justify-content-start border-success">
  <li className="nav-item">
    <Link className="nav-link active border-success" aria-current="page" href="#" 
    to="/category">Categories
    </Link> 
  </li>
  <li className="nav-item">
  
  <Link className="nav-link active border-success" aria-current="page" href="#" 
  to="/AddItem">Add Item
  </Link>
  </li>
  
</ul>

    <Routes>
        <Route path="/category" element={<Category />} />
        <Route path="/item" element={<itemlist />} />
        {/* <Route path="/singleitem" element={<SingleItem />} /> */}
        <Route path="/additem" element={<AddItem />} />
    </Routes>
    </>
    
    );
  
}

export default App
