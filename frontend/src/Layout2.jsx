import React from 'react'
import Navbaruser from '../src/components/header/Userpages/Navbaruser'
import SidebarCompo from '../src/components/header/Userpages/Sidebar'
import { Outlet } from 'react-router-dom'
const Layout2 = () => {
  return (
  <div className="h-screen flex flex-col top-0 ">

      {/* Top Navbar */}
      <Navbaruser />

      {/* Main Section */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <SidebarCompo />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-white p-6">
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default Layout2