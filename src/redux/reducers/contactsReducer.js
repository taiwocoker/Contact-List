import * as types from '../actions/actionTypes';

const initialState = {
  loading: true,
  contacts: [],
  history: {},
  contact: {},
  error: {}
};

const ContactsReducer = (state = initialState, action) => {
  const { type, payload } = action; 
  switch (type) {
    case types.SET_CONTACTS:
      return {
        ...state,
        contacts: payload,
        loading: false
      }
      case types.GET_CONTACT:
        return {
          ...state,
          contact: payload,
          loading: false
        }
        case types.UPDATE_CONTACT:
      return {
        ...state,
        contact: payload,
        loading: false
      }
      case types.GET_HISTORY:
      return {
        ...state,
        history: payload,
        loading: false,
        error: payload
      }
      case types.ADD_CONTACT:
        return {
          ...state,
          contacts: [ payload, ...state.contacts],
          loading: false
        }
        case types.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
        loading: false
    }
      default:
      return state;
};
    

}

export default ContactsReducer;