// src/redux/slices/categorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    clickedCategory: "Boots",
  },
  reducers: {
    setClickedCategory: (state, action) => {
      state.clickedCategory = action.payload;
    },
  },
});

export const { setClickedCategory } = categorySlice.actions;
export default categorySlice.reducer;
