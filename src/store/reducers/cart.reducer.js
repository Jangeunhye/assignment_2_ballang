import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    likedProducts: [],
  },
  name: "cart",
  reducers: {
    updateProducts(state, action) {
      let index = current(state.likedProducts).findIndex(
        (product) => product.product.id === action.payload.product.id
      );

      if (index === -1) {
        state.likedProducts.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      } else {
        state.likedProducts[index].quantity += action.payload.quantity;
      }
    },
    removeProduct(state, action) {
      const productIdToRemove = action.payload;
      state.likedProducts = state.likedProducts.filter(
        (product) => product.product.id !== productIdToRemove
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { updateProducts, removeProduct } = cartSlice.actions;
