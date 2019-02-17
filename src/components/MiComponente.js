import React, { Component } from 'react';
import logo from './global/images/logo.svg';
//import novios from './global/images/novios.jpg';
import './global/css/MiComponente.css';

class MiComponente extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Trato de dejas esto como estaba
           </p>
        </header>
      </div>
    );
  }
}

export default MiComponente;
