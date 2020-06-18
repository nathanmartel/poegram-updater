import { SET_POEGRAMS, SET_COLOR_1, SET_COLOR_2, SET_POEMTEXT } from '../actions/poegramActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_POEGRAMS:
      return action.payload;
    case SET_COLOR_1: {
      const newState = [...state];
      newState[0].colors[0] = action.payload;
      return newState;
    }
    case SET_COLOR_2: {
      const newState = [...state];
      newState[0].colors[1] = action.payload;
      return newState;
    }
    case SET_POEMTEXT: {
      const newState = [...state];
      newState[0].poemId.lines = action.payload;
      return newState;
    }
    
    default: return state;
  }
}

