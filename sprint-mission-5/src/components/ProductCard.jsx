function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'} alt={product.name} />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p className="price">{product.price.toLocaleString()}원</p>
      </div>
    </div>
  );
}

export default ProductCard;
