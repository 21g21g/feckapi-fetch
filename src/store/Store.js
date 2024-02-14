import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./ShopReducer";

const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
  },
});

export default store;
