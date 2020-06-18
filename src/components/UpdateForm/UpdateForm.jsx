import React from 'react';
import { getPoegramColor1, getPoegramColor2, getPoegramText, getPoegrams } from '../../selectors/poegramSelector';
import { useSelector, useDispatch } from 'react-redux';
import { setColor1, setColor2, setPoemText } from '../../actions/poegramActions';
import styles from './UpdateForm.css';

const UpdateForm = () => {

  const color1 = useSelector(getPoegramColor1);
  const color2 = useSelector(getPoegramColor2);
  const poemText = useSelector(getPoegramText);
  const dispatch = useDispatch();


  const handleSubmit = (e) => { 
    e.preventDefault();
    alert('Maybe a clever dev will build a PATCH route someday!');
  };

  return (
    <>
      <h2>Adjust this Poegram</h2>
      <form onSubmit={handleSubmit}>
        <label>Color 1:
          <input type="color" value={color1} onChange={({ target }) => dispatch(setColor1(target.value))} />
          <input type="text" value={color1} onChange={({ target }) => dispatch(setColor1(target.value))} />
        </label>
        <label>Color 2:
          <input type="color" value={color2} onChange={({ target }) => dispatch(setColor2(target.value))} />
          <input type="text" value={color2} onChange={({ target }) => dispatch(setColor2(target.value))} />
        </label>
        <label>Text:
          <input type="text" className={styles.poemText} value={poemText} onChange={({ target }) => dispatch(setPoemText(target.value))} />
        </label>
        <button type="submit">Update in database</button>
      </form>
    </>
  );
};

export default UpdateForm;
