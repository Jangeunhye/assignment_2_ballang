import React from "react";
import { useSelector } from "react-redux";

import styles from "./CartPage.module.scss";
import Page from "../../components/Page";
import CartProduct from "../../components/CartProduct/CartProduct";

function CartPage() {
  const cartProducts = useSelector((state) => state.cart.likedProducts);

  return (
    <Page>
      <div className={styles.container}>
        {cartProducts.map((item) => (
          <CartProduct
            key={item.product.id}
            product={item}
            quantity={item.quantity}
          />
        ))}
      </div>
    </Page>
  );
}

export default CartPage;
