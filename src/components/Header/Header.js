import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import { useSelector } from "react-redux";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const id = useSelector((state) => state.user.id);
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        BALLANG
      </Link>
      <nav>
        <ul>
          {isLoggedIn ? (
            <li className={styles.dropdown}>
              {id && <div className={styles.id}>{`${id}님`}</div>}

              <div className={styles.dropdownContent}>
                <Link className={styles.myPage} to={"/my-page"}>
                  마이페이지
                </Link>

                <button className={styles.logOut} onClick={logOut}>
                  로그아웃
                </button>
              </div>
            </li>
          ) : (
            <li>
              <Link to="/sign-in">로그인하기</Link>
            </li>
          )}
          <li>
            <Link to={isLoggedIn ? "/cart" : "sign-in"}>장바구니</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
