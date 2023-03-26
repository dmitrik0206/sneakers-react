import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { text: '', searchIds: [] },
  reducers: {
    searchInDescription(state, action) {
      state.text = action.payload;
    },
    resetSearch(state) {
      state.text = '';
    },
    setSearchIds(state, action) {
      state.searchIds = action.payload;
    },
  },
});

export const { searchInDescription, resetSearch, setSearchIds } =
  searchSlice.actions;
export default searchSlice.reducer;
