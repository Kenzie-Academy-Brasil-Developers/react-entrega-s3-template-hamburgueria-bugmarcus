import React from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard"; // Assuming this component exists

export const CartModal = ({ cartList, setShowModal }) => {
    const total = cartList.reduce((prevValue, product) => {
        return prevValue + product.price;
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
                    {cartList.map((product) => (
                        <CartItemCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
            <div>
                <div>
                    <span>Total</span>
                    <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                </div>
                <button>Remover todos</button>
            </div>
        </div>,
        document.body
    );
};
