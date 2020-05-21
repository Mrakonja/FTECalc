import React, { useState } from 'react';
import ButtonComp from './componenets/button';
import FooterrComp from './componenets/footercomp';
import HeaderComp from './componenets/headercomp';
import './css/calcinput.css';
import './css/ftesetup.css';

// var sectionStyle = {     display: 'flex',     width: '100%',     height: '100%',
// flexDirection:'column',     justifyContent: 'space-between',     alignContent: 'space-between',
//   };
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

function FteSetup( props ) {
   const [ld, setLD] = useState('0');
   const [hd, setHD] = useState('0');
   const [FTE, setFTE] = useState('0');
   const ldchange = (value) =>{
       setLD(value);
       let newFte = (260-parseInt(hd)-parseInt(ld))*8;
       console.log('this is ld ' + ld);
       console.log('this is hd ' + hd);
       console.log(newFte);
       setFTE(newFte);
   };

   const hdchange = (value) =>{
    setHD(parseInt(value));
    let newFte = (260-parseInt(hd)-parseInt(ld))*8;
    console.log('this is ld ' + ld);
    console.log('this is hd ' + hd);
    console.log(newFte);
    setFTE(newFte);
    };
    
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
                  <td>{FTE}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className='Down' style={downStyle}>
            <ButtonComp nextp='/' label='BACK' />
            <ButtonComp nextp='/ftechoose' label='CONTINUE' />
          </div>
        </div>
        <FooterrComp />

      </div>
    </div>
  )
}

export default FteSetup;