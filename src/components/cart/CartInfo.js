import CartItem from './CartItem';
import useGetSupplices from '../../hooks/useGetSupplices';

const CartInfo = () => {
  const [chosedSupplices, totalSum] = useGetSupplices();

  const supplices = chosedSupplices.map((card) => (
    <CartItem key={card.id} {...card} />
  ));

  return (
    <>
      <div className="cartModal-products">{supplices}</div>
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
