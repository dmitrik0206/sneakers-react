import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSearchIds } from "../shop/reducers/searchReducer";

const useGetFilteredCards = () => {
  const dispatch = useDispatch();
  const [cards, searchText] = useSelector(({ cards, search }) => [
    cards.filter((card) => search.searchIds.includes(card.id)),
    search.text,
  ]);

  useEffect(() => {
    const url = new URL('https://641ded32945125fff3d940ee.mockapi.io/sneakers');
    url.searchParams.append('description', searchText);
    axios
      .get(url)
      .then(({ data }) => dispatch(setSearchIds(data.map((card) => card.id))));
  }, [searchText, dispatch]);

  return [cards, searchText]
}
export default useGetFilteredCards