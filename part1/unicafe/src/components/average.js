const Average = ({positive, total, negative}) => {
    //console.log(props.positive, " VS ")
    let sumAll = positive - negative
    let average = sumAll/total
    return(<p>{average}</p>)
  }
  
  export default Average