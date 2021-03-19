const Persons = ({persons}) => {
    console.log("persons executed")
    return (

    persons.map( person => 
        
            <li key={person.id}>
                {person.name} - {person.number}
             </li>

          )
    )


}

export default Persons