import Header from './components/header/Header';
import Intro from './components/Intro';
import Products from './components/products/Products';
import CartModal from './components/CartModal'

function App() {
  return (
    <div className='wrap'>
      <CartModal/>
      <Header />
      <Intro />
      <Products/>
    </div>
  );
}

export default App;
