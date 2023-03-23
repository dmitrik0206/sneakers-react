import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { isVisible: false },
  reducers: {
    openCart(state) {
      state.isVisible = true;
    },
    closeCart(state) {
      state.isVisible = false;
    }
  },
});

export const { openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;