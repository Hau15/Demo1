import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext"; // Import useCart từ CartContext
import Header from "../components/Header";
import Banner from "../components/Banner";
import CustomAlert from "../components/CustomAlert"; // Import CustomAlert
import Footer from "../components/Footer";
import "./ProductDetail.css"; // Import file CSS
import axios from 'axios';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart(); // Lấy hàm addToCart từ CartContext
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState(""); // Trạng thái cho ảnh chính
    const [cartQuantity, setCartQuantity] = useState(1); // Trạng thái số lượng sản phẩm
    const [alert, setAlert] = useState(null); // Trạng thái cho alert


    // Thay thế fetch bằng axios
    useEffect(() => {
        axios.get("/data/products.json")
            .then((response) => {
                const foundProduct = response.data.find((p) => p.id === parseInt(id));
                setProduct(foundProduct);
                if (foundProduct) {
                    setMainImage(foundProduct.image); // Đặt ảnh chính ban đầu
                }
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
                setAlert({
                    message: "Error loading product. Please try again later.",
                    type: "error",
                });
            });
    }, [id]);

    // Hàm xử lý thêm vào giỏ hàng
    const handleAddToCart = () => {
        if (!product) return;

        addToCart(product, cartQuantity);

        setAlert({
            message: `Successfully added ${cartQuantity} x ${product.name} to the cart!`,
            type: "success",
        });

        // Tự động ẩn alert sau 3 giây
        setTimeout(() => setAlert(null), 3000);
    };

    // Hàm xử lý mua hàng
    const handleBuyNow = () => {
        addToCart(product, cartQuantity);

        // Thông báo mua hàng thành công
        setAlert({
            message: `🎉 Purchase confirmed! You bought ${cartQuantity} x ${product.name}. Redirecting to checkout...`,
            type: "success",
        });

        // Đợi 3 giây trước khi chuyển hướng
        setTimeout(() => {
            setAlert(null);
            navigate("/checkout");
        }, 3000);
    };

    if (!product) {
        return <p className="not-found">Product not found!</p>;
    }

    return (
        <div>
            <div className="product-detail-container">
                <Header />
                <Banner />

                {/* Hiển thị CustomAlert nếu có */}
                {alert && (
                    <CustomAlert
                        message={alert.message}
                        type={alert.type}
                        onClose={() => setAlert(null)}
                    />
                )}

                <div className="product-detail-content">
                    {/* Cột bên trái: Hình ảnh */}
                    <div className="product-images">
                        <img
                            src={mainImage} // Hiển thị ảnh chính
                            alt={product.name}
                            className="product-main-image"
                        />
                        <div className="gallery-images">
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${product.name} - ${index + 1}`}
                                    className={`gallery-image ${image === mainImage ? "active" : ""
                                        }`} // Thêm class "active" nếu ảnh đang hiển thị là ảnh chính
                                    onClick={() => setMainImage(image)} // Khi click ảnh, đặt làm ảnh chính
                                />
                            ))}
                        </div>
                    </div>

                    {/* Cột bên phải: Thông tin sản phẩm */}
                    <div className="product-info">
                        <h1 className="product-name">{product.name}</h1>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">Price: {product.price}</p>

                        {/* Chọn số lượng sản phẩm */}
                        <div className="product-quantity">
                            <label htmlFor="quantity">Quantity: </label>
                            <input
                                type="number"
                                id="quantity"
                                min="1"
                                value={cartQuantity}
                                onChange={(e) => setCartQuantity(parseInt(e.target.value) || 1)}
                            />
                        </div>

                        {/* Nút chức năng */}
                        <div className="product-actions">
                            <button onClick={handleAddToCart} className="add-to-cart-button">
                                Add to Cart 🛒
                            </button>
                            <button onClick={handleBuyNow} className="buy-now-button">
                                Buy Now
                            </button>
                        </div>

                        <Link to="/products" className="back-link">
                            ◀ Back to Products
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;
