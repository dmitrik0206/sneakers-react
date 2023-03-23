import sprite from '../../assets/sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { openCart } from '../../shop/reducers/cartReducer';
import { getSumPrices } from '../../tools/tool';

const Navigation = ({ isVisible }) => {
  const dispatcher = useDispatch();

  const totalSum = useSelector(({ cards }) => getSumPrices(cards));

  return (
    <div className={`header-nav ${isVisible && 'active'}`}>
      <button
        onClick={() => dispatcher(openCart())}
        className="header-nav__icon"
      >
        <svg className="icon">
          <use href={sprite + '#cart'}></use>
        </svg>
        <span>${totalSum.toFixed(2)}</span>
      </button>
      <button className="header-nav__icon">
        <svg className="icon">
          <use href={sprite + '#favorite'}></use>
        </svg>
      </button>
      <button className="header-nav__icon">
        <svg className="icon">
          <use href={sprite + '#user'}></use>
        </svg>
      </button>
    </div>
  );
};
export default Navigation;
