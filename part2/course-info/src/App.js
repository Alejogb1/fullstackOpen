import Course from "./Components/Course"


const App = () => {
  const course = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }, {
    name: "node.js",
    id: "2",
    parts: [
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }]
  return (
    <>
      <Course course={course[0]} />
      <Course course={course[1]} />
    </>
  )
}

export default App