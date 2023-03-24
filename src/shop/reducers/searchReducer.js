import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { text: '' },
  reducers: {
    searchByDescription(state, action) {
      state.text = action.payload;
    },
    resetSearch(state) {
      state.text = '';
    },
  },
});

export const { searchByDescription, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
