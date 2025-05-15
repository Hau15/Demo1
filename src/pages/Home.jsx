import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import axios from 'axios';
import './Home.css'; // Import CSS cho Home

function Home() {
  const [products, setProducts] = useState([]);

  

  // Thay thế fetch bằng axios
  useEffect(() => {
    axios.get("/data/products.json")
      .then((response) => {
        // Giới hạn chỉ lấy 4 sản phẩm
        setProducts(response.data.slice(0, 4));
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <MainSection />
      <div className="home-container">
        <h1 className="home-title">Sản phẩm nổi bật</h1>
        <div className="home-products-grid">
          {products.map((product) => (
            <div className="home-product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="home-product-image"
              />
              <div className="home-product-info">
                <h2 className="home-product-name">{product.name}</h2>
                <p className="home-product-price">{product.price}</p>
                <Link to={`/products/${product.id}`} className="details-link">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link to="/products" className="view-all-link">
          View All Products
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;