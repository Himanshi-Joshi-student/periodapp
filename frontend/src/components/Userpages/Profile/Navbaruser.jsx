import React from 'react'
import {Dropdown,DropdownItem} from 'flowbite-react'
import {auth} from '../../../../../frontend/src/firebase'
import profile from './logo/image.png'
import { useUserAuth } from '../../../../Context/UserAuthContext'
import { Navigate } from 'react-router-dom'
const Navbaruser = () => {
   async function handleLogOut(){
      try {
        await auth.signOut();
        window.location.href="/Login"
      } catch (error) {
        console.log(error.message);
        
      }
    } 
    const {userData} =useUserAuth()
      if(!userData){
        return(
          <p>Loading....</p>
        )
      }   
  return(
    <div className="h-14 mt-0 py-9 bg-pink-600 text-white flex items-center justify-between px-6 shadow-md">
      <h1 className="text-lg font-semibold">Period Tracker</h1>
      <p className="text-sm">User Dashboard</p>
      <div className='flex flex-row text-black'>
         <img src={userData.ProfileImage ||profile} alt=''  className='h-10 w-10 rounded-2xl'
         onClick={Navigate("/Profile/profiledata")}
         />
        <Dropdown >
          <DropdownItem className='p-2 px-10 text-xl text-black'
          onClick={handleLogOut}
          >
            LogOut
          </DropdownItem>
        </Dropdown>
      </div>
    </div>
  )
}

export default Navbaruser