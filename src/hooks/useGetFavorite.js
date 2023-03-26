import { useSelector } from 'react-redux';

const useGetFavorite = () => {
  return useSelector(({ cards }) => cards.filter((card) => card.isFavorite));
};
export default useGetFavorite;
