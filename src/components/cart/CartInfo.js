const CartInfo = () => {

  return (
    <>
      <div className="cartModal-products"></div>
      <div className="cartModal-bottom">
        <div className="cartModal-bottom__row">
          <div className="cartModal-bottom__text">Итого:</div>
          <span></span>
          <div className="cartModal-bottom__price">${1399}</div>
        </div>
        <div className="cartModal-bottom__row">
          <div className="cartModal-bottom__text">Налог 5%:</div>
          <span></span>
          <div className="cartModal-bottom__price">
            ${1399}
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
