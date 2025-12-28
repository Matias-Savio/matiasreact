import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/context";
import ItemCount from "./ItemCount";
import "./ItemListContainer.css";
import {
  getProducts,
  getProductsByCategory,
} from "../../services/firestoreService";

const ItemListContainer = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleAddToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let fetchedProducts;

        if (category) {
          fetchedProducts = await getProductsByCategory(category);
        } else {
          fetchedProducts = await getProducts();
        }

        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const handleAdd = (product, quantity) => {
    const productWithQuantity = { ...product, quanty: quantity };
    handleAddToCart(productWithQuantity);
  };

  if (loading) {
    return <div className="item-list-loading">Cargando productos...</div>;
  }

  if (error) {
    return <div className="item-list-error">{error}</div>;
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
