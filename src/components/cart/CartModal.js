import { closeCart } from '../../shop/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import useGetSupplices from '../../hooks/useGetSupplices';
import CartInfo from './CartInfo';
import CartEmpty from './CartEmpty';
import CartOrdered from './CartOrdered'

function CartModal() {
  const dispatch = useDispatch();
  const [supplices] = useGetSupplices();

  return (
    <div className="cartModal">
      <div className="cartModal-inner">
        <div className="cartModal-title">
          Корзина
          <svg onClick={() => dispatch(closeCart())} className="icon">
            <use href="images/sprite-card.svg#close"></use>
          </svg>
        </div>
        {supplices.length ? <CartInfo /> : <CartOrdered />}
      </div>
    </div>
  );
}
export default CartModal;
