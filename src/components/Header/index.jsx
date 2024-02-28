import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ cartList, setShowModal }) => {
  const [value, setValue] = useState("");

  const sumQuantity = () => {
    let sum = 0;
    cartList.forEach((product) => {
      sum += product.quantity;
    });
    return sum;
  };

  return (
    <>
      <header>
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <div>
          <button onClick={() => setShowModal(true)}>
            <MdShoppingCart size={21} />
            <span>{sumQuantity()}</span>
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
    </>
  );
};
