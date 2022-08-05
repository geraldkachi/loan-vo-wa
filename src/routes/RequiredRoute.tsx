import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RequiredRoute = () => {
    const token = localStorage.getItem('token')
    const location = useLocation()
  return token ? <Outlet /> : <Navigate to="/login" state={{from: location }} replace />
}

export default RequiredRoute
