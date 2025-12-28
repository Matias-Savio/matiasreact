import data from "../../data.json";
import "./Computadoras.css";
import { useContext } from "react";
import { CartContext } from "../../Context/context";

const Computadoras = () => {
  const { setCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      {data
        .filter((product) => product.category === "Computadoras")
        .map((product) => {
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

export default Computadoras;
