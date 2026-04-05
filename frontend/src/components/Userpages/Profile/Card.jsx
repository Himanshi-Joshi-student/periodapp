import React from 'react'
import {useUserAuth} from '../../../../Context/UserAuthContext'
import { auth } from '../../../../../frontend/src/firebase'
const Card = () => {
const {userData} =useUserAuth()
  if(!userData){
    return(
      <p>Loading....</p>
    )
  }
 async function handleLogOut(){
      try {
        await auth.signOut();
        window.location.href="/Login"
      } catch (error) {
        console.log(error.message);
        
      }
    } 
return (
     <>
        <div className='bg-gray-800 mt-20  text-white m-10 p-5 rounded-2xl'>
          <div 
          className=''
          >
            <h1 className='text-4xl font-bold text-pink-700'>Hello, {userData.name}</h1>
            <p className='m-2 text-2xl  '>Welcome to Luna🎀</p>
          </div>
        <div>
          <p>Email:{userData.email}</p>
          <p>Name:{userData.name}</p>
          <p>Age:{userData.age}</p>
        </div>
        <button 
        className='bg-blue-900 text-blue px-4 py-3 m-5 rounded-2xl'
        onClick={handleLogOut}>
          LogOut
        </button>
        </div>
       
        </>
  )
}

export default Card