import React, { createContext, useContext, useState } from "react";

// Tạo Context
const CartContext = createContext();

// Provider để quản lý trạng thái giỏ hàng
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Cập nhật số lượng nếu sản phẩm đã tồn tại
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Thêm sản phẩm mới
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Hàm lấy tổng số lượng sản phẩm trong giỏ hàng
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook để sử dụng Cart Context
export const useCart = () => {
  return useContext(CartContext);
};