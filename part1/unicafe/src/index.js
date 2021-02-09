import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Average from "./components/average"
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)
  const handleGood = () => {
     setClicks(clicks +1)
     setGood(good +1)
  }
  const handleBad = () => {
     setClicks(clicks +1)
     setBad(bad +1)
  }
  const handleNeutral = () => {
    setClicks(clicks +1)
    setNeutral(neutral +1)
  }
  return (
    <div>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleBad}>Bad</button>
      <button onClick={handleNeutral}>Neutral</button>
      <p>Good: {good} | Bad:  {bad} | Neutral: {neutral} | All: {clicks} </p>
      <Average/>
      <averagePositive/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)