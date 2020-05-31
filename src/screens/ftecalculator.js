import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ButtonComp from './componenets/button';
import { AddActivity } from '../redux/actions';
import './css/fteCalc.css';
import { faVihara } from '@fortawesome/free-solid-svg-icons';
import Chart from './componenets/graph'





function FteCalculator(props) {
  let activityCounter = [{name:'demo', value:1}]
  const dispatch = useDispatch()

  const [option, setOption] = useState('')
  const [activities, setActivity] = useState([])
  const [st, setSt] = useState({
    options: {
      plotOptions: {
        bar: {
            horizontal: true,
        }
      },
      chart: {
      id: "basic-bar"
      },
      xaxis: {
      categories: [1,2,3,4]
      }
    },
    series: [
      {
      name: "series-1",
      data:  [1,2,3,4]
      }
    ]
    });

  const [hours, changeHours] = useState('0')
  const [numOfAct, changeNumOfAct] = useState('0')
  const [result, setResult]=useState('0')
  const [fte, setFte]=useState('0')
  const [totalHours, setTotalHours]=useState('0')

  const currFte = useSelector(state=>state.fte)
  activityCounter = useSelector(state=>state.activityCounter)

  const items = [
    {value: 'Congresses',label : 'Congresses', description: 'Congresses, International or local Time spent to prepare and execute local and international congress activities, including symposia preparation, invitations,contracts,HCP selection criteria, attendance and preparation of post congress material feedback, summary of data..etc'},
    { value: 'StaffTraining ',       label : 'Staff Training', description: 'Staff Training Time spent in regular internal staff training, per activity including newcomers or regular scientific updates (e.g. after International congress) & including preparation of training material ' },
    { value: "MedicalMonitoring ",   label : 'Medical Monitoring ', description:  'Medical Monitoring Time spent for medical monitoring visits & activities, broken down to time spent per each '},
    { value: "ProtocolWriting"  ,   label : 'Protocol Writing', description: 'Protocol Writing The time in hours spent to write a protocol for local clincal trial, including concept development, literature review, defining end points, research methodology, sample size determination, and statistical analysis plan. Local & global review & approval times are excluded ' },
    { value: 'MAPS' ,               label :  'MAPS', description: 'MAPS Time spent in providing the scientific input to market research and patient support programs including all activities related to it '},
    { value: 'AdvisoryBoards' ,     label :  'Advisory Boards', description:'Advisory Boards Time spent to prepare and execute an advisory board, including material preparation, agenda formulation and engaging advisors identifying the objectives and setting the goals of AB ' },
    { value: 'AdminWork' ,          label :  'Admin Work', description: 'Admin Work Time spent in administrative work, PR, PO creation, drafting invitations, drafting contracts, archiving & documentation, travel expenses, IME,RIME & Congress logistics, vendor selections '},
    { value: 'AnnualMedicalPlan',label :  'Annual Medical Plan', description: 'Annual Medical Planning Time spent for AMP preparations, and any other related activities like tactical sheets, and budget including discussing the tactical activities with HCPs but excluding regular insights from the field (which is covered by field activities) '},
  ];

  const CalculateResult = () =>{
      setFte(Math.round((parseInt(numOfAct)*parseInt(hours))/parseInt(currFte) * 100) / 10000);
      setTotalHours(parseInt(numOfAct)*parseInt(hours))
  }

  const saveResults = () =>{
    dispatch(AddActivity({name: option,
      workload: hours,
      num: numOfAct,
      fte: fte,}));


    let categ = [1,2,3,4]
    let d = [1,2,3,4]
    categ = activityCounter.filter((item) => item !== undefined).map((item)=> item.name)
    d = activityCounter.filter((item) => item !== undefined).map((item)=> item.fte)
    setSt({
      options: {
        plotOptions: {
          bar: {
              horizontal: true,
          }
        },
        chart: {
        id: "basic-bar"
        },
        xaxis: {
        categories: categ
        }
      },
      series: [
        {
        name: "series-1",
        data:  d 
        }
      ]
      })
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
        <div className='section' style={sectionStyle}>
          <div style={left}>
            <div className="pageTitle">
              <h3>FTE CALCULATORS</h3>
            </div>
            { items.map((item) => <button onClick={handleClick} key={item.value} value={item.value} style={btnStl}>{item.label}</button>
            )}

          </div>
          
          <div className='center'>
            <div className="headerCalc">
            <img src={require('./componenets/assets/logo.png')} alt='logo' height='70%'/>
            </div>
            <div className='up' style={up}>
              <div className='leftCalc'>
   

              <div className='acvityBox' style={activityBox}>
              { option!=='' &&

<div className='mainDiv'>
  {items.filter((item) => item.value === option).map( (item) => <div className="description"><p >{item.description}</p></div>)} 
</div>}
<div className='calcDiv'> 
    <div> 
      <p>This individual activity takes  <input type="text" onChange={handleHours} /> hours </p> 
      <p>I have <input type="text" onChange={handleNumOfAct} /> activities this year </p> </div>
      <div className='buttonDiv'>
        <button onClick={CalculateResult}>CALCULATE</button>
        <button onClick={saveResults}>SAVE</button>
      </div>
  </div>
  <div className='resDiv'> 
          <p>This activity takes : {totalHours} hours </p>
          <br></br>
          <p>This activity takes : {fte} of FTE</p>
  </div>
              </div>
              <table>
                <tr>
                  <td style={tHead}>
                    Activity  
                  </td >
                  <td style={tHead}>
                  Total Workload
                  </td>
                  <td style={tHead}>
                    Number of activities
                  </td>
                  <td style={tHead}>
                      FTE
                  </td>
                </tr>
                {activityCounter.filter((item) => item !== undefined).map((item)=> <tr><td>{item.name}</td><td>{item.workload}</td><td>{item.num}</td><td>{item.fte}</td></tr>)}
              </table>        
              </div>  
              <div className='rightCalc'>
              <Chart dataa={st}></Chart>
     
         


                </div>
              </div>    
            </div>
            <div className='down' style={down}>

         
            <div className="bottom">
              <ButtonComp nextp='/' label='SAVE' />
              <ButtonComp nextp='/ftecalculatorinput' label='BACK' />
            </div>
        </div>
        </div>
    

        </div>
        </div>

    )
}


var tHead ={
  backgroundColor: 'white',
  borderBottom: '1px solid #399de5',
  color: 'black',
}
var sectionStyle = {
  alignContent: 'space-around',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  justifyContent: 'space-around',
  width: '100%',
};

let selectHeader = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'stretch',
  alignItems: 'stretch'
}

let activityBox = {
  width:'48vw',
  height:'300px',
  paddingLeft: '1vw',
}

let activityBox1 = {
  width:'30vw',
  height:'300px',
  paddingLeft: '1vw',
}

let down = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignContent: 'flex-end',
  position: 'absolute',
  bottom: '0',
  height: 'auto',
  width: '80vw',

}

let up = {
  width:'100%',
  height: 'auto',
  display:'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

}

let left = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '18px',
  alignItems: 'flex-start',
  width: '100vh',
  backgroundColor: '#399de5',
  width: '15vw',
  color: 'white',

}

let btnStl = {
  backgroundColor: '#399de5',
  color: 'white',
  borderBottom: '1px solid lightgray',
  height:'5%',
  width: '14vw',
  padding: '1%',
  textAlign: 'left',
  margin: '1px 4px 0px 4px',
}


export default FteCalculator;