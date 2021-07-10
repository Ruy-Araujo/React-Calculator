import React from 'react'
import logo from './logo.svg'
import './Logo.css'

// eslint-disable-next-line
export default props => {
    return (
    <div className='footer'>
        <p className="footer">{props.text}</p>
        <img src={logo} className="App-logo footer" alt="logo" />
        
    </div>
    )
}