import React from 'react';
import { useDispatch } from 'react-redux';
import { setPoegrams } from '../../actions/poegramActions';
import { fetchResponse } from '../../services/services';

const LoadButton = () => {

  const dispatch = useDispatch();

  const handleFetchRandomPoegram = () => {
    fetchResponse()
      // Make sure response is in array form
      .then(json => Array.isArray(json) 
        ? dispatch(setPoegrams(json)) 
        : dispatch(setPoegrams([json])))
      .catch(err => console.log(err));    
  };

  return (
    <button onClick={() => handleFetchRandomPoegram()}>Load Random Poegram</button>
  );
};

export default LoadButton;
