import React from 'react'

const Card = (props) => {
    const { heading,content}= props
  return (
    <div style={{width:'20%',height:'50px',borderTop:'20px solid grey',background:'lightgrey',borderRadius:'10px',padding:'10px'}}>
      <h3 style={{margin:'0px',textAlign:'left'}}>{heading}</h3>
      <p style={{margin:'0px',textAlign:'left'}}>{content}</p>
    </div>
  )
}

export default Card
