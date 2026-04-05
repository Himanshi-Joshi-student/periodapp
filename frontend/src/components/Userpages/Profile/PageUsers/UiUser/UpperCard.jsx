import React from 'react'
import { useUserAuth } from '../../../../../../Context/UserAuthContext'
import { auth } from '../../../../../../../frontend/src/firebase'
const UpperCard = () => {

const {userData} =useUserAuth()
  if(!userData){
    return(
      <p>Loading....</p>
    )
  }
  return (
    <div className='bg-fuchsia-200 m-10 rounded-2xl p-5 text-black h-50 '>
       <h1 className=' p-2 text-2xl font-serif text-blue-950'>Welcome {userData.name}</h1>
    </div>
  )
}

export default UpperCard