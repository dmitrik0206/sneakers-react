import { useDispatch } from 'react-redux';
import { closeCart } from '../../shop/reducers/cartReducer';

const CartOrdered = () => {
  const dispatch = useDispatch();

  return (
    <div className="cartModal__state">
      <img
        className="cartModal__state__img"
        src="images/ordered-img.png"
        alt="ordered pic"
      ></img>
      <h4 className="cartModal__state__title green">Заказ оформлен!</h4>
      <div className="cartModal__state__text">
        Ваш заказ #18 скоро будет передан курьерской доставке
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
export default CartOrdered;
