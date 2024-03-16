/* eslint-disable react/prop-types */
import { useState } from "react";
import "./details.css";
import DetailsFooter from "../details-footer";
import { Toaster } from "sonner";
const ProductDetails = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!product) {
    return null;
  }
  const { information } = product;

  const truncatedDescription = information?.slice(0, 120);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleProductSelect = (sku) => {
    setSelectedProduct({
      ...product,
      skus: sku,
    });
  };

  return (
    <article className="product-container">
      <div>
        <img src={product?.image} alt={product?.title} />
      </div>
      <div className="props-container">
        <div className="branding">
          <h3>{product?.brand}</h3>
          <span>${selectedProduct?.price || product?.skus[0].price}</span>
        </div>
        <div className="origin">
          <p>Origin: {product?.origin} / </p>
          <p> stock: {product?.stock}</p>
        </div>
        <div className="description-sect">
          <p className="title-desc">Description</p>
          <p className="details-desc">
            {showFullDescription ? information : truncatedDescription}
            {information?.length > 120 && (
              <button onClick={toggleDescription} className="read-more-but">
                {showFullDescription ? "Read less" : "...Read more"}
              </button>
            )}
          </p>
        </div>
        <div className=" ">
          <p className="details-size">Size</p>
          <div className="button-map">
            {product?.skus.map((sku) => (
              <button
                key={sku.name}
                className="details-button"
                onClick={() => handleProductSelect(sku)}
              >
                {sku.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <DetailsFooter selectedProduct={selectedProduct} />
    </article>
  );
};

export default ProductDetails;
