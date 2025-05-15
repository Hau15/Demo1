import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css"; // Import file CSS
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");


  // Thay thế fetch bằng axios
  useEffect(() => {
    axios.get("/data/products.json")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      categoryFilter === "" || product.category === categoryFilter;
    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="product-list-container">
      <Header />
      <Banner />
      <h1 className="product-list-title">Product List</h1>

      {/* Thanh tìm kiếm và bộ lọc */}
      <div className="product-list-filter-container">
        <p>ʕ•ᴥ•ʔ</p>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="category-dropdown"
        >
          <option value="">All Categories</option>
          <option value="car">Car</option>
          <option value="moto">Moto</option>
          <option value="architecture">Architecture</option>
          <option value="starwars">Star Wars</option>
          <option value="decor">Decorate</option>
          <option value="disney">Disney</option>
        </select>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="product-list-product-grid">
        {filteredProducts.map((product) => (
          <div className="product-list-product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-list-product-image"
            />
            <div className="product-list-product-info">
              <h2 className="product-list-product-name">{product.name}</h2>
              <p className="product-list-product-price">{product.price}</p>
              <Link to={`/products/${product.id}`} className="details-link">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
     <Footer />
    </div>
  );
}

export default ProductList;
