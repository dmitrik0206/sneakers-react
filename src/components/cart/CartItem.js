import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../shop/reducers/cardsReducer';

const CartItem = ({ id, description, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartModal-prod">
      <img
        className="cartModal-prod__img"
        src={`images/products/card-${id}.jpg`}
        alt="card-img"
      ></img>
      <div className="cartModal-prod__info">
        <div className="cartModal-prod__desc">{description}</div>
        <div className="cartModal-prod__price">${price}</div>
      </div>
      <button
        onClick={() => dispatch(removeFavorite(id))}
        className="cartModal-prod__close"
      >
        <svg className="icon">
          <use href="images/sprite-card.svg#close"></use>
        </svg>
      </button>
    </div>
  );
};
export default CartItem;
