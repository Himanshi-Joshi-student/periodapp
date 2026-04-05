import React from 'react'
import { useState } from 'react'
import {auth,db} from '../../../../../firebase'
import {Link, useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc,doc } from 'firebase/firestore'
import {toast} from 'react-toastify'
const Register = () => {
const [name,SetName]=useState("")
const [email,SetEmail]=useState("")
const [password,SetPassword]=useState("")
const [age,SetAge]=useState("")
const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      const user =auth.currentUser;
      console.log(user);
      if(user){
         await setDoc(doc(db,"users",user.uid),{
          email:user.email,
          name:name,
          age:age,
         })
      }
      console.log("User Registered Succesfully!!!");
      toast.success("User Registered Successfully!!",{
        position:"top-center"
      })

    } catch (error) {
      console.log(error.message);
      toast.error(error.message,{
        position:"bottom-center"
      })
    }
  };
  return (
     <div
      className="p-30 flex items-center justify-center rounded-2xl h-auto  max-[600px]:m-20 max-[500px]:m-10 "
    >
      <div className=" bg-white/20 backdrop-blur border-t-5 border-pink-700 p-8 rounded-2xl w-150 flex flex-col items-center text-white shadow-lg  py-10 max-[600]:">
        {/* Logo
        <img src={logo} alt="Logo" className="w-24 mb-4" /> */}
        {/* Heading */}
        <h1 className="text-3xl font-semibold mb-6 ">Register</h1>

        {/* Form */}
        <form className="w-full flex flex-col gap-8"
         onSubmit={handleSubmit}
        >
            <label className='text-white'>
            UserName
          </label>
          <input
            type="text"
            placeholder="Enter username "
                     onChange={(e)=>SetName(e.target.value)}
            className="p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-800 border border-white"
          />
          <label className='text-white'>
            Age
          </label>
          <input
            type="number"
            placeholder='Enter your age'
                       onChange={(e)=>SetAge(e.target.value)}
            className="p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-800 border border-white"
            />
           <label className='text-white'>
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
              onChange={(e)=>SetEmail(e.target.value)}
            className="p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-800 border border-white"
          />
          <label className='text-white '>
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
           onChange={(e)=>SetPassword(e.target.value)}
            className="p-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-800 border border-white"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 transition-colors p-3 rounded-lg mt-2 font-semibold"
          >
            Submit
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 hover:text-white cursor-pointer">
          Have Account ? 
          <Link className='text-blue-500' to={"/Login"}> Go For Login Instead</Link>
        </p>
      </div>
    </div>
  )
}
export default Register