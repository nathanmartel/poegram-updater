import { GET_RANDOM } from '../actions/poegramActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_RANDOM:
      return state;
    
    default: return state;
  }
}
