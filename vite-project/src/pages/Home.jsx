import { useEffect, useState } from "react";
import { Header } from "../componentes/header";
import ProductosCard from "../componentes/ProductosCard";

function Home() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProductos(data);
  };

  useEffect(() => {
    getProductos();
  }, []);

  const ProductosCard = productos.map((productos) => {
    return (
      <li key={productos.id}>
        <ProductosCard productos={productos}></ProductosCard>
      </li>
    );
  });

  return (
    <>
      <Header></Header>
      <section>
        <h2>Productos</h2>
        <ul>{ProductosCard}</ul>
      </section>
    </>
  );
}

export default Home;
