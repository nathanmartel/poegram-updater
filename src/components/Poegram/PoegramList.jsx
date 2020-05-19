import React from 'react';
import { useSelector } from 'react-redux';
import { getPoegrams } from '../../selectors/poegramSelector';
import Poegram from './Poegram';

export const PoegramList = () => {

  const poegrams = useSelector(getPoegrams);

  const poegramElements = poegrams.map(poegram => (
    <li key={poegram._id}>
      <Poegram poegram={poegram} />
    </li> 
  ));

  return (
    <>
      {poegrams.length > 0 &&
        <ul>
          {poegramElements}
        </ul>
      }
    </>
  );
};

export default PoegramList;
