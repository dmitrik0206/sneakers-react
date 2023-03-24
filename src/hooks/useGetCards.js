import { useSelector } from 'react-redux';
import { findFromCardsByText } from '../tools/tool';

const useGetCards = () => {
  const cards = useSelector((state) => state.cards);
  const searchText = useSelector((state) => state.search.text);
  const filteredCards = findFromCardsByText(cards, searchText);
  return [filteredCards, searchText];
};
export default useGetCards;
