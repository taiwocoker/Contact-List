import { combineReducers } from 'redux';
import Contacts from '../reducers/contactsReducer';
import alert from './alert';

export default combineReducers({
     Contacts, alert
  });