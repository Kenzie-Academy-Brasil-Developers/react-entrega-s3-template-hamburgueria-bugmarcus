import React from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./CartModal.module.scss";

export const CartModal = ({
  cartList,
  setShowModal,
  setCartList,
  clearCart,
}) => {
  const total = cartList.reduce((prevValue, item) => {
    return prevValue + item.product.price * item.quantity;
  }, 0);

  return createPortal(
    <div className={styles.modalBackdrop} role="dialog">
      <div className={styles.modalTitle}>
        <h2 className={styles.titleText}>Carrinho de compras</h2>
        <button
          aria-label="close"
          title="Fechar"
          onClick={() => setShowModal(false)}
        >
          <MdClose size={21} />
        </button>
      </div>
      <div className={styles.backgroundCard}>
        <ul>
          {cartList.map((item) => (
            <CartItemCard
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
              setCartList={setCartList}
              cartList={cartList}
            />
          ))}
        </ul>
      </div>
      <div>
        <div>
          <span>Total </span>
          <span>
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <button onClick={clearCart}>Remover todos</button>
      </div>
    </div>,
    document.body
  );
};
