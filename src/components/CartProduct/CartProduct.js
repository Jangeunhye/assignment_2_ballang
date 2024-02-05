import React, { useState } from "react";
import styles from "./CartProduct.module.scss";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  updateProducts,
} from "../../store/reducers/cart.reducer";
function CartProduct({ product, quantity }) {
  console.log(quantity);
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();

  const handleUpdateCart = (e) => {
    const newQuantity = parseInt(e.target.value);
    setCount(newQuantity);
    dispatch(
      updateProducts({ product: product.product, quantity: newQuantity })
    );
  };
  return (
    <div className={styles.productContainer}>
      <img
        src={product.product.img_i}
        alt="상품이미지"
        className={styles.img}
      />
      <div className={styles.productBox}>
        <p className={styles.brandName}>{product.product.brandnm}</p>
        <p className={styles.productName}>{product.product.goodsnm}</p>
        <p className={styles.price}>{product.product.price}</p>
        <input
          className={styles.count}
          type="number"
          min={1}
          value={count}
          onChange={(e) => handleUpdateCart(product, e)}
        />
        <button
          onClick={() => {
            dispatch(removeProduct(product.product.id));
          }}
          className={styles.removeButton}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
