import React, { useState } from 'react'
import PersonForm from "./components/personForm"
const App = () => {


  const [ persons, setPersons ] = useState([{name: "Juan", number: "94234242"}]) 

  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState(0)


  const handleChangeName = (e) => {
    setNewName(e.target.value) 
  } 
  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value) 
  } 

  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      name : newName,
      number : newNumber
    } 

    console.log("lol")
    setPersons(persons.filter(person => person.name !== newName).concat(noteObject)) 
    
  /*  
    for(let i = 0; i < persons.length +1; ) {
      console.log("person number", i, persons[i])
      if (persons[i].name === noteObject.name) {
        alert(`${newName} is already added to phonebook`)
      }
      i++
    }*/
    setNewName("")
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addNote={addNote} newName={newName} newNumber={newNumber} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber}/>
   
      <h2>Names</h2>
      {
        persons.map( person => 
        
          <div className="container">
            <h4>New Note</h4>
            <p>{person.name}</p>
            <p>{person.number}</p>
          </div>
        )
      }
    </div>
  )
}

export default App
