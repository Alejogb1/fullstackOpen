



const personForm = ({
  addNote, 
  newName, 
  newNumber,
  handleChangeName,
  handleChangeNumber
}) => {



  return (
    <form onSubmit={addNote}>
        <div>
          name: <input onChange={handleChangeName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleChangeNumber} type="number" value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

export default personForm