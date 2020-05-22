import React, { useState } from 'react';
import './css/calculations.css';





function Calculation( props ) {
    const [hours, changeHours] = useState(0)
    const [numOfAct, changeNumOfAct] = useState(0)
    const [result, setResult]=useState(0)

    const CalculateResult = () =>{
        setResult(props.totalHours - (numOfAct*hours))
    }

    const handleHours = (input) =>{
        changeHours(input)
    }

    const handleNumOfAct = (input) =>{
        changeNumOfAct(input)
    }

    return (
    <div className='mainDiv'>
        <div className='calcDiv'> 
            <p>The individual acitvity takes</p>
            <input type="text" onChange={handleHours} />
            <p> I have </p> <input type="text" onChange={handleNumOfAct} /><p>This Year</p>
            <button onClick={CalculateResult}> 
                SAVE
            </button>
        </div>
        <div className='resDiv'> 
                <p>{result}</p>
        </div>
    </div>    

    );
}

export default Calculation;