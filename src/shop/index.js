import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './reducers/cardsReducer';
import searchReducer from './reducers/searchReducer';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: { cards: cardsReducer, search: searchReducer, cart: cartReducer },
});

export default store;
