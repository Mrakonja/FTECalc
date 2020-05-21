import React, { useState } from 'react';
import Select from 'react-select';
import ButtonComp from './componenets/button';
import HeaderComp from './componenets/headercomp';
import './css/calcinput.css';

var sectionStyle = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
    borderTop: '5px white solid',
    fontFamily: 'sans-serif',
    color: 'white',
  };

  var BotsectionStyle = {
    display: 'flex',
    width: '100%',
    height: '15%',
    justifyContent: 'flex-end',
    backgroundColor: '#0073bd',
  };



function FteCalculatorInput(props ) {
  const [fullname, setName] = useState('')
  const [country, setCountry] = useState('')
  const handleName= (input) => {
    setName(input)
  }
  const handleState= (input) => {
    setCountry(input)
  }

  const options = [
    { value: 'MedicalScienceLiason', label: 'Medical Science Liason' },
    { value: 'MedicalManagerStrategicProduct', label: 'Medical Manager Strategic Product' },
    { value: 'MedicalManagerEstablishedProduct', label: 'Medical Manager Established Product' }
  ]
   return (
    <div className="intro">
      <div className='mainBox'>
        <HeaderComp title='FTE CALCULATOR' />
        <div className='section' style={sectionStyle}>
          <div className='select'>
      
            <Select options={options}/>
    
          </div>
                 <label>
            <p>FULL NAME:</p>
            <input type="text" onChange={handleName} />
          </label>
          <label>
           <p>COUNTRY:</p>
          <input type="text" onChange={handleState} />
        </label>
        </div>
        <div  style={BotsectionStyle}>
          <ButtonComp nextp='/ftechoose' label='BACK' />
          <ButtonComp nextp='/ftecalculator' label='CONTINUE' />
        </div>

      </div>
    </div>

  )
}

export default FteCalculatorInput;