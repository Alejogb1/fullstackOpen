import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Average from "./components/Average"
import PositiveAverage from "./components/PositiveAverage"
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
  if (clicks === 0) {
    return (
      <div>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleBad}>Bad</button>
        <button onClick={handleNeutral}>Neutral</button>
        <p>Good: {good} | Bad:  {bad} | Neutral: {neutral} | All: {clicks} </p>
         <p>No given feedback</p>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleBad}>Bad</button>
        <button onClick={handleNeutral}>Neutral</button>
        <p>Good: {good} | Bad:  {bad} | Neutral: {neutral} | All: {clicks} </p>
        <Average positive={good} total={clicks} negative={bad}/>
           <PositiveAverage positive={good} total={clicks}/>
      </div>
    )
  }
  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)