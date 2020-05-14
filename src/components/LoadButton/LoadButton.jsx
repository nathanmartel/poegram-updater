import React from 'react';
import { useDispatch } from 'react-redux';
import { getRandomPoegram } from '../../selectors/poegrams';

const LoadButton = () => {

  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(getRandomPoegram)}>Load Random Poegram</button>
  );
};

export default LoadButton;
