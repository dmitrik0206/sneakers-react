import Header from './components/header/Header';
import Intro from './components/Intro';
import Products from './components/products/Products';
import CartModal from './components/cart/CartModal';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setCards } from './shop/reducers/cardsReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://641ded32945125fff3d940ee.mockapi.io/sneakers')
      .then(({ data }) => {
        dispatch(setCards(data));
      })
      .catch((e) =>
        console.log(`load data from server finished with error: ${e.message}`)
      );
  }, [dispatch]);

  const cartIsVisible = useSelector(({ cart }) => cart.isVisible);

  return (
    <div className="wrap">
      {cartIsVisible && <CartModal />}
      <Header />
      <Intro />
      <Products />
    </div>
  );
}

export default App;
