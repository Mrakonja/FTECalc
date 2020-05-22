import React, { useState } from 'react';
import './css/calculations.css';





function Calculation( props ) {
    const [hours, changeHours] = useState('0')
    const [numOfAct, changeNumOfAct] = useState('0')
    const [result, setResult]=useState('0')

    const CalculateResult = () =>{
        console.log('totalh ', props.totalHours)
        console.log('numofActs ', numOfAct)
        console.log('hours ', hours )
        setResult(numOfAct*hours)
    }

    const handleHours = (input) =>{
        
        console.log('this is input ',input.target.value)
        changeHours(input.target.value)
        console.log('hours changed ', hours)
    }

    const handleNumOfAct = (input) =>{
        console.log('this is input ',input.target.value)
        changeNumOfAct(input.target.value)
        console.log('acts changed ', numOfAct)
    }

    return (
    <div className='mainDiv'>
        <div className='calcDiv'> 
            <input type="text" onChange={handleHours} />
            <p> I have </p> <input type="text" onChange={handleNumOfAct} /><p>This Year</p>
            <button onClick={CalculateResult}> 
                SAVE
            </button>
        </div>
        <div className='resDiv'> 
                <p>This activity takes : {result} hours</p>
                
        </div>
    </div>    

    );
}

export default Calculation;