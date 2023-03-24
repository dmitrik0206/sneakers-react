import { useDispatch } from 'react-redux';
import { searchByDescription } from '../../shop/reducers/searchReducer';

const ProdSearch = () => {
  const dispatch = useDispatch();

  return (
    <div className="productSearch">
      <svg className="icon">
        <use href="images/sprite.svg#search"></use>
      </svg>
      <input
        onChange={(e) => dispatch(searchByDescription(e.target.value))}
        className="productSearch-input"
        placeholder="Поиск..."
      />
    </div>
  );
};
export default ProdSearch;
