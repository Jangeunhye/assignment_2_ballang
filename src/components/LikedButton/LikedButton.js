import React from "react";
import { useDispatch } from "react-redux";
import { updateProducts } from "../../store/reducers/cart.reducer";
import styles from "./LikedButton.module.scss";
import cart from "../../assets/images/cart.png";

function LikedButton({ product, quantity = 1 }) {
  const dispatch = useDispatch();
  const handleAddItem = (e) => {
    dispatch(updateProducts({ product: product, quantity: quantity }));
    alert("상품이 담겼습니다.");
  };

  return (
    <div>
      <button className={styles.button} onClick={handleAddItem}>
        <img className={styles.cartIcon} src={cart} alt="addItem" />
      </button>
    </div>
  );
}

export default LikedButton;
