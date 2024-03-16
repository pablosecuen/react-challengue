import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { ProductProvider } from "../provider/Context.jsx";
import { CartProvider } from "../provider/CartContext.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { initMercadoPago } from "@mercadopago/sdk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

initMercadoPago("TEST-72b9a22f-fb89-4453-ab55-933a5e6dcf3a", {
  locale: "es-AR",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <ProductProvider>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <App />
          </ClerkProvider>
        </ProductProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
