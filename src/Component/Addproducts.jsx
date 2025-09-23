import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";

function AddProducts() {
  const [product, setProduct] = useState({
    pname: "",
    price: "",
    brand: "",
    
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8001/products", product)
      .then((res) => {
        console.log(res);
        toast.success("Product Added");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Product not added");
      });
  }

  return (
    <>
      <div className="container d-flex justify-content-center mt-3">
        <fieldset
          className="p-4 border rounded"
          style={{ backgroundColor: "white" }}
        >
          <h1 className="d-flex font-weight-bold justify-content-center">
            Add Product
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group m-3">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                name="pname"
                value={product.pname}
                onChange={handleChange}
                placeholder="Enter Product Name"
                required
              />

              <label>Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Enter price"
                required
              />

              <label>Brand</label>
              <select
                className="form-control"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                required
              >
                <option value="">Select a Brand</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Google">Google</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Oppo">Oppo</option>
                <option value="Vivo">Vivo</option>
                <option value="Realme">Realme</option>
                <option value="Sony">Sony</option>
                <option value="Nokia">Nokia</option>
              </select>

              <label>Add Image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                value={product.image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group m-3">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Enter description"
                required
              />
            </div>
            <button
              type="submit"
              className="btn m-3"
              style={{
                backgroundColor: "#3674B5",
                color: "white",
                fontWeight: "700",
              }}
            >
              Submit
            </button>
            <p className="ms-3">
              Already have an account? <Link to="/admin-login">Log In</Link>
            </p>
          </form>
        </fieldset>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default AddProducts;
