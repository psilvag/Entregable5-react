import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

  const userName=useSelector(state=>state.userNameSlice)

  if(userName)
  {
    return <Outlet/>
  }
  else{

    return <Navigate to='/'/>
    
  }

  
}

export default ProtectedRoutes