import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial = 1, min = 1, max = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (onAdd) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button
          className="count-button"
          onClick={decrement}
          disabled={count <= min}
        >
          -
        </button>
        <span className="count-display">{count}</span>
        <button
          className="count-button"
          onClick={increment}
          disabled={count >= max}
        >
          +
        </button>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
