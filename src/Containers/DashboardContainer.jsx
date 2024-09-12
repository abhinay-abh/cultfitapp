import React from 'react'
import Card from '../Components/Card'
import { cardData } from '../utils/cardData'

const DashboardContainer = () => {
    
  return (
    <div style={{padding:'20PX'}}>
        <div className='card-container'style={{padding:'20px',display:'flex',justifyContent:'space-between'}}>
       {
        cardData.map((Card))
       }
    
    </div>

    </div>
  )
}

export default DashboardContainer
