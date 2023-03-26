import useGetFavorite from '../../hooks/useGetFavorite';
import useGetTotalSum from '../../hooks/useGetTotalSum';
import CartItem from './CartItem';

const CartInfo = () => {
  const totalSum = useGetTotalSum();
  const cards = useGetFavorite();

  return (
    <>
      <div className="cartModal-products">
        {cards.map((card) => (
          <CartItem key={card.id} {...card} />
        ))}
      </div>
      <div className="cartModal-bottom">
        <div className="cartModal-bottom__row">
          <div className="cartModal-bottom__text">Итого:</div>
          <span></span>
          <div className="cartModal-bottom__price">${totalSum.toFixed(2)}</div>
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
          <img
            className="arrow-right"
            src="images/icon/arrow-right.svg"
            alt="arrow-icon"
          ></img>
        </button>
      </div>
    </>
  );
};
export default CartInfo;
