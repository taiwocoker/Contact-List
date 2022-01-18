import React, { useState, useEffect } from 'react'
import Alert from './alert'
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { updateContact  } from '../redux/actions/contactsAction';

const Update = ({match, updateContact, history, contact: {contacts, loading}}) => {

  // const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const [ formData, setFormData ] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',

  })

  
  const {first_name, last_name, email, phone_number} = formData
  
  console.log(contacts)
  
  // const showAlert = (show = false, type = '', msg = '') => {
    //   setAlert({ show, type, msg })
    // }
    const { id } = match.params;
    const [ contact ] = contacts.filter(contact => contact.id === parseInt(id))
    console.log(contact)
    useEffect(() => {
      // getContact(id)
      setFormData({
        first_name: loading || !contact.first_name ? '' : contact.first_name,
        last_name: loading || !contact.last_name ? '' : contact.last_name,
        email: loading || !contact.email ? '' : contact.email,
        phone_number: loading || !contact.phone_number ? '' : contact.phone_number,
      })
      
      console.log(id)
    }, [])
    
   const handleInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      formData[name] = value;

      setFormData({
          ...formData,
          formData: formData

      });
  }


    const onSubmit = (e) => {
      e.preventDefault()
      // setFormData({...formData, [e.target.name]: e.target.value});

      updateContact(id,formData, history)
  }

  return (
    <div className='container'>
      <form onSubmit={e => onSubmit(e)}>
        {/* {alert.show && <Alert {...alert} removeAlert={showAlert} />} */}
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label className='form-label'>First Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='First Name'
              name='first_name'
              value={first_name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label className='form-label'>Last Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Last Name'
              name='last_name'
              value={last_name}
              onChange={handleInputChange}
              // onChange={e => onchange(e)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleInputChange}
              // onChange={e => onchange(e)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label className='form-label'>Phone Number</label>
            <input
              type='text'
              className='form-control'
              placeholder='Phone Number'
              name='phone_number'
              value={phone_number}
              onChange={handleInputChange}
              // onChange={e => onchange(e)}
            />
          </div>
        </div>
        <div className='butto'>
          <button
            type='submit'
            
            className='btn btn-primary'
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  contact: state.Contacts,
})
export default connect(mapStateToProps, { updateContact})(Update);
