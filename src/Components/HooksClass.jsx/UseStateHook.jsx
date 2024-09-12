import React, { useState } from 'react'

const UseStateHook = () => {

    const [count, setcount]= useState(0)
    const [name, setName]= useState("")

    function increment( ) {
        setcount(count+1)
    }
  return (
    <div>
        <input type="text" name="" onChange={(e)=>setName(e.target.value)} id="" />
     <h1>{name}:{count} time clicked</h1>
     <button onClick={increment}> increment</button>
    </div>
  )
}

export default UseStateHook
