import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import { SignIn, SignUp } from "@clerk/clerk-react";
import "./clerk.css";
import Checkout from "./pages/checkout/Checkout";
import Success from "./pages/success/Success";
import Footer from "./components/footer";
import Shop from "./pages/shop/Shop";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/:productId" element={<Details />} />
        <Route path="/sign-in/*" element={<SignIn />} />
        <Route path="/sign-up/*" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
