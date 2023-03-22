import Header from './components/header/Header';
import Intro from './components/Intro';
import Products from './components/products/Products'

function App() {
  return (
    <div className='wrap'>
      <Header />
      <Intro />
      <Products/>
    </div>
  );
}

export default App;
