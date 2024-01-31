import styles from "./ProductCard.module.scss";

export const ProductCard = ({ product, onAddToCart }) => {
  return (
    <li className={styles.card}>
      <img className={styles.img} src={product.img} alt={product.name} />
      <div className={styles.info}>
        <h3>{product.name}</h3>
        <span>{product.category}</span>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => onAddToCart(product)}>Adicionar</button>
      </div>
    </li>
  );
};
