/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect, useMemo } from "react";
import { toast } from "sonner";

const initialState = { cart: [], totalCost: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalCost: state.totalCost + action.payload.skus.price * action.payload.quantity,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.skus.code !== action.payload),
        totalCost:
          state.totalCost - state.cart.find((item) => item.skus.code === action.payload).skus.price,
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.skus.code === action.payload ? { ...item, quantity: action.quantity } : item
        ),
        totalCost:
          state.totalCost +
          (action.quantity -
            state.cart.find((item) => item.skus.code === action.payload).quantity) *
            state.cart.find((item) => item.skus.code === action.payload).skus.price,
      };
    default:
      return state;
  }
};

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || initialState.cart;
  const [state, dispatch] = useReducer(cartReducer, { cart: storedCart, totalCost: 0 });

  const addToCart = (selectedProduct) => {
    const existingProduct = state.cart.find((item) => item.skus.code === selectedProduct.skus.code);

    if (existingProduct) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: selectedProduct.skus.code,
        quantity: existingProduct.quantity + 1,
      });
      toast.success("Quantity updated in cart");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: { ...selectedProduct, quantity: 1 } });
      toast.success("Item added successfully to cart");
    }
  };

  const removeFromCart = (productsku) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productsku });
  };

  const updateQuantity = (productsku, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: productsku, quantity });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const contextValue = useMemo(
    () => ({
      cart: state.cart,
      totalCost: state.totalCost,
      addToCart,
      removeFromCart,
      updateQuantity,
    }),
    [state.cart, state.totalCost]
  );

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
