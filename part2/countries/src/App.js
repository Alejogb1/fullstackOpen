import './App.css';
import React, {useState, useEffect} from "react"
import axios from "axios"
import Country from "./Country"
function App() {
  const api_key = process.env.REACT_APP_API_KEY

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response =>setCountries(response.data.map(country => country)))
    
  }, [])
  const FilteredCountries = countries.filter(country => 
    country.name.trim().toLowerCase().includes(search.trim().toLowerCase())
  )

  const handleSearch = (e) => setSearch(e.target.value)
  

  const showDetails = (country) => (
    setSearch(country.name.toLowerCase())
  )
  return (
    <div className="App">
      <p>Find countries: <input type="text" value={search} onChange={handleSearch}/></p>
      <div>
          {FilteredCountries.length > 10 ?(
            <div>"Too many countries are showing for this search"</div>
          ) : FilteredCountries.length > 1 ? (
            <div>{FilteredCountries.map(country => (
              <div key={country.name}>
                  {country.name}
                  <button onClick={() => showDetails(country)}>show</button>
              </div>
            ))}</div>
            ): (
              <div>
                {FilteredCountries.map(country => (
                    <Country key={country.area} country={country}/>
                ))}
              </div>
              )}
      </div>
    </div>
  );
}

export default App;
