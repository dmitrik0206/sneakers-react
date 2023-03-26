import { useDispatch } from 'react-redux';
import useGetTotalSum from '../../hooks/useGetTotalSum';
import { openCart } from '../../shop/reducers/cartReducer';

const Navigation = () => {
  const dispatcher = useDispatch();
  const totalSum = useGetTotalSum().toFixed(2);

  return (
    <div className="header-nav">
      <button
        onClick={() => dispatcher(openCart())}
        className="header-nav__icon"
      >
        <svg className="icon">
          <use href="images/sprite.svg#cart"></use>
        </svg>
        <span>${totalSum}</span>
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
