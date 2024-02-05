import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import styles from "./SignInPage.module.scss";
import Page from "../../components/Page";
import { useDispatch } from "react-redux";
import { initUserId } from "../../store/reducers/user.reducer";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const { isLoggedIn, signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    if (!username || !password)
      return alert("아이디 또는 비밀번호를 입력해 주세요");

    if (username === "udemy" && password === "udemy") {
      signIn();
      dispatch(initUserId({ key: "id", value: username }));
      navigate("/");
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <Page>
      {isLoggedIn ? (
        <div>로그인 성공</div>
      ) : (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            placeholder="아이디를 입력해 주세요"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder="비밀번호를 입력해 주세요"
          />

          <button className={styles.button} onClick={handleClickSignIn}>
            로그인하기
          </button>
        </form>
      )}
    </Page>
  );
}

export default SignInPage;
