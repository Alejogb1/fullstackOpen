import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Average from "./components/Average"
import PositiveAverage from "./components/PositiveAverage"
import Button from "./components/Button"
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [selected, setSelected] = useState(0)
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
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const handlerQuote = () => {
    setSelected(+1)
  }
  if (clicks === 0) {
    return (
      <div>
        <Button handleBad={handleBad} handleGood={handleGood} handleNeutral={handleNeutral}/>
        <button onClick={handlerQuote}>Random swe qoute</button>
        {anecdotes[selected]}
        <div style={{marginTop: "50px"}}>
          <tr> Good: 
            <td>{good}</td>
          </tr>
          <tr> Negative: 
            <td>{bad}</td>
          </tr>
          <tr> Neutral: 
            <td>{neutral}</td>
          </tr>
        </div>
        <p>No given feedback</p>
      </div>
    )
  } else {
    return (
      <div>
        <Button  handleBad={handleBad} handleGood={handleGood} handleNeutral={handleNeutral}/>
        <button onClick={handlerQuote}>Random swe qoute</button>
        {anecdotes[selected]}
        <div style={{marginTop: "50px"}}>
          <tr> Good: 
            <td>{good}</td>
          </tr>
          <tr> Negative: 
            <td>{bad}</td>
          </tr>
          <tr> Neutral: 
            <td>{neutral}</td>
          </tr>
        </div>
        <Average positive={good} total={clicks} negative={bad}/>
           <PositiveAverage positive={good} total={clicks}/>
      </div>
    )
  }
  
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)