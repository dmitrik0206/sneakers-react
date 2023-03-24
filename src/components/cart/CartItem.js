import { removeFromCart } from '../../shop/reducers/cardsReducer';
import { useDispatch } from 'react-redux';

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
        onClick={() => dispatch(removeFromCart(id))}
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
