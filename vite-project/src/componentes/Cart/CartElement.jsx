import { useContext } from "react";
import { CartContext } from "../../Context/context";
import CartItem from "./CartItem";

const CartElement = () => {
  const { cart, setCart } = useContext(CartContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });
    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <div className="product-card-container" key={product.id}>
        <img src={product.img} alt="product-card" />
        <h3>{product.name}</h3>
        <CartItem product={product} />
        <h4>{product.price * product.quanty}</h4>
        <h5
          className="cart-delete-product"
          onClick={() => deleteProduct(product.id)}
        >
          ❌
        </h5>
      </div>
    );
  });
};

export default CartElement;
