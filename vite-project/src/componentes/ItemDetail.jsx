import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../async";

function ItemDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getSingleProduct(id).then((data) => setProducto(data));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.image} width="150" />
      <p>{producto.description}</p>
      <p>${producto.price}</p>
    </div>
  );
}

export default ItemDetail;
