import React from 'react';
import Select from 'react-select';
import ButtonComp from './componenets/button';
import HeaderComp from './componenets/headercomp';
import './css/fteCalc.css';

var sectionStyle = {
    alignContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-around',
    width: '100%',
    borderTop: '5px white solid',
  };

let selectHeader = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'stretch',
  alignItems: 'stretch'
}

let activityBox = {
width:'100%',
height:'300px',
backgroundColor:'#132c64',
color: 'white',
}

let down = {
  width:'100%',
  height:'300px',
  backgroundColor:'lightgray',
  }

function FteCalculator( ) {
  const options1 = [
    { value: 'MedicalScienceLiason', label: 'Medical Science Liason' },
    { value: 'MedicalManagerStrategicProduct', label: 'Medical Manager Strategic Product' },
    { value: 'MedicalManagerEstablishedProduct', label: 'Medical Manager Established Product' }
  ]
  const options2 = [
    { value: 'MedicalScienceLiason', label: 'Medical Science Liason' },
    { value: 'MedicalManagerStrategicProduct', label: 'Medical Manager Strategic Product' },
    { value: 'MedicalManagerEstablishedProduct', label: 'Medical Manager Established Product' }
  ]
  const options3 = [
    { value: 'MedicalScienceLiason', label: 'Medical Science Liason' },
    { value: 'MedicalManagerStrategicProduct', label: 'Medical Manager Strategic Product' },
    { value: 'MedicalManagerEstablishedProduct', label: 'Medical Manager Established Product' }
  ]
  const options4 = [
    { value: 'MedicalScienceLiason', label: 'Medical Science Liason' },
    { value: 'MedicalManagerStrategicProduct', label: 'Medical Manager Strategic Product' },
    { value: 'MedicalManagerEstablishedProduct', label: 'Medical Manager Established Product' }
  ]
  return (
    <div className="intro">
      <div className='mainBox'>
        <HeaderComp title='FTE CALCULATOR' />
        <div className='section' style={sectionStyle}>
          <div className='left'>
              <div className='up'>
                <div style={selectHeader}>
                  <Select options={options1}/>
                  <Select options={options2}/>
                  <Select options={options3}/>
                  <Select options={options4}/>
               </div>
               <div className='acvityBox' style={activityBox}>
                 Select activity.....

               </div>
              </div>
              <div className='down' style={down}>
                <table>
                  <th>
                    <td>
                        ACTIITY  
                    </td>
                    <td>
                        TOTALWORKLOAD
                    </td>
                    <td>
                      NUMBER OF ACTIVITES
                    </td>
                    <td>
                        FTE
                    </td>
                  </th>
                </table>
              </div>

          </div>
          <div className='right'>
            <div className='up'>
            
            </div>
            <div className='down'>
              <ButtonComp nextp='/' label='SAVE' />
              <ButtonComp nextp='/ftecalculator' label='BACK' />
            </div>
        </div>
        </div>
    </div>

    </div>


  )
}

export default FteCalculator;