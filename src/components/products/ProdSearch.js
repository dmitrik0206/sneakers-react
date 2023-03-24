const ProdSearch = () => {
  return (
    <div className="productSearch">
      <svg className="icon">
        <use href="images/sprite.svg#search"></use>
      </svg>
      <input
        onChange={(e) => console.log(e.target.value)}
        className="productSearch-input"
        placeholder="Поиск..."
      />
    </div>
  );
};
export default ProdSearch;
