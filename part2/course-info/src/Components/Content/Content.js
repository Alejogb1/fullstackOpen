
import Part from "./Part/Part"
const Content = ({course}) => {
    return (
        <>
            {
                course.parts.map( course =>  (
                    <>
                        <Part props={course}  key={course.id} />
                    </>
                ))
            }
        </>
    )
}

export default Content