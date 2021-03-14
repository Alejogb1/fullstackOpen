import React, { useState } from 'react'

const App = () => {


  const [ persons, setPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')

  const [ repeated, setRepeated] = useState(false)

  const handlerName = (e) => {
    console.log(e.target.value)
     
    setNewName(e.target.value) 
  } 
  


  const nameFilter = persons.filter(person => person.name !== newName)
  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      name : newName,
    } 

    
    /*
    for(let i = 0; i < persons.length +1; ) {
      console.log("person number", i, persons[i])
      if (persons[i].name === noteObject.name) {
        alert("repetido")
      } else {
        setPersons(persons.concat(noteObject))
      }
      i++
    }*/
    console.log("lol")
    setNewName("")
  }

  const notesToShow = () => {
    return 
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input onChange={handlerName} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        nameFilter.map( person => <h4>{person.name}</h4>)
      }
    </div>
  )
}

export default App
