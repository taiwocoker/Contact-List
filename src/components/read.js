import React, { useEffect} from 'react';
import { Link } from 'react-router-dom'
import { setContacts, deleteContact} from '../redux/actions/contactsAction';
import { connect } from 'react-redux';


const Read = ({setContacts, deleteContact, contact: { contacts, loading }}) => {
  
  

 
  useEffect(() => {
    setContacts();
  }, [setContacts]);


  

  return loading ? <h4>Loading...</h4>  : (
    <>
    <div className='container table-responsive-sm'>

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
          {contacts.map((data, i) => {
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
                    onClick={() => deleteContact(data.id)}
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
    </>
  )
}


const mapStateToProps = state => ({
  contact: state.Contacts,
})

export default connect(mapStateToProps, { setContacts, deleteContact})(Read);