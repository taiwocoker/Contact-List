import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addContact } from '../redux/actions/contactsAction';
import Alert from './alert'

const AddContact = ({addContact, history}) => {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const postData = (e) => {
    e.preventDefault()
    if (first_name && last_name && email && phone_number) {
      addContact({
        first_name,
        last_name,
        email,
        phone_number
      }, history)
    }else{
      console.log("error")
    }
  }
  return (
    <div className='container'>
      <form onSubmit={postData}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label htmlFor='firstname' className='form-label'>
              First Name
            </label>
            <input
              id='firstname'
              type='text'
              className='form-control'
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label htmlFor='lastname' className='form-label'>
              Last Name
            </label>
            <input
              id='lastname'
              type='text'
              className='form-control'
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='form-control'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              size='30'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col col-sm-12 mb-3'>
            <label htmlFor='phone' className='form-label'>
              Phone Number
            </label>
            <input
              type='tel'
              id='phone'
              className='form-control'
              placeholder='Phone Number'
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern='[+ 0-9]{9-14}'
              required
            />
          </div>
        </div>
        <div className='butto'>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default connect(null, { addContact })(AddContact)
