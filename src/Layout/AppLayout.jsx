import React from 'react'
import './layout.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import DashboardContainer from '../Containers/DashboardContainer'
import UserContainer from '../Containers/UserContainer'
const AppLayout = () => {
  return (
    <div>

      <div className="Header">
        <Header/>
      </div>

      <div className="SideBar"><Sidebar/></div>
      
{/*content  */}
      <div className='content'>
        {/* <DashboardContainer/> */}
        <UserContainer/>
        </div>
    </div>
  )
}

export default AppLayout
