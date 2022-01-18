import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { getHistory} from '../redux/actions/contactsAction';
// import Alert from './alert'
import { connect } from 'react-redux';


const History = ({match, getHistory, histor: {history, loading}}) => {
    console.log(history)
  const { id } = match.params;
    
  
//   const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

//   const showAlert = (show = false, type = '', msg = '') => {
//     setAlert({ show, type, msg })
//   }

  
  useEffect(() => {
      console.log(id)
  getHistory(id);
  }, [id]);

  const version = []
  const versionHistory = (history = []) => {
    const versions = history && history?.map((version) => version.object )
    for(let i = 0; i < versions.length; i++){
      let ver = versions[i].replace(/\n/gi, ' ').split(' ');
      version[i] = {
        first_name: ver[4],
        last_name: ver[6],
        phone_number: ver[10].replace(/'/gi, ''),
        email: ver[8],
        updated_at: ver[16]
      }
    }
    return version;
    console.log(version)
    console.log(versions)
  }
  

  return (
   <>
    {loading ?
    <h1>Loading</h1> : 
    
    <div className='container table-responsive-sm'>
      {/* {alert.show && <Alert {...alert} removeAlert={showAlert} />} */}

      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone Number</th>
            <th scope='col'>last Updated</th>
            
          </tr>
        </thead>
        <tbody>
          
          {versionHistory(history).length === 0 ? <h1>No history</h1> : versionHistory(history).map((data, i) => {
            return (
              
              <tr key={i}>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
                <td>{data.phone_number}</td>
                <td>{data.updated_at}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

       <Link to='/'>
        <button className='btn btn-primary add'>Back</button>
      </Link> 
    </div>
  }
</>
  )
}

const mapStateToProps = state => ({
  histor: state.Contacts,
})

export default connect(mapStateToProps, { getHistory})(History);