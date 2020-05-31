import React from 'react';
import './css/ftechoose.css';
import { faCalculator, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import './componenets/css/flaticon.css';

var sectionStyle = {
  alignContent: 'space-around',
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  justifyContent: 'space-around',
  width: '100%',
  borderTop: '5px white solid',
};



var cardWStyle = {
  alignItems: 'center',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '24px',
  height: '100%',
  justifyContent: 'center',
  padding: '4px 4px 4px 4',
  width: '50%'
};

var cardWStyle1 = {
  alignItems: 'center',
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '24px',
  height: '100%',
  justifyContent: 'center',
  padding: '4px 4px 4px 4',
  width: '50%'
};

var CardStyle = {
  backgroundColor: '#399de5',
  border: 'white 10px double',
  color: 'white',
  fontSize: '24px',
  height: '300px',
  padding: 'px 4px 4px 4',
  width: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

};

var CardStyle1 = {
  backgroundColor: '#399de5',
  border: '#399de5 10px double',
  color: 'white',
  fontSize: '24px',
  height: '300px',
  padding: 'px 4px 4px 4',
  width: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',

};

var LinkStyle = {
    border: 'white 2px solid',
    color: 'white',
    fontSize: '24px',
    height: '300px',
    width: '300px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    textDecoration: 'none',


  };

  var LinkStyle1 = {
    border: 'white 2px solid',
    color: '#399de5',
    fontSize: '24px',
    height: '300px',
    width: '300px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    textDecoration: 'none',


  };

const labelStyle = {
  padding: '2%',
  textAlign: 'center'
};

const labelStyle1 = {
  padding: '2%',
  textAlign: 'center',
  color: 'black',
};


// var upStyle = {         display: 'flex',         width: '100%',         height: '85%', };

function FteChoose( ) {
  return (
    <div className="intro" >
      <div className='mainBox' >
        <div className='section' style={sectionStyle}>
          <div className='left'>
            <div className="cardWrapper" style={cardWStyle}>
              <h1 style={labelStyle1}>For MSL's & MM's</h1>
              <div className='Card' style={CardStyle}>
              <Link to='ftecalculatorinput' style={LinkStyle}>
                <FontAwesomeIcon icon={faUser} color="white" size='7x' />
                <h2>FTE CALCULATOR</h2>
              </Link>
        
              </div>
            </div>
          </div>
          <div className='right'>
            <div className="cardWrapper" style={cardWStyle}>
              <h1 style={labelStyle}>FOR MD's</h1>
              <div className='Card' style={CardStyle1}>
              <Link style={LinkStyle1}>
                <FontAwesomeIcon icon={faCalculator} color="#399de5" size='7x' />
                <h2>FTE ANALYSIS</h2>
              </Link>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FteChoose;