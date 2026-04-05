import React from 'react'
import {auth} from '../../../../../../../../frontend/src/firebase'
import {useUserAuth} from '../../../../../../../Context/UserAuthContext'
const Profiledata = () => {
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
  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 p-6">

   {/* Card Container */}
   <div className="w-full max-w-4xl bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 transition-all duration-300 hover:scale-[1.02]">

     <div className="flex flex-col md:flex-row items-center gap-10">

       {/* Profile Image Section */}
      <div className="relative group">
       <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

       <img
         src={userData.ProfileImage || profile}
         alt="Profile"
         className="relative w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-white shadow-xl"
       />
     </div>

     {/* User Info Section */}
     <div className="text-center md:text-left space-y-4">

       <h1 className="text-3xl font-bold text-gray-800">
         {userData.name}
       </h1>

       <div className="space-y-2 text-gray-600 text-lg">

         <p>
           <span className="font-semibold text-pink-600">🎂:</span> {userData.age}
         </p>

         <p>
           <span className="font-semibold text-pink-600">📧:</span> {userData.email}
         </p>

       </div>

       {/* Cute Button */}
       <button className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
         Edit Profile
       </button>
       <button className="mt-4  m-5 px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
       onClick={handleLogOut}
       >
         logOut
       </button>

     </div>

   </div>

 </div>
 </div>

  )
}

export default Profiledata