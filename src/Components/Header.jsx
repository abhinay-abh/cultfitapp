import React from 'react'
import Input from './Input'
import Button from './Button'

const Header = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',padding:'5px'}}>
        {/* log0 */}
      <div className='logo'> 
        <img src="https://gumlet.assettype.com/afaqs/2021-05/1c812f92-ef4b-474d-810e-4eeed3ac046f/cult.jpg?rect=0%2C116%2C400%2C210&w=1200&auto=format%2Ccompress&ogImage=true"width={'80px'} alt="" />
      </div>

      {/* search bar */}
      <div style={{display:'flex',justifyContent:'space-around',width:'40%'}}>
        <Input placeholder='search'/>

        <h6> News</h6>
        <h6>About</h6>
        <Button name='logout'/>
       </div>
    </div>
  )
}