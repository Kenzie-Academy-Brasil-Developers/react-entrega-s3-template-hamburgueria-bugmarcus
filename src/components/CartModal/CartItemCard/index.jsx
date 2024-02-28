import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, quantity, setCartList, cartList }) => {
  const onRemoveItem = () => {
    const newList = cartList.filter((item) => item.product.id !== product.id);
    setCartList(newList);
  };
  return (
    <li>
      <div>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <span>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <span>{` x${quantity}`}</span>
      </div>
      <button
        aria-label="delete"
        title="Remover item"
        onClick={() => onRemoveItem()}
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
