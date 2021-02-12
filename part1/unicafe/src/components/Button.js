const Button = ({handleBad, handleGood, handleNeutral}) => {
    return(
        <>
            <button onClick={handleGood}>Good</button>
            <button onClick={handleBad}>Bad</button>
            <button onClick={handleNeutral}>Neutral</button>
        </>    
    )
}
export default Button