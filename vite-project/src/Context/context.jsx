import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    const productrepeat = cart.find((item) => item.id === product.id);

    if (productrepeat) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productrepeat.quanty + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };
  return (
    <CartContext.Provider value={{ cart, setCart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartProvider;
