import React from 'react';
import Card from './componenets/card';
import HeaderComp from './componenets/headercomp';

var sectionStyle = {
  alignContent: 'space-around',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  justifyContent: 'space-around',
  width: '100%',
  borderTop: '5px white solid',
};



// var upStyle = {         display: 'flex',         width: '100%',         height: '85%', };

function FteChoose( ) {
  return (
    <div className="intro" >
      <div className='mainBox' >
        <HeaderComp title='Resourcing Platform' />
        <div className='section' style={sectionStyle}>
          <Card label="For MSL's & MM's" nextp='ftecalculatorinput' imgsrc='.\componenets\assets\calculator-1.png' ButtonText='FTE CALCULATOR'/>
          <Card label="FOR MD's" ButtonText='FTE CALCULATOR ANALYSIS'/>
        </div>

      </div>
    </div>
  )
}

export default FteChoose;