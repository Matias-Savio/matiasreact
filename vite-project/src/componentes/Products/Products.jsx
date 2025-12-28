import "./Products.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/context";
import { getProducts } from "../../services/firestoreService";

const Products = () => {
  const { handleAddToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProducts();
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
  }, []);

  if (loading) {
    return <div className="products-loading">Cargando productos</div>;
  }

  if (error) {
    return <div className="products-error">{error}</div>;
  }

  return (
    <>
      {products.map((product) => {
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
