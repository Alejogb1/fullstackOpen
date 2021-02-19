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
  const points = { 0: 0, 1: 0, 2: 0, 3: 0 }
  
  const [copy, setCopy] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4 : 0, 5 : 0, 6 : 0 })
  const [votoMasAlto, setVotoMasAlto] = useState(0)



  const handlerVotes = () => {
    const pointsCopy = {...copy}
    pointsCopy[selected] += 1;
    console.log("previous state", copy[selected])
    setCopy(pointsCopy);
  }

  console.log("VOTO MAS ALTO: ", biggestNumberInArray(copy))
  const handlerQuote = () => {
    setSelected(selected +1)
    if (selected >= 5) {
      setSelected(0)
      console.log(selected)
    }
  }

  function biggestNumberInArray (arr) {
    // We need to take the values of our object. this will allow to then take the length of our array
    // The largest number at first should be the first element or null for empty array
    var largest = arr[0] || null;
    console.log(largest)
    // Current number, handled by the loop
    var number = null;
    let quoteNumber = 0
    for (var i = 0; i < Object.values(arr).length; i++) {
        // Update current number
        number = arr[i];

        if (number > largest) {
          quoteNumber = i
        }
        // Compares stored largest number with current number, stores the largest one
        largest = Math.max(largest, number);

    }

    return [largest, quoteNumber];
}
var largest = biggestNumberInArray(copy)[0];
var quoteNumber = biggestNumberInArray(copy)[1];

  if (clicks === 0) {
    return (
      <div>
        <Button handleBad={handleBad} handleGood={handleGood} handleNeutral={handleNeutral}/>
        <button onClick={handlerQuote}>Random swe quote</button>
        <button onClick={handlerVotes}>Vote for this quote</button>
        <p>This quote has: {copy[selected]} votes</p>
        {anecdotes[selected]}
        <table style={{marginTop: "50px"}}>
          <tbody>
            <tr><th>Neutral: </th><td>{neutral}</td></tr>
            <tr><th>Negative: </th><td>{bad}</td></tr>
            <tr><th>Positive: </th><td>{good}</td></tr>     
          </tbody>    
        </table>
        <p>No given feedback</p>
        <h3>Most voted quote</h3>
         <p>The quote with most votes is: "{anecdotes[quoteNumber]}" with  {largest} votes. </p>
      </div>
    )
  } else {
    return (
      <div>
        <Button  handleBad={handleBad} handleGood={handleGood} handleNeutral={handleNeutral}/>
        <button onClick={handlerQuote}>Random swe qoute</button>
        <button onClick={handlerVotes}>Vote for this quote</button>
        {anecdotes[selected]}
        <div style={{marginTop: "50px"}}>
        <table style={{marginTop: "50px"}}>
          <tbody>
            <tr><th>Neutral: </th><td>{neutral}</td></tr>
            <tr><th>Negative: </th><td>{bad}</td></tr>
            <tr><th>Positive: </th><td>{good}</td></tr>     
          </tbody>    
        </table>
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