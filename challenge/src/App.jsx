import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import { SignIn, SignUp } from "@clerk/clerk-react";
import "./clerk.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:productId" element={<Details />} />
      <Route path="/sign-in/*" element={<SignIn />} />
      <Route path="/sign-up/*" element={<SignUp />} />
    </Routes>
  );
}

export default App;
