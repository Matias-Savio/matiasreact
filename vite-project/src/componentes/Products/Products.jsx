import "./Products.css";
import data from "../../data.json";
import { useContext } from "react";
import { CartContext } from "../../Context/context";

const Products = () => {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <>
      {data.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button onClick={() => handleAddToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Products;
