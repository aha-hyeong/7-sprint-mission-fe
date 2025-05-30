function ProductCard({ image, title, price, likes }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}원</p>
      <span className="jogaakrkdnfdaklsjdklfansmdnlakjdlkfajs;dljl"> ❤️가나다라마바사아자차카타파하 {likes}</span>
    </div>
  );
}

export default ProductCard;
