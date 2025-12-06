function ProductosCard(props) {
  const { productos } = props;
  return (
    <div>
      <h3>{productos.title}</h3>
      <img src="{productos.image}" width="100" />
      <p>{productos.price}</p>
    </div>
  );
}

export default ProductosCard;
