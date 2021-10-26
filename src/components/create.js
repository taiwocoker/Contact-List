import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import { useHistory } from 'react-router'

export default function Create() {
  let history = useHistory()
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const postData = () => {
    axios
      .post(`https://contacts-apitest.herokuapp.com/api/v1/contacts`, {
        first_name,
        last_name,
        email,
        phone_number,
      })
      .then(() => {
        history.push('/')
      })
  }
  return (
    <div>
      <Form className='create-form'>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input
            placeholder='Phone Number'
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Field>

        <Button onClick={postData} type='submit'>
          Add
        </Button>
      </Form>
    </div>
  )
}
