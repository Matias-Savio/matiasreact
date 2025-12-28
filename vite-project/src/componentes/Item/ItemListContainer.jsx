import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/context";
import ItemCount from "./ItemCount";
import "./ItemListContainer.css";
import data from "../../data.json";

const ItemListContainer = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useContext(CartContext);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      let filteredProducts = data;

      if (category) {
        filteredProducts = data.filter(
          (product) => product.category === category
        );
      }

      setProducts(filteredProducts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [category]);

  const handleAdd = (product, quantity) => {
    const productWithQuantity = { ...product, quanty: quantity };
    handleAddToCart(productWithQuantity);
  };

  if (loading) {
    return <div className="item-list-loading">Cargando productos...</div>;
  }

  if (products.length === 0) {
    return <div className="item-list-empty">No hay productos disponibles</div>;
  }

  return (
    <div className="item-list-container">
      {products.map((product) => (
        <div className="item-card" key={product.id}>
          <Link to={`/item/${product.id}`}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
          </Link>
          <ItemCount
            initial={1}
            min={1}
            max={10}
            onAdd={(quantity) => handleAdd(product, quantity)}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
