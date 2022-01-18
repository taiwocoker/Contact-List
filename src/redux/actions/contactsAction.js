import * as types from './actionTypes';
import axios from 'axios';
import { setAlert } from './alert';
import { toast } from 'react-toastify';



  export const setContacts = () => async(dispatch) => {
    try{
      const res = await axios.get('https://contacts-apitest.herokuapp.com/api/v1/contacts');
  
      dispatch({
        type: types.SET_CONTACTS,
        payload: res.data
      })
  
    } catch (error) {
      toast.error(`Whoops!, ${error.message} occured`);
    }
  };

  export const getContact = (id) => async(dispatch) => {
    try{
      const res = await axios.get(`https://contacts-apitest.herokuapp.com/api/v1/contacts/${id}`);
      dispatch({
        type: types.GET_CONTACT,
        payload: res.data
      })
  
    } catch (error) {
      toast.error(`Whoops!, ${error.message} occured`);
    }
  };

  export const addContact = (formData, history) => async(dispatch) => {
    try{
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      const res = await axios.post('https://contacts-apitest.herokuapp.com/api/v1/contacts', formData, config);
  
      dispatch({
        type: types.ADD_CONTACT,
        payload: res.data
      })
      history.push('/')
      dispatch(setAlert('Contact Added successfully', 'success'))
  
    } catch (error) {
      toast.error(`Whoops!, ${error.message} occured`);
    }
  };

  export const deleteContact = (id) => async(dispatch) => {
    try{
      await axios.delete(`https://contacts-apitest.herokuapp.com/api/v1/contacts/${id}`);
      prompt('Do you want to delete this contact?')
      dispatch({
        type: types.DELETE_CONTACT,
        payload: id,
      })
      dispatch(setAlert('Contact Removed', 'success'))
  
    } catch (error) {
      toast.error(`Whoops!, ${error.message} occured`);
    }
  };

  export const updateContact = (id,formData, history) => async(dispatch) => {
    try{
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const res = await axios.put(`https://contacts-apitest.herokuapp.com/api/v1/contacts/${id}`,formData, config);
      dispatch({
        type: types.UPDATE_CONTACT,
        payload: { id, contact: res.data}
      })
      history.push('/')
      dispatch(setAlert('Contact Updated successfully', 'success'))
    } catch (error) {
      toast.error(`Whoops!, ${error.message} occured`);
    }
  };
  
  export const getHistory = (id) => async(dispatch) => {
    try{
      const res = await axios.get(`https://contacts-apitest.herokuapp.com/api/v1/contacts/${id}/versions`);
  
      dispatch({
        type: types.GET_HISTORY,
        payload: res.data
      })
  
    } catch (error) {
      toast.error(`Whoops!, ${error.message} occured`);
    }
  };
