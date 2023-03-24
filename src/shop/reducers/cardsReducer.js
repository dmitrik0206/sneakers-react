import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    setCards(state, action) {
      state.push(
        ...action.payload.map((card) => ({
          ...card,
          isLiked: false,
          isFavorite: false,
        }))
      );
    },
    setLiked(state, action) {
      const numOfCard = state.findIndex((card) => card.id === action.payload);
      state[numOfCard].isLiked = !state[numOfCard].isLiked;
    },
  },
});

export const { setCards, setLiked } = cardsSlice.actions;
export default cardsSlice.reducer;
