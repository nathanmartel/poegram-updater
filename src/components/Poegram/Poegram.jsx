import React from 'react';
import PropTypes from 'prop-types';
import styles from './Poegram.css';

export const Poegram = ({ poegram }) => {

  const divStyle = {
    backgroundImage: `radial-gradient(circle at top right, ${poegram.colors[0]}, ${poegram.colors[1]})`
  };

  return (
    <>
      <div className={`${styles.poegram} ${styles.background1}`} style={ divStyle }>
        <p className={styles.poem}>{ poegram.poemId.lines }</p>
        <p className={styles.author}>— { poegram.poemId.author }, from <em>{ poegram.poemId.title }</em></p>
      </div>
    </>
  );
};

Poegram.propTypes = {
  poegram: PropTypes.object.isRequired
};

export default Poegram;

