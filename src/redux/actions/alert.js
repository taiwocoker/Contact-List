import * as types from '../actions/actionTypes';
import uuid from 'uuid';

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: types.SET_ALERT,
    payload: { msg, alertType, id }
  })

  setTimeout( () => dispatch({
    type: types.REMOVE_ALERT,
    payload: id
  }), 5000)
};