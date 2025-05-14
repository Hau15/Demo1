import React, { useState, useEffect } from "react";
import "./MainSection.css";
import { Link } from "react-router-dom";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg"
];

const MainSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto chuyển slide mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-section">
      <div className="sidebar">
        <div className="sidebar-header">Introduce</div>
        <ul className="category-list">
          <li>Đồ chơi LEGO là đồ chơi xếp hình bằng nhựa cao cấp dành cho trẻ em từ 1,5 tuổi trở lên do Tập đoàn LEGO (Đan Mạch) sản xuất. Với phương châm "chỉ có chất lượng tốt nhất mới là đủ", LEGO cam kết mang đến cho trẻ em những sản phẩm đồ chơi an toàn với chất lượng cao nhất.</li>          
        </ul>
      </div>

      <div className="carousel-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    </div>
  );
};

export default MainSection;
