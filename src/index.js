import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';
import Raleway from './fonts/Raleway.ttf'


const FontStyle = createGlobalStyle` 
@font-face {
  font-family: 'Raleway';
  src: url(${Raleway}) format('truetype');
};
font-family: Raleway;
caret-color: transparent !important;`


ReactDOM.render(
  <React.StrictMode> 
      <FontStyle/>  
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();