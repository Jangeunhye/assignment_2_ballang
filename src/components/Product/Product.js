import React from "react";
import styles from "./Product.module.scss";
import LikedButton from "../LikedButton";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className={styles.productContainer}>
      <Link
        to={`/detail/${product.id}`}
        state={{ product: product }}
        className={styles.productBox}
      >
        <img className={styles.img} src={product.img_i} alt="상품이미지" />{" "}
        <div
          className={`${styles.label} ${
            product.totstock > 3 ? null : styles.hidden
          }`}
        >
          {product.totstock <= 3 ? <span>품절임박</span> : null}
        </div>
        <dl className={styles.info}>
          <dt className={styles.brandName}>{product.brandnm}</dt>
          <dd className={styles.detailInfo}>
            <p className={styles.productName}>{product.goodsnm}</p>
            <div className={styles.priceContainer}>
              <div className={styles.priceBox}>
                <span className={styles.price}>
                  {product.price.toLocaleString()}
                </span>
                원
              </div>
              <div className={styles.sale_percent}>{product.sale_percent}%</div>
            </div>
          </dd>
        </dl>
      </Link>
      <div className={styles.buttonContainer}>
        <LikedButton product={product} />
      </div>
    </div>
  );
}

export default Product;
