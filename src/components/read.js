import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Read() {
  const [APIData, setAPIData] = useState([])
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
        getData()
      })
  }

  return (
    <div className='container table-responsive-sm'>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Update</th>
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
                    <button className='table-btn'>Update</button>
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
      {/* <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>{data.first_name}</Table.Cell>
                <Table.Cell>{data.last_name}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>{data.phone_number}</Table.Cell>
                <Link to={`/update/${data.id}`}>
                  <Table.Cell>
                    <Button>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table> */}
      <Link to='/create'>
        <button className='btn btn-primary add'>Add Contact</button>
      </Link>
    </div>
  )
}
