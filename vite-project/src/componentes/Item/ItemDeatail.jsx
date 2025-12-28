import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/context";
import ItemCount from "./ItemCount";
import NavBar from "../Navbar/Navbar";
import "./ItemDetail.css";
import data from "../../data.json";

const ItemDetail = () => {
  const { id } = useParams();
  const { handleAddToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and find product
    const timer = setTimeout(() => {
      const foundProduct = data.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleAdd = (quantity) => {
    if (product) {
      const productWithQuantity = { ...product, quanty: quantity };
      handleAddToCart(productWithQuantity);
    }
  };

  if (loading) {
    return (
      <>
        <NavBar />
        <div className="item-detail-loading">Cargando producto...</div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <NavBar />
        <div className="item-detail-error">Producto no encontrado</div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="item-detail-container">
        <div className="item-detail-image">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="item-detail-info">
          <h2>{product.name}</h2>
          <p className="item-detail-price">${product.price}</p>
          <p className="item-detail-category">Categoría: {product.category}</p>
          <ItemCount initial={1} min={1} max={10} onAdd={handleAdd} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
