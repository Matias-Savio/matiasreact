import "./Products.css";
import data from "../../data.json";

const Products = () => {
  const handleAddToCart = (product) => {
    console.log("Agregando al carrito:", product);
  };

  return (
    <>
      {data.map((product) => {
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
