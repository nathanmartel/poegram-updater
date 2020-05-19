import React from 'react';
import Header from '../Header/Header';
import PoegramList from '../Poegram/PoegramList';
import LoadButton from '../LoadButton/LoadButton';

export default function App() {
  return (
    <>
      <Header />
      <LoadButton />
      <PoegramList />
    </>
  );
}
