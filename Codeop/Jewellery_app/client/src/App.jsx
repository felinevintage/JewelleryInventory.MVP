import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Category from "./pages/Category";
import Items from "./pages/Items";
import SingleItem from './pages/SingleItem';
import AddItem from "./pages/AddItem";



function App() {
    return(
    <>
    <ul>Menu
        <li>
            <Link to="/category">Category</Link>
        </li>
        <li>
            <Link to="/items">Your Items</Link>
        </li>
            <li>
            <Link to="/SingleItem">Item Info</Link>
            </li>
            <li>
            <Link to="/AddItem">Add Item</Link>
            </li>   
    </ul>

    <Routes>
        <Route path="/category" element={<Category />} />
        <Route path="/items" element={<Items />} />
        <Route path="/singleitem" element={<SingleItem />} />
        <Route path="/additem" element={<AddItem />} />
    </Routes>
    </>
    
    );
  
}

export default App
