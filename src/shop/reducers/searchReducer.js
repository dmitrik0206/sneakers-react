import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { text: '' },
  reducers: {
    searchByDescription(state, action) {
      state.text = action.payload;
    },
  },
});

export const { searchByDescription } = searchSlice.actions;
export default searchSlice.reducer;
