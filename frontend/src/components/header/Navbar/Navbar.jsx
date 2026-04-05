import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Themebtn from '../Themebtn'
import {Dropdown,DropdownItem} from "flowbite-react";
import Login from './pages/Login/Login';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate=useNavigate()
  return (
    <nav className='bg-neutral-primary fixed w-full z-20 bg-gray-950 top-0 left-0 border-b border-light-subtle'>
      <div className='flex flex-wrap justify-between items-center max-w-6xl mx-auto p-2 rounded-2xl'>

        {/* Logo */}
        <h1 className='lg:text-xl text-white font-bold'>Luna🎀</h1>

        {/* Hamburger Button for Mobile */}
        <button
          className='sm:hidden lg:text-2xl text-white font-bold'
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu Links */}
        <ul className={`flex flex-col sm:flex-row gap-4 sm:gap-6 text-white items-start sm:items-center 
                        w-full sm:w-auto mt-2 sm:mt-0
                        ${open ? "block" : "hidden"} sm:flex`}>
          <li><Link to="/" className="hover:text-pink-600 transition p-1 sm:p-0">Home</Link></li>
          <li><Link to="/about" className="hover:text-pink-600 transition p-1 sm:p-0">About</Link></li>
          <li><Link to="/contact" className="hover:text-pink-600 transition p-1 sm:p-0">Contact</Link></li>
          <li><Link to="/tracker" className="hover:text-pink-600 transition p-1 sm:p-0">Tracker</Link></li>
          
          {/* Calculator Dropdown */}
          <li className=" sm:w-auto">
            <Dropdown label="Calculator" as={Link} to="/calculator" inline className='bg-white border-none rounded-2xl text-white px-2 w-full sm:w-auto'>
              <DropdownItem as={Link} to="/OvulationCal" className='text-black text-sm rounded m-1 hover:text-blue-900'>Ovultion Calculator</DropdownItem>
              <DropdownItem as={Link} to="/Cyclelength" className='text-black text-sm rounded m-1 hover:text-blue-900'>Cycle Length Calculator</DropdownItem>
              <DropdownItem as={Link} to="/NextPeriod" className='text-black text-sm rounded m-1 hover:text-blue-900'>Next Period Calculator</DropdownItem>
              <DropdownItem as={Link} to="/FertileCal" className='text-black text-sm rounded m-1 hover:text-blue-900'>Fertile Days Calculator</DropdownItem>
              <DropdownItem as={Link} to="/LutealCal" className='text-black text-sm rounded m-1 hover:text-blue-900'>Luteal Phase Length</DropdownItem>
              <DropdownItem as={Link} to="/DDCal" className='text-black text-sm rounded m-1 hover:text-blue-900'>D D Calculator</DropdownItem>
              <DropdownItem as={Link} to="/ConceptionCal" className='text-black text-sm rounded m-1 hover:text-blue-900'>Conception Calculator</DropdownItem>
              <DropdownItem as={Link} to="/PregWeekCal" className='text-black text-sm rounded m-1 hover:text-blue-900'>Pregnancy Week Calculator</DropdownItem>
              <DropdownItem as={Link} to="/TrimesterCal" className='text-black text-sm rounded m-1 hover:text-blue-900'>Trimester Calculator</DropdownItem>
              <DropdownItem as={Link} to="/BabySizeCal" className='text-black text-sm rounded m-1 hover:text-blue-900'>Pregnancy Calculator</DropdownItem>
              <DropdownItem as={Link} to="/AppointmentCal" className='text-black text-sm rounded m-1 hover:text-blue-900'>Appointment Calculator</DropdownItem>
            </Dropdown>
          </li>

          {/* Theme button */}
          <li><Themebtn /></li>

          {/* Login Button */}
          <li>
            
            <button  class="border border-pink-400 text-pink-500 hover:bg-pink-50 px-4  p-2 rounded-xl font-semibold transition"
            onClick={()=>{navigate("/Login")}}
            >
              Login
            </button>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar;

