import React from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

export const CartModal = ({ cartList, setShowModal, onRemoveItem, clearCart }) => {
    const total = cartList.reduce((prevValue, item) => {
        return prevValue + (item.product.price * item.quantity);
    }, 0);

    return createPortal(
        <div role="dialog">
            <div>
                <h2>Carrinho de compras</h2>
                <button aria-label="close" title="Fechar" onClick={() => setShowModal(false)}>
                    <MdClose size={21} />
                </button>
            </div>
            <div>
                <ul>
                    {cartList.map((item) => (
                        <CartItemCard 
                            key={item.product.id} 
                            product={item.product} 
                            quantity={item.quantity}
                            onDelete={onRemoveItem}
                        />
                    ))}
                </ul>
            </div>
            <div>
                <div>
                    <span>Total</span>
                    <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                </div>
                <button onClick={clearCart}>Remover todos</button>
            </div>
        </div>,
        document.body
    );
};
