import React, { useContext } from 'react'
import { authContext } from '../context/Auth/Auth'
import { Navigate } from 'react-router-dom'

const ProticteRoute = ({ children }) => {
  const { token } = useContext(authContext)

  if (token == null) {
    return <Navigate to={'/register'} />

  }
  return (
    <div>
      {children}
    </div>
  )
}

export default ProticteRoute
