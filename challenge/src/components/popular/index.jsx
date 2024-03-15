/* eslint-disable react/prop-types */

import "./popular.css";

const Popular = ({ products }) => {
  return (
    <section className="popular-container">
      <div className="popular-title">
        <h3>Populer</h3>
        <a href="/store">See all</a>
      </div>
      <div className="popular-grid">
        {products?.map((product) => (
          <a href={`/${product?.id}-${product.brand.replace(/\s+/g, "-")}`} key={product.id}>
            <article className="product-card">
              <h4 className="card-title">{product.brand}</h4>
              <div className="product-img">
                <img src={product.image} alt={product.brand} />
              </div>
              <div className="card-footer">
                {" "}
                <p>${product.skus[0].price}</p>
                <button>
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Popular;
