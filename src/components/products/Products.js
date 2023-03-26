import Card from '../products/Card';
import ProdSearch from '../products/ProdSearch';
import useGetFilteredCards from '../../hooks/useGetFilteredCards';

const Products = () => {
  const [cards, searchText] = useGetFilteredCards();
  const filteredCards = cards.map((card) => <Card key={card.id} {...card} />);

  return (
    <div className="container">
      <div className="products">
        <div className="products-top">
          <h2 className="products-top__title">
            {searchText ? `Поиск по шаблону: "${searchText}"` : 'Все кроссовки'}
          </h2>
          <ProdSearch />
        </div>
        <div className="products-box">{filteredCards}</div>
      </div>
    </div>
  );
};
export default Products;
