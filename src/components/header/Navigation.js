import sprite from '../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setLiked } from '../../shop/reducers/likedReducer';

const Navigation = ({ isVisible }) => {
  const dispatcher = useDispatch();

  const totalSum = useSelector(({ cards }) =>
    cards
      .filter((card) => card.isAdded)
      .map((card) => card.price)
      .reduce((sum, price) => sum + price, 0)
  );

  const setFavoriteHandler = () => {
    dispatcher(setLiked());
  };

  return (
    <div className={`header-nav ${isVisible && 'active'}`}>
      <button className="header-nav__icon">
        <svg className="icon">
          <use href={sprite + '#cart'}></use>
        </svg>
        <span>${totalSum.toFixed(2)}</span>
      </button>
      <button onClick={setFavoriteHandler} className="header-nav__icon">
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
