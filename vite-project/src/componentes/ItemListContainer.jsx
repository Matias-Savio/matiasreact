import { useEffect, useState } from "react";
import { getProducts } from "../async";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProductos(data));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      {productos.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <img src={prod.image} width="100" />
          <p>${prod.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;
