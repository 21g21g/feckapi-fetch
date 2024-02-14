import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    item: [],
    count: 0,
  },
  reducers: {
    addtoCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.count++;
      } else {
        state.item.push({
          id: newItem.id,
          image: newItem.image,
          price: newItem.price,
          description: newItem.description,
          title: newItem.title,
          category: newItem.category,
          count: 1,
        });
      }
      state.count++;
    },
    removefromCart(state, action) {
      const id = action.payload;
      const existingItem = state.item.find((item) => item.id === id);
      if (existingItem) {
        existingItem.count--;
      }
      if (existingItem.count === 0) {
        state.item.pop();
      }
    },
  },
});

export const shopSliceActions = shopSlice.actions;
export default shopSlice;
