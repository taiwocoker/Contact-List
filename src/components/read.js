import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
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
  // const setData = (data) => {
  //   let { id, firstName, lastName, checkbox } = data
  //   localStorage.setItem('ID', id)
  //   localStorage.setItem('First Name', firstName)
  //   localStorage.setItem('Last Name', lastName)
  //   localStorage.setItem('Checkbox Value', checkbox)
  // }

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
    <div>
      <Table singleLine>
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
      </Table>
      <Link to="/create"><button>Add Contact</button></Link>
    </div>
  )
}
