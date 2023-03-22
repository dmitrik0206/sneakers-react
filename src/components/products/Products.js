import { useSelector } from 'react-redux';
import Card from '../products/Card';
import ProdSearch from '../products/ProdSearch';

const Products = () => {
  const cards = useSelector((state) => state.cards);
  const searchText = useSelector((state) => state.search.text);
  const liked = useSelector((state) => state.liked.liked);

  const filteredCards = cards
    .filter((card) => (liked ? card.isLiked : true))
    .filter((card) => card.description.toLowerCase().includes(searchText))
    .sort((a, b) => a.id - b.id)
    .map((card) => {
      return <Card key={card.id} {...card} />;
    });

  return (
    <div className="container">
      <div className="products">
        <div className="products-top">
          <h2 className="products-top__title">Все кроссовки</h2>
          <ProdSearch />
        </div>
        <div className="products-box">{filteredCards}</div>
      </div>
    </div>
  );
};
export default Products;
