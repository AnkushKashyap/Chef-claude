import Top from "./Top.jsx"
import Content from "./Content.jsx"
import { useState } from "react"

function App(){

  /*const [ state , setState] = useState("Yes")
  function handleClick()
  {
  setState("No")
  }

  console.log(state)
*/ //Using state 
  return (
    <>
      <div>
        <Top/>
        <Content/>
      </div>
    </>
  )
}

export default App
