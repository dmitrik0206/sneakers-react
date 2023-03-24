import { useDispatch } from 'react-redux';
import { setLiked } from '../../shop/reducers/cardsReducer';

const Card = ({ id, isLiked, isFavorite, description, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <button
        onClick={() => dispatch(setLiked(id))}
        className={`card-icon like ${isLiked && 'like--active'}`}
      >
        <svg className="icon">
          <use href="images/sprite-card.svg#heart"></use>
        </svg>
      </button>
      <img
        className="card-img"
        src={`images/products/card-${id}.jpg`}
        alt="card-img"
      ></img>
      <div className="card-desc">{description}</div>
      <div className="card-price">
        Цена:
        <span>${price}</span>
      </div>
      <button
        onClick={() => console.log()}
        className={`card-icon ${isFavorite ? 'check' : 'add'}`}
      >
        <svg className="icon">
          <use
            href={`images/sprite-card.svg#${isFavorite ? 'check' : 'plus'}`}
          ></use>
        </svg>
      </button>
    </div>
  );
};
export default Card;
