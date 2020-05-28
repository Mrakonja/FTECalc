import React from 'react';


var buttonStyle = {
    margin: '10px 10px 10px 0',
    backgroundColor: '#203165',
    padding: '4px 4px 4px 4',
    width: '180px',
    height: '45px',
    color: 'white',
    fontSize: '24px',
  };

function ButtonComp(props) {
    console.log(props.nextP)
    return (
        <Link to={props.nextp} >
            <button
            className="btn btn-default"
            style={buttonStyle} >
                {props.label}
            </button>
        </Link>
    );
}

export default ButtonComp;