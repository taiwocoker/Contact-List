import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from './alert'


export default function Read() {
  const [APIData, setAPIData] = useState([])
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  useEffect(() => {
    axios
      .get(`https://contacts-apitest.herokuapp.com/api/v1/contacts`)
      .then((response) => {
        console.log(response.data)
        setAPIData(response.data)
      })
  }, [])
  console.log(APIData)

  const getData = () => {
    axios
      .get(`https://contacts-apitest.herokuapp.com/api/v1/contacts`)
      .then((getData) => {
        setAPIData(getData.data)
      })
  }

  const onDelete = (id) => {
    axios
      .delete(`https://contacts-apitest.herokuapp.com/api/v1/contacts/${id}`)
      .then(() => {
        prompt('Do you want to delete this contact?')
        getData()
        showAlert(true, 'success', 'contact successfully deleted')
      })
  }

  return (
    <div className='container table-responsive-sm'>
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}

      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Edit</th>
            <th scope='col'>History</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
                <td>{data.phone_number}</td>
                <td>
                  <Link to={`/update/${data.id}`}>
                    <button className='table-btn'>Edit</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/history/${data.id}`}>
                    <button className='table-btn'>History</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => onDelete(data.id)}
                    className='table-btn red'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Link to='/create'>
        <button className='btn btn-primary add'>Add Contact</button>
      </Link>
    </div>
  )
}
