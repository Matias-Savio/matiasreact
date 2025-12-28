import { Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import Cart from "./componentes/Cart/Cart";
import Products from "./componentes/Products/Products";
import Computadoras from "./componentes/Categoria/Computadoras";
import Main from "./componentes/Main/Main";
import CartProvider from "./Context/context";

function App() {
  return (
    <CartProvider>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/computadoras" element={<Computadoras />} />
        </Routes>
      </Main>
    </CartProvider>
  );
}

export default App;
