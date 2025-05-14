import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const Checkout = () => {
    const location = useLocation();
    const { product } = location.state || {}; // Lấy thông tin sản phẩm từ state

    if (!product) {
        return <p>No product selected for checkout.</p>;
    }

    return (
        <div>
            <Header />
            <h1 style={{marginTop: "100px"}}>🎊 Cảm ơn bạn đã mua {product.name}</h1>
        </div>
    );
};

export default Checkout;