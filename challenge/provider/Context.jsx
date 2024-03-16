import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";
import axios from "axios";

// Context for proper accesibility across the app components to products information
const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [preferenceId, setPreferenceId] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await axiosInstance.get("/api/stock-price/list");
        console.log(products.data);
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

  const createPreferenceAsync = async (body) => {
    try {
      const response = await axiosInstance.post(`/api/payments/create-preference`, body);
      setPreferenceId(response.data);
    } catch (error) {
      console.error("Error creating preference:", error);
      throw error;
    }
  };
  const accessToken = import.meta.env.VITE_MERCADOPAGO_ACCESS_TOKEN;

  const fetchPaymentInfoById = async (paymentId) => {
    try {
      const response = await axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setPaymentInfo(response.data);
    } catch (error) {
      console.error("Error fetching payment info:", error);
      throw error;
    }
  };

  return (
    <ProductContext.Provider
      value={{
        createPreferenceAsync,
        fetchProductData,
        products: productData,
        preferenceId,
        paymentInfo,
        fetchPaymentInfoById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// exporting function to access the context in any component.
// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);
