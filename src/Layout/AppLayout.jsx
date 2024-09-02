import React from 'react'
import './layout.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
const AppLayout = () => {
  return (
    <div>

      <div className="Header">
        <Header/>
      </div>

      <div className="SideBar"><Sidebar/></div>
      

      <div>Content</div>
    </div>
  )
}

export default AppLayout
