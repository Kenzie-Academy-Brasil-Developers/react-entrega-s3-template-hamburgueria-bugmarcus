import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import styles from "./HomePage.module.scss";
import axios from "axios";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => {
        setProductList(response.data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  const onAddToCart = (product) => {
    setCartList((prevCartList) => {
      const existingItem = prevCartList.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevCartList.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartList, { product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <>
      <Header cartList={cartList} setShowModal={setShowModal} />
      <main className={styles.main}>
        <ProductList productList={productList} onAddToCart={onAddToCart} />
        {showModal && (
          <CartModal
            cartList={cartList}
            setShowModal={setShowModal}
            clearCart={clearCart}
            setCartList={setCartList}
          />
        )}
      </main>
    </>
  );
};
