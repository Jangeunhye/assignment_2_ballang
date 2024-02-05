import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import api from "../../api/api";
import styles from "./HomePage.module.scss";
import Product from "../../components/Product/Product";

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const products = await api.products.getItems();
      setProducts(products);
    };
    getProducts();
  }, []);
  return (
    <Page>
      <div className={styles.productList}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}

export default HomePage;
