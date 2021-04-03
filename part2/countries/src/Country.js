import {useState, useEffect} from "react"
import axios from "axios"
const Country = ({country}) => {
    const [weather, setWeather] = useState([])
    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=13ac893157793596c08488111957cca2&query=${country.capital}`)
        .then(response => setWeather(response.data.current))
    }, [])
    console.log(weather)
    return (
        <div key={country.name}>
            <h1>{country.name}</h1>
            <p>capital:  {country.capital}</p>
            <p>population:  {country.population}</p>
            <h4>languages</h4>
            <ul style={{maxWidth:"50px", margin:"0 auto"}}>
            {country.languages.map(language => (
                <li key={language.name}>{language.name}</li>
            ))}
            </ul>
            <img src={country.flag} style={{width:"150px"}} alt={country.name}/>
            <h2>weather in {country.name}</h2>
            <h5>Temperature: </h5>{weather.temperature}
            <h5>Wind: </h5>{weather.wind_speed}
        </div>
    )
}

export default Country