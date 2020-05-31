import { faCalculator, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link } from 'react-router-dom';
import './css/flaticon.css';

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

var CardStyle = {
  backgroundColor: '#32cdfb',
  border: 'white 2px solid',
  color: 'white',
  fontSize: '24px',
  height: '300px',
  padding: 'px 4px 4px 4',
  width: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

};

var LinkStyle = {
    backgroundColor: '#32cdfb',
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

const labelStyle = {
  padding: '2%',
  textAlign: 'center'
};



function Card( props ) {
    let i;
    if (props.label === "FOR MD's"){
        i= faUser
    } else {
       
        i = faCalculator
    }
  return (
    <div className="cardWrapper" style={cardWStyle}>
      <h1 style={labelStyle}>{props.label}</h1>
      <div className='Card' style={CardStyle}>
      <Link to={props.nextp}  style={LinkStyle}>
        <FontAwesomeIcon icon={i} color="white" size='7x' />
        <h2>{props.ButtonText}</h2>
      </Link>
 
      </div>
    </div>

  );
}

export default Card;