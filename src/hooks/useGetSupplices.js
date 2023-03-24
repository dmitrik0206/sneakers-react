import { useSelector } from 'react-redux';
import { getSumPrices, getOnlyAdded } from '../tools/tool';

const useGetSupplices = () => {
  const chosedSupplices = useSelector(({ cards }) => getOnlyAdded(cards));
  const totalSum = useSelector(({ cards }) => getSumPrices(cards));
  return [chosedSupplices, totalSum];
};
export default useGetSupplices;
