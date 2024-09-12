import React, { useEffect, useRef, useState } from 'react'

const CombinedHooks = () => {
    const [name, setName] = useState(" ")
    // const [count,setCount] = useState(0)
    const count = useRef(0)

    useEffect(()=>{
        // setCount((count)=> count +1)
        
        // console.log( );

        count.current = count.current + 1
        

    })

  return (
    <div style={{padding:'50px'}}> 
      <input type="text"onChange={(e)=> setName(e.target.value)

      } />
      {/* <h1> {name} :  Clicked {count}times</h1> */}
      {/* <button onClick={()=> setCount(count+1)}>Increment</button> */}

      <h1>Name : {name}</h1>
      <h1> Render : {count.current}</h1>
    </div>
  )
}

export default CombinedHooks
