import { createSlice } from '@reduxjs/toolkit';

const likedSlice = createSlice({
  name: 'liked',
  initialState: { liked: false },
  reducers: {
    setLiked(state) {
      state.liked = !state.liked
    },
  },
});

export const { setLiked } = likedSlice.actions;
export default likedSlice.reducer;