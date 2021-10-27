import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router'
import Alert from './alert'

export default function Update(props) {
  let history = useHistory()
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

const showAlert = (show = false, type = '', msg = '') => {
  setAlert({ show, type, msg })
}

  useEffect(() => {
   const {id} = props.match.params
    axios
      .get(`https://contacts-apitest.herokuapp.com/api/v1/contacts/${id}`)
      .then((response) => {
        console.log(response.data)
        setFirstName(response.data.first_name)
        setLastName(response.data.last_name)
        setEmail(response.data.email)
        setPhoneNumber(response.data.phone_number)
      })
  }, [])

  const updateAPIData = () => {
   const { id } = props.match.params
   if (first_name && last_name && email && phone_number) {
     axios
       .put(`https://contacts-apitest.herokuapp.com/api/v1/contacts/${id}`, {
         first_name,
         last_name,
         email,
         phone_number,
       })
       .then(() => {
        showAlert(true, 'success', 'Contact successfully updated')
         history.push('/')
       })
   } else {
     showAlert(true, 'danger', 'please enter value')
   }
  }
  return (
    <div>
      <Form className='create-form'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='First Name'
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input
            placeholder='Phone number'
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Field>

        <Button type='submit' onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  )
}
