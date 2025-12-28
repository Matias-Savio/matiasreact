import NavBar from "../Navbar/Navbar";
import "./Cart.css";
import { CartContext } from "../../Context/context";
import CartElement from "./CartElement";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <>
      <NavBar />
      {Cart.length > 0 ? (
        <>
          <CartElement />
          <CartTotal />
        </>
      ) : (
        <h2 className="cart-message-center">El Carrito esta vacio</h2>
      )}
    </>
  );
};

export default Cart;
