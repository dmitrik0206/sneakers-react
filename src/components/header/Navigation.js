import { useDispatch } from 'react-redux';
import { openCart } from '../../shop/reducers/cartReducer';

const Navigation = () => {
  const dispatcher = useDispatch();

  return (
    <div className="header-nav">
      <button
        onClick={() => dispatcher(openCart())}
        className="header-nav__icon"
      >
        <svg className="icon">
          <use href="images/sprite.svg#cart"></use>
        </svg>
        <span>${1299}</span>
      </button>
      <button className="header-nav__icon">
        <svg className="icon">
          <use href="images/sprite.svg#favorite"></use>
        </svg>
      </button>
      <button className="header-nav__icon">
        <svg className="icon">
          <use href="images/sprite.svg#user"></use>
        </svg>
      </button>
    </div>
  );
};
export default Navigation;
