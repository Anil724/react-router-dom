import React from 'react'
import { Link } from 'react-router-dom'

function Top() {
  return (
    <nav>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/tasks'>Tasks</Link>
      <Link to='/ctasks'>Ctasks</Link>
      <Link to='/leaves'>Leaves</Link>
    </nav>
  )
}

export default Top
