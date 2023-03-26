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
    setFavorite(state, action) {
      const numOfCard = state.findIndex((card) => card.id === action.payload);
      state[numOfCard].isFavorite = !state[numOfCard].isFavorite;
    },
    removeFavorite(state, action) {
      const numOfCard = state.findIndex((card) => card.id === action.payload);
      state[numOfCard].isFavorite = false;
    },
  },
});

export const { setCards, setLiked, setFavorite, removeFavorite } = cardsSlice.actions;
export default cardsSlice.reducer;
