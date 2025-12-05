import { Routes, Route } from "react-router-dom";
import { Header } from "./componentes/header";
import { Footer } from "./componentes/footer";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { Categoria } from "./componentes/Categoria";
import { ItemDetail } from "./componentes/ItemDetail";
import { Main } from "./componentes/Main";

function App() {
  return (
    <>
      <Header />
      <Main />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<Categoria />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
