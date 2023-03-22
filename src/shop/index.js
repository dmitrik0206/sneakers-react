import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './reducers/cardsReducer';
import searchReducer from './reducers/searchReducer';
import likedReducer from './reducers/likedReducer';

const store = configureStore({
  reducer: { cards: cardsReducer, search: searchReducer, liked: likedReducer },
});

export default store;
