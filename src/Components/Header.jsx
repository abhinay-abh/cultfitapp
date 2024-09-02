import React from 'react'
import Input from './Input'
import Button from './Button'
import './style.css'

const Header = () => {
  return (
    <div class='main-header' style={{display:'flex',justifyContent:'space-between',padding:'5px'}}>
        {/* logo */}
      <div className='logo'> 
        <img src="https://gumlet.assettype.com/afaqs/2021-05/1c812f92-ef4b-474d-810e-4eeed3ac046f/cult.jpg?rect=0%2C116%2C400%2C210&w=1200&auto=format%2Ccompress&ogImage=true"width={'80px'} alt="" />
      </div>

      {/* search bar */}
      <div className='header-right'>
        <div>
        <Input placeholder='search'/>
        </div>
        

        <h6> News</h6>
        <h6>About</h6>
        <div>
        <Button name='logout'/>
        </div>
       
       </div>
    </div>
  )
}

export default Header
