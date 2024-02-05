import React, { useState } from "react";
import Page from "../../components/Page";
import { useLocation } from "react-router";
import LikedButton from "../../components/LikedButton";
import { set } from "immutable";
import styles from "./ProductDetailPage.module.scss";

function ProductDetailPage() {
  const location = useLocation();
  const product = location.state.product;
  const [count, setCount] = useState(1);
  return (
    <Page>
      <hr />
      <section className={styles.container}>
        <img src={product.img_i} alt="상품이미지" className={styles.img} />
        <div className={styles.info}>
          <p className={styles.brandName}>{product.brandnm}</p>
          <p className={styles.productName}>
            {product.goodsnm} | 발란코드 [{product.goodsno}]
          </p>
          <hr className={styles.hr} />
          <div className={styles.detail}>
            <dl>
              <dt className={`${styles.title} ${styles.del}`}>상품 금액</dt>
              <dd>{product.consumer.toLocaleString()}원</dd>
            </dl>
            <dl>
              <dt className={`${styles.title} `}>판매가</dt>
              <dd className={styles.strong}>
                {product.standard_price.toLocaleString()}원
              </dd>
            </dl>
            <dl>
              <dt className={`${styles.title}`}>최대혜택가</dt>
              <dd className={`${styles.strong} ${styles.important}`}>
                {product.goods_price.toLocaleString()}원
              </dd>
              <dd className={styles.red}>{product.sale_percent}%</dd>
              <dd>
                <button className={styles.couponButton}>
                  {(
                    product.standard_price - product.goods_price
                  ).toLocaleString()}
                  원 할인 쿠폰받기
                </button>
              </dd>
            </dl>
            <dl>
              <dt className={styles.title}>적립금</dt>
              <dd>최대 {(product.goods_price * 0.01).toLocaleString()}원</dd>
            </dl>
            <dl>
              <dt className={styles.title}>무이자할부</dt>
              <dd>최대 12개월</dd>
            </dl>
            <dl>
              <dt className={styles.title}>배송비</dt>
              <dd>무료</dd>
            </dl>
            <dl>
              <dt className={styles.title}>도착예정</dt>
              <dd>
                <span className={styles.strong}>02/05 (월)</span> 도착예정
              </dd>
            </dl>
          </div>
          <hr className={styles.hr} />
          <div className={styles.optionBox}>
            <div className={`${styles.optionLabel} `}>
              옵션선택 <button className={styles.sizeChart}>Size chart</button>
            </div>
            <select className={styles.select} name="option" id="option">
              <option value="">옵션(옵션명)</option>
              {product.option.map((option) => (
                <option key={option["size"]}>{option["size"]}</option>
              ))}
            </select>
          </div>
          <input
            className={styles.count}
            type="number"
            min={1}
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
          <div className={styles.buttonContainer}>
            <button className={styles.buyButton}>BUY NOW</button>
            <div className={styles.likedButton}>
              <LikedButton
                className={styles.LikedButton}
                product={product}
                quantity={count}
              />
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default ProductDetailPage;
