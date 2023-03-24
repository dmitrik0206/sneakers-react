import { useDispatch } from 'react-redux';
import { closeCart } from '../../shop/reducers/cartReducer';

const CartEmpty = () => {
  const dispatch = useDispatch();

  return (
    <div className="cartModal__state">
      <img
        className="cartModal__state__img"
        src="images/box-img.png"
        alt="box pic"
      ></img>
      <h4 className="cartModal__state__title">Корзина пустая</h4>
      <div className="cartModal__state__text">
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
