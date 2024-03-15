import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import { SignIn, SignUp } from "@clerk/clerk-react";
import "./clerk.css";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:productId" element={<Details />} />
      <Route path="/sign-in/*" element={<SignIn />} />
      <Route path="/sign-up/*" element={<SignUp />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
