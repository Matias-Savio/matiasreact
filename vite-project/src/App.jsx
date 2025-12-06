import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import Detalle from "./pages/Detalle";
import Item from "./pages/Item";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria" element={<Categoria />} />

        <Route path="/item" element={<Item />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;
