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
    color: 'black',
  };

  var BotsectionStyle = {
    display: 'flex',
    width: '100%',
    height: '15%',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  };

  var imgStyle = {
    width: '30vw',
    height: '7vw',
}

var mainStyle = {
  display: 'flex',
  flexDirection:'row',
}

var leftStyle = {
  backgroundColor: 'white',
}
var rightStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
}


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
      <div className='mainBox' style={mainStyle}>
        <div className='left' style={leftStyle}>
        <img src={require('./componenets/assets/logo.png')} alt='logo' style={imgStyle}/>
          <ButtonComp nextp='/ftechoose' label='BACK' />
          <ButtonComp nextp='/ftecalculator' label='CONTINUE' />
        </div>
        <div  className='right' style={rightStyle}>

        <div className='select'>      
          <select>
          <option value='MedicalScienceLiason'>MedicalScienceLiason</option>
          <option value='MedicalManagerStrategicProduct'>MedicalManagerStrategicProduct</option>
          <option value='MedicalManagerEstablishedProduct'>MedicalManagerStrategicProduct</option>
          </select>
        </div>
        <div className='select'>    
          <label>
            <p>FULL NAME:</p>
            <input type="text" onChange={handleName} />
          </label>
        </div>
        <div className='select'>   
          <label>
            <p>COUNTRY:</p>
            <input type="text" onChange={handleState} />
          </label>
          </div>
      </div>
    </div>
  </div>

  )
}

export default FteCalculatorInput;