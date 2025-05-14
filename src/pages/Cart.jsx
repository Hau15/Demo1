import React from "react";
import Header from "../components/Header";
import "./Cart.css"; // CSS cho giỏ hàng
import { useNavigate } from "react-router-dom"; // Import navigate để chuyển hướng
import { useCart } from "../contexts/CartContext"; // Import useCart
const Cart = () => {
    const { cart, removeFromCart } = useCart(); // Lấy danh sách giỏ hàng và hàm xóa
    const navigate = useNavigate(); // Hook để chuyển hướng
    const handleBuyNow = (item) => {
        alert(`You bought ${item.quantity} x ${item.name}!`);
        // Xóa sản phẩm khỏi giỏ hàng
        removeFromCart(item.id);
        // Thêm logic xử lý thanh toán hoặc điều hướng tại đây
        navigate("/checkout", { state: { product: item } });
    };
    return (
        <div className="cart-container">
            <Header />
            <h1>Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty! 😭..............</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <p className="cart-item-name">{item.name}</p>
                                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                            </div>
                            <button onClick={() => handleBuyNow(item)} className="buy-now-button">
                                Buy Now
                            </button>
                            <button
                                onClick={() => removeFromCart(item.id)} // Gọi hàm removeFromCart từ context
                                className="remove-item-button"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;