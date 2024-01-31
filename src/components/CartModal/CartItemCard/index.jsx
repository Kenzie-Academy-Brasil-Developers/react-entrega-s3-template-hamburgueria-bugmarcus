import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, quantity, onDelete }) => {
   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <span>{`x${quantity}`}</span>
            <span>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
         </div>
         <button 
            aria-label="delete" 
            title="Remover item" 
            onClick={() => onDelete(product.id)}
         >
            <MdDelete size={21} />
         </button>
      </li>
   );
};
