import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ButtonComp from './componenets/button';
import Calculation from './componenets/calculation';
import HeaderComp from './componenets/headercomp';
import { AddActivity } from '../redux/actions';
import './css/fteCalc.css';
import './componenets/css/calculations.css';

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     textAlign: 'center',
//     textDecoration: 'none',
//     width: '100%',
//     color: state.isSelected ? 'white' : 'black',
//   }),
//   container: (provided, state) => ({
//     ...provided,
//     width: '25%',

//   }),
//   menu: (provided, state) => ({
//     ...provided,
//     width: '100%',

//   }),
//   menuList: (provided, state) => ({
//     ...provided,
//     width: '100%',

//   }),
//   valueContainer: (provided, state) => ({
//     ...provided,
//     width: '25%',

//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';

//     return { ...provided, opacity, transition };
//   }
// }

function FteCalculator(props) {
  const dispatch = useDispatch()

  const [option, setOption] = useState('')
  const [activities, setActivity] = useState([])

  const [hours, changeHours] = useState('0')
  const [numOfAct, changeNumOfAct] = useState('0')
  const [result, setResult]=useState('0')
  const [fte, setFte]=useState('0')
  const [totalHours, setTotalHours]=useState('0')

  const currFte = useSelector(state=>state.fte)
  const activityCounter = useSelector(state=>state.activityCounter)

  const items = [
    {value: 'Congress',label : 'Congress', description: 'Congresses, International or local Time spent to prepare and execute local and international congress activities, including symposia preparation, invitations,contracts,HCP selection criteria, attendance and preparation of post congress material feedback, summary of data..etc'},
    { value: 'StaffTranning',       label : 'Staff Tranning', description: 'Staff Training Time spent in regular internal staff training, per activity including newcomers or regular scientific updates (e.g. after International congress) & including preparation of training material ' },
    { value: "MedicalMonitoring",   label : 'Medica lMonitoring', description:  'Medical Monitoring Time spent for medical monitoring visits & activities, broken down to time spent per each '},
    { value: "ProtocolWriting"  ,   label : 'Protocol Writing', description: 'Protocol Writing The time in hours spent to write a protocol for local clincal trial, including concept development, literature review, defining end points, research methodology, sample size determination, and statistical analysis plan. Local & global review & approval times are excluded ' },
    { value: 'maps' ,               label :  'maps', description: 'MAPS Time spent in providing the scientific input to market research and patient support programs including all activities related to it '},
    { value: 'AdvisoryBoards' ,     label :  'Advisory Boards', description:'Advisory Boards Time spent to prepare and execute an advisory board, including material preparation, agenda formulation and engaging advisors identifying the objectives and setting the goals of AB ' },
    { value: 'AdminWork' ,          label :  'AdminWork', description: 'Admin Work Time spent in administrative work, PR, PO creation, drafting invitations, drafting contracts, archiving & documentation, travel expenses, IME,RIME & Congress logistics, vendor selections '},
    { value: 'AnualMedicalPlanning',label :  'Anual Medical Planning', description: 'Annual Medical Planning Time spent for AMP preparations, and any other related activities like tactical sheets, and budget including discussing the tactical activities with HCPs but excluding regular insights from the field (which is covered by field activities) '},
  ];



  const CalculateResult = () =>{
      setFte((parseInt(numOfAct)*parseInt(hours))/parseInt(currFte));
      setTotalHours(parseInt(numOfAct)*parseInt(hours))
  }

  const saveResults = () =>{
    dispatch(AddActivity({name: option,
      workload: hours,
      num: numOfAct,
      fte: fte,}));
  }
  const handleHours = (input) =>{
    changeHours(input.target.value)
  }

  const handleNumOfAct = (input) =>{
    changeNumOfAct(input.target.value)
  }


  const handleChange = (selectedOptions) => {
    setOption({ selectedOptions });
  }

  const handleClick = (e) => {
    setOption(e.target.value);
  }

  return (
    <div className="intro">
      <div className='mainBox'>
        <HeaderComp title='FTE CALCULATOR' />
        <div className='section' style={sectionStyle}>
          <div className='left'>
            { items.map((item) => <button onClick={handleClick} key={item.value} value={item.value} >{item.label}</button>
            )}

          </div>
          
          <div className='center'>
            <div className='up' style={up}>
              <div className='acvityBox' style={activityBox}>
                  { option!=='' &&

                        <div className='mainDiv'>
                          {items.filter((item) => item.value === option).map( (item) => <div className="description"><p >{item.description}</p></div>)} 
                          <div className='calcDiv'> 
                            <div> This individual activity takes  <input type="text" onChange={handleHours} /> I have <input type="text" onChange={handleNumOfAct} />This Year </div>
                            <div className='buttonDiv'>
                              <button onClick={CalculateResult}>CALCULATE</button>
                              <button onClick={saveResults}>SAVE</button>
                            </div>
                          </div>
                          <div className='resDiv'> 
                                  <p>This activity takes : {totalHours} hours</p>
                                  <p>This activity takes : {fte} of FTE</p>
                          </div>
                        </div> 
                    }
               </div>
            </div>
            <div className='down' style={down}>
              <table>
                <tr>
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
                </tr>
                {activityCounter.filter((item) => item !== undefined).map((item)=> <tr><td>{item.name}</td><td>{item.workload}</td><td>{item.num}</td><td>{item.fte}</td></tr>)}
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
  margin: '5px',
  display:'Flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  }



export default FteCalculator;