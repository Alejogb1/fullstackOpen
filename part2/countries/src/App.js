import './App.css';
import {useState, useEFfect} from "react"
import axios from "axios"
function App() {

  const [countries, setCountries] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.name)
      })
  }, [])

  const dataFiltered = countries.filter(country => 
    country.name.toLowerCase().includes(search.toLowerCase()))
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <p>Find countries: <input type="text" onChange={handleSearch}/></p>

    </div>
  );
}

export default App;
