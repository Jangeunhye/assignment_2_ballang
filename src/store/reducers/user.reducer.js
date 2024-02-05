import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: {
    name: null,
    age: null,
    nickName: null,
    gender: null,
    job: null,
  },
  name: "user",
  reducers: {
    updateUserInfo(state, action) {
      return { ...state, ...action.payload };
    },
    initUserId(state, action) {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { initUserId, updateUserInfo } = userSlice.actions;
