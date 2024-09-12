import { useEffect, useState } from "react"


const UseEffectHook = () => {
  const[count, setcount]= useState(0)

    function increment( ) {
        setcount(count+1)
    }

    useEffect(()=>{
      document.title = `${count} new message!`
    })
  return (

    <div>
     
     <h1>{count} time clicked</h1>
     <button onClick={increment}> increment</button>
    </div>
  )
}

export default UseEffectHook

