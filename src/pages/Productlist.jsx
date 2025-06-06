import React, { useState } from "react";
import axios from "axios";

export default function Productlist() {
  const [formData, setFormData] = useState({
    pname: "",
    pprice: "",
    pdescription: "",
    pimage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("Name", formData.pname);
  data.append("Price", formData.pprice);
  data.append("Description", formData.pdescription);
  data.append("Image", formData.pimage); // correct field for file

  try {
    const response = await axios.post(
      "https://localhost:7221/api/HealthApi/add-product",data,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert("Product added in DB !");
  } catch (error) {
    console.error("Error saving product:", error);
    alert("Failed to save product.");
  }
};


  return (
    <>
      <div id="createProduct-sec">
        <div className="Plist-div">
          <div className="createProduct-div">
            <h2 style={{ marginTop: "0px", marginBottom: "0px", textAlign: "center" }}>
              CREATE PRODUCTS
            </h2>
            <form
              onSubmit={handleSubmit}
              id="contact-form"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                id="name"
                name="pname"
                placeholder="Enter product name"
                value={formData.pname}
                onChange={handleChange}
                required
              />

              <label htmlFor="price">Product Price</label>
              <input
                type="text"
                id="price"
                name="pprice"
                placeholder="Enter product price"
                value={formData.pprice}
                onChange={handleChange}
                required
              />

              <label htmlFor="description">Product Description</label>
              <textarea
                id="description"
                name="pdescription"
                rows="5"
                placeholder="Enter product description"
                value={formData.pdescription}
                onChange={handleChange}
                required
              ></textarea>

              <label htmlFor="image">Product Image</label>
              <input
                type="file"
                id="image"
                name="pimage"
                accept="image/*"
                onChange={(e) => {
                 const file = e.target.files[0];
                 if (file) {
                   setFormData((prev) => ({
                     ...prev,
                     pimage: file,
                   }));
                 }
                }}
                required
              />
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
