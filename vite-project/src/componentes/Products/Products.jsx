import { useState, useEffect } from "react";

const Products = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((Response) => Response.json())
      .then((data) => setProducts(data));
  }, []);
  return <div>Products</div>;
};
export default Products;
