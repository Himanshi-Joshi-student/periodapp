// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import './index.css'
// import ProtectedRoute from './components/ProtectedRoute.jsx'
// import Home from './components/header/Navbar/pages/Home/Home.jsx'
// import About from './components/header/Navbar/pages/About/About.jsx'
// // import Calculator from './components/header/Navbar/pages/Calculator/Calculator.jsx'
// import Contact from './components/header/Navbar/pages/Contact.jsx'
// import Tracker from './components/header/Navbar/pages/Tracker.jsx'
// import App from './App.jsx'
// import { Route } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import OvulationCal from './components/header/Navbar/pages/Calculator/OvulationCal/OvulationCal.jsx'
// import Cyclelength from './components/header/Navbar/pages/Calculator/CycleLengthCal/Cyclelength.jsx'
// import NextPeriod from './components/header/Navbar/pages/Calculator/NextPeriodCal/NextPeriod.jsx'
// import FertileCal from './components/header/Navbar/pages/Calculator/FertileDaysCal/FertileCal.jsx'
// import LutealCal from './components/header/Navbar/pages/Calculator/LutealPhaseCal/LutealCal.jsx'
// import DDCal from './components/header/Navbar/pages/Calculator/DDCal/DDCal.jsx'
// import ConceptionCal from './components/header/Navbar/pages/Calculator/ConceptionCal/ConceptionCal.jsx'
// import PregWeekCal from './components/header/Navbar/pages/Calculator/PregnancyWeekCal/PregWeekCal.jsx'
// import BabySizeCal from './components/header/Navbar/pages/Calculator/BabySizeCal/BabySizeCal.jsx'
// import TrimesterCal from './components/header/Navbar/pages/Calculator/TrimesterCal/TrimesterCal.jsx'
// import AppointmentCal from './components/header/Navbar/pages/Calculator/AppointmentCal/AppoinmentCal.jsx'
// import Login from './components/header/Navbar/pages/Login/Login.jsx'
// import Register from './components/header/Navbar/pages/Register/Register.jsx'
// import Layout2 from './Layout2.jsx';
// import User from './components/header/Navbar/pages/Register/User.jsx'
// import Profile from './components/header/Userpages/Profile/Profile.jsx'
// import { UserAuthContextProvider } from './Context/UserAuthContext.jsx';
// import AddPeriod from './components/header/Userpages/Profile/PageUsers/pagesuser/AddPeriod.jsx';
// const queryClient=new QueryClient()
// const router =createBrowserRouter(
//   createRoutesFromElements(
//    // <Route path="/" element={<Layout/>}>
//    //   <Route path="/" element={<Home />}/>
//    //    <Route path="/about" element={<About />}/>
//    //    <Route path="/contact" element={<Contact />}/>
//    //    <Route path="/tracker" element={<Tracker />}/>
//    //    {/* <Route path="/calculator" element={<Calculator />}/> */}
//    //    <Route path='/OvulationCal' element={<OvulationCal />}/>
//    //    <Route path='/Cyclelength' element={<Cyclelength />}/>
//    //    <Route path='/NextPeriod' element={<NextPeriod />}/>
//    //    <Route path='/FertileCal' element={<FertileCal />} />
//    //    <Route path='/LutealCal' element={<LutealCal />} />
//    //    <Route path='/DDCal' element={<DDCal />} />
//    //    <Route path='/ConceptionCal' element={<ConceptionCal />} />
//    //    <Route path='/PregWeekCal' element={<PregWeekCal />} />
//    //    <Route path='/BabySizeCal' element={<BabySizeCal />} />
//    //    <Route path='/TrimesterCal' element={<TrimesterCal />} />
//    //    <Route path='/AppointmentCal' element={<AppointmentCal />} />
//    //    <Route path='/Login' element={<Login />} />
//    //    <Route path='/Register' element={<Register />}/>
//    // </Route>
//    // <Route path='/Profile' element={<Layout2/>}>
//    //       <Route path='/Profile' element={
//    //      <ProtectedRoute>
//    //         <Profile />
//    //      </ProtectedRoute>}/>
//    //    </Route>
//       <>
//       {/* Public Layout */}
//       <Route path="/" element={<Layout />}>

//         {/* Home Page */}
//         <Route index element={<Home />} />

//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="tracker" element={<Tracker />} />

//         <Route path="OvulationCal" element={<OvulationCal />} />
//         <Route path="Cyclelength" element={<Cyclelength />} />
//         <Route path="NextPeriod" element={<NextPeriod />} />
//         <Route path="FertileCal" element={<FertileCal />} />
//         <Route path="LutealCal" element={<LutealCal />} />
//         <Route path="DDCal" element={<DDCal />} />
//         <Route path="ConceptionCal" element={<ConceptionCal />} />
//         <Route path="PregWeekCal" element={<PregWeekCal />} />
//         <Route path="BabySizeCal" element={<BabySizeCal />} />
//         <Route path="TrimesterCal" element={<TrimesterCal />} />
//         <Route path="AppointmentCal" element={<AppointmentCal />} />

//         <Route path="Login" element={<Login />} />
//         <Route path="Register" element={<Register />} />

//       </Route>

//       {/* Protected Profile Layout */}
//       <Route
//         path="/Profile"
//         element={
//           <ProtectedRoute>
//             <Layout2 />
//           </ProtectedRoute>
//         }
//       >
//         <Route index element={<Profile />} />
//         <Route path='AddPeriod' element={<AddPeriod />} />
//       </Route>

//     </>
//   )
// )
// createRoot(document.getElementById('root')).render(
// <StrictMode>
//   <QueryClientProvider client={queryClient}>
//           <ToastContainer />
//           <UserAuthContextProvider>
//              <RouterProvider router={router} />
//           </UserAuthContextProvider>
//    </QueryClientProvider> 
// </StrictMode>
// )


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";

import ProtectedRoute from "./ProtectedRoute.jsx";
import Layout from "./Layout.jsx";
import Layout2 from "./Layout2.jsx";

// Public Pages
import Home from "../../src/components/header/Navbar/pages/Home/Home.jsx";
import About from "./components/header/Navbar/pages/About/About.jsx";
import Contact from "../../src/components/header/Navbar/pages/Contact.jsx";
import Tracker from "../../src/components/header/Navbar/pages/Tracker.jsx";
import Login from "../../src/components/header/Navbar/pages/Login/Login.jsx";
import Register from "../../src/components/header/Navbar/pages/Register/Register.jsx";

// Calculator Pages
import OvulationCal from "../../src/components/header/Navbar/pages/Calculator/OvulationCal/OvulationCal.jsx";
import Cyclelength from "../../src/components/header/Navbar/pages/Calculator/CycleLengthCal/Cyclelength.jsx";
import NextPeriod from "../../src/components/header/Navbar/pages/Calculator/NextPeriodCal/NextPeriod.jsx";
import FertileCal from "../../src/components/header/Navbar/pages/Calculator/FertileDaysCal/FertileCal.jsx";
import LutealCal from "../../src/components/header/Navbar/pages/Calculator/LutealPhaseCal/LutealCal.jsx";
import DDCal from "../../src/components/header/Navbar/pages/Calculator/DDCal/DDCal.jsx";
import ConceptionCal from "../../src/components/header/Navbar/pages/Calculator/ConceptionCal/ConceptionCal.jsx";
import PregWeekCal from "../../src/components/header/Navbar/pages/Calculator/PregnancyWeekCal/PregWeekCal.jsx";
import BabySizeCal from "../../src/components/header/Navbar/pages/Calculator/BabySizeCal/BabySizeCal.jsx";
import TrimesterCal from "../../src/components/header/Navbar/pages/Calculator/TrimesterCal/TrimesterCal.jsx";
import AppointmentCal from "../../src/components/header/Navbar/pages/Calculator/AppointmentCal/AppoinmentCal.jsx";

// Profile Pages
import Profile from "../../src/components/header/Userpages/Profile/Profile.jsx";
import AddPeriod from "../../src/components/header/Userpages/Profile/PageUsers/pagesuser/AddPeriod/AddPeriod.jsx";

import { UserAuthContextProvider } from "./Context/UserAuthContext.jsx";
import Profilepic from "../../src/components/header/Userpages/Profile/PageUsers/Profilepic/Profilepic.jsx";
import Profiledata from "../../src/components/header/Userpages/Profile/PageUsers/pagesuser/Profiledata/Profiledata.jsx";
import CrampsVideo from "../../src/components/header/Userpages/Profile/PageUsers/pagesuser/CrampsVideo/CrampsVideo.jsx";
import RecommendedExcercise from "../../src/components/header/Userpages/Profile/PageUsers/pagesuser/RecommendExercise/RecommendedExcercise.jsx";
import SoundscapeVideo from '../../src/components/header/Userpages/Profile/PageUsers/pagesuser/Soundscape/SoundscapeVideo.jsx'

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* -------------------- PUBLIC LAYOUT -------------------- */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="tracker" element={<Tracker />} />

        {/* Calculator */}
        <Route path="OvulationCal" element={<OvulationCal />} />
        <Route path="Cyclelength" element={<Cyclelength />} />
        <Route path="NextPeriod" element={<NextPeriod />} />
        <Route path="FertileCal" element={<FertileCal />} />
        <Route path="LutealCal" element={<LutealCal />} />
        <Route path="DDCal" element={<DDCal />} />
        <Route path="ConceptionCal" element={<ConceptionCal />} />
        <Route path="PregWeekCal" element={<PregWeekCal />} />
        <Route path="BabySizeCal" element={<BabySizeCal />} />
        <Route path="TrimesterCal" element={<TrimesterCal />} />
        <Route path="AppointmentCal" element={<AppointmentCal />} />

        {/* Auth */}
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Route>

      {/* -------------------- PROTECTED PROFILE LAYOUT -------------------- */}
      <Route
        path="/Profile"
        element={
          <ProtectedRoute>
            <Layout2 />
           </ProtectedRoute> 
        }
      >
        {/* Default Profile Page */}
        <Route index element={<Profile />} />

        {/* Nested pages */}
        <Route path="add-period" element={<AddPeriod />} />
        {/* Add other profile pages here */}
        <Route path="upload" element={<Profilepic />} />
        <Route path="profiledata" element={<Profiledata />} />
        <Route path="CrampsVideo" element={<CrampsVideo />} />
        <Route path="RecommendedExcercise" element={<RecommendedExcercise />} />
        <Route path="SoundscapeVideo" element={<SoundscapeVideo />} />
         </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <UserAuthContextProvider>
        <RouterProvider router={router} />
      </UserAuthContextProvider>
    </QueryClientProvider>
  </StrictMode>
);