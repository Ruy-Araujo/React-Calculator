import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import Logo from './main/Logo'



ReactDOM.render(
  <Fragment>
    
    <Calculator />
    <Logo text="Made with React" />
  </Fragment>  
  , document.getElementById('root')
);
