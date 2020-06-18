import React from 'react';
import Header from '../Header/Header';
import PoegramList from '../Poegram/PoegramList';
import LoadButton from '../LoadButton/LoadButton';
import UpdateForm from '../UpdateForm/UpdateForm';
import { useSelector } from 'react-redux';
import { getPoegrams } from '../../selectors/poegramSelector';

export default function App() {

  const poegram = useSelector(getPoegrams);

  return (
    <>
      <Header />
      <LoadButton />
      <PoegramList />
      {poegram.length > 0 &&
        <UpdateForm />
      }
    </>
  );
}
