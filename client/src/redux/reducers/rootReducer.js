import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  contacts: contactsReducer,
});

export default rootReducer;
