import React, { useState } from "react";
import '../App.css'

const innitialValue = {
    good: 0,
    neutral: 0,
    bad: 0
}

function Statistcks () {
    const [feedbacks, setFeedback] = useState(innitialValue);


    const handleChange = (value) => {
        console.log(feedback)
        setFeedback((prevState) => ({
            ...feedbacks, [value]: prevState[value] +1,
        }))
}

    return (
        <div>
        <h1>Leave your feedback</h1>
        <div>
                <button onClick={()=> handleChange('good')}>Good</button>
                <button onClick={()=> handleChange('neutral')}>Neutral</button>
                <button onClick={()=> handleChange('bad')}> Bad</button>
        </div>
        <h2>Statistics</h2>
        <p>Good: {state.good}</p>
        <p>Neutral: {state.neutral}</p>
        <p>Bad: {state.bad}</p>
        </div>
    );

}