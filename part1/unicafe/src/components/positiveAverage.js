const positiveAverage = ({positive, total}) => {
    let result = positive/total
    result = Math.trunc(result*100) 
    return(<p>{result}%</p>)
  }
  
  export default positiveAverage