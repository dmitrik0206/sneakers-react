import { useDispatch } from 'react-redux';
import { likedCard, addToCart } from '../../shop/reducers/cardsReducer';
import spriteCard from '../../assets/sprite-card.svg';

const Card = ({ isLiked, id, isAdded, description, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <button
        onClick={() => dispatch(likedCard(id))}
        className={`card-icon like ${isLiked && 'like--active'}`}
      >
        <svg className="icon">
          <use href={spriteCard + '#heart'}></use>
        </svg>
      </button>
      <img
        className="card-img"
        src={require(`../../assets/products/card-${id}.jpg`)}
        alt="card-img"
      ></img>
      <div className="card-desc">{description}</div>
      <div className="card-price">
        Цена:
        <span>${price}</span>
      </div>
      <button
        onClick={() => dispatch(addToCart(id))}
        className={`card-icon ${isAdded ? 'check' : 'add'}`}
      >
        <svg className="icon">
          <use href={`${spriteCard}#${isAdded ? 'check' : 'plus'}`}></use>
        </svg>
      </button>
    </div>
  );
};
export default Card;


