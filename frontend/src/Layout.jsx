import React from 'react'
import Header from '../src/components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import { useEffect,useState } from 'react'
import { ThemeProvider } from './Context/theme'
const Layout = () => {
  const [themeMode,setthemeMode]=useState('light')
  const lightTheme=()=>{
    setthemeMode("light")
  }
  const DarkTheme=()=>{
    setthemeMode("dark")
  }
  const toggleTheme=()=>{
    setthemeMode((curr)=>(curr ==="light"?"dark":"light"))
  };
  // useEffect(()=>{
  //   document.querySelector('html').classList.remove("light","dark")
  //   document.querySelector('html').classList.add(themeMode)
  // },[themeMode])
  return (
    <ThemeProvider value={{themeMode,toggleTheme}  }>
      <div className='bg-gray-950 h-screen' >
          <Header />
    <Outlet />
    {/* <Footer /> */}
      </div>

    </ThemeProvider>
  )
}

export default Layout