export type Product = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

type ProductProps = {
  onAddToCart: (id: string) => void;
} & Product;
export default function Product({
  id,
  image,
  title,
  price,
  description,
  onAddToCart,
}: ProductProps) {
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => onAddToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
