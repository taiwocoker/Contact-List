import React from 'react'
import './App.css'
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'
import History from './components/history'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <ToastContainer autoClose={3000} hideProgressBar />
      <div className=''>
        <h2 className='main-header'>Contact List</h2>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/' component={Read} />
        </div>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <Route exact path='/update/:id' component={Update} />
        <Route exact path='/history/:id' component={History} />
      </div>
    </Router>
    
  )
}

export default App
