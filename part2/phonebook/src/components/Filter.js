

const Filter = ({addFilter, handleChangeFilter}) => {
  return(<form onSubmit={addFilter}>
    <h3>Let's filter by name: <input onChange={handleChangeFilter}/></h3>
    <div>
      <button type="submit">Filter</button>
    </div>
  </form>)
}

export default Filter 