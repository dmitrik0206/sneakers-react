import { useDispatch } from 'react-redux';
import { searchByDescription } from '../../shop/reducers/searchReducer';

const ProdSearch = () => {
  const dispatch = useDispatch();

  const searchHandler = (event) => {
    const text = event.target.value.toLowerCase();
    dispatch(searchByDescription(text));
  };

  return (
    <div className="productSearch">
      <svg className="icon">
        <use href="images/sprite.svg#search"></use>
      </svg>
      <input
        onChange={searchHandler}
        className="productSearch-input"
        placeholder="Поиск..."
      ></input>
    </div>
  );
};
export default ProdSearch;
