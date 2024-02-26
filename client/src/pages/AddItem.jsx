import React from "react";
import { useEffect, useState } from "react";

const initial = {
  type: "",
  image: "",
  era: "",
  maker: "",
  colour: "",
  material: "",
  paid: 0,
  description: "",
  for_sale: 0,
};

export default function AddItem() {
  const [item, setItem] = useState({ ...initial });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (response.ok) {
        setItem({ ...initial });
      } else {
        console.log("Failed to submit");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (e) => {
    setItem((input) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="container d-flex mb-4 justify-content-center">
        <form onSubmit={handleSubmit} className="form-inline">
          <div className="form-group pt-4">
            <label className="form-label pt-3">Type</label>
            <select
              onChange={handleChange}
              value={item.type}
              name="type"
              className="form-select"
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="Necklace">Necklace</option>
              <option value="Earrings">Earrings</option>
              <option value="Brooch">Brooch</option>
              <option value="Bracelet">Bracelet/Bangle</option>
              <option value="Ring">Ring</option>
              <option value="DressClip">Dress/Fur Clip</option>
              <option value="Misc">Misc</option>
            </select>
          </div>
          <div className="form-group mb-6">
            <label className="form-label pt-4">Picture</label>
            <input
              onChange={handleChange}
              value={item.image}
              name="image"
              type="file"
              className="form-control"
            />
          </div>
          <div className="form-group mb-6">
            <label className="pt-4">Era</label>
            <input
              onChange={handleChange}
              value={item.era}
              name="era"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group mb-6">
            <label className="pt-4">Maker</label>
            <input
              onChange={handleChange}
              value={item.maker}
              name="maker"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group mb-6">
            <label className="pt-4">Colour</label>
            <select
              onChange={handleChange}
              name="colour"
              type="text"
              value={item.colour}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="Clear">Clear</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Pink">Pink</option>
              <option value="Purple">Purple</option>
              <option value="Yellow">Yellow</option>
              <option value="Orange">Orange</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Grey">Grey</option>
              <option value="Red">Red</option>
              <option value="Copper">Copper</option>
            </select>
          </div>
          <div className="form-group mb-6">
            <label className="pt-4">Material</label>
            <input
              onChange={handleChange}
              value={item.material}
              name="material"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group mb-6">
            <label className="pt-4">Price Paid</label>
            <input
              onChange={handleChange}
              value={item.paid}
              name="paid"
              type="number"
              className="form-control"
            />
          </div>
          <div className="form-group mb-6">
            <label className="pt-4">Description</label>
            <textarea
              onChange={handleChange}
              value={item.description}
              name="description"
              type="text"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group mb-6">
            <label className="pt-4 mb-4">For Sale?</label>
            <input
              onChange={handleChange}
              value={item.for_sale}
              name="for_sale"
              type="checkbox"
              className="mb-6"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
