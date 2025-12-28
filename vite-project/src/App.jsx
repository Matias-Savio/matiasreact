import { Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Cart from "./componentes/Cart/Cart";
import Products from "./componentes/Products/Products";
import Computadoras from "./componentes/Categoria/Computadoras";
import NavBar from "./componentes/Navbar/Navbar";
import CartProvider from "./Context/context";

function App() {
  return (
    <CartProvider>
      <Home />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/computadoras" element={<Computadoras />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
