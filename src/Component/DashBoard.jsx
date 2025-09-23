import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function DashBoard() {
  const [products, setProducts] = useState([]);

  // Fetch products
  const fetchProducts = () => {
    axios
      .get("http://localhost:8001/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const removeItem = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      axios
        .delete(`http://localhost:8001/products/${id}`)
        .then(() => {
          alert(`Product "${name}" deleted.`);
          fetchProducts(); // Refresh product list
        })
        .catch((err) => {
          console.error("Delete error:", err);
        });
    }
  };

  return (
    <div className="DashBoard d-flex flex-wrap gap-3 p-3">
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <Card style={{ width: "18rem" }} key={product.id}>
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>
                {product.name} || {product.brand}
              </Card.Title>
              <Card.Text>
                <strike>M.R.P: ₹{product.price}.00</strike>
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="warning">Update</Button>
                <Button
                  variant="danger"
                  onClick={() => removeItem(product.id, product.name)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}
