import boxData from "./boxes"
import { useState } from "react"
import Box from "./components/Box"

function App() {
  const [boxArr, setBoxArr] = useState(boxData)
  const boxEl = boxArr.map(box => (
    <Box
      key={box.id}
      on={box.on}
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
