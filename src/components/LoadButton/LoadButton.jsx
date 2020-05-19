import React from 'react';
import { useDispatch } from 'react-redux';
import { setPoegrams } from '../../actions/poegramActions';

const LoadButton = () => {

  const dispatch = useDispatch();

  const handleFetchRandomPoegram = () => {
    fetch('http://poegram.herokuapp.com/api/v1/poegrams/random')
      .then(res => { 
        if(!res.ok) throw Error(res.statusText);
        else return res;
      })
      .then(res => res.json())
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
