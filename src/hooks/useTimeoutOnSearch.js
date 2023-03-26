import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchInDescription } from '../shop/reducers/searchReducer';

const useTimeoutOnSearch = (delay) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onChangeHandler = (e) => setText(e.target.value);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchInDescription(text));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, dispatch, delay]);

  return [text, onChangeHandler];
};
export default useTimeoutOnSearch;
