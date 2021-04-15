import React, { useState, useEffect } from 'react'
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import axios from "axios"
import fetchData from "./services/fetchData"
const App = () => {

 

  const [ persons, setPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState(0)
 
  const [filterName, setFilterName] = useState("")

  const handleChangeName = e => setNewName(e.target.value) 

  const handleChangeNumber = e => setNewNumber(e.target.value) 

  const handleChangeFilter = e => setFilterName(e.target.value)
  
  useEffect(() => {
      fetchData
      .getData()
      .then(response => setPersons(response.data.persons))
  }, [])

  
  console.log("Persons array: ", persons)

  const addFilter = (e) => {
    e.preventDefault()
    setPersons(persons.filter(person => person.name === filterName))
  }

  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      name : newName,
      number : newNumber
    } 

    console.log("lol")
    setPersons(persons.filter(person => person.name !== newName).concat(noteObject)) 
  
    persons.forEach(person => (person.name === noteObject.name) && alert(`${newName} is already added to phonebook`))
    setNewName("")
  }



  return (
    <div className="container">
      <h2>Phonebook</h2>
      <PersonForm addNote={addNote} newName={newName} newNumber={newNumber} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber}/>
      <Filter addFilter={addFilter} handleChangeFilter={handleChangeFilter}/>
      <h2>Names</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App
