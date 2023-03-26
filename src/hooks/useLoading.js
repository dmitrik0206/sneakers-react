import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setCards, setLiked, setFavorite } from '../shop/reducers/cardsReducer';

const UseLoading = () => {
  const dispatch = useDispatch();
  const cards = useSelector(({ cards }) => cards);

  useEffect(() => {
    axios
      .get('https://641ded32945125fff3d940ee.mockapi.io/sneakers')
      .then(({ data }) => {
        dispatch(setCards(data));
        const stateFromLS = JSON.parse(localStorage.getItem('supplices'));
        
        if (stateFromLS === null) return;

        stateFromLS.liked.forEach((id) => dispatch(setLiked(id)));
        stateFromLS.favorite.forEach((id) => dispatch(setFavorite(id)));
      })
      .catch((e) =>
        console.log(`load data from server finished with error: ${e.message}`)
      );
  }, [dispatch]);

  useEffect(() => {
    if (cards.length === 0) return;

    const supplices = {
      liked: cards.filter((card) => card.isLiked).map((card) => card.id),
      favorite: cards.filter((card) => card.isFavorite).map((card) => card.id),
    };
    
    localStorage.setItem('supplices', JSON.stringify(supplices));
  }, [cards]);

}

export default UseLoading