import { combineReducers } from 'redux';
import Contacts from '../reducers/contactsReducer';
import Loading from '../reducers/loadingReducer';

export default combineReducers({
     Contacts, Loading, 
  });