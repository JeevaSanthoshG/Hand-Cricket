import { useState } from 'react'
import './App.css'
import Scorecard from './Components/Scorecard'
import RunBoard from './Components/RunBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scorecard/>
      <RunBoard/>
    </>
  )
}

export default App
