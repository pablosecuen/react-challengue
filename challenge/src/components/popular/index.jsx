/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./popular.css";
import { useCart } from "../../../provider/CartContext";

const Popular = ({ products }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    const modifiedProduct = { ...product, skus: product.skus[0] };
    addToCart(modifiedProduct);
  };
  return (
    <section className="popular-container">
      <div className="popular-title">
        <h3>Populer</h3>
        <Link to="/shop">See all</Link>
      </div>
      <div className="popular-grid">
        {products?.map((product) => (
          <article className="product-card" key={product.id}>
            <Link to={`/${product?.id}-${product.brand.replace(/\s+/g, "-")}`}>
              <h4 className="card-title">{product.brand}</h4>
              <div className="product-img">
                <img src={product.image} alt={product.brand} />
              </div>
            </Link>
            <div className="card-footer">
              {" "}
              <p>${product.skus[0].price}</p>
              <button onClick={() => handleAddToCart(product)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect x="11" y="5" width="2" height="14" rx="1" fill="white" />
                  <rect
                    x="5"
                    y="13"
                    width="2"
                    height="14"
                    rx="1"
                    transform="rotate(-90 5 13)"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Popular;
