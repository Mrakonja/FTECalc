import React from 'react';
import { Link } from 'react-router-dom';
import './css/intro.css';

var sectionStyle = {
display: 'flex',
width: '100%',
height: '100%',
flexDirection:'column',
justifyContent: 'space-between',
alignContent: 'space-between',
};
var upStyle = {
    display: 'flex',
    width: '100%',
    height: '85%',
};

var downStyle = {
    display: 'flex',
    width: '100%',
    height: '15%',
    justifyContent: 'flex-end'
};


var buttonStyle = {
    margin: '10px 10px 10px 0',
    backgroundColor: 'white',
    padding: '4px 4px 4px 4',
    width: '180px',
    height: '45px',
    color: '#399de5',
    fontSize: '24px',
    border: '2px double gray',

  };

var downSec ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#399de5',
    height: '50vh',
}

var upSec = {
    display: 'flex',
    backgroundColor: 'white',
    height: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
}

var imgStyle = {
    width: '50vw',
    height: '13vw',
}

function Intro(props) { 

   
        return (
        <div className="intro">
            <div className='mainBox'>
             
                <div className='section' style={sectionStyle}>
                    <div style={upSec}>
                 
                            <img src={require('./componenets/assets/logo.png')} alt='logo' style={imgStyle}/>
                   
                    </div>
                    <div style={downSec}>
                        <Link to='/ftesetup' >
                            <button
                            className="btn btn-default"
                            style={buttonStyle} >
                                CONTINUE
                            </button>
                        </Link>
                    </div>
                 
                </div>
                 
            </div>
        </div>
        )
}

export default Intro;