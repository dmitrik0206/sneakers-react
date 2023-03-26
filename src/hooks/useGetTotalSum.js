import { useSelector } from 'react-redux';

const useGetTotalSum = () => {
  return useSelector(({ cards }) =>
    cards
      .filter((card) => card.isFavorite)
      .map((card) => card.price)
      .reduce((sum, price) => sum + price, 0)
      
  );
};
export default useGetTotalSum;
