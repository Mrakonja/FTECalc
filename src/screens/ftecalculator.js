import React, { useState } from 'react';
import Select from 'react-select';
import ButtonComp from './componenets/button';
import Calculation from './componenets/calculation';
import HeaderComp from './componenets/headercomp';
import './css/fteCalc.css';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    textAlign: 'center',
    textDecoration: 'none',
    width: '100%',
    color: state.isSelected ? 'white' : 'black',
  }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   width: 200,
  // }),
  container: (provided, state) => ({
    ...provided,
    width: '25%',

  }),
  menu: (provided, state) => ({
    ...provided,
    width: '100%',

  }),
  menuList: (provided, state) => ({
    ...provided,
    width: '100%',

  }),
  valueContainer: (provided, state) => ({
    ...provided,
    width: '25%',

  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

function FteCalculator(props) {
  const [option, setOption] = useState('')

  const options1 = [
    { value: 'StaffTranning', label: 'Staff Tranning' },
    { value: 'MiRequests', label: 'MI Requests' },
  ]

  const options2 = [
    { value: 'FieldActivities', label: 'Field Activities' },
    { value: 'MedicalMonitoring', label: 'Medical Monitoring' },
  ]

  const options3 = [
    { value: 'MAPs', label: 'MAPs' },
    { value: 'TestingActivities', label: 'Testing Activities' },
  ]

  const options4 = [
    { value: 'Meetings', label: 'Meetings' },
    { value: 'Admin Work', label: 'Admin Work' },
  ]


  const handleChange = (selectedOptions) => {
    setOption({ selectedOptions });
    console.log(option);
  }

  return (
    <div className="intro">

      <div className='mainBox'>
        <HeaderComp title='FTE CALCULATOR' />
        <div className='section' style={sectionStyle}>
          <div className='left'>
              <div className='up' style={up}>
                  <div style={selectHeader}>
                    <Select styles={customStyles} options={options1} onChange={handleChange}/>
                    <Select styles={customStyles} options={options2} onChange={handleChange}/>
                    <Select styles={customStyles} options={options3} onChange={handleChange}/>
                    <Select styles={customStyles} options={options4} onChange={handleChange}/>
                </div>
                <div className='acvityBox' style={activityBox}>
                        <p> Select activity.....</p>
                        <Calculation />
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
height: 'auto',
backgroundColor:'lightgray',
margin: '5px'
}

let up = {
  width:'100%',
  height: 'auto',
  margin: '5px'
  }



export default FteCalculator;