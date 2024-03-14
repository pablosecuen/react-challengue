import { createContext, useContext, useState, useEffect } from "react";
import productsData from "../data/products";
import stockPriceData from "../data/stock-price";

// Context for proper accesibility across the app components to products information
const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Products data handling for pre processing, and avoiding multiple api calls throghout components, imperative for avoiding callback hells, infinit loops, and innecesary hooks usage, improving performance across the app
    const unifiedProductsData = productsData.map((product) => {
      const unifiedSkus = product.skus.map((sku) => {
        const stockPrice = stockPriceData[sku.code];
        return { ...sku, ...stockPrice };
      });
      return { ...product, skus: unifiedSkus };
    });
    setProductData(unifiedProductsData);
  }, []);

  // Crossing information throw skus to obtain price and stock, adding information to products data structure
  const getProductInfo = (sku) => {
    return productData.find((product) => product.skus.some((skuObj) => skuObj.code === sku));
  };

  return (
    <ProductContext.Provider value={{ getProductInfo, products: productData }}>
      {children}
    </ProductContext.Provider>
  );
};

// exporting function to access the context in any component.
// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);
