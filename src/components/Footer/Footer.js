import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Ballang &copy; 2024</p>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/my-page">마이페이지</Link>
          </li>
          <li>
            <Link to="/cart">장바구니</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
