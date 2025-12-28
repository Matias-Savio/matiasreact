import { useContext } from "react";
import { CartContext } from "../../Context/context";

const CartTotal = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (acumular, elemento) => acumular + elemento.price * elemento.quanty,
    0
  );
  return <div className="cartTotal">Total a pagar: {total}</div>;
};

export default CartTotal;
