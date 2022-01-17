import React from 'react'
import './App.css'
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'
import History from './components/update'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className=''>
        <h2 className='main-header'>Contact List</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/' component={Read} />
        </div>

        <Route path='/update/:id' component={Update} />
        <Route path='/history/:id' component={History} />
      </div>
    </Router>
  )
}

export default App
