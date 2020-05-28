import React, { useState } from 'react';
import ButtonComp from './componenets/button';
import FooterrComp from './componenets/footercomp';
import HeaderComp from './componenets/headercomp';
import './css/calcinput.css';
import './css/ftesetup.css';
import {useSelector, useDispatch} from 'react-redux';
import { setFte } from '../redux/actions';

// var sectionStyle = {     display: 'flex',     width: '100%',     height: '100%',
// flexDirection:'column',     justifyContent: 'space-between',     alignContent: 'space-between',
//   };
let oldLD, oldHD;

function FteSetup(props) {
  const currFte = useSelector(state=>state.fte)
  const dispatch = useDispatch()


  const ldchange = (input) =>{
    oldLD =input.target.value;
  }

  const hdchange = (input) =>{
    oldHD= input.target.value;
  }


  return (
    
    <div className="intro">
      <div className='mainBox'>
        <HeaderComp title='FTE SETUP' />
        <div className='section'>
          <div className='up' style={upStyle}>
            <div className='left' style={leftStyle}>
              <div>
              <p>Help US DETERMINE YOUR CURRENT FTE</p>
              <p>BY ADDING YOUR ANNUAL LEAVE AND PUBLIC HOLIDAYS</p>
            <h1> {props.store} </h1>
              </div>
            </div>
            <div className='right' style={rightStyle}>

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
            </div>
          </div>
          <div className='Down' style={downStyle}>
            <button style={buttonStyle} onClick={()=>dispatch(setFte(currFte-(oldHD*8)-(oldLD*8)))}>SUBMIT </button>
            <ButtonComp nextp='/' label='BACK' />
            <ButtonComp nextp='/ftechoose' label='CONTINUE' />
          </div>
        </div>
        <FooterrComp />

      </div>
    </div>
  )
}



var upStyle = {
  display: 'flex',
  height: '85%',
  width: '100%'
};

var downStyle = {
  display: 'flex',
  height: '15%',
  justifyContent: 'flex-end',
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
    backgroundColor: '#203165',
    padding: '4px 4px 4px 4',
    width: '180px',
    height: '45px',
    color: 'white',
    fontSize: '24px',
  };


export default FteSetup;