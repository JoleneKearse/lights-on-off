import boxData from "./boxes"
import { useState } from "react"
import Box from "./components/Box"

function App() {
  const [boxArr, setBoxArr] = useState(boxData)
  
  function toggle(id) {
    setBoxArr(prevBoxArr => 
      prevBoxArr.map((box) => 
        box.id === id ? {...box, on: !box.on} : box
      )
    )
  }

  const boxEl = boxArr.map(box => (
    <Box
      key={box.id}
      id={box.id}
      on={box.on}
      toggle={toggle}
    />
  ))

  return (
    <>
      <main>
        {boxEl}
      </main>
    </>
  )
}

export default App
