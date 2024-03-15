import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import { SignIn, SignUp } from "@clerk/clerk-react";
import "./clerk.css";

function App() {
  return (
    <Routes>
      {/* Define las rutas utilizando Route */}
      <Route path="/" element={<Home />} />
      <Route path="/:productId" element={<Details />} />
      <Route path="/sign-in/*" element={<SignIn />} />
      <Route path="/sign-up/*" element={<SignUp />} />
      {/* Esta ruta atrapará cualquier otra URL que no coincida con las anteriores */}
    </Routes>
  );
}

export default App;
