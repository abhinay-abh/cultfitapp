
import React, { useEffect,useState } from 'react'
import axios from 'axios'
const UserContainer = () => {
    const[userData, setUserData]= useState([])

    useEffect(()=>
        {
            axios.get('https://jsonplaceholder.typicode.com/todos')

//     fetch("https://jsonplaceholder.typicode.com/todos").then((Response)=>{
//         Response.json()
//     }).then((data)=>{
//         console.log(data);
        
//     })
// },[])


  return (
    <div style={{padding:'30px'}}>
      <div className="card"style={{ width:'20%',height:'100px', border: '3px solid grey'}}>
        <h3>user id: 1</h3>
        <p>Title : user title</p>
        {/* <div style={{width:'10px', height:'10px',backgroundColor:'green'}}> </div>  */}
      </div>
    </div>
  )
}
}

export default UserContainer
