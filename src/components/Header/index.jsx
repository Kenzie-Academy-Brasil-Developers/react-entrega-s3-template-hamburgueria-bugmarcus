import React, { useState } from 'react';
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { CartModal } from "../CartModal/index";

export const Header = ({ cartList }) => {
    const [value, setValue] = useState("");
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <header>
                <img src={Logo} alt="Logo Kenzie Burguer" />
                <div>
                    <button onClick={() => setShowModal(true)}>
                        <MdShoppingCart size={21} />
                        <span>0</span>
                    </button>
                    <form>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button type="submit">
                            <MdSearch size={21} />
                        </button>
                    </form>
                </div>
            </header>
            {showModal && <CartModal cartList={cartList} setShowModal={setShowModal} />}
        </>
    );
};
