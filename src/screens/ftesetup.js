import React, { useState } from 'react';
import ButtonComp from './componenets/button';
import FooterrComp from './componenets/footercomp';
import HeaderComp from './componenets/headercomp';
import './css/calcinput.css';
import './css/ftesetup.css';
import {useSelector, useDispatch} from 'react-redux';
import { setFte, setAld, setPh } from '../redux/actions';

// var sectionStyle = {     display: 'flex',     width: '100%',     height: '100%',
// flexDirection:'column',     justifyContent: 'space-between',     alignContent: 'space-between',
//   };
let oldLD, oldHD;


function FteSetup(props) {
  const currFte = useSelector(state=>state.fte)
  const currPh = useSelector(state=>state.ph)
  const currAld = useSelector(state=>state.ald)

  const dispatch = useDispatch()

  const ldchange = (input) =>{
    dispatch(setAld(input.target.value))
  }

  const hdchange = (input) =>{
    dispatch(setPh(input.target.value))
  }

  const getFte = () =>{
    dispatch(setFte(currFte-(currPh*8)-(currAld*8)))
  }

  const resetFTE =() => {
    dispatch(setFte(260*8))
  }

  return (
    
    <div className="intro">
      <div className='mainBox'>
        <HeaderComp title='FTE SETUP' />
        <div className='section'>
          <div className='up' style={upStyle}>
              <div>
              <p>HELP US DETERMINE YOUR CURRENT FTE</p>
              <p>BY ADDING YOUR ANNUAL LEAVE AND PUBLIC HOLIDAYS</p>
              </div>
     

              <table>

                <tr>
                  <td>ANNUAL WORKING DAYS</td>
                  <td>260</td>
                </tr>

                <tr>
                  <td>ANNUAL LEAVE DAYS</td>
                  <td><input type="text" onChange={ldchange} /></td>
                </tr>

                <tr>
                  <td>PUBLIC HOLYDAYS</td>
                  <td><input type="text" onChange={hdchange} /></td>
                </tr>

                <tr>
                  <td>FTE</td>
                  <td>{currFte}</td>
                </tr>
              </table>
              <div className='buttons'>
              <button style={buttonStyle} onClick={resetFTE}>RESET </button>
                    <button style={buttonStyle} onClick={getFte}>SUBMIT </button>
              </div>
          
          </div>
          <div className='Down' style={downStyle}>
  
            <ButtonComp nextp='/' label='BACK' />
            <ButtonComp nextp='/ftechoose' label='CONTINUE' />
          </div>
        </div>
      </div>
    </div>
  )
}



var upStyle = {
  display: 'flex',
  height: '85%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};

var downStyle = {
  display: 'flex',
  
  height: '15%',
  width: '100%'
};

var rightStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '50%',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  };
  
  var leftStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '50%',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  };


  var buttonStyle = {
    margin: '10px 10px 10px 0',
    backgroundColor: '#32cdfb',
    padding: '4px 4px 4px 4',
    width: '180px',
    height: '45px',
    color: 'white',
    fontSize: '24px',
  };


export default FteSetup;