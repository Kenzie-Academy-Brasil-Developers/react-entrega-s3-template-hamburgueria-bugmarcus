import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, onAddToCart }) => {
  return (
    <ul>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </ul>
  );
};
