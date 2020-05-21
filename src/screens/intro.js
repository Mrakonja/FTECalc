import React from 'react';
import ButtonComp from './componenets/button';
import FooterrComp from './componenets/footercomp';
import HeaderComp from './componenets/headercomp';
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

function Intro(props) { 
        return (
        <div className="intro">
            <div className='mainBox'>
                <HeaderComp/>             
                <div className='section' style={sectionStyle}>
                    <div className='up' style={upStyle}>
                    </div>
                    <div className='Down' style={downStyle}>
                    <ButtonComp nextp='/ftesetup' label='START' />
                    </div>
                </div>
                <FooterrComp />
        
            </div>
        </div>
        )
}

export default Intro;