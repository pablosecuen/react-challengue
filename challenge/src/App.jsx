import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Details from "./pages/details/details";

function App() {
  return (
    <Routes>
      {/* Define las rutas utilizando Route */}
      <Route path="/" element={<Home />} />
      <Route path="/:productId" element={<Details />} />
      {/* Esta ruta atrapará cualquier otra URL que no coincida con las anteriores */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
