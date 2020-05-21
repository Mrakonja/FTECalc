import React from 'react';
import './css/header.css';
let h1Style ={
        fontSize: '52px',
        fontFamily: 'sans-serif'
}
function HeaderComp(props) { 
        return (
        <div className='header'>
                <h1 style={h1Style}>{props.title} </h1>
                <img src={require('./assets/logo.png')} alt='logo' height='70%'/>
        </div>
        )
}

export default HeaderComp;