import React, { useState } from "react";
import axios from "axios";

export default function Productlist() {
  const [formData, setFormData] = useState({
    pname: "",
    pprice: "",
    pdescription: "",
    pimage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: formData.pname,
      price: parseFloat(formData.pprice),
      description: formData.pdescription,
      image: formData.pimage, // Assuming base64 string
    };

    try {
      const response = await axios.post("http://localhost:5252/api/ProductApi", productData);
      alert("Product saved successfully!");
      console.log(response.data);
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
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    pimage: URL.createObjectURL(e.target.files[0]),
                  }))
                }
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
