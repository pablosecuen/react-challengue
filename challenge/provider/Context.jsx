import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";

// Context for proper accesibility across the app components to products information
const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await axiosInstance.get("/api/stock-price/list");

        setProductData(products.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        throw new Error(error.message || "Error fetching product data");
      }
    };

    fetchData();
  }, []);

  // Crossing information throw skus to obtain price and stock, adding information to products data structure
  const fetchProductData = async (id) => {
    try {
      const response = await axiosInstance.get(`/api/stock-price/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product data:", error);
      return null;
    }
  };

  /*   const createPreferenceAsync = async (body) => {
    try {
      const response = await axiosInstance.post(`/api/payments/create-preference`, body);
      setPreferenceId(response.data);
    } catch (error) {
      console.error("Error creating preference:", error);
      throw error;
    }
  }; */

  return (
    <ProductContext.Provider value={{ fetchProductData, products: productData }}>
      {children}
    </ProductContext.Provider>
  );
};

// exporting function to access the context in any component.
// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);
