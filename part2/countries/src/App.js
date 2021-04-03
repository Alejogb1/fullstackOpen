import './App.css';
import React, {useState, useEffect} from "react"
import axios from "axios"
function App() {

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
              </div>
            ))}</div>
            ): (
              <div>
                {FilteredCountries.map(country => (
                  <div key={country.name}>
                      <h1>{country.name}</h1>
                      <p>capital:  {country.capital}</p>
                      <p>population:  {country.population}</p>
                      <h4>languages</h4>
                      <ul style={{maxWidth:"50px", margin:"0 auto"}}>
                        {country.languages.map(language => (
                          <li>{language.name}</li>
                        ))}
                      </ul>
                      <img src={country.flag} style={{width:"150px"}}/>
                  </div>
                ))}
              </div>
              )}
      </div>
    </div>
  );
}

export default App;
