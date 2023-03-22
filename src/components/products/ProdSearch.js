import { useDispatch } from 'react-redux';
import { searchByDescription } from '../../shop/reducers/searchReducer';
import sprite from '../../assets/sprite.svg';

const ProdSearch = () => {
  const dispatch = useDispatch();

  const searchHandler = (event) => {
    const text = event.target.value.toLowerCase();
    dispatch(searchByDescription(text));
  };

  return (
    <div className="productSearch">
      <svg className="icon">
        <use href={sprite + '#search'}></use>
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
