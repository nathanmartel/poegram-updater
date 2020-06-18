import { combineReducers } from 'redux';
import mailingFormReducer from './mailingFormReducer';
import poegramsReducer from './poegramsReducer';

export default combineReducers({
  mailingFormReducer,
  poegramsReducer
});
