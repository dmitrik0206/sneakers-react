import { closeCart } from '../../shop/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import CartInfo from './CartInfo';

function CartModal() {
  const dispatch = useDispatch();

  return (
    <div className="cartModal">
      <div className="cartModal-inner">
        <div className="cartModal-title">
          Корзина
          <svg onClick={() => dispatch(closeCart())} className="icon">
            <use href="images/sprite-card.svg#close"></use>
          </svg>
        </div>
        <CartInfo />
      </div>
    </div>
  );
}
export default CartModal;
