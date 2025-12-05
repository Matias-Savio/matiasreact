import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Categoria() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${id}`)
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, [id]);

  return (
    <div>
      <h1>Categoría: {id}</h1>

      {productos.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <img src={prod.image} width="100" />
          <p>${prod.price}</p>
          <Link to={`/item/${prod.id}`}>Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}

export default Categoria;
