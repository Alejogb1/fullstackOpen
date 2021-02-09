const Average = (positive, bad, total) => {
    const sumAll = positive - bad
    const average = sumAll/total
    return(<p>{average}</p>)
  }
  
  export default Average