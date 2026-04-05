import React, { useState } from "react";
// import logo from "./logo.png"; // Add your logo in src folder
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../../../../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import {toast} from 'react-toastify'
const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const handleLogin=async(e)=>{
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth,email,password);
      console.log("user LoggedIn Successfully !!!");
      navigate("/Profile")
      toast.success("User LoggedIn Successfully",{
        position:'top-center'
      })
    } catch (error) {
      console.log(error.message);
      toast.error(error.message,{
        position:"bottom-center"
      })
    }
  }
    return (
<div className="min-h-screen flex items-center justify-center p-4">
  <div className="bg-white/90 backdrop-blur-lg border-t-4 border-pink-600 rounded-3xl shadow-2xl w-full max-w-lg p-8 flex flex-col items-center text-white">
    
    {/* Logo */}
    {/* <img src={logo} alt="Logo" className="w-24 mb-6" /> */}

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8 animate-fadeIn">
      Login
    </h1>

    {/* Form */}
    <form className="w-full flex flex-col gap-6" onSubmit={handleLogin}>
      {/* Email */}
      <label className="text-black font-medium">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-300  transition duration-300"
      />

      {/* Password */}
      <label className="text-black font-medium">Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-300 transition duration-300"
      />

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-500 transition-colors p-4 rounded-xl font-semibold text-white shadow-md hover:shadow-lg"
      >
        Login
      </button>

      <div className="flex items-center my-2">
        <div className="flex-1 h-px bg-gray-400"></div>
        <span className="px-3 text-gray-200">OR</span>
        <div className="flex-1 h-px bg-gray-400"></div>
      </div>

      {/* Login with Google */}
      <button className="w-full flex items-center justify-center gap-4 bg-white text-black hover:bg-gray-100 p-4 rounded-xl shadow-md transition duration-300">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png"
          alt="Google"
          className="w-6 h-6"
        />
        <span>Login with Google</span>
      </button>
    </form>

    {/* Footer */}
    <p className="mt-6 text-sm text-black hover:text-white transition duration-300 text-center">
      Forgot password?{" "}
      <Link to="/Register" className="text-blue-400 hover:text-blue-500 font-semibold">
        Don't have an account?
      </Link>
    </p>
  </div>
</div>
  );
};

export default Login;