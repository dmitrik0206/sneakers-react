import spriteCard from '../../assets/sprite-card.svg';
import arrow from '../../assets/icon/arrow-right.svg';
import { closeCart } from '../../shop/reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';

function CartModal() {
  const dispatch = useDispatch();

  const orderedSupplices = useSelector(({ cards }) =>
    cards.filter((card) => card.isAdded).sort((a, b) => a.id - b.id)
  );
  
  const totalSum = useSelector(({ cards }) =>
    cards
      .filter((card) => card.isAdded)
      .map((card) => card.price)
      .reduce((sum, price) => sum + price, 0)
  );

  return (
    <div className="cartModal">
      <div className="cartModal-inner">
        <div className="cartModal-title">
          Корзина
          <svg onClick={() => dispatch(closeCart())} className="icon">
            <use href={spriteCard + '#close'}></use>
          </svg>
        </div>
        <div className="cartModal-products">
          {orderedSupplices.map((card) => (
            <CartItem key={card.id} {...card} />
          ))}
        </div>
        <div className="cartModal-bottom">
          <div className="cartModal-bottom__row">
            <div className="cartModal-bottom__text">Итого:</div>
            <span></span>
            <div className="cartModal-bottom__price">
              ${totalSum.toFixed(2)}
            </div>
          </div>
          <div className="cartModal-bottom__row">
            <div className="cartModal-bottom__text">Налог 5%:</div>
            <span></span>
            <div className="cartModal-bottom__price">
              ${(totalSum / 20).toFixed(2)}
            </div>
          </div>
          <button className="cartModal-bottom__btn btn">
            Оформить заказ
            <img className="arrow" src={arrow} alt="arrow-icon"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartModal;
