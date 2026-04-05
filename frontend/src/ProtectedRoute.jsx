import React from 'react'
import { useUserAuth } from '../Context/UserAuthContext';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
  let {user} =useUserAuth();
  if(!user){
        // User not logged in → redirect to login
    return(
      <> 
          <Navigate to="/Login"/>
      </>

    )
  }
    // User is logged in → show the page
  return children; 
}

export default ProtectedRoute