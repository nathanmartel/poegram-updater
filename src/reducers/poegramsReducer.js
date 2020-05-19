import { SET_POEGRAMS } from '../actions/poegramActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_POEGRAMS:
      return action.payload;
    
    default: return state;
  }
}

