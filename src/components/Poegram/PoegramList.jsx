import React from 'react';
import { useSelector } from 'react-redux';
import { getPoegrams } from '../../selectors/poegrams';
import Poegram from './Poegram';

export const PoegramList = () => {

  const poegrams = useSelector(getPoegrams);

  const poegramElements = () => poegrams.map(poegram => (
    <li key={poegram._id}>
      <Poegram poegram={poegram} />
    </li> 
  ));

  return (
    <ul>
      {poegramElements}
    </ul>
  );
};

export default PoegramList;
