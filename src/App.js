import Header from './components/header/Header';
import Intro from './components/Intro';
import Products from './components/products/Products';
import CartModal from './components/cart/CartModal';
import { useSelector } from 'react-redux';

function App() {
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
