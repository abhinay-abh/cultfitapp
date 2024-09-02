import React from 'react'
import './layout.css'
import Header from '../Components/Header'

const AppLayout = () => {
  return (
    <div>

      <div className="header">
        <Header/>
      </div>


      <div className="SideBar">SideBar</div>
      

      <div>Content</div>
    </div>
  )
}

export default AppLayout
