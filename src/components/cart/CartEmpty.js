import { useDispatch } from 'react-redux';
import { closeCart } from '../../shop/reducers/cartReducer';

const CartEmpty = () => {
  const dispatch = useDispatch();

  return (
    <div className="cartModal-state">
      <img
        className="cartModal-state__img"
        src="images/box-img.png"
        alt="box pic"
      ></img>
      <h4 className="cartModal-state__-title">Корзина пустая</h4>
      <div className="cartModal-state__-text">
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </div>
      <button
        onClick={() => dispatch(closeCart())}
        className="cartModal-bottom__btn btn"
      >
        Вернуться назад
        <img
          className="arrow-left"
          src="images/icon/arrow-left.svg"
          alt="arrow-icon"
        ></img>
      </button>
    </div>
  );
};
export default CartEmpty;
