import { closeCart } from '../../shop/reducers/cartReducer';
import { useDispatch } from 'react-redux';
import CartInfo from './CartInfo';
import useGetFavorite from '../../hooks/useGetFavorite'
import CartEmpty from './CartEmpty'

function CartModal() {
  const dispatch = useDispatch();
  const favLength = useGetFavorite().length;

  return (
    <div className="cartModal">
      <div className="cartModal-inner">
        <div className="cartModal-title">
          Корзина
          <svg onClick={() => dispatch(closeCart())} className="icon">
            <use href="images/sprite-card.svg#close"></use>
          </svg>
        </div>
        {favLength ? <CartInfo /> : <CartEmpty/>}
      </div>
    </div>
  );
}
export default CartModal;
