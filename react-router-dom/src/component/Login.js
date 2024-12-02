import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='App'>
      <form>
        <h1>Login</h1>
        <div>
            <label>Email</label>
            <input></input>
        </div>
        <div>
            <label>Password</label>
            <input></input>
        </div>
        <div>
            <button type='button'>Login</button>
            {/* <Link to='top'>Inside</Link> */}
        </div>
      </form>
      <div>
        <Link to='/sinup'>Signup</Link>
      </div>
    </div>
  )
}

export default Login
