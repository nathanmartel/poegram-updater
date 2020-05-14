import React from 'react';
import './Poegram.css';

export const Poegram = (poegram) => {

  const divStyle = {
    backgroundImage: `radial-gradient(circle at top right, ${poegram.colors[0]}, ${poegram.colors[1]})`
  };

  return (
    <div className="poegram background-1" style={ divStyle }>
      <p className="poem">{ poegram.poemId.lines }</p>
      <p className="author">— { poegram.poemId.author }, from <em>{ poegram.poemId.title }</em></p>
    </div>
  );
};

export default Poegram;

