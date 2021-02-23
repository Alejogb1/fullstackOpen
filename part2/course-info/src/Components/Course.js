import Content from "./Content/Content"
import Header from "./Header/Header"
const Course = ({course}) => {
    const Total = ({ course }) => {
  
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const array = course.parts.map(item => item.exercises)

        const total = array.reduce(reducer)
    
        
        return(
          <p>Number of exercises: {total}</p>
        ) 
      }

    return (
    <div>
      <Header course={course} key={1} />
      <Content course={course} key={2} />
      <Total course={course} key={3} />
    </div>
    )
}

export default Course