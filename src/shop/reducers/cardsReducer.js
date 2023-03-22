import { createSlice } from '@reduxjs/toolkit';
import sneakers from '../../assets/cards.json';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: sneakers,
  reducers: {
    likedCard(state, action) {
      const likedId = action.payload;
      const currentCard = state.find((card) => card.id === likedId);
      currentCard.isLiked = !currentCard.isLiked;
      state = [...state.filter((card) => card.id !== likedId), currentCard];
    },
    addToCart(state, action) {
      const cardId = action.payload;
      const currentCard = state.find((card) => card.id === cardId);
      currentCard.isAdded = !currentCard.isAdded;
      state = [...state.filter((card) => card.id !== cardId), currentCard];
    },
    resetAddedCard(state) {
      state = state.map((card) => (card.isAdded = false));
    },
  },
});

export const { likedCard, addToCart, resetAddedCard, search } =
  cardsSlice.actions;
export default cardsSlice.reducer;
