import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="h-screen flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto bg-gray-50 py-[24px] px-[25px] md:px-[40px] custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
