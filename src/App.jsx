import boxData from "./boxes"
import { useState } from "react"
import "./index.css"

function App() {
  const [boxArr, setBoxArr] = useState(boxData)
  const boxEl = boxArr.map(box => {
    return (
      <div className="box" key={box.id}></div>
    )
  })

  return (
    <>
      <main>
        {boxEl}
      </main>
    </>
  )
}

export default App
