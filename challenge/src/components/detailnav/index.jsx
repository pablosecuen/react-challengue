import { useEffect, useState } from "react";
import ShopCart from "../modal/shop-cart";
import "./detailnav.css";
const DetailNav = () => {
  const [cart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const handleGoBack = () => {
    window.history.back();
  };

  useEffect(() => {
    // Actualizar el localStorage cada vez que el estado del carrito cambie
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <nav className="detail-navbar">
      <div className="detail-container">
        {" "}
        <div className="back-icon" onClick={handleGoBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="5" y="11" width="15" height="1.5" fill="#323232" />
            <path
              d="M11 5.20001L4 11.7L11 18.2"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h5>Detail</h5>
        {/*    <div className="dots-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="5.5" cy="11.5" r="1.5" fill="#323232" />
            <circle cx="12.5" cy="11.5" r="1.5" fill="#323232" />
            <circle cx="19.5" cy="11.5" r="1.5" fill="#323232" />
          </svg>
        </div> */}
        <ShopCart cart={cart} />
      </div>
    </nav>
  );
};

export default DetailNav;
