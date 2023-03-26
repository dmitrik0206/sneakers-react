import useTimeoutOnSearch from '../../hooks/useTimeoutOnSearch';

const ProdSearch = () => {
  const [textValue, onChangeHandler] = useTimeoutOnSearch(500);

  return (
    <div className="productSearch">
      <svg className="icon">
        <use href="images/sprite.svg#search"></use>
      </svg>
      <input
        maxLength={12}
        value={textValue}
        onChange={onChangeHandler}
        className="productSearch-input"
        placeholder="Поиск..."
      />
    </div>
  );
};
export default ProdSearch;
