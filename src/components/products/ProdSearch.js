import { useDispatch } from 'react-redux';
import { searchInDescription } from '../../shop/reducers/searchReducer';

const ProdSearch = () => {
  const dispatch = useDispatch();

  

  return (
    <div className="productSearch">
      <svg className="icon">
        <use href="images/sprite.svg#search"></use>
      </svg>
      <input
        maxLength={12}
        onChange={(e) => dispatch(searchInDescription(e.target.value))}
        className="productSearch-input"
        placeholder="Поиск..."
      />
    </div>
  );
};
export default ProdSearch;
