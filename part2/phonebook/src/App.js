import React, { useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [ newName, setNewName ] = useState('')

  const handlerName = (e) => {
    setNewName(e.target.value) 
  } 
  
  const submitName = (e) => {
    e.preventDefault()
    setPersons(persons, [setPersons])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitName}>
        <div>
          name: <input onChange={handlerName} />
        </div>
        <div>
          <button type="submit" value="Submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App
