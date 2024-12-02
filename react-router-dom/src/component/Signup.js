import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='App'>
      <form>
        <h1>Signup</h1>
        <div>
            <label>First Name</label>
            <input></input>
        </div>
        <div>
            <label>Last Name</label>
            <input></input>
        </div>
        <div>
            <label>Mobile Number</label>
            <input></input>
        </div>
        <div>
            <label>Date of Birth</label>
            <input></input>
        </div>
        <div>
            <label>Email</label>
            <input></input>
        </div>
        <div>
            <label>Password</label>
            <input></input>
        </div>
        <div>
            <button type='button'>Signup</button>
        </div>
      </form>

      <div>
         <Link to='/'>Login</Link>
      </div>
    </div>
  )
}

export default Signup
