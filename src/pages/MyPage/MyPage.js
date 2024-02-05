import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import styles from "./MyPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../store/reducers/user.reducer";
function MyPage() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const [formData, setFormData] = useState({
    name: user.name || "",
    age: user.age || "",
    nickName: user.nickName || "",
    gender: user.gender || "",
    job: user.job || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnClick = (e) => {
    dispatch(updateUserInfo(formData));
  };

  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        <div className={styles.container}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">이름:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={formData.name}
            />
            <br />
            <label htmlFor="age">나이:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="nickName">닉네임:</label>
            <input
              type="text"
              id="nickName"
              name="nickName"
              value={formData.nickName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="gender">성별:</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="job">직업:</label>
            <input
              type="text"
              id="job"
              name="job"
              value={formData.job}
              onChange={handleChange}
            />
            <br />
            <button type="submit" onClick={handleOnClick}>
              저장
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default MyPage;
