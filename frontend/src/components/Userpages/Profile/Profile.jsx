import React, { useEffect, useState } from 'react'
import {useUserAuth} from '../../../../Context/UserAuthContext'
import {auth} from '../../../../../frontend/src/firebase'
import Card from './Card'
import Userui from './Userui'
const Profile = () => {

const {userData} =useUserAuth()
  if(!userData){
    return(
      <p>Loading....</p>
    )
  }       
return (
     <>
     <Userui />
       <Card />
        </>
  )
  }
 

export default Profile