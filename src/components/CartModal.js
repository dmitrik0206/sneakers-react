import spriteCard from '../assets/sprite-card.svg';
import card from '../assets/products/card-1.jpg';
import arrow from '../assets/icon/arrow-right.svg';

function CartModal() {
  return (
    <div className="cartModal">
      <div className="cartModal-inner">
        <div className="cartModal-title">
          Корзина
          <svg className="icon">
            <use href={spriteCard + '#close'}></use>
          </svg>
        </div>
        <div className="cartModal-products">
          <div className="cartModal-prod">
            <img className="cartModal-prod__img" src={card}></img>
            <div className="cartModal-prod__info">
              <div className="cartModal-prod__desc">
                Мужские Кроссовки Nike Air Max 270
              </div>
              <div className="cartModal-prod__price">120$</div>
            </div>
            <button className="cartModal-prod__close">
              <svg className="icon">
                <use href={spriteCard + '#close'}></use>
              </svg>
            </button>
          </div>
          <div className="cartModal-prod">
            <img className="cartModal-prod__img" src={card}></img>
            <div className="cartModal-prod__info">
              <div className="cartModal-prod__desc">
                Мужские Кроссовки Nike Air Max 270
              </div>
              <div className="cartModal-prod__price">120$</div>
            </div>
            <button className="cartModal-prod__close">
              <svg className="icon">
                <use href={spriteCard + '#close'}></use>
              </svg>
            </button>
          </div>
          <div className="cartModal-prod">
            <img className="cartModal-prod__img" src={card}></img>
            <div className="cartModal-prod__info">
              <div className="cartModal-prod__desc">
                Мужские Кроссовки Nike Air Max 270
              </div>
              <div className="cartModal-prod__price">120$</div>
            </div>
            <button className="cartModal-prod__close">
              <svg className="icon">
                <use href={spriteCard + '#close'}></use>
              </svg>
            </button>
          </div>
          <div className="cartModal-prod">
            <img className="cartModal-prod__img" src={card}></img>
            <div className="cartModal-prod__info">
              <div className="cartModal-prod__desc">
                Мужские Кроссовки Nike Air Max 270
              </div>
              <div className="cartModal-prod__price">120$</div>
            </div>
            <button className="cartModal-prod__close">
              <svg className="icon">
                <use href={spriteCard + '#close'}></use>
              </svg>
            </button>
          </div>
          <div className="cartModal-prod">
            <img className="cartModal-prod__img" src={card}></img>
            <div className="cartModal-prod__info">
              <div className="cartModal-prod__desc">
                Мужские Кроссовки Nike Air Max 270
              </div>
              <div className="cartModal-prod__price">120$</div>
            </div>
            <button className="cartModal-prod__close">
              <svg className="icon">
                <use href={spriteCard + '#close'}></use>
              </svg>
            </button>
          </div>
          <div className="cartModal-prod">
            <img className="cartModal-prod__img" src={card}></img>
            <div className="cartModal-prod__info">
              <div className="cartModal-prod__desc">
                Мужские Кроссовки Nike Air Max 270
              </div>
              <div className="cartModal-prod__price">120$</div>
            </div>
            <button className="cartModal-prod__close">
              <svg className="icon">
                <use href={spriteCard + '#close'}></use>
              </svg>
            </button>
          </div>
          <div className="cartModal-prod">
            <img className="cartModal-prod__img" src={card}></img>
            <div className="cartModal-prod__info">
              <div className="cartModal-prod__desc">
                Мужские Кроссовки Nike Air Max 270
              </div>
              <div className="cartModal-prod__price">120$</div>
            </div>
            <button className="cartModal-prod__close">
              <svg className="icon">
                <use href={spriteCard + '#close'}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className="cartModal-bottom">
          <div className="cartModal-bottom__row">
            <div className="cartModal-bottom__text">Итого:</div>
            <span></span>
            <div className="cartModal-bottom__price">120$</div>
          </div>
          <div className="cartModal-bottom__row">
            <div className="cartModal-bottom__text">Налог 5%:</div>
            <span></span>
            <div className="cartModal-bottom__price">12$</div>
          </div>
          <button className="cartModal-bottom__btn btn">
            Оформить заказ
            <img className="arrow" src={arrow}></img>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartModal;
