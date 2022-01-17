import * as types from '../actions/actionTypes';
import initialState from './initialState'

const ContactsReducer = (state = initialState.Contacts, action) => {
  switch (action.type) {
    case types.SET_CONTACTS:
      return action.contacts;
    default:
      return state;
  }
};

export default ContactsReducer;